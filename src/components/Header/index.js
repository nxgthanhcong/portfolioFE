import { useEffect, useState } from "react";

import CV from "./cv";
import IndicatorMenu from "./indicator-menu";
import Introduce from "./introduce";
import MainTitle from "./main-title";
import MenuToggle from "./menu-toggle";
import NavigationMenu from "./navigation-menu";

function Header() {

    const [activeItem, setActiveItem] = useState(window.location.pathname);
    useEffect(() => {
        setActiveItem(window.location.pathname);
    }, [window.location.pathname]);

    window.onpopstate = function () {
        setActiveItem(window.location.pathname)
    }

    return (
        <div id="header" className={activeItem !== "/" ? "active" : ""}>
            <div className="container grid wide">
                <MainTitle />
                <Introduce />
                <NavigationMenu
                    activeItem={activeItem}
                    setActiveItem={setActiveItem}
                />
                <IndicatorMenu />
                <MenuToggle />
            </div >
            <CV />
        </div >
    );
}

export default Header;