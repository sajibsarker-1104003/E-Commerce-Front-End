import { useState } from 'react';

const CheckBox = ({ categories }) => {
    return categories.map(category => (
        <li className="list-unstyled" key={category._id}>
            <input
                type="checkbox"
                className="form-check-input"
            />
            <label className="form-check-label">{category.name}</label>
        </li>
    ))
}

export default CheckBox;