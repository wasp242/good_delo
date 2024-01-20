import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectData, selectStatus } from "../redux/statusSlice";
import "../App.css";

export const Rightside = () => {
  const status = useSelector(selectStatus);
  const data = useSelector(selectData);

  return (
    <div className="rightside">
      <div className={`info ${status}`}>
        {data.temp !== null && (
          <p className="info-block">
            {data.temp} °C <p className="info-text">Температура</p>{" "}
          </p>
        )}
        {data.co2 !== null && (
          <p className="info-block">
            {data.co2} ppm
            <p className="info-text"> Co2</p>{" "}
          </p>
        )}
      </div>
    </div>
  );
};
