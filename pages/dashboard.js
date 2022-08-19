import React from "react";
import Head from "next/head";
import axios from "axios";

class Dashboard extends React.Component {
  componentDidMount() {
    //insert(userObject);
    //var json = JSON.stringify(userObject);
    //console.log(json);
    axios
      .get(`/api/get_response`)
      .then((res) => {
        console.log(res.status);
        console.log(res.body);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <>
        <Head>
          <title>Dashboard</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div>Response</div>
      </>
    );
  }
}

export default Dashboard;
