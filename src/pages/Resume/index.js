import ResumeContent from "./resume-content";

function Resume() {

    return (
        <section id="resume" className="section grid wide">
            <div className="about-container">
                <div className="section-title">
                    <p>Resume</p>
                    <div className="cv">
                        <a className="cv-fixed-btn" href="#" style={{ "-clr": '#18d26e', "-i": 2 }}>
                            <span className="animated-text cv-text" data-text="Check_CV...">Check_CV...</span>
                        </a>
                    </div>
                </div>
                <ResumeContent />
            </div>
        </section>
    );
}

export default Resume;