import React from "react";

import s from "./OnLoader.module.scss";

const OnLoader = () => {
  return (
    <div class={`${s.loader} ${s.loader_hide}`}>
      <div class={`${s.loader_inner}`}>
        <div class={`${s.loader_line_wrap}`}>
          <div class={`${s.loader_line}`}></div>
        </div>
        <div class={`${s.loader_line_wrap}`}>
          <div class={`${s.loader_line}`}></div>
        </div>
        <div class={`${s.loader_line_wrap}`}>
          <div class={`${s.loader_line}`}></div>
        </div>
        <div class={`${s.loader_line_wrap}`}>
          <div class={`${s.loader_line}`}></div>
        </div>
        <div class={`${s.loader_line_wrap}`}>
          <div class={`${s.loader_line}`}></div>
        </div>
      </div>
    </div>
  );
};

export default OnLoader;
