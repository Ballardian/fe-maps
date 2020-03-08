import React, { Component } from "react";
import axios from "axios";
import Feed from "../components/Feed/Feed";

class FeedList extends Component {
  state = {
    posts: []
  };

  async componentDidMount() {
    const response = await axios.get("http://127.0.0.1:8000/api/routes/");
    if ((response.status = 200)) {
      this.setState({
        posts: response.data
      });
      console.log("Data", response.data);
    }
  }

  render() {
    return <Feed data={this.state.posts} />;
  }
}

export default FeedList;
