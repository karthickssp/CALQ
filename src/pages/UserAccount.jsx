import React, { useState } from 'react';

function UserAccount() {
  const [showModal, setShowModal] = useState(false);
  const [activeForm, setActiveForm] = useState('Social');
  const [headerTitle, setHeaderTitle] = useState('CALQ');

  const openModal = () => {
    if(showModal){
      closeModal();
      return;
    }
    setShowModal(true);
    setActiveForm('social');
    setHeaderTitle('CALQ');
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const showLoginForm = () => {
    setActiveForm('login');
    setHeaderTitle('Login');
  };

  const showRegisterForm = () => {
    setActiveForm('register');
    setHeaderTitle('Register');
  };

  const goBack = () => {
    setActiveForm('social');
    setHeaderTitle('CALQ');
  };

  return (
    <div className="container">
      <button onClick={openModal} className="btn">Account</button>

      {showModal && (
        <div className="popupContainer">
          <header className="popupHeader">
            <span className="header_title">{headerTitle}</span>
            <span className="modal_close" onClick={closeModal}><i className="fa fa-times"></i></span>
          </header>

          <section className="popupBody">
            {activeForm === 'social' && (
              <div className="social_login">
                <div>
                  <a href="#" className="social_box google">
                    <span className="icon"><i className="fa fa-google-plus"></i></span>
                    <span className="icon_title">Sign Up with Google</span>
                  </a>
                </div>
                
                <div className="centeredText">
                  <span>Or use your Email address</span>
                </div>

                <div className="action_btns">
                  <div className="one_half"><button onClick={showLoginForm} className="btn">Login</button></div>
                  <div className="one_half last"><button onClick={showRegisterForm} className="btn">Sign up</button></div>
                </div>
              </div>
            )}

            {activeForm === 'login' && (
              <div className="user_login">
                <form>
                  <label>Email / Username</label>
                  <input type="text" /><br />

                  <label>Password</label>
                  <input type="password" /><br />

                  <div className="checkbox">
                    <input id="remember" type="checkbox" />
                    <label htmlFor="remember">Remember me on this computer</label>
                  </div>

                  <div className="action_btns">
                    <div className="one_half"><button type="button" onClick={goBack} className="btn back_btn"><i className="fa fa-angle-double-left"></i> Back</button></div>
                    <div className="one_half last"><button type="submit" className="btn btn_red">Login</button></div>
                  </div>
                </form>
                <a href="#" className="forgot_password">Forgot password?</a>
              </div>
            )}

            {activeForm === 'register' && (
              <div className="user_register">
                <form>
                  <label>Full Name</label>
                  <input type="text" /><br />

                  <label>Email Address</label>
                  <input type="email" /><br />

                  <label>Password</label>
                  <input type="password" /><br />

                  <div className="checkbox">
                    <input id="send_updates" type="checkbox" />
                    <label htmlFor="send_updates">Send me occasional email updates</label>
                  </div>

                  <div className="action_btns">
                    <div className="one_half"><button type="button" onClick={goBack} className="btn back_btn"><i className="fa fa-angle-double-left"></i> Back</button></div>
                    <div className="one_half last"><button type="submit" className="btn btn_red">Register</button></div>
                  </div>
                </form>
              </div>
            )}
          </section>
        </div>
      )}
    </div>
  );
}

export default UserAccount;
