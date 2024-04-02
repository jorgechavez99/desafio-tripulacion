import { Link } from "react-router-dom";
import '/src/styles/components/_Corner.scss';
import { CornerSelected } from "../../../context/CornerContext";

const Corner = () => {

const {corner, setCorner} = CornerSelected();

const handlerTheBridge = () => {
  setCorner('thebridge')
}
const handlerSchiller = () => {
  setCorner('schiller')
}
  return (
    <>
      <main className="main-corner-container">

        <section className="title-container">
          <h2 className="font title">TAKE A MOMENT</h2>
          <p className="font subtitle">¿Dónde te refugias hoy?</p>
        </section>

        <form action="" className="input-container">
          <input type="text" placeholder="Busca un corner..." />
        </form>

        <section >
          <div className="container">
            <div className="banner-container">
              <Link to="/dashboard" onClick={handlerTheBridge}>
              <h3 className="cornerName">The Bridge</h3>
                <img
                  className="img"
                  src="assets/banner-thebridge.png"
                  alt="foto de cafeteria"
                />
              </Link>
            </div>
          
          </div>
        </section>

        <section >
          <div className="container">
            <div className="banner-container">
              <Link to="/dashboard" onClick={handlerSchiller}>
              <h3 className="cornerName">Schiller</h3>
                <img
                  className="img"
                  src="assets/banner-schiller.png"
                  alt="foto de cafeteria"
                />
              </Link>
            </div>
           
          </div>
        </section>

        {/* <div className="logo">
          <img
            className="img"
            src="assets/umbrella-morado-icono.webp"
            alt="logo Umbrella"
          />
        </div> */}
      </main>
    </>
  );
};

export default Corner;