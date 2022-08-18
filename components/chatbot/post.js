import React, { Component } from "react";
import axios from "axios";

class Post extends Component {
  constructor(props) {
    super(props);
    const { steps } = this.props;
    const { input_name, location, category, input_question } = steps;

    this.state = { input_name, location, category, input_question };
  }

  componentDidMount() {
    const userObject = {
      input_name: this.state.input_name.value,
      location: this.state.location.value,
      category: this.state.category.value,
      input_question: this.state.input_question.value,
    };
    var json = JSON.stringify(userObject);
    console.log(json);
    axios
      .post(`/api`, userObject)
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
