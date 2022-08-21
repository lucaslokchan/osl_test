import React, { useState, useEffect } from "react";
import Head from "next/head";
import axios from "axios";
import TreemapGraph from "./treemap";

function Dashboard() {
  const [response, setResponse] = useState();
  const [alldata, setAllData] = useState();
  const [location, setLocation] = useState("all");
  const [category, setCategory] = useState("all");

  useEffect(() => {
    axios
      .get(`/api/get_response`)
      .then((res) => {
        console.log(res.status);
        setAllData(res.data);
        console.log(res.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`/api/query/${location}/${category}`)
      .then((res) => {
        console.log(res.status);
        setResponse(res.data);
        console.log(res.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }, [location, category]);

  return (
    <>
      <Head>
        <title>Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="md:mx-44">
        <div className="md:grid md:grid-cols-2">
          <div>
            <TreemapGraph></TreemapGraph>
          </div>
          <div>
            <iframe
              style={{
                background: "#FFFFFF",
                border: "none",
                borderRadius: "2px",
                boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)",
              }}
              width="640"
              height="480"
              src="https://charts.mongodb.com/charts-project-0-vufkd/embed/charts?id=6300ddda-0c59-4168-8e2e-f5f95ce12de2&maxDataAge=60&theme=light&autoRefresh=true"
            ></iframe>
          </div>
        </div>
        <div>
          <select
            onChange={(e) => {
              setCategory(e.target.value);
            }}
            className=" border-black border-2 rounded "
          >
            <option selected="selected" value="all" disabled>
              Filter Category
            </option>
            <option value="all">All</option>
            <option value="KYC Onboarding">KYC Onboarding</option>
            <option value="Funding Features">Funding Features</option>
            <option value="Trading Features">Trading Features</option>
            <option value="Custody Features">Custody Features</option>
            <option value="Fee Schedule">Fee Schedule</option>
            <option value="Security">Security</option>
            <option value="Others">Others</option>
          </select>
          <select
            onChange={(e) => {
              setLocation(e.target.value);
            }}
            className=" border-black border-2 rounded"
          >
            <option selected="selected" value="all" disabled>
              Filter Country
            </option>
            <option value="all">All</option>
            <option value="CHN">China</option>
            <option value="SGP">Singapore</option>
            <option value="GBR">United Kingdom</option>
            <option value="USA">United States</option>
          </select>
        </div>
        <div className="">
          <table className="table-auto">
            <thead className="border-2 border-black">
              <tr>
                <th scope="col" className="border-2 border-black">
                  Name
                </th>
                <th scope="col" className="border-2 border-black">
                  Location
                </th>
                <th scope="col" className="border-2 border-black">
                  Category
                </th>
                <th scope="col" className="border-2 border-black">
                  Question
                </th>
              </tr>
            </thead>
            <tbody>
              {response?.map((res) => (
                <tr className="border-2 border-black">
                  <td className="border-2 border-black">{res.name}</td>
                  <td className="border-2 border-black">{res.location}</td>
                  <td className="border-2 border-black">{res.category}</td>
                  <td className="border-2 border-black">{res.question}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
