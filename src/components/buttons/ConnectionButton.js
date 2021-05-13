const ConnectionButton = ({ name, src }) => {

    return (
        <a href={ src } target="_blank" className="connection-btn">
            <span>{ name }</span>
        </a>
    );

}

export default ConnectionButton