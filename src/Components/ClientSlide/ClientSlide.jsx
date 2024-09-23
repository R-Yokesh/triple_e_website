import React from "react";
import Slider from "react-slick";
import Assets from "../../Assets/AssetsFormat/Assets";

function ClientSlide() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 9,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3000,
        cssEase: "linear",
        arrows: false,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const ClientLogo = [Assets.LogoOne, Assets.LogoTwo, Assets.LogoThree, Assets.LogoFour, Assets.LogoFive, Assets.LogoSix, Assets.LogoSeven, Assets.LogoEight, Assets.LogoNine]
    return (
        <div className="slider-container">
            <Slider {...settings}>
                {ClientLogo.map((item, i) => (
                    <div key={i}>
                        <div className="text-center">
                            <img src={item} alt="client-logo" className="client-logo-img" />
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default ClientSlide;
