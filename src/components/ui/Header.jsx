import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "./button";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="  mx-3 my-3 flex gap-4">
      <Button
        variant="outline"
        className={location.pathname === "/" ? " bg-gray-200" : ""}
        onClick={() => navigate("/")}
      >
        DashBoard
      </Button>

      <Button
        variant="outline"
        className={location.pathname === "/examples/mail" ? " bg-gray-200" : ""}
        onClick={() => navigate("/examples/mail")}
      >
        Mail
      </Button>
    </div>
  );
};

export default Header;
