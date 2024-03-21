import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import Main from "./components/Main";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthContextProvider>

          <Header />

          <Main />

        </AuthContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
