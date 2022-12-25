// import { useEffect, useState } from "react";
// import "./App.css";
// import { ThumbUp } from "@mui/icons-material";

import Slider from "./Components/Slider";

function App() {
  // const [likeColor, setLikeColor] = useState("");
  // const [users, setUsers] = useState([]);
  // const [singleUser, setSingleUser] = useState({});
  // const [randomUser, setRandomUser] = useState({});

  // useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/users`)
  //     .then((res) => res.json())
  //     .then((data) => setUsers(data));

  //   // .... single User

  //   fetch(`https://jsonplaceholder.typicode.com/users/1`)
  //     .then((res) => res.json())
  //     .then((data) => setSingleUser(data));

  //   // random api

  //   fetch(`https://randomuser.me/api/`)
  //     .then((res) => res.json())
  //     .then((data) => setRandomUser(data.results[0]));
  // }, []);
  // const handleClick = () => {
  //   const color = likeColor ? "" : "primary";
  //   setLikeColor(color);
  // };
  return (
    <div>
      {/* <ThumbUp onClick={handleClick} color={likeColor}></ThumbUp>
      <h1>Shifa's fake Name: {singleUser.name}</h1>
      <h2>Gender: {randomUser.name?.first}</h2>

      {users.map((user, index) => (
        <li key={index}>{user.name}</li>
      ))} */}
      <Slider />
    </div>
  );
}

export default App;
