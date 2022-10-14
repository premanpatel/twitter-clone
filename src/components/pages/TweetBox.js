import React, { useState } from "react";
import "./TweetBox.css";
import { uploadTweet, getUid} from "../FirebaseDB.js"

function TweetBox() {

  const [tweetTextBox, setTweetTextBox] = useState();

  function tweetTextBoxHandler(val) {
    setTweetTextBox(val.target.value);
  }

  const tweetHandler = (e) => {
    e.preventDefault();
    console.log("entered handler");
    //alert(getUid());
    uploadTweet(tweetTextBox, getUid());
  };

    return (
      <div>
        <form>
          <div class="tweetBox">
            <textarea
              multiline
              class="textBox"
              type="text"
              placeholder="What's your Tweet?"
              onChange={tweetTextBoxHandler}
            />
            <button class="tweetBtn" onClick={tweetHandler}>Tweet</button>
          </div>
        </form>
      </div>
    );
}

export default TweetBox;
