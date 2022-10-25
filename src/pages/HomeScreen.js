import React, { useState, useEffect } from "react";
import TweetBox from "../components/TweetBox.js";
import TwitterFeed from "../components/TwitterFeed.js";
import { getTweets, getUsername } from "../FirebaseDB";

function HomeScreen() {
  const [renderFeed, setRenderFeed] = useState();
  
  useEffect(() => {
    const getData = async () => {
      const data = await getTweets();
      console.log(data);
      let feed = data.map((element) => (
        <TwitterFeed key={element[0]} username={"@" + element[1].username} tweet={element[1].tweet} />
      ));
      setRenderFeed(feed);
    };
    getData();
  }, []);

  return (
    <>
      <TweetBox />
      {renderFeed}
    </>
  );
}

export default HomeScreen;
