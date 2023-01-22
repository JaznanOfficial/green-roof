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

                            <div class="form-control">
                                <input
                                    type="text"
                                    class="input"
                                    placeholder="Enter e-mail adress"
                                />
                                <button class="btn">Subscribe</button>
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
