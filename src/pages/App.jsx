import { useState } from "react";
import Profile from "../components/profile/profile";

import "./App.css";

import imgDarkMode from "../img/fotodeperfpre.jpeg";
import imgLightMode from "../img/fotoperfil.jpeg";

const App = () => {
  const [isLightMode, setILightMode] = useState(false);
  const imgSrc = isLightMode ? imgLightMode : imgDarkMode;
  const imgAlt = isLightMode ? "Imagem no modo Claro" : "Imagem no modo escuro";
  return (
    <div>
      <Profile imgSrc={imgSrc} imgAlt={imgAlt}>
        @Mvn
      </Profile>
    </div>
  );
};
export default App;
