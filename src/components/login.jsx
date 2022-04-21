import './../App.css';

export function LoginForm(){
//    const [error, setError] = useState();
    return(
        <div className="bg-white lg:w-2/3 p-5 text-black text-sm login-form">
                {/* {error &&
                    <div className="error-log bg-red-500 text-white w-full text-center py-3 rounded">{error}</div>
                } */}
                <form action="" className="p-3">
                    <div className="form-group my-5">
                        <label htmlFor="">
                            <span className="block float-left my-3">Email Address</span>
                            <input type="email"  id="email" className="form-control p-2 w-full border rounded-lg" required />
                        </label>
                    </div>
                    <div className="form-group my-5">
                        <label htmlFor="">
                            <span className="block float-left my-3">Password</span>
                            <input type="password" id="password" className="form-control p-2 w-full border rounded-lg" required />
                        </label>
                    </div>
                    <button type="submit" className="btn p-3 rounded text-white w-full login-btn" id="buy">Login</button>
                </form>
            </div>
    )
}