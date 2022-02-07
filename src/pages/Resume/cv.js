import { useDispatch } from "react-redux";
import { hanleOpenCV } from "../../features/cv/cvSlice";

function CV() {

    const dispatch = useDispatch();


    return (
        <div className="cv">
            <span className="cv-fixed-btn"
                style={{ "--clr": '#18d26e', "--i": 2 }}
                onClick={() => dispatch(hanleOpenCV())}
            >
                <span className="animated-text cv-text" data-text="Check_CV...">Check_CV...</span>
            </span>
        </div >
    );
}

export default CV;