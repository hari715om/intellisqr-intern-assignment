import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import axios from "axios";

const registerUser = async ({ email, password }: { email: string; password: string }) => {
  return axios.post("/api/register", { email, password });
};

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const mutation = useMutation({
    mutationFn: registerUser,
  });

  return (
    <div>
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={() => mutation.mutate({ email, password })}>Register</button>
    </div>
  );
};

export default Register;
