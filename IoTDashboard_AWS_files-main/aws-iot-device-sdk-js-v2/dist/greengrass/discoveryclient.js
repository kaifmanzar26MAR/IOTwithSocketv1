"use strict";
/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscoveryClient = exports.DiscoveryError = exports.model = void 0;
/**
 * @packageDocumentation
 * @module greengrass
 * @mergeTarget
 */
const aws_crt_1 = require("aws-crt");
const util_utf8_browser_1 = require("@aws-sdk/util-utf8-browser");
const model = __importStar(require("./model"));
exports.model = model;
/**
 * @category Greengrass
 */
class DiscoveryError extends Error {
    constructor(message, response_code) {
        super(message);
        this.response_code = response_code;
    }
}
exports.DiscoveryError = DiscoveryError;
/**
 * Greengrass Discovery Client
 *
 * API Documentation: https://docs.aws.amazon.com/greengrass/latest/developerguide/gg-discover-api.html
 *
 * @category Greengrass
 */
class DiscoveryClient {
    /**
     *
     * @param bootstrap The `ClientBootstrap` to use to make an HTTP connection to the Greengrass service
     * @param socket_options `SocketOptions` for HTTP connection to the Greengrass service
     * @param tls_ctx TLS Options for the HTTP connection to Greengrass service
     * @param region Region to send Greengrass discovery requests to (ignored if gg_server_name is set)
     * @param gg_server_name Optional name of greengrass endpoint
     */
    constructor(bootstrap, socket_options, tls_ctx, region, gg_server_name = "") {
        this.bootstrap = bootstrap;
        this.socket_options = socket_options;
        this.tls_ctx = tls_ctx;
        this.region = region;
        this.gg_server_name = gg_server_name;
        //allow user to use special endpoints
        if (this.gg_server_name !== "") {
            this.endpoint = this.gg_server_name;
        }
        else {
            this.endpoint = `greengrass-ats.iot.${region}.amazonaws.com`;
        }
        this.connection_manager = new aws_crt_1.http.HttpClientConnectionManager(this.bootstrap, this.endpoint, aws_crt_1.io.is_alpn_available() ? 443 : 8443, 4, 16 * 1024, this.socket_options, new aws_crt_1.io.TlsConnectionOptions(this.tls_ctx, this.endpoint, aws_crt_1.io.is_alpn_available() ? ['x-amzn-http-ca'] : undefined));
    }
    /**
     * Performs the discover API call for the supplied Thing, and returns any associated Greengrass
     * groups/cores/connection info.
     *
     * @param thing_name The name of your IoT Thing, as configured in the console for Greengrass
     */
    discover(thing_name) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            this.connection_manager.acquire()
                .then((connection) => {
                const request = new aws_crt_1.http.HttpRequest('GET', `/greengrass/discover/thing/${thing_name}`, new aws_crt_1.http.HttpHeaders([['host', this.endpoint]]));
                const stream = connection.request(request);
                let response = '';
                stream.on('response', (status_code, headers) => {
                    if (status_code != 200) {
                        reject(new DiscoveryError(`Discovery failed (headers: ${headers})`, status_code));
                    }
                });
                stream.on('data', (body_data) => {
                    response += (0, util_utf8_browser_1.toUtf8)(new Uint8Array(body_data));
                });
                stream.on('end', () => {
                    const json = JSON.parse(response);
                    const discover_response = model.DiscoverResponse.from_json(json);
                    resolve(discover_response);
                });
                stream.on('error', (error) => {
                    reject(new DiscoveryError(error.toString()));
                });
                stream.activate();
            })
                .catch((reason) => {
                reject(new aws_crt_1.CrtError(reason));
            });
        }));
    }
}
exports.DiscoveryClient = DiscoveryClient;
//# sourceMappingURL=discoveryclient.js.map