import React from 'react'
import MainHighlight from "./MainHighlight";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import FourthSection from "./FourthSection";
import FifthSection from "./FifthSection";
import SixthSection from "./SixthSection";
import AlertSection from "./AlertSection";
import Youtube from "./YoutubeVideos/Youtube"
function Main() {
  return (
    <>
      <MainHighlight />
      <AlertSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <Youtube/>
    </>
  );
}

export default Main