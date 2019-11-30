import React from 'react';

export default class Home extends React.Component {
    render() {
        return (
            <>
                <h1>
                    <img className="bitmoji"src="screenshot/austinbitmojitiny.png" alt="bitmoji"/>
                    <p className="intro">
                        Hi! I'm Austin
                        I'm an aspiring
                        fullstack developer.
                    </p>
                </h1>
            </>
        );
    }
}