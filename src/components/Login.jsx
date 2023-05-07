import React, { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";

const Login = () => {
  const { signIn, signInWithGoogle } = useContext(AuthContext);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log("Form Login 9", email, password);

    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        form.reset();
        // return <Navigate to="/" replace={true}></Navigate>;
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Please Login</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <div className="form-control mt-6">
                <button
                  onClick={handleGoogleLogin}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Sign in with Google
                </button>
              </div>
              <div className="mx-auto">
                <button className="btn btn-link">
                  <Link to="/register">New to Auth Master</Link>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
