import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import Main from "./components/Main";
import Header from "./components/Header/Header";
import { CornerProvider } from "./context/cornerContext/CornerProvider";


function App() {
  return (
    <>
      <BrowserRouter>
        <AuthContextProvider>
          <CornerProvider>

            <Header />

            <Main />
            
          </CornerProvider>
        </AuthContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
