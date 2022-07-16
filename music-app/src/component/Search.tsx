import React from "react";
import { Box, Flex, Input } from "theme-ui";
import { AiOutlineSetting, AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineBell } from "react-icons/ai";
import { MdPeopleAlt } from "react-icons/md";
import { iconSearchStyle } from "../themes";
const Search = () => {
    return(
        <Flex
			sx={{
				ml: "250px",
			}}
		>
			<AiOutlineArrowLeft style={{color: "white",height: "20px",width: "50px",cursor: "pointer",marginLeft: "20px",marginTop: "20px"}}/>
			<AiOutlineArrowRight style={{color: "white",height: "20px",width: "50px",cursor: "pointer",marginTop: "20px"}}/>
			<Input
				placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
				sx={{
					height: "40px",
					width: "440px",
					bg: "#2e2739",
					border: "none",
					outline: "none",
					borderRadius: "15px",
					mt: "10px",
					ml: "85px",
					color: "rgba(255, 255, 255, 0.8)",
					textAlign: "center",
					"::placeholder": {
						textAlign: "center",
						color: "rgba(255, 255, 255, 0.5)"
					}
				}}
			/>
			<Box 
				sx={{ 
					height: "40px", 
					width: "40px", 
					borderRadius: "50%", 
					bg: "#2e2739", 
					cursor: "pointer", 
					mt: "10px", 
					ml: "85px",
					":hover":{
						bg: "rgb(35, 27, 46, 0.8)"
					},
					":active": {
						opacity: "0.8"
					}
				}}
			>
				<AiOutlineBell style={Object(iconSearchStyle)}/>
			</Box>
			<Box 
				sx={{ 
					height: "40px", 
					width: "40px", 
					borderRadius: "50%", 
					bg: "#2e2739", 
					cursor: "pointer", 
					mt: "10px", 
					ml: "15px",
					":hover":{
						bg: "rgb(35, 27, 46, 0.8)"
					},
					":active": {
						opacity: "0.8"
					}
				}}
			>
				<AiOutlineSetting style={Object(iconSearchStyle)}/>
			</Box>
			<Box 
				sx={{ 
					height: "40px",
					width: "40px", 
					borderRadius: "50%", 
					bg: "#2e2739", 
					cursor: "pointer", 
					mt: "10px", 
					ml: "15px",
					":hover":{
						bg: "rgb(35, 27, 46, 0.8)"
					},
					":active": {
						opacity: "0.8"
					}
				}}
			>
				<MdPeopleAlt style={Object(iconSearchStyle)}/>
			</Box>
		</Flex>
    )
}
export default Search;