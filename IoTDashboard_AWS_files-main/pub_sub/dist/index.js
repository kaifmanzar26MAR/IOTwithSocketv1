"use strict";
/**
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0.
 */

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

const { app, io, server } = require("../socket.js");

// app.use(
//   cors({
//     origin: "http://ec2-35-154-187-94.ap-south-1.compute.amazonaws.com",
//     credentials: true,
//   })
// );

const allowedOrigins = ["http://localhost:5173", "http://ec2-35-154-187-94.ap-south-1.compute.amazonaws.com"];
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Origin not allowed by CORS"));
      }
    },
  })
);
// dotenv.config({
//   path: "IoTDashboard_AWS_files-main\.env",
// });
dotenv.config({
  path: "IoTDashboard_AWS_files-mainpub_sub.env",
});
app.use(bodyParser.json());

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

const sqlDatabase = require("../DB/sql.config.js");
const connections = sqlDatabase();

let recentData;

var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
Object.defineProperty(exports, "__esModule", { value: true });
const aws_iot_device_sdk_v2_1 = require("../../aws-iot-device-sdk-js-v2/dist/index.js");
const util_1 = require("util");
const yargs = require("yargs");
// The relative path is '../../util/cli_args' from here, but the compiled javascript file gets put one level
// deeper inside the 'dist' folder
const common_args = require("../../aws-iot-device-sdk-js-v2/samples/util/cli_args.js");
yargs
  .command(
    "*",
    false,
    (yargs) => {
      common_args.add_direct_connection_establishment_arguments(yargs);
      common_args.add_topic_message_arguments(yargs);
    },
    main
  )
  .parse();

function execute_session(connection, argv) {
  return __awaiter(this, void 0, void 0, function* () {
    return new Promise((resolve, reject) =>
      __awaiter(this, void 0, void 0, function* () {
        try {
          let published = false;
          let subscribed = false;
          const decoder = new util_1.TextDecoder("utf8");
          const on_publish = (topic, payload, dup, qos, retain) =>
            __awaiter(this, void 0, void 0, function* () {
              const json = decoder.decode(payload);
              console.log(
                `Publish received. topic:"${topic}" dup:${dup} qos:${qos} retain:${retain}`
              );
              console.log(`Payload: ${json}`);
              let message;
              try {
                message = JSON.parse(json);
                console.log("correct json");
              } catch (error) {
                console.log("json format is not correct");
                return;
              }
              recentData = message; // Use parsed message instead of json

              try {
                io.emit("newMessage", recentData);
              } catch (error) {
                console.log(error);
              }

              try {
                const query =
                  "INSERT INTO logs (gateway_id, data) VALUES (?, ?)";

                // Values to be inserted
                const gatewayId = message.gateway_id;
                const data = json; // Use json here if that's what you want to insert
                if (gatewayId === undefined || gatewayId === null) {
                  console.log("Gateway id is null or undefined !!");
                  return;
                }
                // Execute the query with the provided values
                connections.execute(
                  query,
                  [gatewayId, data], // Use data here if you want to insert the JSON string
                  (err, results, fields) => {
                    if (err) {
                      console.error("Error executing query:", err);
                      return;
                    }
                    console.log("Query executed successfully:", results);
                  }
                );
              } catch (error) {
                console.log(error);
              }
              try {
                if (message.sequence == argv.count) {
                  subscribed = true;
                  if (subscribed && published) {
                    resolve();
                  }
                }
              } catch (error) {
                console.log("Warning: Could not parse message as JSON...");
              }
            });
          yield connection.subscribe(
            argv.topic,
            aws_iot_device_sdk_v2_1.mqtt.QoS.AtLeastOnce,
            on_publish
          );
          let published_counts = 0;
          for (let op_idx = 0; op_idx < argv.count; ++op_idx) {
            const publish = () =>
              __awaiter(this, void 0, void 0, function* () {
                const msg = {
                  message: argv.message,
                  sequence: op_idx + 1,
                };
                const json = JSON.stringify(msg);
                connection
                  .publish(
                    argv.topic,
                    json,
                    aws_iot_device_sdk_v2_1.mqtt.QoS.AtLeastOnce
                  )
                  .then(() => {
                    ++published_counts;
                    if (published_counts == argv.count) {
                      published = true;
                      if (subscribed && published) {
                        resolve();
                      }
                    }
                  });
              });
            // setTimeout(publish, op_idx * 1000);
          }
        } catch (error) {
          reject(error);
        }
      })
    );
  });
}
function main(argv) {
  return __awaiter(this, void 0, void 0, function* () {
    console.log(argv);
    common_args.apply_sample_arguments(argv);
    const connection = common_args.build_connection_from_cli_args(argv);
    // force node to wait 60 seconds before killing itself, promises do not keep node alive
    // ToDo: we can get rid of this but it requires a refactor of the native connection binding that includes
    //    pinning the libuv event loop while the connection is active or potentially active.
    const timer = setInterval(() => {}, 60 * 1000);
    yield connection.connect();
    yield execute_session(connection, argv);
    yield connection.disconnect();
    // Allow node to die if the promise above resolved
    clearTimeout(timer);
  });
}

app.get("/", (req, res) => {
  res.status(200).json({ message: "hiiii" });
});

app.get("/recentdata", (req, res) => {
  res.status(200).json({ recentData });
});
let settings = null;
app.post("/setdisplaysetting", (req, res) => {
  try {
    console.log("hiii");
    const { displaySettings } = req.body;
    settings = displaySettings;
    console.log(displaySettings);
    return res.status(200).json({ data: "success" });
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
});

app.get("/getsettings", (req, res) => {
  res.status(200).json({ settings });
});

server.listen(5000, () => {
  console.log("app is running on port 5000");
});
