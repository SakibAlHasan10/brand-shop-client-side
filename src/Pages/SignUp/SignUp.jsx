import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [errorText, setErrorText] = useState('')
  const handleSignUp =(e)=>{
    e.preventDefault()
    setErrorText('')
    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    const photo = form.photo.value;
    const password = form.password.value;
    if(password.length<6){
      setErrorText('Your password must be at least 6 characters')
      return
    }else if(!/(?=.*[A-Z])/.test(password)){
      setErrorText('Your password must contain at least one capital letter')
      return
    }else{
      if(!/(?=.*[!#$%&? "])/.test(password)){
      setErrorText('Your password must contain at least one Special characters')
      return
      }
    }
    console.log(email, name, photo, password)
  }
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content w-full flex-col">
          <div className="text-center">
            <h1 className="text-3xl font-bold">Sign Up now!</h1>
            
          </div>
          <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
            <form onSubmit={handleSignUp} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input w-full input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="full name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="photo url"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
                <p className="text-red-600 text-lg mt-2 font-semibold">{errorText}</p>
              </div>
              <div className="form-control mt-2">
                <button type="submit" className="btn btn-primary">Sign Up</button>
              </div>
            <p className="text-center mt-4">Already a Member? <Link to={'/login'}>Login</Link></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
