import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "./Components/Layout/Footer/Footer";
import { HeaderWithOutLogin } from "./Components/Layout/HeaderWithOutLogin/HeaderWithOutLogin";
import { NavBar } from "./Components/Layout/NavBar/NavBar";
import { DashboardPage } from "./Components/Pages/dashboardPage/DashboardPage";
import { EditEventPage } from "./Components/Pages/EditEventPage/EditEventPage";
import { Home } from "./Components/Pages/Home/Home";
import { LoginPage } from "./Components/Pages/LoginPage/LoginPage";
import { NewEventPage } from "./Components/Pages/NewEventPage/NewEventPage";
import { NotFound404 } from "./Components/Pages/NotFound404/NotFound404";
import { RegisterPage } from "./Components/Pages/RegisterPage/RegisterPage";


function App() {

  const authUser = true

  return (
    <BrowserRouter>
    {authUser ? <NavBar/> : <HeaderWithOutLogin/> }
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/registro" element={<RegisterPage />} />
        <Route exact path="/dashboard" element={<DashboardPage />} />
        <Route exact path="/editevent/:id" element={<EditEventPage />} />
        <Route exact path="/newevent" element={<NewEventPage />} />
        <Route exact path="/editevent" element={<EditEventPage />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
