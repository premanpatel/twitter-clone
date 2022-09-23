import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComp from "./components/NavbarComp.js";
import TweetBox from "./components/TweetBox.js";
import SignUp from "./components/SignUp.js";
import LogIn from "./components/LogIn.js";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);

function App() {
  return (
    <div className="App">
      <NavbarComp />
      <TweetBox />
      {/* <SignUp /> */}
      <LogIn />
    </div>
  );
}

export default App;
