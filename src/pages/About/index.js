import PageTitle from "../../components/PageTitle";
import AboutClients from "./about-clients";
import AboutContent from "./about-content";
import AboutInterests from "./about-interests";
import AboutSkill from "./about-skill";
import AboutTestimonial from "./about-testimonial";

function About() {
    return (
        < section id="about" className="section grid wide" >
            <div className="about-container">
                <PageTitle
                    title="About"
                    breifDescription="Learn more about me"
                />
                <AboutContent />
                <AboutClients />
                <AboutSkill />
                <AboutInterests />
                <AboutTestimonial />
            </div >
        </section >
    );
}

export default About;