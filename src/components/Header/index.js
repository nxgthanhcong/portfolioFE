import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { hanleChangeActiveItem } from "../../features/navigation-menu/navigationMenuSlice";

import IndicatorMenu from "./indicator-menu";
import Introduce from "./introduce";
import MainTitle from "./main-title";
import MenuToggle from "./menu-toggle";
import NavigationMenu from "./navigation-menu";

function Header() {

    const navigationMenu = useSelector(state => state.navigationMenu);
    const dispatch = useDispatch();

    window.onpopstate = function () {
        dispatch(hanleChangeActiveItem(window.location.pathname))
    }

    useEffect(() => {
        const pageAccessedByReload = (
            (window.performance.navigation && window.performance.navigation.type === 1) ||
            window.performance
                .getEntriesByType('navigation')
                .map((nav) => nav.type)
                .includes('reload')
        );
        if (pageAccessedByReload) {
            dispatch(hanleChangeActiveItem(window.location.pathname))
        }
    }, [])

    return (
        <div id="header" className={navigationMenu.activeItem !== "/" ? "active" : ""}>
            <div className="container grid wide">
                <MainTitle />
                <Introduce />
                <NavigationMenu />
                <IndicatorMenu />
                <MenuToggle />
            </div >
        </div >
    );
}

export default Header;