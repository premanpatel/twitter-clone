import React, { useState, useEffect } from "react";
import "./TweetBox.css";
import { uploadTweet, getUid, isLoggedIn } from "../FirebaseDB";

function TweetBox() {
  const [tweetTextBox, setTweetTextBox] = useState();
  const [isUserLoggedIn, setisUserLoggedIn] = useState(false);

  function tweetTextBoxHandler(val) {
    setTweetTextBox(val.target.value);
  }

  useEffect(() => {
    const getAuthStatus = async () => {
      setisUserLoggedIn(await isLoggedIn());
    };

    getAuthStatus();
  }, []);

  const tweetHandler = (e) => {
    e.preventDefault();
    console.log("entered handler");
    if (isUserLoggedIn) {
      uploadTweet(tweetTextBox, getUid());
      /* setTimeout(() => {
        window.location.reload(false);
      }, 500); */
    }
    else{
      alert("Please log in!");
    }
  };

  return (
    <div>
      <form>
        <div className="tweetBox">
          <textarea
            multiline
            className="textBox"
            type="text"
            placeholder="What's your Tweet?"
            onChange={tweetTextBoxHandler}
          />
          <button className="tweetBtn" onClick={tweetHandler}>
            Tweet
          </button>
        </div>
      </form>
    </div>
  );
}

export default TweetBox;
