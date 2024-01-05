import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div className="max-w-lg mx-auto p-3">
      <h1 className="text-3xl text-center my-10">Sign Up</h1>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Username"
          id="username"
          className="border p-3 rounded-lg "
        />
        <input
          type="email"
          placeholder="Email"
          id="email"
          className="border p-3 rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          className="border p-3 rounded-lg"
        />
        <button className="bg-red-600 p-3 font-semibold text-white rounded-lg uppercase hover:opacity-90  disabled:opacity-85">
          Sign Up
        </button>
      </form>
      <div className="flex mt-4 gap-3">
        <p>Already Have an Account?</p>
        <Link to={"/sign-in"}>
          <span className="text-blue-600 font-medium ">Sign in</span>
        </Link>
      </div>
    </div>
  );
}

export default SignUp;
