import React from "react";
import TweetBox from "../components/TweetBox.js"
import TwitterFeed from "../components/TwitterFeed.js"

function HomeScreen() {
    return ( 
        <>
        <TweetBox />
        <TwitterFeed />
        </>
     );
}

export default HomeScreen;