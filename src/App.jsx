import { useState } from "react";
import LatlongInputForm from "./Components/LatlogInputForm";
import PassRiseSetAPI from "./Components/PassRiseSetAPI";

function App() {
  const [latitude, setlatitude] = useState("");
  const [longitude, setlongitude] = useState("");
  const [date, setdate] = useState("");
  const [sunrise, setRise] = useState("");
  const [sunset, setSet] = useState("");
  const [timeZone, setTimeZone] = useState("");
  const [display, setDisplay] = useState("none");
  return (
    <div className="App">
      <LatlongInputForm
        latitude={latitude}
        longitude={longitude}
        date={date}
        sunrise={sunrise}
        sunset={sunset}
        timeZone={timeZone}
        display={display}
        setlatitude={setlatitude}
        setlongitude={setlongitude}
        setdate={setdate}
        setRise={setRise}
        setSet={setSet}
        setDisplay={setDisplay}
        setTimeZone={setTimeZone}
      />
      <PassRiseSetAPI
        sunrise={sunrise}
        sunset={sunset}
        timeZone={timeZone}
        display={display}
        setDisplay={setDisplay}
      />
    </div>
  );
}

export default App;
