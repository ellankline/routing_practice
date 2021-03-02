import React from 'react';

const Home = (props) => {
    console.log(props);
    if (!props.word) {
        return (
            <h1>Welcome</h1>
        );
    }else{
        if (isNaN(props.word)) {
            return (
                <h1 style={props.font ? 
                    {color: props.font, 
                    backgroundColor: props.background} 
                    : null}>
                    The word is: {props.word}
                </h1>
            );
        } else {
            return (
                <h1>The number is: {props.word}</h1>
            );
        };
    };
};

export default Home;