import { Carousel } from "flowbite-react";
import React from "react";

const Header = () => {
    return (
        <>
            <div className="h-96 sm:h-64 xl:h-80 2xl:h-96 p-3 rounded-3xl mt-5 mb-40 ">
                <Carousel style={{ height: "490px" }} className="rounded-3xl relative">
                    <div>
                        <div className="absolute text-gray-700 top-[12%] left-[5%]">
                            <p className="text-6xl mb-5 leading-tight font-bold ">
                                Don't miss amazing <br /> grocery deals
                            </p>
                            <p className="text-3xl mb-9">signUp for the daily newsletter</p>

                            <div className="flex items-stretch mt-12">
                                <input
                                    className=" rounded-full rounded-r-none text-base leading-none text-gray-800 p-6 px-7 border border-transparent focus:outline-none focus:border-gray-500"
                                    type="email"
                                    placeholder="Your Email address"
                                />
                                <button className=" -ml-5  hover:bg-indigo-600 bg-indigo-700 rounded-full text-base font-medium leading-none text-white p-6 px-9 uppercase focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700">
                                    subscribe
                                </button>
                            </div>

                        </div>
                        <img
                            className="rounded-3xl"
                            src="http://wp.alithemes.com/html/nest/demo/assets/imgs/slider/slider-1.png"
                            alt="..."
                        />
                    </div>

                    <div>
                        <div className="absolute text-gray-700">
                            <p className="text-6xl mb-8 leading-tight font-bold ">
                                Don't miss amazing <br /> grocery deals
                            </p>
                            <p className="text-3xl">signUp for the daily newsletter</p>
                        </div>
                        <img
                            className="rounded-3xl"
                            src="http://wp.alithemes.com/html/nest/demo/assets/imgs/slider/slider-2.png"
                            alt="..."
                        />
                    </div>
                </Carousel>
            </div>
        </>
    );
};

export default Header;
