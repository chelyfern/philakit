import {useState} from "react";
const fs = require('fs');


const GetCurrentTab = () => {
  const [tab, setTab] = useState("");
    console.log(window.location.href)
    const fileData = JSON.stringify(window.location.href);
    const blob = new Blob([fileData], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = "user-info.json";
    link.href = url;
    link.click();
  
    return (
      <div>
        <div>{tab}</div>
      </div>


    );
  }

export default GetCurrentTab;