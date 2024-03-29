import React from "react";
import { UserAuth } from "../../context/AuthContext";

const Header = () => {
  const { user, rol } = UserAuth();

  return (
    <>


      {user &&
        <>
          <section className="main-header-container">
          
            <div className="img-container">
              <img id="main-logo" src="assets/umbrella-morado-icono.webp" alt="main-logo" className="img-logo"/>
              <img id="text-logo" src="assets/logo-umbrella-blanco.webp" alt="text-logo" className="img-letter"/>
            </div>
          
            <div className="user-container">
            <img id="notification" src="assets/notification.svg" alt="notification" className="img-notification"/>
            <p>{user.email}</p>
            <img id="user-rounded" src="assets/user-rounded.svg" alt="user-logo" className="img-user"/>
            </div>
          </section>
        </>
      }
    </>
  );
};

export default Header;
