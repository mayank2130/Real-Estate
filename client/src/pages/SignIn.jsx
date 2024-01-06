import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice";

function SignIn() {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);

      if (data.success === false) {
        dispatch(signInFailure(data.message));
        return;
      }

      dispatch(signInSuccess(data));
      navigate("/");
    } catch (error) {
      dispatch(signInFailure(data.message));
    }
  };

  return (
    <div className="max-w-lg mx-auto p-3">
      <h1 className="text-3xl text-center my-10">Sign In</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email"
          id="email"
          onChange={handleChange}
          className="border p-3 rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          onChange={handleChange}
          className="border p-3 rounded-lg"
        />
        <button
          disabled={loading}
          className="bg-red-600 p-3 font-semibold text-white rounded-lg uppercase hover:opacity-90  disabled:opacity-85"
        >
          {loading ? "Loading..." : "Sign In"}
        </button>
      </form>
      <div className="flex mt-4 gap-3">
        <p>Dont Have an Account?</p>
        <Link to={"/sign-up"}>
          <span className="text-blue-600 font-medium ">Sign Up</span>
        </Link>
      </div>
    </div>
  );
}

export default SignIn;
