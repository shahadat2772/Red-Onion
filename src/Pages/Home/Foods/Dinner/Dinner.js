import React from "react";

import dinner1 from "../../../../images/dinner/dinner1.png";
import dinner2 from "../../../../images/dinner/dinner2.png";
import dinner3 from "../../../../images/dinner/dinner3.png";
import dinner4 from "../../../../images/dinner/dinner4.png";
import dinner5 from "../../../../images/dinner/dinner5.png";
import dinner6 from "../../../../images/dinner/dinner6.png";

const dinnerItems = [
  { id: 1, name: "Salmon with", img: dinner1, price: 23.99 },
  { id: 2, name: "", img: dinner2, price: 9.99 },
  { id: 3, name: "", img: dinner3, price: 6.99 },
  { id: 4, name: "", img: dinner4, price: 8.99 },
  { id: 5, name: "", img: dinner5, price: 15.99 },
  { id: 6, name: "", img: dinner6, price: 7.99 },
];

const Dinner = () => {
  return (
    <div>
      <h3>This is dinner</h3>
    </div>
  );
};

export default Dinner;
