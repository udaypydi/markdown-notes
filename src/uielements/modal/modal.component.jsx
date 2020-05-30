import React from 'react';

function Modal(props) {
    return (
        <div className="absolute bg-white">
            {React.Children.map(child => child)}
        </div>
    );
}

export default Modal;
