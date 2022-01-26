import PageTitle from "../../components/PageTitle";
import ServicesContent from "./services-content";

function Services() {
    return (
        <section id="services" className="section grid wide">
            <div className="about-container">
                <PageTitle
                    title="Services"
                    breifDescription="My services"
                />
                <ServicesContent />
            </div>
        </section>
    );
}

export default Services;