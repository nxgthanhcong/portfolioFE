import { useDispatch, useSelector } from "react-redux";
import { hanleChangeMobileMenuState } from '../../features/mobile/mobileSlice';

function MenuToggle() {

    const dispatch = useDispatch();
    const mobile = useSelector(state => state.mobile);

    return (
        <div className={mobile.isOpenMobileMenu
            ? "menu-toggle active"
            : "menu-toggle"}
            onClick={() => dispatch(hanleChangeMobileMenuState())}
        >
            <span />
            <span />
            <span />
        </div>
    );
}

export default MenuToggle;