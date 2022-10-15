
const Login = () => {
    return (
        <div className="container p-3 rounded" style={{ width: "15rem", background: "white" }}>
            <h1 className="text-center mt-1">Login</h1>
            <hr></hr>
            <input type="email" placeholder="Enter Email" className="w-100 mt-3 mb-3 p-1"></input>
            <input type="password" className="w-100 p-1" placeholder="Enter Password"></input>
            <input type="checkbox" className="mt-3" id="remember"></input>
            <label className="text-muted ms-1" for="remember">Remember Me</label>
            <br></br>
            <button className="btn btn-outline-success mt-3">Sign In</button>
        </div>
    )
}

export default Login;