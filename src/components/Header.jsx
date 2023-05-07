import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then((result) => {})
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="mx-5 mt-2">
      <div className="navbar bg-secondary rounded">
        <div className="flex-1 gap-2">
          <a className="btn btn-base normal-case text-xl">Auth Master</a>
          <Link className="btn btn-link text-white" to="/">
            Home
          </Link>
          <Link className="btn btn-link text-white" to="/login">
            Login
          </Link>
          <Link className="btn btn-link text-white" to="/register">
            Register
          </Link>
        </div>
        <div className="flex-none ml-3">
          <div className="mx-3">
            {user && (
              <h1 className="text-black">
                Login with{" "}
                <span className="text-white font-bold">{user?.email}</span>
              </h1>
            )}
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                {user ? (
                  <button onClick={handleLogOut}>
                    <Link>Sign out</Link>
                  </button>
                ) : (
                  <button>
                    <Link to="/login">Sign In</Link>
                  </button>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
