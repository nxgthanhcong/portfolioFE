import PageTitle from "../../components/PageTitle";
import ContactContent from "./contact-content";

function Contact() {
    return (
        <section id="contact" className="section grid wide">
            <div className="about-container">
                <PageTitle
                    title="Contact"
                    breifDescription="Contact me"
                />
                <ContactContent />
            </div>
        </section>
    );
}

export default Contact;