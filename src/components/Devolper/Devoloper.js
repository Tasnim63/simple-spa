import React, { useState } from 'react';

const Devoloper = (props) => {
    const [xyz, setXyz] = useState('');
    const showPartner = (abc) => {
        setXyz(abc);
    }
    return (
        <div className='col-md-4 border'>

            <h4>{props?.developer?.name}</h4>
            <h4>{xyz}</h4>
            <button
                onClick={() => showPartner(props.developer.partner)}
                className='btn btn-primary'>show parter</button>
            <button className='btn btn-primary' m-3>Add member</button>
        </div>
    );
};

export default Devoloper;