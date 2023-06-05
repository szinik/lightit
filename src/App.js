import { useState } from "react";

import AppBar from "./components/AppBar";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import "./App.css";

function App() {
  const [selectedMenuItemSearchKey, setSelectedMenuItemSearchKey] =
    useState("");

  return (
    <div className="App">
      <AppBar />
      <Sidebar
        {...{
          selectedMenuItemSearchKey,
          setSelectedMenuItemSearchKey,
        }}
      />
      <Content isSidebarOpen={!!selectedMenuItemSearchKey} />
    </div>
  );
}

export default App;
