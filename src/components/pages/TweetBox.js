import React, { Component } from "react";

export default class TweetBox extends Component {
  render() {
    return (
      <div>
        <form>
          <input type="text" placeholder="What's your Tweet?" />
          <div>
            <button
              style={{
                backgroundColor: "#1DA1F2",
                width: "70px",
                height: "30px",
                color: "white",
              }}
            >
              Tweet
            </button>
          </div>
        </form>
      </div>
    );
  }
}
