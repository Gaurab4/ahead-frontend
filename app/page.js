import React from "react";

import Fotter from "./Fotter";
import MainPage from "./MainPage";
import SecondPage from "./SecondPage";
import About from "./About";
import Test from "./Test";
import Timeline from "./Timeline";
import Workwithus from "./Workwithus";
import SelfImpr from "./SelfImpr";

const HomePage = () => {
  return <div>
<MainPage/>
<SecondPage/>
<About/>
<SelfImpr/>
<Timeline/>
<Test/>
<Workwithus/>
<Fotter/>
  </div>;
};

export default HomePage;
