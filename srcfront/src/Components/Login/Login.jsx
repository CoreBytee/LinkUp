import "./Login.css";

function Login() {
    return (
        <div className="Login">
            <h1>LinkUp</h1>
            <form action="">
                <label htmlFor="LoginEmail">Email</label>
                <input type="email" id="LoginEmail" />
                <label htmlFor="LoginPassword">Password</label>
                <input type="password" name="" id="LoginPassword" />
                <input type="submit" value="Login" />
            </form>
        </div>
        // <>
        //   <div class="container">
        //     <div class="card">
        //       <h2>Login</h2>
        //       <form action="">
        //         <label for="username">Username</label>
        //         <input type="text" id="username" name="username" required />
        //         <label for="password">Password</label>
        //         <input type="password" id="password" name="password" required />
        //         <button type="submit">Login</button>
        //       </form>
        //     </div>
        //   </div>
        // </>
    )
}

export default Login;
