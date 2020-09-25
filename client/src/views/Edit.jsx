import React, {useState,useEffect} from 'react';
import Axios from 'axios';
import {navigate} from '@reach/router';
import PetForm from '../components/PetForm';


const Edit = props => {
    const initialPet = {
        name:"",
        type:"",
        description:"",
        skillOne:"",
        skillTwo:"",
        skillThree:""
    }

    const [edit,setEdit] = useState(initialPet);

    const [errors,setErrors] = useState([]);

    useEffect(() => {
        Axios.get(`http://localhost:8000/api/pet/${props.id}`)
            .then(res => setEdit(res.data.results))
            .catch(err => console.log(err))
    },[props])
    
    const handleInputChange = (e) => {
        setEdit({
            ...edit,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = (e) => {
        setErrors(initialPet);
        e.preventDefault();
        Axios.put(`http://localhost:8000/api/update/pet/${props.id}`, edit)
            .then(res => {
                console.log(res.data)
                if(res.data.results){
                    navigate(`/pet/${edit._id}`);
                }
                else{
                    setErrors(res.data);
                }
            })
            .catch(err => {console.log(err)});
    }

    return(
        <div>
            <h2>Edit a Pet:</h2>
            <PetForm 
                inputs={edit}
                errors={errors}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
                submitValue="Edit Pet"
            />
        </div>
    )
}
export default Edit;