import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import Main from "./components/Main";
import Header from "./components/Header/Header";
import { AsyncProvider } from "./context/asincContext/AsyncProvider";
import NavBar from "./components/Header/NavBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthContextProvider>
          <AsyncProvider>

            <Header />
            <NavBar/>
            <Main />
            
          </AsyncProvider>
        </AuthContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
