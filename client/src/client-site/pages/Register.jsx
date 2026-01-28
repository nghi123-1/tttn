import { useState } from "react";
import { register } from "../../api/authApi";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [userId, setUserId] =
    useState("");
  const [password, setPassword] =
    useState("");

  const nav = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await register({
        user_id: userId,
        password,
      });

      nav("/login");
    } catch (err) {
      alert("Register failed");
    }
  };

  return (
    <form
      className="auth-form"
      onSubmit={handleSubmit}
    >
      <h2>Register</h2>

      <input
        placeholder="User ID"
        onChange={(e) =>
          setUserId(e.target.value)
        }
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) =>
          setPassword(e.target.value)
        }
      />

      <button>Register</button>
    </form>
  );
}
