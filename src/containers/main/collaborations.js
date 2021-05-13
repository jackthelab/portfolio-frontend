import React, { useState } from 'react'

// components
import CollaborationBase from '../../components/CollaborationBase'
// import CollaborationForm '../components/forms/CollaborationFrom'
// import ProjectForm '../components/forms/ProjectForm'

const CollaborationsSection = () => {

    const [collaborationState, setCollaborationState] = useState(null)

    return (

        <div id="collaborate" className="light-bg core-section">

            { !collaborationState ? <CollaborationBase setCollaborationStatus={ setCollaborationState } /> : null }

        </div>

    );

}

export default CollaborationsSection