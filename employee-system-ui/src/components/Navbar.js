import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <div className="bg-gray-800">
            <div className="h-16 px-8 flex items-center">
                <p onClick={() => navigate('/')} className="text-white font-bold hover:cursor-pointer">
                    Employee Management System
                </p>
            </div>
        </div>
    );
};

export default Navbar;
