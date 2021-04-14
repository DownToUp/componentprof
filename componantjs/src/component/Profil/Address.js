import React from "react";
import "../Profil/Address.css"
const Adress = () => {
  const MonAdress=[

        "House : Number 13",
        "Street: Farhat hached",
        "City : bouargoub",
        "Governemnt: Nabeul",
        "Country : Tunisia"
];

  return (
        <div className="add">

          {  MonAdress.map(add =>
            <p>{add}</p> 
             ) }  


          </div>
      )
        }

export default Adress
