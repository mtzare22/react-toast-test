import React, { useEffect, useState } from "react";
import "./Toast.css";

const Toast = ({ position, notifyType = "success", message, id=0 }) => {
    const[Show,SetShow] = useState(true);

    useEffect(()=> {
        SetShow(true)
       var x = setInterval(() => {
        SetShow(false)
         clearInterval(x);
        }, 2000);

    },[id])
  return (
    <>
      {
        Show  ? <>
        <div className={"containerBox " + position + " " + notifyType} onClick={() => SetShow(false)}>
          <div className="notify">{message}</div>
        </div>
        </>
        :
        ''
      }
    </>
  );
};

export default Toast;
