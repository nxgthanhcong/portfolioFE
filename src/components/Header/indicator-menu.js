import { useEffect, useState } from "react";
import socialApi from "../../api/socialApi";

function IndicatorMenu() {

    const [fetchComplete, setFetchComplete] = useState(false);
    const [listIndicatorMenu, setListIndicatorMenu] = useState(null);
    const [activeMenuItemClass, setActiveMenuItemClass] = useState("");

    useEffect(() => {
        async function getDataFromApi() {
            try {
                const response = await socialApi.getAll();
                if (response) {
                    console.log("response", response);
                    setListIndicatorMenu(response);
                    setFetchComplete(true);
                }
            } catch (error) {
                console.log(error);
            }
        }
        getDataFromApi();
    }, [fetchComplete]);

    const handleMouseOver = function (item) {
        setActiveMenuItemClass(item.title);
    }

    const handleMouseLeave = function () {
        setActiveMenuItemClass("");
    }

    return (
        <div className="header__social indicator-navigation">
            <ul className="indicator-navigation__list">
                {
                    fetchComplete && listIndicatorMenu.map(item => (
                        <li
                            className={item.title === activeMenuItemClass
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
                                <span className="indicator-navigation__text">{item.title}</span>
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