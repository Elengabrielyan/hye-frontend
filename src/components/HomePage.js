import React from "react";

import MainMessage from "./MainMessage/MainMessage";
import SellingPoints from "./SellingPoints/SellingPoints";
import Video from "./Video/Video";
import Clients from "./Clients/Clients";
import Subscribe from "./Subscribe/Subscribe";
import BoxSelection from "./BoxSelection/BoxSelection";

export default function HomePage() {
  const handleBox = (box) => {
    localStorage.setItem("Selected Box", JSON.stringify(box));
  };

  return (
    <>
      <MainMessage />
      <SellingPoints />
      <Video page="Home" />
      <BoxSelection handleBox={handleBox} />
      <Clients />
      <Subscribe />
    </>
  );
}
