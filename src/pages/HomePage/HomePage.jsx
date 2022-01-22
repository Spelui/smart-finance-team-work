import React from "react";
import sprite from "../../images/sprite.svg";
import Balance from "../../component/Balance";
import Calendar from "../../component/Calendar/Calendar";
import { Decstop } from "./Decstop/Decstop";

import s from "./HomePage.module.scss";

export const HomePage = () => {
  return (
    <section className={`background ${s.home}`}>
      <div className="container">
        <Decstop />
      </div>
    </section>
  );
};
