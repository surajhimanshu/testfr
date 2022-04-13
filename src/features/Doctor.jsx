import React, {useState } from "react";
import {useNavigate} from "react-router-dom";
import styles from "./doctor.module.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

const Doctor = (val) => {
  const [open, setOpen] = useState(true);
  const [selectedButton, setSelectedButton] = useState(-1);
  const navigate = useNavigate();

  const arr = [
    "1:00p.m",
    "1:20p.m.",
    "1:40p.m.",
    "2:00p.m.",
    "2:20p.m.",
    "2:40p.m.",
    "3:00p.m.",
  ];
  const timeCLICK = (i) => {
    setSelectedButton(i);
  };
  const [value, setValue] = React.useState(new Date());

  const handleChange = (newValue) => {
    setValue(newValue);
  };
    const book = () => {
        alert(`Your slot is booked on ${value} for ${arr[selectedButton]}`);
        navigate(  "/")

    }
  return (
    <div className={styles.container}>
      <div className={styles.name}>
        Name of Doctor - <span>{val.name}</span>
      </div>
      <div className={styles.speciality}>{val.speciality}</div>
      <div className={styles.speciality}>Fees - {val.rates}</div>
      <Button onClick={() => setOpen(!open)} variant="contained">
        Choose the slot
      </Button>
      <div style={{ margin: "10px", padding: "1px" }}></div>
      <div className={open ? styles.nodisp : ""}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DesktopDatePicker
            label="Select Date"
            inputFormat="MM/dd/yyyy"
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
        <div style={{ margin: "10px", padding: "1px" }}></div>
        <div className={styles.time}>
          {arr.map((val, i) => (
            <div onClick={() => timeCLICK(i)}      className={`${selectedButton === i ? styles.selectedButton : ""}`}>{val}</div>
          ))}
        </div>
        <Button onClick={book} variant="contained">Book</Button>
      </div>
    </div>
  );
};

export default Doctor;
