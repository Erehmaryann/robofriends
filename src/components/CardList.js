import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    // if (true) {
    //     throw new Error('NO!');
    // }

    return (
        <div>
            {robots.map((user, idx) => {
                return (
                    <Card key={idx} id={robots[idx].id} name={robots[idx].name} email={robots[idx].email} />
                );
            })
            }
        </div>
    );
};

export default CardList;
