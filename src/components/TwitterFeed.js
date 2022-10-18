import React from "react";
import "./TwitterFeed.css";

function TwitterFeed() {

  return (
    <div class="tweetFeed">
      <div class="header">
        <label> username </label>
        <button class="followBtn"> follow </button>
      </div>
      <p class="tweet"> i made this tweet with love </p>
    </div>
  );
}

export default TwitterFeed;
