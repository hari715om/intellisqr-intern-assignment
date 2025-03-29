import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import axios from "axios";

const loginUser = async ({ email, password }: { email: string; password: string }) => {
  return axios.post("/api/login", { email, password });
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const mutation = useMutation({
    mutationFn: loginUser,
  });

  return (
    <div>
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={() => mutation.mutate({ email, password })}>Login</button>
    </div>
  );
};

export default Login;
