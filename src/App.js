// components/App.js
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStatus, selectStatus, setData } from "./redux/statusSlice";
import fetchData from "./api";
import "./App.css";
import { Leftside } from "./components/leftside";
import { Rightside } from "./components/rightside";

const App = () => {
  const dispatch = useDispatch();
  const status = useSelector(selectStatus);

  const [temperature, setTemperature] = useState(null);
  const [co2, setCo2] = useState(null);

  useEffect(() => {
    const fetchDataAndUpdateStatus = async () => {
      try {
        const data = await fetchData();
        const co2 = data.co2;
        const temperature = data.temp;
        dispatch(setData(data));
        setCo2(co2);
        setTemperature(temperature);

        if (co2 > 800 || temperature > 27) {
          dispatch(setStatus("exceeding"));
        } else {
          dispatch(setStatus("normal"));
        }
      } catch (error) {
        throw new Error(error);
      }
    };

    fetchDataAndUpdateStatus();

    const intervalId = setInterval(fetchDataAndUpdateStatus, 60000);

    return () => clearInterval(intervalId);
  }, [dispatch]);

  return (
    <>
      <p className="title">душнила</p>
      <div className={`container`}>
        <Leftside />
        <Rightside />
      </div>
    </>
  );
};

export default App;
