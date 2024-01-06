import React from "react";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";
import { useDispatch } from "react-redux"
import { signInSuccess } from "../redux/user/userSlice"
import { useNavigate  } from "react-router-dom"

function OAuth() {
    const dispatch = useDispatch()
    const navigate  = useNavigate()
  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      const result = await signInWithPopup(auth, provider);
      const res = await fetch("/api/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        }),
      })
      const data = await res.json()
      dispatch(signInSuccess(data))
      navigate("/")
    } catch (error) {
      console.log("Could Not sign in with Google", error);
    }
  };
  return (
    <button
      onClick={handleGoogleClick}
      type="button"
      className="bg-white flex items-center justify-center gap-4 font-medium p-3 hover:opacity-90 rounded-lg"
    >
      <FcGoogle />
      Google
    </button>
  );
}

export default OAuth;
