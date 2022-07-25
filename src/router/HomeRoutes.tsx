import { Home } from "../components/pages/Home";
import { Page404 } from "../components/pages/Page404";

export const homeRoutes =[
	{
		path: "/",
		exact: true,
		children: <Home />
	},
	{
		path: "/*",
		exact: true,
		children: <Page404 />
	}

]
