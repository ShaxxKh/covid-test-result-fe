import "./App.css";
import MainContext from "./context";
import MainPage from "./components/MainPage";
import { BrowserRouter } from "react-router-dom";

function App(props) {
  return (
    <MainContext>
      <BrowserRouter>
        <MainPage {...props}>asd</MainPage>
      </BrowserRouter>
    </MainContext>
  );
}

export default App;
