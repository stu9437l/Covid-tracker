import React, { useState, useEffect } from "react";
import Flag from "./neplai-flag.jpg";
const Covid = () => {
  const [covidData, setcovidData] = useState([]);
  const GetData = async () => {
    try {
      const res = await fetch("https://corona.askbhunte.com/api/v1/data/nepal");
      const actualData = await res.json();
      setcovidData(actualData);
      console.log(actualData)
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    GetData();
  }, []);
  return (
    <>
      <div className="conatainer">
        <div className="row text-light mt-2">
          <div className=" text-center">
            <span className="">
              <p className="fw-bolder lead live">
                <i class="fas fa-circle text-danger"></i> Live
              </p>
            </span>
          </div>
          <div className="text-white text-center">
            <h2>Covid-19 Cases Tracker</h2>
          </div>
          <div className="col-md-4 text-center my-2">
            <div className="text-center p-2 hover_effect" style={{backgroundColor:"#110145"}}>
              <div className="nepali_flag overflow-hidden">
                <img src={Flag} className="flag" alt="" />
              </div>
              <div className="">
                <h3>In Nepal</h3>
              </div>
              <div className="fw-bolder">
                <h3>Covid Data</h3>
              </div>
            </div>
          </div>
          <div className="col-md-4 text-center my-2">
            <div className="text-center p-2 hover_effect" style={{backgroundColor:"#110145"}}>
              <div className="nepali_flag d-flex justify-content-center align-items-center">
              <i class="fab fa-tumblr text-primary fa-2x"></i>
              </div>
              <div className="">
                <h3>Total Tested:</h3>
              </div>
              <div className="fw-bolder">
                <h3>{covidData.tested_total}</h3>
              </div>
            </div>
          </div>
          <div className="col-md-4 text-center my-2">
            <div className="text-center p-2 hover_effect" style={{backgroundColor:"#110145"}}>
              <div className="nepali_flag d-flex justify-content-center align-items-center">
              <i class="fas fa-ambulance text-warning fa-2x"></i>
              </div>
              <div className="">
                <h3>Total Positive:</h3>
              </div>
              <div className="fw-bolder">
                <h3>{covidData.tested_positive}</h3>
              </div>
            </div>
          </div>
          <div className="col-md-4 text-center my-2">
            <div className="text-center p-2 hover_effect" style={{backgroundColor:"#110145"}}>
              <div className="nepali_flag d-flex justify-content-center align-items-center">
              <i class="fas fa-hand-holding-medical text-black fa-2x"></i>
              </div>
              <div className="">
                <h3>Tested Negative:</h3>
              </div>
              <div className="fw-bolder">
                <h3>{covidData.tested_negative}</h3>
              </div>
            </div>
          </div>
          <div className="col-md-4 text-center my-2">
            <div className="text-center p-2 hover_effect" style={{backgroundColor:"#110145"}}>
              <div className="nepali_flag d-flex justify-content-center align-items-center">
              <i class="fas fa-hand-holding-heart text-success fa-2x"></i>
              </div>
              <div className="">
                <h3>Total Recovered:</h3>
              </div>
              <div className="fw-bolder">
                <h3>{covidData.recovered}</h3>
              </div>
            </div>
          </div>
          <div className="col-md-4 text-center my-2">
            <div className="text-center p-2 hover_effect" style={{backgroundColor:"#110145"}}>
              <div className="nepali_flag d-flex justify-content-center align-items-center">
              <i class="fas fa-store-alt text-info fa-2x"></i>
              </div>
              <div className="">
                <h3>In Isolation:</h3>
              </div>
              <div className="fw-bolder">
                <h3>{covidData.in_isolation}</h3>
              </div>
            </div>
          </div>
          <div className="col-md-4 text-center my-2">
            <div className="text-center p-2 hover_effect" style={{backgroundColor:"#110145"}}>
              <div className="nepali_flag d-flex justify-content-center align-items-center">
              <i class="fas fa-store text-muted fa-2x"></i>
              </div>
              <div className="">
                <h3>In Quarantined:</h3>
              </div>
              <div className="fw-bolder">
                <h3>{covidData.quarantined}</h3>
              </div>
            </div>
          </div>
          <div className="col-md-4 text-center my-2">
            <div className="text-center p-2 hover_effect" style={{backgroundColor:"#110145"}}>
              <div className="nepali_flag d-flex justify-content-center align-items-center">
              <i class="fas fa-bed text-danger fa-2x"></i>
              </div>
              <div className="">
                <h3>Total Death:</h3>
              </div>
              <div className="fw-bolder">
                <h3>{covidData.deaths}</h3>
              </div>
            </div>
          </div>
          <div className="col-md-4 text-center my-2">
            <div className="text-center p-2 hover_effect" style={{backgroundColor:"#110145"}}>
              <div className="nepali_flag d-flex justify-content-center align-items-center">
              <i class="fas fa-notes-medical text-secondary fa-2x"></i>
              </div>
              <div className="">
                <h3>Last Updated at:</h3>
              </div>
              <div className="fw-bolder">
                <h3>{covidData.updated_at}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Covid;
