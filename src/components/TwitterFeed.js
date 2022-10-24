import React, {  } from "react";
import "./TwitterFeed.css";

function TwitterFeed(props) {
  /* let username = props.username;
  let tweet = props.tweet; */
  return (
    <>
      <div className="tweetFeed">
        <div className="header">
          <label> {props.username} </label>
          <button className="followBtn"> follow </button>
        </div>
        <p className="tweet"> {props.tweet} </p>
      </div>
    </>
  );
}

export default TwitterFeed;
