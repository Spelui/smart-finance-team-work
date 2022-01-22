import React from "react";
import { Decstop } from "./Decstop/Decstop";
import { useMediaQuery } from "react-responsive";

import { Mobile } from "./Mobile/Mobile";

import s from "./HomePage.module.scss";

export const HomePage = () => {
  const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 767 });
  return (
    <section className={`background ${s.home}`}>
      <div className="container">{isMobile ? <Mobile /> : <Decstop />}</div>
    </section>
  );
};
