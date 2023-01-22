/* eslint-disable jsx-a11y/anchor-is-valid */
import { HiMenuAlt1, HiOutlineHome } from "react-icons/hi";
import { BsCart2 } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { IoNotificationsOutline } from "react-icons/io5";
const icons = [HiMenuAlt1, HiOutlineHome, BsCart2, CgProfile];

const TopNavigation = () => {
  return (
    <nav>
      <div className="w-full bg-primary shadow">
        <div className="justify-between mx-auto md:items-center flex">
          <div className="w-0 lg:w-1/6">
            <div className="hidden lg:block flex items-center justify-between py-5">
              <a href="" className="inline-block">
                <h2 className="text-2xl font-bold text-white">Green</h2>
              </a>
            </div>
          </div>
          <div className="w-full lg:w-4/5">
            <div className="py-5">
              <input className="w-full" type="text" />
            </div>
          </div>
          <div className="w-0 lg:w-1/5">
            <div className="hidden lg:block space-x-2 text-white text-right">
              <a href="" className="mr-5">
                <IoNotificationsOutline className="inline-block text-2xl" />
              </a>
              <a href="" className="relative ">
                <BsCart2 className="inline-block text-2xl mr-5" />
                <span className="inline-block w-5 h-5 text-sm bg-red-600 rounded-full absolute left-4 bottom-2 text-center">
                  0
                </span>
              </a>
              <a href="" className="">
                <CgProfile className="inline-block text-2xl" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full lg:hidden block fixed inset-x-0 bottom-0 z-10 shadow  bg-primary">
        <section id="bottom-navigation">
          <div
            id="tabs"
            className="flex justify-between px-4 sm:px-8 text-white h-16"
          >
            {icons?.map((Icon, i) => {
              return (
                <a
                  key={i}
                  href="#"
                  className="inline-block text-center mt-5 relative"
                >
                  <Icon className="inline-block text-2xl" />
                  {i === 2 && (
                    <span className="inline-block w-5 h-5 text-sm bg-red-600 rounded-full absolute left-4 bottom-7">
                      0
                    </span>
                  )}
                </a>
              );
            })}
          </div>
        </section>
      </div>
    </nav>
  );
};

export default TopNavigation;
