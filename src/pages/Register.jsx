import './register.css';

const Register = () => {
    return (
      <div className="register">
        <div className="main-heading"> 
          <h1>Teacher's Bridge</h1>
          </div> 
          <div className="card">
          <form className="form">
            <div className="form-heading">
            <h2>Register Here</h2>
            </div>
            <div className="form-group">
            <label>Username:</label>
            <input type="text" placeholder="Username" />
            </div>
            <div className="form-group">
            <label>Email:</label>
            <input type="email" placeholder="Email" />
            </div>
            <div className="form-group">
            <label>Password:</label>
             <input type="password" placeholder="Password" />
            </div>
              <button>Register</button>
          </form>
          </div>
      </div>
    )
  }
  
  export default Register