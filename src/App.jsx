import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from "./context/AuthContext";
import Main from './components/Main';

function App() {

  return (
    <>
      <BrowserRouter>
        <AuthContextProvider>
          <Main />
        </AuthContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
