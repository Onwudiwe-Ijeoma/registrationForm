import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./DashBoard.css"

const DashBoard = (props) => {
  let location = useLocation();
  const [userData, setUserData] = useState(location.state);

  console.log(userData);
  
  return (
    <div>
     <header>
        <h1>Welcome {userData.first_name}</h1>
      </header>
<form>
  <input type="file"/>
</form>
      
       <p>{userData.first_name}</p> 
      <input value={userData.first_name}  readOnly/>
    
      
      




    </div>
  );
};

export default DashBoard;
