import React from "react";
import { NavbarStyles } from "./index.style";
// import { ZeinIcon } from "@/components/icons/appIcons/net";
import { BiMenu } from "react-icons/bi";
// HOME
// COUNSELLING CLINIC
// RELATIONSHIP AND MARRIAGE COUNSELLING
// PURPOSE-BASED CAREER COACHING
// EMPLOYABILITY SKILLS TRAINING
// VOCATIONAL TRAINING
// PSYCHOLOGICAL ASSESSMENT
// INTERNSHIPS
// MENTORSHIP NETWORK
// SPIRITUAL SUPPORT
// RESOURCES

const Navbar = () => {
  return (
    <>
      <NavbarStyles className="">
        <div className="w-[25px] h-[25px] border-1 rounded-full flex items-center justify-center ">
          <i>oydeiyarn</i>
        </div>
        <div className="middleman flex items-center justify-around w-[50%]">
          <h5>services</h5>
          <h5>internships</h5>
          <h5>sppiritual support</h5>
          <h5>resourses</h5>
          <h5>volunteer</h5>
        </div>
        <div className="flex space-x-[18px] items-center">
          <h5> login </h5>
          <BiMenu />
        </div>
      </NavbarStyles>
    </>
  );
};

export default Navbar;
