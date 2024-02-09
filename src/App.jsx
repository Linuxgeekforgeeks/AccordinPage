import React from "react";
import "./App.css";
import MondayPage from "./pages/mondayPage/MondayPage";
import { AddIcon, ExClaimIcon, PrevIcon } from "./assets/icons";
import TicketPage from "./pages/ticketPage/TicketPage";
import AccordinPage from "./pages/accordinPage/AccordinPage";

function App() {
  return (
    <div className="app">
      <div className="app__left">
        <ExClaimIcon />
        <div className="app__leftBottom">
          <AddIcon />
          <PrevIcon />
        </div>
      </div>
      <div className="app__right">
        {/* <MondayPage/> */}
        {/* <TicketPage /> */}
        <AccordinPage/>
      </div>
    </div>
  );
}

export default App;
