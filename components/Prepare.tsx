import Link from "next/link";
import React from "react";
import "./Prepare.css";

const Prepare = () => {
  return (
    <div className="prepareContainer">
      <div className="prepareText">Ready to turn your ideas into </div>
      <div className="prepareTextBottom">reality? I&apos;m here to help</div>
      <Link href="/contact">
        <div className="contactButton">Contact me</div>
      </Link>
    </div>
  );
};

export default Prepare;
