import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="text-2xl">Login</h1>

      <button className= "border-2 border-blue-700 border-solid"  onClick={() => navigate("/dashboard")}>
        Login
      </button>
    </div>
  );
}

export default Login;