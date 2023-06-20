import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';


export const Button = ({title, onClick, path}) => {
    return (
        <Link to={path} className='btn-mobile'>
            <button className={'btn btn-color'}
            onClick={onClick}>
                {title}
            </button>
        </Link>
        )
};