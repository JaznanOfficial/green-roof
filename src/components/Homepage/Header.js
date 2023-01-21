import { Carousel } from "flowbite-react";
import React from "react";

const Header = () => {
    return (
        <>
            <div className="h-96 sm:h-64 xl:h-80 2xl:h-96 p-2 rounded-xl ">
                <Carousel className="">
                    <img
                        className=""
                        src="http://wp.alithemes.com/html/nest/demo/assets/imgs/slider/slider-1.png"
                        alt="..."
                    />
                    <img
                        src="http://wp.alithemes.com/html/nest/demo/assets/imgs/slider/slider-2.png"
                        alt="..."
                    />
                </Carousel>
            </div> 

            
        </>
    );
};

export default Header;
