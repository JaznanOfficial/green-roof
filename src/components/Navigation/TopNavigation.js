/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState, useRef } from "react";
import { HiMenuAlt1, HiOutlineHome, HiSearch } from "react-icons/hi";
import { BsCart2 } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { IoNotificationsOutline } from "react-icons/io5";
import logo from "../../assets/images/logo2.png";
const icons = [HiMenuAlt1, HiOutlineHome, BsCart2, CgProfile];

const TopNavigation = () => {
  const [data, setData] = useState([]);
  const searchBox = useRef(null);

  useEffect(() => {
    const hideMobileMenu = (e) => {
      if (!searchBox?.current?.contains(e.target)) {
        setData([]);
      }
    };
    document.addEventListener("mousedown", hideMobileMenu);
    return () => document.removeEventListener("mousedown", hideMobileMenu);
  }, []);

  const onChange = (e) => {
    // make API call
    if (e.target.value === "") {
      setData([]);
    } else if (/^\s/.test(e.target.value)) {
      setData([]);
    } else {
      const url = `https://boighor-server.vercel.app/api/v1/book/search?char=${e.target.value}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => setData(data));
    }
  };

  const onFocus = (e) => {
    if (e.target.value === "") {
      setData([]);
    } else if (/^\s/.test(e.target.value)) {
      setData([]);
    } else {
      const url = `https://boighor-server.vercel.app/api/v1/book/search?char=${e.target.value}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => setData(data));
    }
  };

  return (
    <nav>
      <div className="w-full bg-primary">
        <div className="max-w-[1400px] justify-between mx-auto md:items-center flex">
          <div className="w-0 lg:w-1/6">
            <div className="hidden lg:block flex items-center justify-between">
              <a href="" className="inline-block mt-2">
                <img className="w-32 h-9" src={logo} alt="" />
              </a>
            </div>
          </div>
          <div className="w-full lg:w-4/5 relative" ref={searchBox}>
            <div className="relative">
              <div className="py-5">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <HiSearch />
                </div>
                <input
                  type="text"
                  className="w-full py-3 pl-10 text-sm text-gray-900 rounded outline-0 border-0"
                  placeholder="Search for products (e.g. vegetable)"
                  required
                  onChange={onChange}
                  onFocus={onFocus}
                />
                <ul className="drop-shadow-lg mt-1 rounded absolute bg-white w-full z-10 max-h-[60vh] overflow-y-scroll">
                  {data.result
                    ? data.result?.map((item, i) => {
                        return (
                          <li className="px-4 py-2 hover:bg-light-green cursor-pointer" key={i}>
                            <div className="flex items-center">
                              <div className="w-10 mr-5">
                                <img
                                  className="w-full object-fit"
                                  src={item?.imgURL}
                                  alt=""
                                />
                              </div>
                              <div>
                                <p>{item?.title}</p>
                                <p className="text-secondary font-bold text-xl">
                                  {item?.sell_price}&#2547;
                                </p>
                              </div>
                            </div>
                          </li>
                        );
                      })
                    : ""}
                </ul>
              </div>
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
