import CV from "./cv";
import ResumeContent from "./resume-content";

function Resume() {

    return (
        <section id="resume" className="section grid wide">
            <div className="about-container">
                <div className="section-title">
                    <p>Resume</p>
                    <CV />
                </div>
                <ResumeContent />
            </div>
        </section>
    );
}

export default Resume;