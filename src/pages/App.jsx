import { useState } from "react";
import Profile from "../components/profile/profile";
import Switch from "../components/switch/switch";
import Links from "../components/links/links";

import "./App.css";

import imgDarkMode from "../img/fotodeperfpre.jpeg";
import imgLightMode from "../img/fotoperfil.jpeg";

const App = () => {
  const [isLightMode, setILightMode] = useState(false);
  const imgSrc = isLightMode ? imgLightMode : imgDarkMode;
  const imgAlt = isLightMode ? "Imagem no modo Claro" : "Imagem no modo escuro";
 
  return (
    <div id="container">
      <Profile imgSrc={imgSrc} imgAlt={imgAlt}>
        @Mvn
      </Profile>
      <Switch></Switch>
      <div id="links">
        <ul>
            <Links link={"#"}>GitHub</Links>
            <Links link={"#"}>Instagram</Links>
            <Links link={"#"}>twitter</Links>
            <Links link={"#"}>Projetos</Links>
                 
        </ul>
      </div>    
      
    </div>
  );
};
export default App;
