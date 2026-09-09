import { Suspense } from "react";
import "./App.css";
import Event from "./component/1_event";
import Batter from "./component/2_Batter";
import State from "./component/2_state";
import User from "./component/3_API";
import Post from "./component/Post";
import UseEffect from "./component/4_useEffect";

function App() {
  const usersDataPromise = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    return data;
  };

  const PostDataPromise = async ()=>{
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await response.json()
    return data
  }

  
  return (
    <>
      {/* Event */}
      {/* <Event /> */}

      {/* State */}
      {/* <State />
      <Batter /> */}

      {/* API Setup */}

      {/* <Suspense fallback={<p>Loading....</p>}>
        <User userDataPromise={usersDataPromise()}></User>
      </Suspense>

      <Suspense fallback={<p>I'am Loading.....</p>}>
        <Post postDataPromise = {PostDataPromise()}></Post>
      </Suspense> */}

      <UseEffect></UseEffect>



    </>
  );
}

export default App;
