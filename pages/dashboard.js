import React, { useState, useEffect } from "react";
import Head from "next/head";
import axios from "axios";

function Dashboard() {
  const [response, setResponse] = useState();
  const [country, setCountry] = useState();
  const [category, setCategory] = useState();

  useEffect(() => {
    axios
      .get(`/api/get_response`)
      .then((res) => {
        console.log(res.status);
        setResponse(res.data);
        console.log(res.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Head>
        <title>Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="md:mx-44">
        <div>
          <select
            onChange={(e) => {
              setCategory(e.target.value);
            }}
            className=" border-black border-2 rounded "
          >
            <option value="" disabled>
              Filter Category
            </option>
            <option value="">All</option>
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
              setCountry(e.target.value);
            }}
            className=" border-black border-2 rounded"
          >
            <option value="" disabled>
              Filter Country
            </option>
            <option value="">All</option>
            <option value="CHN">China</option>
            <option value="SGP">Singapore</option>
            <option value="GBR">United Kingdom</option>
            <option value="USA">United States</option>
          </select>
        </div>
        <div className="">
          <table className="table-auto">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Location</th>
                <th scope="col">Category</th>
                <th scope="col">Question</th>
              </tr>
            </thead>
            <tbody>
              {response?.map((res) => (
                <tr>
                  <td>{res.name}</td>
                  <td>{res.location}</td>
                  <td>{res.category}</td>
                  <td>{res.question}</td>
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
