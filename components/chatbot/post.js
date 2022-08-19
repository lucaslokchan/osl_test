import React, { Component } from "react";
import axios from "axios";

class Post extends Component {
  constructor(props) {
    super(props);
    const { steps } = this.props;
    const { name, location, category, question } = steps;

    this.state = { name, location, category, question };
  }

  componentDidMount() {
    const userObject = {
      name: this.state.name.value,
      location: this.state.location.value,
      category: this.state.category.value,
      question: this.state.question.value,
    };
    //insert(userObject);
    //var json = JSON.stringify(userObject);
    //console.log(json);
    axios
      .post(`/api/add_response`, userObject)
      .then((res) => {
        console.log(res.status);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return <div>Thank you! Your data was submitted successfully!</div>;
  }
}

export default Post;
