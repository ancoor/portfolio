import React from 'react';
import react from '../../assets/icons/react.svg'
const Bar = ({ value: {  name,language, level } }) => {
    const bar_width = `${level}%`
    return (
        <div className="bar">
            <div className="bar__wrapper" style={{
                'width': bar_width
            }}>
                <span className="bar__name">
                    <img src={react} alt="icon" className="bar__icon mr-2" />{(name)??language}
                </span>

            </div>

        </div>
    );
};

export default Bar;