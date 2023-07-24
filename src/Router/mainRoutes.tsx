import { createBrowserRouter } from "react-router-dom";
import FirstLayout from "../Components/Common/FirstLayout";
import LandingPage from "../Pages/Auth/LandingPage";
import Signuppage from "../Pages/Auth/Signuppage";
import SignLayout from "../Components/Common/SignLayout";
import MainLayout from "../Components/Common/MainLayout";
import HomePage from "../Pages/Home/HomePage";
import AboutPage from "../Pages/Home/AboutPage";
import SigninPage from "../Pages/Auth/SigninPage";
import PrivateRoute from "./PrivateRoute";


export const mainRoutes = createBrowserRouter([
    {
        path: "/",
        element : <PrivateRoute/>,
        children: [
            {
                index: true,
                path: "/",
                element: <FirstLayout/>
            }, {
                element: <LandingPage/>,
                path: "/"
            }
        ]
    }, {
        path: "/auth",
        element: <SignLayout/>,
        children: [
            {
                index: true,
                element: <Signuppage/>,
                path: "/auth/signup"
            },
            {
                element: <SigninPage/>,
                path: "/auth/signin"
            }
        ]
    }, {
        element: <MainLayout/>,
        children : [
            {
                index: true,
                element: <HomePage/>,
                path: "/home"
            }, {
                element: <AboutPage/>,
                path: "/about"
            }
        ]
    }
]
)