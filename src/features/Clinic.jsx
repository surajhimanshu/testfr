import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  useNavigate} from "react-router-dom";
import { getAllClinic } from "./clinic.api";
import styles from "./clinic.module.css";
import Button from "@mui/material/Button";


const Clinic = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { allClinic: clinics, isError } = useSelector((state) => state.clinic);

  useEffect(() => {
    dispatch(getAllClinic());
  }, [dispatch]);
  console.log(clinics, isError);

  const onBook = (id) => {
      navigate(`clinic/${id}`);
  }

  return (
    <div className={styles.container}>
      {isError ? (
        <div>"...Some error"</div>
      ) : (
        <div className={styles.cardContainer}>
          {clinics.map((val) => (
            <div className={styles.card} key={val.clinicName}>
                <div className={styles.imageContainer}><img src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c5/Apollo_Hospitals_Logo.svg/800px-Apollo_Hospitals_Logo.svg.png"/></div>
                <div className={styles.hospName}>  {val.clinicName}</div>
                <Button onClick={()=> onBook(val._id)} variant="contained">Book Appointment</Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Clinic;
