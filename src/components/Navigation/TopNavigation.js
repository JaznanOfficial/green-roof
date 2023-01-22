/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { HiMenuAlt1, HiOutlineHome } from "react-icons/hi";
import { BsCart2 } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
const icons = [HiMenuAlt1, HiOutlineHome, BsCart2, CgProfile];

const TopNavigation = () => {
  return (
    <div className="w-full">
      <section
        id="bottom-navigation"
        className="md:hidden block fixed inset-x-0 bottom-0 z-10 shadow"
      >
        <section
          id="bottom-navigation"
          className="block fixed inset-x-0 bottom-0 z-10 shadow"
        >
          <div
            id="tabs"
            className="flex justify-between px-4 sm:px-8 text-white h-16 bg-[#119744]"
          >
            {icons?.map((Icon, i) => {
              return (
                <a key={i} href="#" className="inline-block text-center mt-5">
                  <Icon className="inline-block text-2xl" />
                </a>
              );
            })}
          </div>
        </section>
      </section>
    </div>
  );
};

export default TopNavigation;
