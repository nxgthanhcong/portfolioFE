import { useState } from "react";

function IndicatorMenu() {

    const [activeMenuItemClass, setActiveMenuItemClass] = useState("");
    const listIndicatorMenu = [
        {
            name: "Twiter",
            icon: "fab fa-twitter",
            color: "#f53b57"
        },
        {
            name: "Facebook",
            icon: "fab fa-facebook-f",
            color: "#5d62fb"
        },
        {
            name: "Instagram",
            icon: "fab fa-instagram",
            color: "#0fbcf9"
        },
        {
            name: "Linkedin",
            icon: "fab fa-linkedin",
            color: "#ffa801"
        },
    ]

    const handleMouseOver = function (item) {
        setActiveMenuItemClass(item.name);
    }

    const handleMouseLeave = function () {
        setActiveMenuItemClass("");
    }

    return (
        <div className="header__social indicator-navigation">
            <ul className="indicator-navigation__list">
                {
                    listIndicatorMenu && listIndicatorMenu.map(item => (
                        <li
                            className={item.name === activeMenuItemClass
                                ? "indicator-navigation__item active"
                                : "indicator-navigation__item"
                            }
                            style={{ "--iclr": `${item.color}` }}
                            onMouseOver={() => handleMouseOver(item)}
                            onMouseLeave={() => handleMouseLeave()}
                        >
                            <a href>
                                <span className="indicator-navigation__icon">
                                    <i className={item.icon} />
                                </span>
                                <span className="indicator-navigation__text">{item.name}</span>
                            </a>
                        </li >
                    ))
                }

                <div className="indicator" />
            </ul >
        </div >
    );
}

export default IndicatorMenu;