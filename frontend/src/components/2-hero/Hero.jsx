import {
  Container,
  Box,
  Link,
  Stack,
  Typography,
  Button,
  useTheme,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// import Swiper React Components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "./slider.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import IconSection from "./iconSection";

const mySlider = [
  {
    id: 1,
    text: "MEN",
    link: "public/hero/banner-15.jpg",
  },
  {
    id: 2,
    text: "WOMEN",
    link: "public/hero/banner-18.jpg",
  },
];

function Hero() {
  const theme = useTheme();
  return (
    <Container
      
    >
      <Box sx={{pt: 2, mt: 2.5, display: "flex", alignItems: "center", gap: 2, zIndex: 1 }}>
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            dynamicBullets: true,
          }}
          loop={true}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {mySlider.map((slide) => {
            return (
              <SwiperSlide
                key={slide.id}
                className="parent-slider"
                style={{ position: "relative" }}
              >
                <img src={slide.link} alt="" />
                <Box
                  sx={{
                    [theme.breakpoints.up("sm")]: {
                      textAlign: "left",
                      position: "absolute",
                      top: "50%",
                      transform: "translateY(-50%)",
                      left: "10%",
                      color: "red",
                    },
                    [theme.breakpoints.down("sm")]: {
                      pt: 4,
                      pb: 4,
                    },
                  }}
                >
                  <Typography variant="h6" sx={{ color: "#222" }}>
                    LIFESTYLE COLLECTION
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{
                      color: "#222",
                      fontWeight: "400",
                      my: 1,
                    }}
                  >
                    {slide.text}
                  </Typography>
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    sx={{
                      [theme.breakpoints.down("sm")]: {
                        justifyContent: "center",
                      },
                    }}
                  >
                    <Typography color={"#333"} mr={1} variant="h5">
                      SALE UP TO
                    </Typography>
                    <Typography color={"#D23F57"} variant="h5">
                      30% OFF
                    </Typography>
                  </Stack>
                  <Typography
                    sx={{
                      color: "#000",
                      fontWeight: "300",
                      my: 1,
                    }}
                    variant="body1"
                  >
                    Get Free Shipping on orders over $99.00
                  </Typography>
                  <Button
                    sx={{
                      px: 5,
                      py: 1,
                      mt: 2,
                      backgroundColor: "#222",
                      boxShadow: "0px 4px 16px rgba(43,52,69,0.1)",
                      color: "#fff",
                      borderRadius: "1px",
                      "&:hover": {
                        bgcolor: "#151515",
                        boxShadow: "0px 4px 16px rgba(43,52,69,0.1)",
                      },
                    }}
                    variant="contained"
                  >
                    shop now
                  </Button>
                </Box>
              </SwiperSlide>
            );
          })}
        </Swiper>
        
        <Box sx={{ display: { xs: "none", md: "block", minWidth: "26.4%" } }}>
          <Box sx={{ position: "relative" }}>
            <img
              style={{ width: "100%" }}
              src="public\hero\banner-17.jpg"
              alt=""
            />
            <Stack
              sx={{
                position: "absolute",
                top: "50%",
                left: "2rem",
                transform: "translateY(-50%)",
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  color: "#2B3445",
                  fontSize: "18px",
                }}
              >
                NEW ARRIVALS
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "#2B3445",
                  lineHeight: "16px",
                  mt: 1,
                }}
              >
                SUMMER
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "#2B3445",
                }}
              >
                SALE 20% OFF
              </Typography>
              <Link
                sx={{
                  color: "#2B3445",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  cursor: "pointer",
                  transition: ".2s",
                  "&:hover": {
                    color: "#D23F57",
                  },
                }}
              >
                Shop Now
                <ArrowForwardIcon sx={{ fontSize: "13px" }} />
              </Link>
            </Stack>
          </Box>
          <Box sx={{ position: "relative" }}>
            <img
              style={{ width: "100%" }}
              src="public\hero\banner-16.jpg"
              alt=""
            />
            <Stack
              sx={{
                position: "absolute",
                top: "50%",
                left: "2rem",
                transform: "translateY(-50%)",
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  color: "#2B3445",
                  fontSize: "18px",
                }}
              >
                GAMING 4K
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "#2B3445",
                  lineHeight: "16px",
                  mt: 1,
                }}
              >
                DESKTOPS &
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "#2B3445",
                }}
              >
                LAPTOPS
              </Typography>
              <Link
                sx={{
                  color: "#2B3445",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  cursor: "pointer",
                  transition: ".2s",
                  "&:hover": {
                    color: "#D23F57",
                  },
                }}
              >
                Shop Now
                <ArrowForwardIcon sx={{ fontSize: "13px" }} />
              </Link>
            </Stack>
          </Box>
        </Box>
      </Box>
      <IconSection />
      
    </Container>
  );
}

export default Hero;
