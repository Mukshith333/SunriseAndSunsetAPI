import React from "react";
import Style from "./Popup.module.css";
import img from "../assets/sun.png";

export default function PassRiseSetAPI({
  sunrise,
  sunset,
  timeZone,
  display,
  setDisplay,
}) {
  const modal = document.getElementById("myModal");
  function handleClose() {
    setDisplay("none");
    console.log(display);
  }
  return (
    <div
      id="myModal"
      className={display == "block" ? Style.modal2 : Style.modal}
    >
      <div className={Style.modal_content}>
        <div className={Style.modal_header}>
          <h2 id={Style.time_zone}>Time Zone: {timeZone}</h2>
          <span onClick={() => handleClose()} className={Style.close_btn}>
            &times;
          </span>
        </div>
        <div className={Style.modal_body}>
          <div className={Style.rightcontainer}>
            <p className={Style.test}>{sunrise}</p>
            <img className={Style.img1} src={img} />
          </div>
          <div className={Style.leftcontainer}>
            <img className={Style.img2} src={img} />
            <p className={Style.test2}>{sunset}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
