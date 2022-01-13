import React from "react";

import { BrowserRouter, Routes, Route} from "react-router-dom";

import Logon from './pages/Logon/index';
import Register from "./pages/Register";
import Profile from "./pages/Profile"
import NewIncident from "./pages/NewIncident";

export default function Routess() /* Nome da função não importa nesse caso, pois estamos exportando ela como default */
 {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Logon />} />
        <Route path="/register" exact element={<Register />} />
        <Route path="/profile" exact element={<Profile />} />
        <Route path="/incidents/new" exact element={<NewIncident />} />
      </Routes>     
    </BrowserRouter>
  );
}


// BrowserRouter precisa estar por volta de tudo, Switch faz com que uma rota seja chamada por momento