import React, { useState, useEffect } from "react";
import { Treemap } from "react-vis";
import "./../styles/treemap.module.css";
import axios from "axios";

const TreemapGraph = () => {
  const [kyc, setKyc] = useState();
  const [funding, setFunding] = useState();
  const [trading, setTrading] = useState();
  const [custody, setCustody] = useState();
  const [fee, setFee] = useState();
  const [security, setSecurity] = useState();
  const [others, setOthers] = useState();

  useEffect(() => {
    axios
      .get(`/api/count/KYC Onboarding`)
      .then((res) => {
        console.log(res.status);
        setKyc(res.data);
        console.log(res.data);
      })
      .catch(function(error) {
        console.log(error);
      });

    axios
      .get(`/api/count/Funding Features`)
      .then((res) => {
        console.log(res.status);
        setFunding(res.data);
        console.log(res.data);
      })
      .catch(function(error) {
        console.log(error);
      });

    axios
      .get(`/api/count/Trading Features`)
      .then((res) => {
        console.log(res.status);
        setTrading(res.data);
        console.log(res.data);
      })
      .catch(function(error) {
        console.log(error);
      });

    axios
      .get(`/api/count/Custody Features`)
      .then((res) => {
        console.log(res.status);
        setCustody(res.data);
        console.log(res.data);
      })
      .catch(function(error) {
        console.log(error);
      });

    axios
      .get(`/api/count/Fee Schedule`)
      .then((res) => {
        console.log(res.status);
        setFee(res.data);
        console.log(res.data);
      })
      .catch(function(error) {
        console.log(error);
      });

    axios
      .get(`/api/count/Security`)
      .then((res) => {
        console.log(res.status);
        setSecurity(res.data);
        console.log(res.data);
      })
      .catch(function(error) {
        console.log(error);
      });

    axios
      .get(`/api/count/Others`)
      .then((res) => {
        console.log(res.status);
        setOthers(res.data);
        console.log(res.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }, [kyc, funding, trading, custody, fee, security, others]);

  const myData = {
    title: "Category Distribution",
    color: "#12939A",
    children: [
      {
        title: "category",
        color: "white",
        children: [
          { title: "KYC Onboarding", color: "#8963BA", size: kyc },
          { title: "Funding Features", color: "#243E36", size: funding },
          { title: "Trading Features", color: "#7CA982", size: trading },
          { title: "Custody Features", color: "#E0EEC6", size: custody },
          { title: "Fee Schedule", color: "#C2A83E", size: fee },
          { title: "Security", color: "#E94F37", size: security },
          { title: "Others", color: "#393E41", size: others },
        ],
      },
    ],
  };
  return (
    <>
      <Treemap
        title={"My New Treemap"}
        width={500}
        height={500}
        margin={0}
        data={myData}
        colorType="literal"
      />
    </>
  );
};

export default TreemapGraph;
