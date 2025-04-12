import { Outlet } from "react-router-dom";
import Nav from "./Header/Nav";

function App() {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
}

export default App;
