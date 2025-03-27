import React, { useContext, useEffect } from "react";
import { MyContext } from "../../App";
import logo from '../../assets/images/logo.png'
import TextField from '@mui/material/TextField';

const Profile = () => {
  const context = useContext(MyContext);

  useEffect(() => {
    context.setIsHeaderFooterShow(false);
  }, [context]);
  useEffect(() => {
    context.setIsFooterShow(false);
  }, [context]);

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
                <img src={logo} alt="logo" className="w-75" />
            </div>

            
            
            <form>

            <h2 className="d-flex justify-content-center">Sign In</h2>
                <div className="form_group">
      
                <TextField id="input-with-sx" label="E-mail" type="e-mail" required variant="standard" className="w-100"/>
                
                </div>
                <div className="form_group ">
      
                <TextField id="input-with-sx" label="password" type="password" required variant="standard" className="w-100" />
                
                </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
