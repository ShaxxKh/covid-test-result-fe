import "./App.css";
import MainContext from "./context";
import MainPage from "./components/MainPage/MainPage";
import { BrowserRouter, Route } from "react-router-dom";
import { LanguageProvider } from "./languageContext";

function App(props) {
  return (
    <LanguageProvider>
      <MainContext>
        <BrowserRouter>
          <Route component={MainPage} {...props} />
        </BrowserRouter>
      </MainContext>
    </LanguageProvider>
  );
}

export default App;
