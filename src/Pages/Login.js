import Navbar from "../Components/Navbar";

const Login = () => {
    return (
        <>
            <Navbar />
            <div className="d-flex align-items-center" style={{ background: "#031222", height: "100vh" }}>
                <div className="container p-3 rounded" style={{ width: "18rem", background: "white" }}>
                    <h1 className="text-center mt-3 fs-2">Log In</h1>
                    <hr></hr>
                    <form action="#">
                        <input type="email" placeholder="Enter Email" className="w-100 mt-3 mb-3 p-2" required></input>
                        <input type="password" className="w-100 p-2" placeholder="Enter Password" required></input>
                        <input type="checkbox" className="mt-3" id="remember"></input>
                        <label className="text-muted ms-1" for="remember">Remember Me</label>
                        <br></br>
                        <button type="submit" className="btn btn-success mt-3 w-100">Log In</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login;