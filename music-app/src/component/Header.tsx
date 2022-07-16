/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Box, Button, Container, Image, Text } from "theme-ui";
import { AiOutlineHome,AiOutlineCompass,AiOutlineHeart,AiOutlinePlus } from "react-icons/ai";
import { FiBarChart2 } from "react-icons/fi";
import { iconHeaderStyle } from "../themes";
import { useRouter } from "next/router";
const Header = () => {
	const category = [
		{
			id: 1,
			name: "Trang chủ",
			icon: <AiOutlineHome style={Object(iconHeaderStyle)} />,
			link: "/"
		},
		{
			id: 2,
			name: "Top 100",
			icon: <AiOutlineHome style={Object(iconHeaderStyle)} />,
			link: ""
		},
		{
			id: 1,
			name: "BXH NCT",
			icon: <FiBarChart2 style={Object(iconHeaderStyle)} />,
			link: ""
		},
	]
	const router = useRouter();
    return(
        <Container
			sx={{
				height: "100%",
				width: "250px",
				position: "fixed",
				top: "0",
				bg: "#231b2e"
			}}
		>
			<Image 
				sx={{
					height: "70px",
					width: "190px",
					ml: "26px",
					mt: "20px",
					borderRadius: "10px",
					cursor: "pointer"
				}} 
				src="https://cdn.tgdd.vn/hoi-dap/564322/Thumbnail/h%C3%ACnh-n%E1%BB%81n-zing-mp3%20(1).jpg" 
			/>
			<Box
				sx={{
					ml: "35px",
					mt: "30px",
					color: "white",
					cursor: "pointer",
				}}
			>
				{category?.map((item:any,index) => {
					return(
						<Box key={index} sx={{mt: "20px"}} onClick={() => router.push({pathname: `${item?.link}`})}>
							{item.icon}
							{item.name}
						</Box>
					)
				})}
			</Box>
			<Box
				sx={{
					height: "105px",
					width: "200px",
					bg: "#7200a1",
					color: "white",
					mt: "60px",
					ml: "25px",
					textAlign: "center",
					borderRadius: "8px",
				}}
			>
				<Text as="h5" sx={{ position: "relative", top: "10px"}}>Đăng nhập để khám phá<br></br> playlist dành riêng cho bạn</Text>
				<Button
					sx={{
						height: "25px",
						width: "145px",
						borderRadius: "8px",
						border: "1px solid white",
						outline: "none",
						cursor: "pointer",
						bg: "#7200a1",
						color: "white",
						mt: "25px",
						":hover": {
							bg: "rgb(114, 0, 161,0.8)"
						},
						":active": {
							opacity: "0.8",
						}
					}}
				>
					<Text as="h5" sx={{ position: "relative",bottom: "5px"}}>Đăng nhập</Text>
				</Button>
			</Box>
			<Box
				sx={{
					height: "105px",
					width: "200px",
					backgroundImage: "linear-gradient(117deg,#5a4be7,#c86dd7 102%)",
					color: "white",
					mt: "30px",
					ml: "25px",
					textAlign: "center",
					borderRadius: "8px",
				}}
			>
				<Text as="h5" sx={{ position: "relative", top: "10px"}}>Nghe nhạc không quảng cáo<br></br> cùng kho nhạc VIP</Text>
				<Button
					sx={{
						height: "25px",
						width: "145px",
						borderRadius: "8px",
						outline: "none",
						cursor: "pointer",
						bg: "#ffdb00",
						color: "black",
						mt: "25px",
						":hover": {
							bg: "rgb(255, 219, 0, 0.8)"
						},
						":active": {
							opacity: "0.8",
						}
					}}
				>
				<Text as="h5" sx={{ position: "relative",bottom: "4px"}}>Nâng cấp VIP</Text>
				</Button>
			</Box>
		</Container>
    )
}
export default Header;