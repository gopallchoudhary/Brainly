import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";





const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  const navigate = useNavigate()


  const signup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {

      const data = await axios.post(`${BACKEND_URL}/api/v1/user/signup`, { username, password })
      console.log(data);
      alert(data.data.message)
      setPassword("")
      setUsername("")

    } catch (error: any) {
      alert(error.response?.data?.message)
      console.error("❌ Signup Error:", error.response?.data?.message || error.message);
    }
  }

  return (
    <form action="" onSubmit={signup}>
      <div className="min-h-screen w-full bg-gradient-to-br from-teal-100 to-indigo-50 flex items-center justify-center p-6">
        <div className="bg-white/95 rounded-2xl shadow-xl p-8 md:p-12 w-full max-w-md border border-white/60">
          <p className="font-semibold text-2xl text-center mb-4">Sign Up</p>
          <div className="flex flex-col gap-4">
            <div>
              <p className="text-gray-600 text-lg mb-1 mt-2">Username</p>
              <Input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <p className="text-gray-600 text-lg mb-1">Password</p>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mt-2 w-full">
              <Button
                variant="primary"
                text="Sign Up"
                size="md"
                fullWidth={true}
              />
              <p className="text-gray-500 text-sm mt-2 text-center">
                Already signed up?{' '}
                <span className="underline hover:cursor-pointer text-blue-500" onClick={() => navigate('/signin')}>
                  Login here
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SignUp;
