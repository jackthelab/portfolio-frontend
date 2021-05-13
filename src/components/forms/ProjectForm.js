import React, { useState } from 'react'

const ProjectForm = ({ setCollaborationStatus }) => {

    const [formName, setFormName] = useState(null)
    const [formEmail, setFormEmail] = useState(null)
    const [formBudget, setFormBudget] = useState("0-2500")
    const [formDetails, setFormDetails] = useState(null)

    return (

        <div className="collaboration-page">
            <h2 className="collab-page-item">Need Help With a Project?</h2>
            <p className="collab-page-item">Tell me a little about the project to start!</p>

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
                    <h3>Your Budget (in USD)</h3>
                    <select className="form-input" onChange={ (e) => setFormBudget(e.target.value) }>
                        <option className="form-input" value="0-2499">less than $2,500 </option>
                        <option className="form-input" value="2500-5000">$2,500 - $5,000</option>
                        <option className="form-input" value="5000-10000">$5,000 - $10,000</option>
                        <option className="form-input" value="10000+">$10,000+</option>
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

export default ProjectForm