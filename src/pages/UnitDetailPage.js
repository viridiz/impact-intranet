import React from 'react';
import { useParams } from 'react-router-dom';
import units from '../units';


const UnitDetailPage = () => {
    const { id } = useParams(); // Get the unit ID from the URL
    const unitId = parseInt(id); // Convert the ID to a number
    const unit = units[unitId - 1]; // Access the unit details by ID (adjust for zero-based index)

    return (
        <div>
            {unit ? (
                <>
                    <h1>{unit.name}</h1> {/* Display the unit name */}
                    {/* <img src={unit.img.default} alt={unit.name} /> */}
                    <p>{unit.name} documents</p>
                    {/* Add more details about the unit here */}
                </>
            ) : (
                <p>Unit not found</p>
            )}
        </div>
    );
};

export default UnitDetailPage;
