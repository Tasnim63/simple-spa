import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Devoloper from '../Devolper/Devoloper';

const Players = () => {
    const [developers, setDevelopers] = useState([0]);
    useEffect(() => {
        fetch('/devData.json')
            .then(res => res.json())
            .then(data => setDevelopers(data))
    }, [])
    return (
        <section className='container'>
            <h1>Top Players</h1>
            <div className="row">
                <div className="col-md-8">
                    <div className='row border'>
                        {
                            developers.map(developer => <Devoloper
                                developer={developer}
                            ></Devoloper>)


                        }
                    </div>

                </div>
                <div className="col-md-4">
                    <Card></Card>

                </div>
            </div>
        </section>
    );
};

export default Players;