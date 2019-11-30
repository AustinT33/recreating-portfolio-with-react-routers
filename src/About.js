import React from 'react';
import { Link } from 'react-router-dom';

export default class About extends React.Component {
    render() {
        return (
            <div>
                <h2>About Me</h2>
                    <p class="about">
                        I am an enthusiastic web developer currently enrolled in <Link class="infoLink" to="https://www.thinkful.com/" target="_blank">Thinkful's</Link> 
                        Engineering Immersion program.
                        Through effective problem solving and critical thinking, I create meaningful code.
                        With my special interest in Facebook's <Link class="infoLink" to="https://reactjs.org/"target="_blank" >React</Link> 
                        Library, I strive to effortlessly implement well rounded 
                        React code for the digital age.
                        Outside of coding, I enjoy hobbies such as dancing, exercising, gaming, and creating 
                        electronic music.
                    </p>
            </div>
        );
    }
}