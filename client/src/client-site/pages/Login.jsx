import { useState } from "react";
import { login } from "../../api/authApi";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [userId, setUserId] =
    useState("");
  const [password, setPassword] =
    useState("");

  const nav = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await login({
        user_id: userId,
        password,
      });

      localStorage.setItem(
        "token",
        res.data.token
      );

      nav("/");
    } catch (err) {
      alert(
        err.response?.data?.message ||
          "Login failed"
      );
    }
  };

  return (
    <form
      className="auth-form"
      onSubmit={handleSubmit}
    >
      <h2>Login</h2>

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

      <button>Login</button>
    </form>
  );
}
