import React from "react";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";

const Home = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h1>Hello Home </h1>
      <h2>
        Our current user is{" "}
        <span className="text-primary">{user?.displayName}</span>
      </h2>
    </div>
  );
};

export default Home;
