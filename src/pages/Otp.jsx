import './otp.css';

const Otp = () => {
  return (
    <div>
        <div className="otp">
        <div className="main-heading"> 
          <h1>Teacher's Bridge</h1>
          </div> 
          <div className="card">
          <form className="form">
            <div className="form-heading">
            <h2>ENTER YOUR OTP</h2>
            </div>
            <div className="form-group">
            <input type="text" placeholder="Enter here" />
            </div>
              <button>Submit</button>
          </form>
          </div>
      </div>
    </div>
  )
}

export default Otp