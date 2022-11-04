import React from "react";

import BoxSelection from "./BoxSelection/BoxSelection";

export default function PricingPage() {
  const handleBox = (box) => {
    localStorage.setItem("Selected Box", JSON.stringify(box));
  };

  return <BoxSelection isPricingPage={true} handleBox={handleBox} />;
}
