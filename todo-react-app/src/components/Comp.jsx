import React, { useState } from 'react';

const Comp =  () => {  
    const name = 'Albert';
    const [text, setText] = useState('Albert');

    const toggleText = () => {
        setText((text) => (text === 'Albert' ? 'Marc' : 'Albert'));
      };

    return (
        <div className="comp1">
            <p>Hello {name}</p>
            <button onClick={toggleText}>
                {text}
            </button>
        </div>
    );
};

export default Comp;
