/* eslint-disable react/jsx-key */
import React from "react";
import { Container, Text, Box, Image } from "theme-ui";
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
    name?: string;
    path?: string;
    slug?: string;
}
const SlideShow = (props: DataSlide) => {
	const { dataSlider, name, path, slug } = props;
	const setting = {
		infinite: true,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 1,
	}
	return(
		<Container sx={{ml: "40px",width: "890px"}}>
			<Text as="h2" sx={{color: "white", mt: "15px"}}>{name}</Text>
			<Slider {...setting}>
				{dataSlider?.map((item:any, index:any) => {
					return(
						<Box sx={{mt: "20px"}} key={index}>
							{/* eslint-disable-next-line jsx-a11y/alt-text */}
							<Image 
								src={item?.image} 
								sx={{ 
									height: "110px", 
									width: "160px", 
									borderRadius: "8px",
									cursor: "pointer",
									WebkitTransform: "scale(1)",
									transform: "scale(1)",
									WebkitTransition: ".3s ease-in-out",
									transition: ".3s ease-in-out",
									ml: "10px",
									mb: "10px",
									":hover": {
										WebkitTransform: "scale(1)",
										transform: "scale(1.1)",
										border: "3px solid white"
									},
								}}
							/>
							<Text as="p" sx={{color: "white", ml: "10px"}}>{item?.title}</Text>
						</Box>
					)
				})}
			</Slider>
		</Container>
	)
}
export default SlideShow;