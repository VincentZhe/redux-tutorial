import "./App.css";

import LeftBar from "./components/leftbar/LeftBar";
import Navbar from "./components/navbar/Navbar";
import RightBar from "./components/rightbar/RightBar";
import Update from "./components/update/Update";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <LeftBar />
        <Update />
        <RightBar />
      </div>
    </>
  );
}

export default App;
