const ConnectionButton = ({ name, src }) => {

    return (
        <a href={ src } className="connection-btn">
            <span>{ name }</span>
        </a>
    );

}

export default ConnectionButton