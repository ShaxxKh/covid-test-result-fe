import "./App.css";
import MainContext from "./context";
import MainPage from "./components/MainPage/MainPage";
import { BrowserRouter } from "react-router-dom";
import { LanguageProvider } from "./languageContext";

function App(props) {
  return (
    <LanguageProvider>
      <MainContext>
        <BrowserRouter>
          <MainPage {...props}>asd</MainPage>
        </BrowserRouter>
      </MainContext>
    </LanguageProvider>
  );
}

export default App;
