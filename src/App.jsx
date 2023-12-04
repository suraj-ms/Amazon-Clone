import { Switch } from "@material-ui/core";
import "./App.css";
import Header from "./Header/Header";
import Home from "./Home/Home";
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      
      <Header/>
      <Outlet />
      
    </>
  );
}

export default App;
