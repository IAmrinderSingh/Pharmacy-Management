
export default function SignUp() {
    return (
        <div className="d-flex align-items-center" style={{ height:"100vh", background:"#031222" }}>
            <div className="container p-3 rounded" style={{ width: "18rem", background: "white"  }}>
                <h1 className="text-center mt-1 fs-2">Sign Up</h1>
                <hr></hr>
                <input className='mt-1 mb-3 p-2 w-100' type="text" placeholder='First Name' required></input>
                <input className='p-2 w-100' type="text" placeholder='Last Name' required></input>
                <input type="email" placeholder="Enter Email" className="w-100 mt-3 mb-3 p-2" required></input>
                <input type="password" className="w-100 p-2" placeholder="Enter Password" required></input>
                <input type="password" className="w-100 p-2 mt-3" placeholder="Confirm Password" required></input>
                <br></br>
                <button type="submit" className="btn btn-success mt-3 w-100">Sign Up</button>
            </div>
        </div>
    )
}
