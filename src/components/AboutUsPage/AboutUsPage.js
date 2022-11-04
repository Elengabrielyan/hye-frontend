import React from "react";

import NoteFromUs from "./NoteFromUs/NoteFromUs";
import SellingPoints from "../SellingPoints/SellingPoints";
import Video from "../Video/Video";
import Subscribe from "../Subscribe/Subscribe";

export default function AboutUsPage() {
  return (
    <>
      <NoteFromUs />
      <SellingPoints />
      <Video page="About us" />
      <Subscribe />
    </>
  );
}
