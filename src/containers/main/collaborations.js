import React, { useState } from 'react'

// components
import CollaborationBase from '../../components/CollaborationBase'
import CollaborationForm from '../../components/forms/CollaborationForm'
import ProjectForm from '../../components/forms/ProjectForm'

const CollaborationsSection = () => {

    const [collaborationState, setCollaborationState] = useState(null)

    return (

        <div id="collaborate" className="light-bg core-section">

            { !collaborationState ? <CollaborationBase setCollaborationStatus={ setCollaborationState } /> : null }
            { collaborationState === "collaborate" ? <CollaborationForm setCollaborationStatus={ setCollaborationState } /> : null }
            { collaborationState === "project" ? <ProjectForm setCollaborationStatus={ setCollaborationState } /> : null }

        </div>

    );

}

export default CollaborationsSection