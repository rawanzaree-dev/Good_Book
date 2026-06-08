import { useState } from "react";
import "./header.css";
import TopHeader from "./TopHeader";
import MiddleHeader from "./MiddleHeader";
import Navbar from "./Navbar";

export default function Header() {
  const [toggle, setToggle] = useState(false);

  return (
    <header>
      <div className="container">
        <TopHeader toggle={toggle} setToggle={setToggle} />
        <MiddleHeader />
      </div>
      <Navbar toggle={toggle} setToggle={setToggle} />
    </header>
  );
}