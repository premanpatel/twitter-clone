import React, { useState, useEffect } from "react";
import TweetBox from "../components/TweetBox.js";
import TwitterFeed from "../components/TwitterFeed.js";
import { getTweets, getUsername } from "../FirebaseDB";

function HomeScreen() {
  const [renderFeed, setRenderFeed] = useState();
  const [username, setUsername] = useState();
  
  useEffect(() => {
    const getData = async () => {
      const data = await getTweets();
      let feed = data.map((element) => (
        <TwitterFeed username={element[1].userID} tweet={element[1].tweet} />
      ));
      setRenderFeed(feed);
    };

    getData();
  }, []);

  return (
    <>
      <TweetBox />
      {renderFeed}
      <button> print tweets </button>
    </>
  );
}

export default HomeScreen;
