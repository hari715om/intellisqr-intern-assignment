import React, { useState } from "react";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setError(null);
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });
  
      console.log("🔍 Raw response:", response);
  
      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error("Server did not return JSON. Possible backend error.");
      }
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.error || "Login failed");
      }
  
      console.log("Login successful:", data);
      alert("Login successful!");
    } catch (error: any) {
      setError(error.message);
      console.error("Error logging in:", error);
    } finally {
      setLoading(false);
    }
  };
  
  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-96">
        <h2 className="text-2xl font-semibold text-center mb-6">Welcome back!</h2>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 border rounded-md"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-4 border rounded-md"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handleLogin}
          className="w-full p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </div>
    </div>
  );
};

export default Login;
