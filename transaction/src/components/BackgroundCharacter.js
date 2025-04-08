import React from 'react';
import '../App.css'; 
const BackgroundCharacter = () => {
    return (
        <div className="background-character">
<img src={`${process.env.PUBLIC_URL}/lol.gif`} alt="Animated Character" className="character" />
</div>
    );
};

export default BackgroundCharacter;
