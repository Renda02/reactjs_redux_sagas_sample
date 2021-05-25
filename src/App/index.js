import React from "react";
import UserList from "../pages/UserList";
import StarWars from "./StarWars.js";


export default class App extends React.Component {
  render() {
    return (
      <div>
        <UserList />
        <StarWars/>
      </div>
    );
  }
}
