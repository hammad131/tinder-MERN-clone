import  React, {useEffect} from 'react';

import './signin.css'




export default function SignIn() {
  

useEffect(() => {
  const signUpButton = document.getElementById('signUp');
  const signInButton = document.getElementById('signIn');
  const container = document.getElementById('container');

  signUpButton.addEventListener('click', () =>
  container.classList.add('right-panel-active'));

  signInButton.addEventListener('click', () =>
  container.classList.remove('right-panel-active'));
});


  return (
        <div className="container" id="container">
          <div className="form-container sign-up-container">
            <form action="#">
              <h1>Create Account</h1>
              <div className="social-media">
        
              </div>
              <span>or sign up using your email account</span>
              <input type="text" placeholder="Name" required/>
              <input type="text" placeholder="Email" required/>
              <input type="text" placeholder="Password" required/>
              <button>Sign Up</button>
      
            </form>
          </div>
          <div className="form-container log-in-container">
          <form action="#">
             <h1>Log In</h1>
              <div className="social-media">
                {/* <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a> */}
              </div>
        <span>or sign up using your email account</span>
      <input type="text" placeholder="Email" required/>
      <input type="text" placeholder="Password" required/>
      <a href="#">Forgot your password?</a>
      <button>Sign In</button>
      
    </form>
  </div>
  <div className="overlay-container">
  <div className="overlay">
    <div className="overlay-panel left">
      <h1>Welcome Back!</h1>
      <p className='paragraph'>To keep connected with us please login with your personal info</p>
      <button className="ghost" id="signIn">Log In</button>          
    </div>
    <div className="overlay-panel right">
      <h1>Howdy, Stranger!</h1>
      <p className='paragraph'>Sign up for an account and start your journey now!!</p>
      <button className="ghost" id="signUp">Sign Up</button>
    </div>
    </div>
    </div>
</div>

  );
}