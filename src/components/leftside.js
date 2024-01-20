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
            <span className="icon arrow"></span>
          </button>
        </div>
        <div className="leftside-bottom__logo">
          <img src="img/383.jpeg" alt="" />
        </div>
      </div>
    </div>
  );
};
