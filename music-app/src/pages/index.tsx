import React, { useState, useEffect, useCallback } from "react";
import { Box, Flex } from "theme-ui";
import ListMusic from "../container/ListMusic";
import Slide from "../container/Slide";
import SlideShow from "../container/SlideShow";
import PlayMusic from "../pages/music/[slugMusic]";

const Home = () => {
	const { getHome } = require("nhaccuatui-api-full");
	const [dataHome, setDataHome] = useState<any>();
	useEffect(() => {
		getHome().then((res:any) => {
			setDataHome(res)
			console.log(res)
		})
	},[getHome])
	return (
		<Flex sx={{ ml: "250px" }}>
			<Box>
				<Slide
					dataSlider={dataHome?.showcase?.map((item: any) => {
						return {
							image: item.imageUrl,
							title: item.title,
							key: item.key,
							url: item.url,
						};
					})}
				/>
				<SlideShow
					name={dataHome?.topicEvent?.[0]?.groupName}
					dataSlider={dataHome?.topicEvent?.[0]?.listPlaylist.map(
						(item: any) => {
							return {
								image: item.thumbnail,
								title: item.title,
								key: item.key,
								url: item.url,
							};
						}
					)}
					path="/playlist/[slugList]"
					slug="slugList"
				/>
				<SlideShow
					name={dataHome?.topicEvent?.[1]?.groupName}
					dataSlider={dataHome?.topicEvent?.[1]?.listPlaylist.map(
						(item: any) => {
							return {
								image: item.thumbnail,
								title: item.title,
								key: item.key,
								url: item.url,
							};
						}
					)}
					path="/playlist/[slugList]"
					slug="slugList"
				/>
				<SlideShow
					name={dataHome?.topicEvent?.[2]?.groupName}
					dataSlider={dataHome?.topicEvent?.[2]?.listPlaylist.map(
						(item: any) => {
							return {
								image: item.thumbnail,
								title: item.title,
								key: item.key,
								url: item.url,
							};
						}
					)}
					path="/playlist/[slugList]"
					slug="slugList"
				/>
				<SlideShow
                    name="Mới Phát Hành"
                    dataSlider={dataHome?.song?.map((item: any) => {
                        return {
                            image: item.thumbnail,
                            title: item.title,
                            key: item.key,
                            url: item.url,
                        };
                    })}
                    path="/music/[slugMusic]"
                    slug="slugMusic"
                />
				<SlideShow
                    name="Top 100"
                    dataSlider={dataHome?.top100?.map((item: any) => {
                        return {
                            image: item.thumbnail,
                            title: item.title,
                            key: item.key,
                            url: item.url,
                        };
                    })}
                    path="/top-100/[slugRank]"
                    slug="slugRank"
                />
				<SlideShow
                    name="Video Hot"
                    dataSlider={dataHome?.video?.map((item: any) => {
                        return {
                            image: item.thumbnail,
                            title: item.title,
                            key: item.key,
                            url: item.url,
                            duration: item.duration,
                        };
                    })}
                    path="/video/[slugVideo]"
                    slug="slugVideo"
                />
				<ListMusic />
				<SlideShow
                    name="Chủ đề Hot"
                    dataSlider={dataHome?.topic?.map((item: any) => {
                        return {
                            image: item.coverImageURL,
                            title: item.title,
                            key: item.key,
                            url: item.url,
                        };
                    })}
                    path="/topic/[slugTopic]"
                    slug="slugTopic"
                />
			</Box>
			<Box>
				<PlayMusic />
			</Box>
		</Flex>
	)
}

export default Home;
