import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Output from "./components/output";
import Navbar from "./components/navbar";
import Card from "./components/card";
import "./styles.css";
import Feed from "./components/newFeed";
import Side from "./components/sideBar";
import Messenger from "./components/messenger";

function App() {
  const [users, setUsers] = useState([
    { name: "Ariana Grande", email: "ArianaG@gmail.com" },
    { name: "Matthew Penykh", email: "MatthewP@gmail.com" },
    { name: "Adele", email: "adele@gmail.com" },
    { name: "Peter P. Josh", email: "peterjosh@outlook.com" },
    { name: "Paul Paul", email: "paul@yahoo.com" },
    { name: "Arnold Rebeka", email: "arnoldR@gmail.com" },
    { name: "Jason Statham", email: "jason@statham.com" },
    { name: "Amy Boyd", email: " amy_boyd.1993@gmail.com" },
    { name: "John Cash", email: "john@gmail.com" },
    { name: "Emeniem", email: "eminem@gmail.com" }
  ]);

  return (
    <div>
      <div>
        <Navbar />
        <div>
          <Side />
          <Feed />
          {users.map(user => (
            <Card name={user.name} email={user.email} />
          ))}
          <Messenger />
        </div>
      </div>
    </div>
  );
}

export default App;
