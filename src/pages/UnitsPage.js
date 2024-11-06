import React from 'react';
import './UnitsPage.css'; // Import the CSS file for styling
import { useNavigate } from 'react-router-dom';
import units from '../units';


const UnitsPage = () => {
    const navigate = useNavigate(); // Hook to navigate programmatically

    const handleUnitClick = (id) => {
        navigate(`${id}`); // Navigate to the unit detail page
    };
    return (
        <>
            <h1>Units</h1>
            <div className="grid-container">
                {units.map((unit, index) => (
                    <button key={index} className="grid-item" onClick={() => handleUnitClick(index + 1)}>
                        <img src={unit.img.default} alt={unit.name} className="unit-image" />
                        <div className="unit-name">{unit.name}</div>
                    </button>
                ))}
            </div>
        </>
);
};

export default UnitsPage;
