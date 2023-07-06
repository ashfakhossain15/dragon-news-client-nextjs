import moment from "moment/moment";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Marquee from "react-fast-marquee";

const Header = () => {
  return (
    // <div>
    //   <Link href={"/"}>Home</Link>
    //   <Link href={"/login"}>Login</Link>
    // </div>
    <div>
      <div className="grid justify-center text-center mt-6 space-y-5">
        {/* <ActiveLink to="/">Home</ActiveLink> */}
        <Image src="/logo.png" alt="Logo" width={410} height={60} />
        <h3 className="opacity-50">Journalism Without Fear or Favour</h3>
        <p>{moment().format("dddd MMMM DD YYYY")}</p>
      </div>
      <div className="max-w-4xl mx-auto flex space-x-4 bg-slate-300 p-2 ">
        <button className="bg-red-500 py-2 rounded-sm px-4 ">Latest</button>
        <Marquee pauseOnHover speed={30} className="text-orange-900" >
          I can be a React component, multiple React components, or just some
          text.
        </Marquee>
      </div>
    </div>
  );
};

export default Header;
