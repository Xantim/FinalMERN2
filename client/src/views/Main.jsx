import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Link } from '@reach/router'


const Main = props => {

    const [pets, setPets] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:8000/api/pets")
            .then(res => {
                // console.log(res.data)
                setPets(res.data.results)
            })
            .catch(err => console.log(err));
    }, [])

    return (
        <table className="table table-danger mx-auto">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Actions</th>
                </tr>
            </thead>

            <tbody>
                
                {
                    pets.map((p, i) => {
                        return <tr key={i}>
                            <td>{p.name}</td>
                            <td>{p.type}</td>
                            <td>
                                <Link to={`/edit/${p._id}`} className="btn btn-info">Edit</Link>
                                <Link to={`/pet/${p._id}`} className="btn btn-warning">Details</Link>
                            </td>

                        </tr>
                    })
                }
                
            </tbody>
            <p>test</p>
        </table>
    )
}

export default Main;