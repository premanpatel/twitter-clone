import React, { useState, useEffect } from "react";
import TweetBox from "../components/TweetBox.js";
import TwitterFeed from "../components/TwitterFeed.js";
import { getTweets } from "../FirebaseDB";

function HomeScreen() {
  const [renderFeed, setRenderFeed] = useState();
  
  useEffect(() => {
    const getData = async () => {
      const data = await getTweets();
      let feed = data.map((element) => (
        <TwitterFeed key={element[0]} username={"@" + element[1].username} tweet={element[1].tweet} />
      ));
      console.log(typeof feed);
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
