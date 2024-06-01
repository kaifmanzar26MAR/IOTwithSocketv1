import React, { useEffect, useState } from "react";
import useListionMessage from "../hooks/useListionMessage.js";
import axios from "axios";
import { Link } from "react-router-dom";

const responseView = () => {
  //Fetching data from Endpoin

  const [apiData, setApiData] = useState({});
  const { messages, setMessages } = useListionMessage();
  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await axios.get(
        //   "http://ec2-35-154-187-94.ap-south-1.compute.amazonaws.com:3000/getdata"
        // );

        let dataToSet;
        if (!messages) {
          const res = await axios.get("http://localhost:5000/recentdata");
          console.log(res);
          dataToSet = await JSON.parse(res.data.recentData);
        } else {
          dataToSet = await JSON.parse(messages);
        }

        // console.log(dataToSet)

        // console.log(dataToSet);
        setApiData(dataToSet);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
    // getProperties(selectedMachine);
  }, [messages]);


  const response = {
    1: {
      NAME: "Load Meter",
      RG: {
        "Initial Value": 50,
        "R1 Status": 30,
        "R2 Status": 156,
        "Set 1": 120,
        "Set 2": 141,
      },
    },
    2: {
      NAME: "Space Ship",
      RG: {
        "Final Value": 340,
        "R1 Status": 230,
        "R2 Status": 231,
        "Set 1": 430,
        "Set 2": 131,
        "Set 3": 189,
      },
    },
    3: {
      NAME: "Particle Collider",
      RG: {
        "Neutron Count": 130,
        "R1 Status": 220,
        "R2 Status": 324,
        "Set 1": 101,
        "Set 2": 121,
        "Set 3": 89,
        "Path Length": 412,
      },
    },
    4: {
      NAME: "MHT-9612M",
      RG: {
        Humidity: 22,
        SetValue1: 31,
        SetValue2: 92,
        "Relay1 Mode": 340,
        "Relay2 Mode": 30,
      },
    },
  };

  return (
    <div className="mx-[20%] md:mx-0 mt-10 text-white">

    <Link to={"/"}>
          <button className=" btn p-5 bg-red-400 hover:bg-red-300 hover:rounded-xl rounded-full m-2 fixed top-5 left-5">Home</button>
        </Link>
      {apiData &&
        Object.keys(apiData)?.map((e) => {
          return (
            <div className="p-5 flex bg-[#1849a8] gap-4 m-5">
              <div className="w-1/5 p-4 rounded-xl bg-[#175cd3]">{e}</div>
              {e === "machineStatus" && <div className="w-4/5 rounded-xl p-5 bg-[#175cd3]">{Number(apiData[e]) ? "ON" : "OFF"}</div>}
              {e != "machineStatus" && <div className="w-4/5 rounded-xl p-5 bg-[#175cd3]">
                <div className="flex p-1 rounded-md gap-4">
                  <div className="w-1/3 p-4 rounded-md bg-[#1849a8]">Name</div>
                  <div className="w-2/3 p-4 rounded-md bg-[#1849a8]">
                    {apiData[e].NAME}
                  </div>
                </div>
                <div className="flex p-1 rounded-md gap-4">
                  <div className="w-1/3 p-4 rounded-md bg-[#1849a8]">FC</div>
                  <div className="w-2/3 p-4 rounded-md bg-[#1849a8]">value</div>
                </div>
                <div className="flex p-1 rounded-md gap-4">
                  <div className="w-1/3 p-4 rounded-md bg-[#1849a8]">RG</div>
                  <div className="w-2/3 p-4 rounded-md bg-[#1849a8]">
                    {apiData[e].RG &&
                      Object.keys(apiData[e]?.RG)?.map((keyval) => {
                        return (
                          <div className="flex gap-2">
                            <div className="w-1/2 m-1 p-2 rounded-md bg-[#175cd3]">
                              {keyval}
                            </div>
                            <div className="w-1/2 m-1 p-2 rounded-md bg-[#175cd3]">
                              {apiData[e].RG[keyval]}
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>}
            </div>
          );
        })}
    </div>
  );
};

export default responseView;
