function PageTitle(props) {
    const { title, breifDescription } = props;
    return (
        <div className="section-title">
            <p>{title}</p>
            <h1>{breifDescription}</h1>
        </div>
    );
}

export default PageTitle;