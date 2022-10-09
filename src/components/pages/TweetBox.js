import React, { Component } from "react";
import "./TweetBox.css";

export default class TweetBox extends Component {
  render() {
    return (
      <div>
        <form>
          <div class="tweetBox">
            <textarea
              multiline
              class="textBox"
              type="text"
              placeholder="What's your Tweet?"
            />
            <button class="tweetBtn">Tweet</button>
          </div>
        </form>
      </div>
    );
  }
}
