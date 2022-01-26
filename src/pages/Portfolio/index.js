import PageTitle from "../../components/PageTitle";
import PortfolioContent from "./portfolio-content";

function Portfolio() {
    return (
        <section id="portfolio" className="section grid wide">
            <div className="about-container">
                <PageTitle
                    title="Portfolio"
                    breifDescription="My portfolio"
                />
                <PortfolioContent />
            </div>
        </section>
    );
}

export default Portfolio;