import React from "react";

class SignIn extends React.Component {
  render() {
    return (
      <div className="relative flex flex-col justify-center min-h-screen overflow-hidden bg-zinc-600 mx-4 rounded">
        <div className="w-full p-6 m-auto bg-zinc-900 rounded-md shadow-xl lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center text-zinc-200 uppercase">
            Sign in
          </h1>
          <form className="mt-6">
            <div className="mb-2">
              <label
                for="email"
                className="block text-sm font-semibold text-zinc-200"
              >
                Email
              </label>
              <input
                type="email"
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-zinc-400 focus:ring-zinc-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2">
              <label
                for="password"
                className="block text-sm font-semibold text-zinc-200"
              >
                Password
              </label>
              <input
                type="password"
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-zinc-400 focus:ring-zinc-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <a href="#" className="text-xs text-zinc-500 hover:text-zinc-200">
              Forget Password?
            </a>
            <div className="mt-6">
              <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-zinc-600 rounded-md hover:bg-zinc-400 hover:text-zinc-900 focus:outline-none focus:bg-zinc-600">
                Sign in
              </button>
            </div>
          </form>
          <div className="relative flex items-center justify-center w-full mt-6 border border-t"></div>

          <p className="mt-8 text-xs font-light text-center text-gray-200">
            {" "}
            Don't have an account?{" "}
            <a
              href="/signup"
              className="font-medium text-zinc-600 hover:text-zinc-200"
            >
              Sign up
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export default SignIn;