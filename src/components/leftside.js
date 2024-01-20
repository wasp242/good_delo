import React from "react";
import { useSelector } from "react-redux";
import { selectData, selectStatus } from "../redux/statusSlice";
import "../App.css";

export const Leftside = () => {
  const status = useSelector(selectStatus);
  const data = useSelector(selectData);
  return (
    <div className="leftside">
      <div className={`duchnila-block ${status}`}>
        {status === "normal" ? (
          <>
            <p className="duchnila-block__title">Душнила доволен вами</p>
            <p className="duchnila-block__text">Все показатели в норме</p>
          </>
        ) : (
          <>
            <p className="duchnila-block__title">Душнила не доволен вами</p>
            {data.co2 !== null && (
              <p className="duchnila-block__text">
                {data.co2 > 800
                  ? "CO2 превышает норму"
                  : "Температура превышает норму"}
              </p>
            )}
          </>
        )}
      </div>
      <div className="leftside-bottom">
        <div className="leftside-bottom__history">
          <p className="">дней без душноты 0</p>
          <button className="btn__text">
            <span>История</span>
            <svg
              className="svg"
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="29"
              viewBox="0 0 28 29"
              fill="none"
            >
              <path
                d="M24.5 14.2521L18.6667 8.41879M24.5 14.2521L18.6667 20.0855M24.5 14.2521H3.5"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className="leftside-bottom__logo">
          <img src="img/383.jpeg" alt="" />
        </div>
      </div>
    </div>
  );
};
