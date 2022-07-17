import React, { createContext, useState } from "react";
import { Box , Container, Flex, Image, Text} from "theme-ui";
import { useRouter } from "next/router";
export interface Data {
    image?: string;
    title?: string;
    key?: string;
    artists?: string;
    duration?: string;
}
interface DataListMusicHome {
    dataListMusicHome?: Data[];
    name?: string;
    path?: string;
    slug?: string;
}
const KeyContext = createContext(null)
const ListMusic = ({
    dataListMusicHome,
    name,
    path,
    slug,
}: DataListMusicHome) => {
	const router = useRouter();
	const [key, setKey] = useState('')
	return(
		<>
			<Text as="h2" sx={{color: "white", ml: "40px"}}>{name}</Text>
			<Flex>
				<Box>
					{dataListMusicHome?.slice(0,5).map((item:any, index:any) => {
						return(
							// eslint-disable-next-line react/jsx-key
								<Flex sx={{ height: "120px", width: "390px", mt: "15px", ml: "50px", bg: "#202a34", borderRadius: "8px", cursor: "pointer"}}>
								{/* eslint-disable-next-line jsx-a11y/alt-text */}
								<Image src={item?.image} sx={{ height: "100px", width: "100px", borderRadius: "8px", mt: "10px", ml: "20px"}}/>
								<Box>
									<Text as="p" sx={{ color: "white", ml: "30px",mt: "30px"}}>{item?.title}</Text>
									<Text as="p" sx={{ color: "white", ml: "30px"}}>{item?.artists}</Text>
								</Box>
							</Flex>
						)
					})}
				</Box>
				<Box>
					{dataListMusicHome?.slice(5,10).map((item:any, index:any) => {
						return(
							// eslint-disable-next-line react/jsx-key
							<Flex sx={{ height: "120px", width: "390px", mt: "15px",ml: "90px", bg: "#202a34", borderRadius: "8px", cursor: "pointer"}}>
								{/* eslint-disable-next-line jsx-a11y/alt-text */}
								<Image src={item?.image} sx={{ height: "100px", width: "100px", borderRadius: "8px", mt: "10px", ml: "20px"}}/>
								<Box>
									<Text as="p" sx={{ color: "white", ml: "30px",mt: "30px"}}>{item?.title}</Text>
									<Text as="p" sx={{ color: "white", ml: "30px"}}>{item?.artists}</Text>
								</Box>
							</Flex>
						)
					})}
				</Box>
			</Flex>
		</>
	)
}
export default ListMusic;