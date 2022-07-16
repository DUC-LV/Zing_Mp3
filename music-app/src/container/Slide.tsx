/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Container, Box, Image } from "theme-ui";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
export interface DataSlider {
    image?: string;
    title?: string;
    key?: string;
    url?: string;
}
interface DataSlide {
    dataSlider?: DataSlider[];
}
const Slide = (props: DataSlide) => {
	const { dataSlider } = props;
	const setting = {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
    };
	return(
		<Container sx={{ml: "40px",width: "890px",mt: "30px"}}>
			<Slider {...setting}>
				{dataSlider?.map((item:any,index:any) => {
					return(
						// eslint-disable-next-line react/jsx-key
						<Box key={index}>
							<Image 
								src={item?.image} 
								sx={{
									height: "300px",
									width: "890px",
									cursor: "pointer",
									borderRadius: "8px",
								}}
							/>
						</Box>
					)
				})}
			</Slider>
		</Container>
	)
}
export default Slide;