import React, { useState } from 'react'

const CollaborationForm = ({ setCollaborationStatus }) => {

    const [formName, setFormName] = useState(null)
    const [formEmail, setFormEmail] = useState(null)
    const [formInterest, setFormInterest] = useState("collaborator")
    const [formDetails, setFormDetails] = useState(null)

    return (

        <div className="collaboration-page">
            <h2 className="collab-page-item">Looking to Collaborate?</h2>
            <p className="collab-page-item">Let me know what you have in mind by submitting the form below!</p>

            <form className="collaboration-form">
                <div className="form-field">
                    <h3>Your Name</h3>
                    <input className="form-input" onChange={ (e) => setFormName(e.target.value) } type="text"/>
                </div>
                <div className="form-field">
                    <h3>A Good Contact Email</h3>
                    <input className="form-input" onChange={ (e) => setFormEmail(e.target.value) } type="email" />
                </div>
                <div className="form-field">
                    <h3>Your Interest</h3>
                    <select className="form-input" onChange={ (e) => setFormInterest(e.target.value) }>
                        <option className="form-input" value="collaborator">Collaborator</option>
                        <option className="form-input" value="co-founder">Co-Founder</option>
                        <option className="form-input" value="investor">Investor</option>
                        <option className="form-input" value="other">Other (specify in details)</option>
                    </select>
                </div>
                <div className="form-field">
                    <h3>Details</h3>
                    <textarea onChange={ (e) => setFormDetails(e.target.value) } />
                </div>
                <div className="form-field">
                    <input className="submit-btn" type="submit" value="Submit"></input>
                </div>
            </form>

            <button onClick={ () => setCollaborationStatus(null) } className="action-btn">Go Back</button>
            
        </div>

    );

}

export default CollaborationForm