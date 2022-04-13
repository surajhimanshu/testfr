import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getsingleClinic } from "./clinic.api";
import styles from "./clinic.module.css"
import Doctor from "./Doctor";

const IndividualClinic = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { singleClinic: clinics, isError } = useSelector((state) => state.clinic);

  useEffect(() => {
    dispatch(getsingleClinic(params.id));
  }, [dispatch,params.id]);
  console.log(clinics, isError);

  // const onBook = (id) => {
  //     navigate(`clinic/${id}`);
  // }

  return (
    <div className={styles.container}>
      {isError ? (
        <div>"...Some error"</div>
      ) : (
       
        <div>
          <h1 styles={{textAlign:"center", marginBottom:"20px"}}>{clinics.clinicName}</h1>
          {clinics.doctorid?.map((val) => (
            <Doctor key={val.name} {...val}/>
          ))}
          </div>
      )}
    </div>
  );
};

export default IndividualClinic