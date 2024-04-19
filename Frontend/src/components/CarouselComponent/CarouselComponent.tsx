"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Box, Flex } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { getAccessToken } from "@/helpers/cookieUtils";

const CarouselComponent = () => {
  const router = useRouter();

  let sliderRef = useRef<Slider | null>(null);
  const [dotNum, setDotNum] = useState<number>(0);
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "260px",
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    speed: 500,
    beforeChange: (current: number, next: number) => {
      setDotNum(next);
    },
  };

  useEffect(() => {
    if (!getAccessToken()) {
      router.push("/login");
    }
  }, [router]);
  return (
    <Flex w={"100%"} direction={"column"}>
      <Box w={"100%"} className="slider-container" mb={6}>
        <Slider
          ref={(slider) => {
            if (slider) {
              sliderRef.current = slider;
            }
          }}
          {...settings}
        >
          {[0, 1, 2, 3, 4].map((val, index) => {
            return (
              <Flex
                key={`slider-card-key-${index}`}
                minH={"500px"}
                display={"flex !important"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Flex transition={"500ms ease"} minH={dotNum !== index ? "400px" : "500px"} w={"90%"} bgColor={"primary.200"}></Flex>
              </Flex>
            );
          })}
        </Slider>
      </Box>
      <Flex w={"100%"} justifyContent={"center"} alignItems={"center"} gap={5}>
        {[0, 1, 2, 3, 4].map((val, index) => {
          return <Box key={`dot-slide-key-${index}`} bgColor={"primary.200"} rounded={"full"} w={"30px"} h={"30px"}></Box>;
        })}
      </Flex>
    </Flex>
  );
};

export default CarouselComponent;
