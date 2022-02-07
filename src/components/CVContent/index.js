import { useDispatch, useSelector } from "react-redux";
import { hanleCloseCV } from "../../features/cv/cvSlice";

function CVContent() {

    const cv = useSelector(state => state.cv);
    const dispatch = useDispatch();

    return (
        <div className={cv.isOpenCV ? "cv-content" : "cv-content hide"}>
            <i className="fas fa-times cv-close"
                onClick={() => dispatch(hanleCloseCV())}
            />
            <embed src="./assets/images/cv.pdf" width="100%" />
        </div>
    );
}

export default CVContent;