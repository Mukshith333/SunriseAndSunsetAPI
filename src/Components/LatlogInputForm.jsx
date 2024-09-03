import React, { useState } from "react";
import Style from "./Latform.module.css";

let URL = "https://api.sunrisesunset.io/";

export default function LatlongInputForm({
  latitude,
  longitude,
  date,
  sunrise,
  sunset,
  timeZone,
  display,
  setlatitude,
  setlongitude,
  setTimeZone,
  setdate,
  setRise,
  setSet,
  setDisplay,
}) {
  function handleSubmit(e) {
    e.preventDefault();
  }

  async function fetchdata() {
    console.log(latitude + "" + longitude);
    const result = await fetch(
      `${URL}json?lat=${latitude.trim()}&lng=${longitude.trim()}&date=${date}`
    );
    const data = await result.json();
    setRise(data.results.sunrise);
    setSet(data.results.sunset);
    setTimeZone(data.results.timezone);
    setDisplay("block");
    console.log(display);
  }
  return (
    <div className={Style.form}>
      <h1 className={Style.header}>Sun Rise Sun Set API</h1>
      <form onSubmit={handleSubmit}>
        <input
          className={Style.lat}
          onChange={(e) => setlatitude(e.target.value)}
          value={latitude}
          type="text"
          placeholder="Enter latitude"
        />
        <input
          className={Style.lon}
          onChange={(e) => setlongitude(e.target.value)}
          value={longitude}
          type="text"
          placeholder="Enter longitude"
        />
        <input
          className={Style.dta}
          type="date"
          onChange={(e) => setdate(e.target.value)}
          value={date}
        />
        <button className={Style.btn_fetch} onClick={() => fetchdata()}>
          fetch
        </button>
      </form>
    </div>
  );
}
