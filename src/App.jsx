import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import { CornerProvider } from "./context/CornerContext";
import Main from "./components/Main";
import Header from "./components/Header/Header";
import NavBar from "./components/Main/NavBar";



function App() {

  return (
    <>
      <BrowserRouter>
        <AuthContextProvider>
          <CornerProvider>
            <Header />
            <NavBar />
            <Main />
          </CornerProvider>
        </AuthContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
