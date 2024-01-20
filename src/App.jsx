import { BrowserRouter, Routes, Route } from "react-router-dom";
// import SideNavBar from "./components/ui/SideNavBar";
// import {
//   ResizableHandle,
//   ResizablePanel,
//   ResizablePanelGroup,
// } from "@/components/ui/resizable";
import Dashboard from "./components/ui/Dashboard";
import Header from "./components/ui/Header";
import { useState } from "react";
import MailBox from "./components/ui/MailBox";
// import MailBox from "./components/ui/MailBox";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <div className="mx-3 shadow-lg h-[90vh] w-[94vw] border-t py-2 px-3 rounded-xl">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/examples/mail" element={<MailBox />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
