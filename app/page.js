import React from "react";

import Fotter from "./Fotter";
import MainPage from "./MainPage";
import SecondPage from "./SecondPage";
import About from "./About";
import Test from "./Test";

const HomePage = () => {
  return <div>
<MainPage/>
<SecondPage/>
<About/>
<Test/>
  <Fotter/>
  </div>;
};

export default HomePage;
