import React, { useEffect } from "react";
import ReactPixel from "react-facebook-pixel";

export default function FacebookPixel() {
  useEffect(() => {
    import("react-facebook-pixel")
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init("440610613725205");
        ReactPixel.pageView();
      });
  });
  return null;
}
