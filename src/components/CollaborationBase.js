const CollaborationBase = ({ setCollaborationStatus }) => {

    return (

        <div className="collab-base">
            <div onClick={ () => setCollaborationStatus("collaborate") } className="collab-option">
                <h3>Looking to Collaborate?</h3>
            </div>
            <div onClick={ () => setCollaborationStatus("project") } className="collab-option">
                <h3>Have a Project in Mind?</h3>
            </div>
        </div>
    );

}

export default CollaborationBase