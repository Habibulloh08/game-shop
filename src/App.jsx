import { Route, Routes } from "react-router-dom";
import "./App.css";
import SideMenu from "./components/SideMenu";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useGlobalContext } from "./Contex";
import Header from "./pages/Header";

import { useRef, useState } from "react";
import Home from "./pages/Home";
import Bag from "./pages/Bag";
import Categories from "./pages/Categories";
import MyLibrary from "./pages/MyLibrary";
function App() {
  const { games } = useGlobalContext();

  const [active, setActive] = useState(false);
  const homeRef = useRef(null);
  const categoriesRef = useRef(null);
  const libraryRef = useRef(null);
  const bagRef = useRef(null);
  const sections = [
    { name: "home", ref: homeRef, active: true },
    { name: "categories", ref: categoriesRef, active: false },
    { name: "library", ref: libraryRef, active: false },
    { name: "bag", ref: bagRef, active: false },
  ];
  const handleToggleActive = () => {
    setActive(!active);
  };
  const handleSectionActive = (target) => {
    sections.forEach((section) => {
      section.ref.current.classList.remove("active");
      if (section.name === target) {
        section.ref.current.classList.add("active");
      }
    });
  };

  return (
    <>
      <main>
        <SideMenu active={active} sectionActive={handleSectionActive} />
        <div className={`banner ${active ? "active" : ""}`}>
          <Header toggleActive={handleToggleActive} />
          <div className="container-fluid">
            {games && games.length > 0 && (
              <>
                <Home reference={homeRef} />
                <Bag reference={bagRef} />
                <Categories reference={categoriesRef} />
                <MyLibrary reference={libraryRef} />
              </>
            )}

            {/* <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/library" element={<MyLibrary />} />
              <Route path="/bag" element={<Bag />} />
            </Routes> */}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
