import React from 'react';
import { useNavigate } from 'react-router-dom';

const Employee = ({ data, onDelete }) => {
    const navigate = useNavigate();

    const updateEmployee = (e, id) => {
        e.preventDefault();
        navigate(`/${id}/update`);
    };

    return (
        <tr key={data.id}>
            <td className="text-left px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{data.firstName}</div>
            </td>
            <td className="text-left px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{data.lastName}</div>
            </td>
            <td className="text-left px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{data.email}</div>
            </td>
            <td className="text-right px-6 py-4 whitespace-nowrap">
                <button
                    onClick={(e) => updateEmployee(e, data.id)}
                    className="text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer"
                >
                    Edit
                </button>
                <button
                    onClick={(e) => onDelete(e, data.id)}
                    className="text-indigo-600 hover:text-indigo-800 hover:cursor-pointer"
                >
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default Employee;
