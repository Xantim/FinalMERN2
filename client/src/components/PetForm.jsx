import React from 'react';

const PetForm = props => {
    const { inputs, errors, handleInputChange, handleSubmit, submitValue } = props;

    return (
        <form className="col-12 mx-auto bg-light p-4 rounded" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" value={inputs.name} onChange={handleInputChange} className="form-control" />
                <span className="text-danger">{errors.name && errors.name.message}</span>
            </div>
            <div className="form-group">
                <label htmlFor="type">Type</label>
                <input type="text" name="type" value={inputs.type} onChange={handleInputChange} className="form-control"/>
                <span className="text-danger">{errors.type && errors.type.message}</span>
            </div>
            <div className="form-group">
                <label htmlFor="description">Description</label>
                <input type="text" name="description" value={inputs.description} onChange={handleInputChange} className="form-control"/>
                <span className="text-danger">{errors.description && errors.description.message}</span>
            </div>
            <p>(Optional):</p>
            <div className="form-group">
                <label htmlFor="skillOne">skill One</label>
                <input type="text" name="skillOne" value={inputs.skillOne} onChange={handleInputChange} className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="skillTwo">skill Two</label>
                <input type="text" name="skillTwo" value={inputs.skillTwo} onChange={handleInputChange} className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="skillThree">skill Three</label>
                <input type="text" name="skillThree" value={inputs.skillThree} onChange={handleInputChange} className="form-control" />
            </div>
            
            <input type="submit" value={submitValue} className="btn btn-secondary" />
        </form>
    )
}

export default PetForm;