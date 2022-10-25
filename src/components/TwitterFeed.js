import React, { } from "react";
import "./TwitterFeed.css";

function TwitterFeed(props) {
  /* let username = props.username;
  let tweet = props.tweet; */
  return (
    <>
      <div class="tweetFeed">
        <div class="header">
          <label> {props.username} </label>
          <button class="followBtn"> follow </button>
        </div>
        <p class="tweet"> {props.tweet} </p>
      </div>
    </>
  );
}

export default TwitterFeed;
