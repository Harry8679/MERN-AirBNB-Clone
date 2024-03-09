import axios from "axios";
import { useState } from "react"
import { Link } from "react-router-dom"

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = async (e) => {
    e.preventDefault();
    try {
        await axios.post('/login', { email, password });
        alert('Registration successful. Now you can log in');
    } catch (err) {
        alert('Registration failed. Please try again later.');
    }
  }

  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-4xl text-center">Login</h1>
        <form action="" className="max-w-md mx-auto" onSubmit={loginUser}>
            <input type="email" placeholder="you@email.com" value={email} onChange={e => setEmail(e.target.value)} />
            <input type="password" placeholder="password" value={password} onChange={e => setPassword(e.target.value)} />
            <button className="primary">Login</button>
            <div className="text-center py-2 text-gray-500">
                Do not have an account yet?
                <Link to='/register' className="underline text-black">Register Now</Link>
            </div>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
