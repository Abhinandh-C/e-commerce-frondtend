import React, { useContext, useEffect,useState } from "react";
import { MyContext } from "../../App";
import logo from "../../assets/images/logo.png";
import TextField from "@mui/material/TextField";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Axios from "../../component/Axios/Axios";
import { useNavigate } from 'react-router-dom';


const Profile = () => {
  const context = useContext(MyContext);

  useEffect(() => {
    context.setIsHeaderFooterShow(false);
  }, [context]);
  useEffect(() => {
    context.setIsFooterShow(false);
  }, [context]);


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  const handleValidation = async (e) => {
    e.preventDefault();

    try {
      const response = await Axios.post('/login', { email, password }, {headers:{
        'Content-Type':'application/json'
      }, withCredentials: true });


      // Assuming backend responds with { token: "..." } or { user, token }
      if (response.status === 200) {
        const { token, user } = response.data;

        // Store token in localStorage or sessionStorage
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));

        // Navigate to protected route
        navigate('/');
      }
    } catch (error) {
      console.error("Error while logging in:", error);
      if (error.response && error.response.data?.message) {
        setErrorMsg(error.response.data.message);
      } else {
        setErrorMsg('Login failed. Please check your credentials.');
      }
    }
  };

  return (
    <div>
      <section className="signInPage">
        <div className="shape-bottom">
          <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="white"
              d="M0,192L80,208C160,224,320,256,480,250.7C640,245,800,203,960,165.3C1120,128,1280,96,1360,80L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            />
          </svg>
        </div>
        <div className="container">
          <div className=" box card p-3 shadow border-0">
            <div className="text-center">
              <a href="/">
              <img src={logo} alt="logo" className="w-75" />
              </a>
            </div>

            <form onSubmit={handleValidation}>
              <h2
                className="d-flex justify-content-center "
                style={{ color: "#383a95" }}
              >
                Sign In
              </h2>
              <div className="form_group">
                <TextField
                  id="input-with-sx"
                  label="E-mail"
                  type="e-mail"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  variant="standard"
                  className="w-100"
                />
              </div>
              <div className="form_group ">
                <TextField
                  id="input-with-sx"
                  label="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  variant="standard"
                  className="w-100"
                />
              </div>

              <a href="" className="border-effect cursor">
                {" "}
                forget password?
              </a>

              <Button type="submit" className="signInButton">Sign In</Button>

              <p>
                New Here ?{" "}
                <Link to="/Profile/signUp" className="border-effect">
                  Create an Account
                </Link>
              </p>

              <h6 className="d-flex justify-content-center bold">
                or continue with social account
              </h6>

              <span className="d-flex justify-content-center">
  <a href="#" className="mx-2" style={{ color: "#DB4437" }}> 
    <i className="fab fa-google"></i>
  </a>
  <a href="#" className="mx-2" style={{ color: "#1877F2" }}> 
    <i className="fab fa-facebook-f"></i>
  </a>
  <a href="#" className="mx-2" style={{ color: "#E4405F" }}> 
    <i className="fab fa-instagram"></i>
  </a>
</span>

            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
