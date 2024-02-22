import Saiyan from "../images/Saiyan.png";
import SS from "../images/Super_Saiyan.png";
import { useState, useEffect } from "react";

export default function Footer(correct) {
  const [superSaiyan, setSuperSaiyan] = useState(false);

  //use effect to turn picture into super saiyan when score goes up then tunr back after 2 seconds
  useEffect(() => {
    setSuperSaiyan(true);
    setTimeout(() => {
      setSuperSaiyan(false);
    }, 2000);
  }, [correct]);

  return (
    <>
      <div class='footer'>
        <h2>Made by the Scripted Saiyans</h2>
        <img class='footer-saiyan'
          src={superSaiyan ? SS : Saiyan}
          alt={
            superSaiyan
              ? "A picture of a Super Saiyan"
              : "A picture of a Saiyan"
          }
        />
      </div>
    </>
  );
}
