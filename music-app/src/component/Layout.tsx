import React from "react";
import { Box } from "theme-ui";
import Header from "./Header";
import Search from "./Search";
const Layout = ({ children }: React.PropsWithChildren<{}>) => {
    return(
        <>
			<Search />
			<Header />
			{children}
		</>
    )
}
export default Layout;