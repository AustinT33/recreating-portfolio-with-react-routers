import React from 'react';
import { Link } from 'react-router-dom';

export default class Projects extends React.Component {
    render() {
        return (
           <> 
            <div>
                <h2>Projects</h2>
            </div>
    
            <section>
                <h3>Breakout Game</h3>
                <div class="project">  
                    Simple build of the classic Breakout game.<br/>
                    <Link class="links" to="https://austint33.github.io/Simple-Breakout-Game/" target="_blank"><button class="live" type="button">Live Site</button></Link><br/>
                    <Link class="links" to="https://github.com/AustinT33/Simple-Breakout-Game" target="_blank"><button class="repo" type="button">Github Repo</button></Link><br/>
                    <img class="code-type" src="screenshot/code-logos-all-tiny.jpg" alt="language"/>
                    <img class="app-pic" src="screenshot/breakoutpic.png" alt="breakout game"/>
                </div>
            </section>
            <section>
                <h3>Bookmark App</h3>
                <div class="project">
                    Simple Bookmark App fetching API and implementing the use of CRUD.<br/>
                    <Link class="links"  to="https://thinkful-ei-iguana.github.io/Austin-bookmarks-project/" target="_blank"><button class="live" type="button">Live Site</button></Link><br/>
                    <Link class="links" to="https://github.com/thinkful-ei-iguana/Austin-bookmarks-project" target="_blank"><button class="repo" type="button">Github Repo</button></Link><br/>
                    <img class="code-type" src="screenshot/code-logos-all-tiny.jpg" alt="language"/><img class="code-type" src="screenshot/jquery-logo-tiny.png"alt="language"/><img class="code-type" src="screenshot/api-logotiny.png" alt="language"/>
                    <img class="app-pic" src="screenshot/bookmarktiny.png" alt="bookmark app"/>
                </div>
            </section>
            <section>
                <h3>Clash of Clans Quiz App</h3>
                <div class="project">
                    Simple Quiz App with no CSS.<br/>
                    <Link class="links" to="https://thinkful-ei-iguana.github.io/Krystle-Austin/" target="_blank"><button class="live" type="button">Live Site</button></Link><br/>
                    <Link class="links" to="https://github.com/thinkful-ei-iguana/Krystle-Austin" target="_blank"><button class="repo" type="button">GitHub Repo</button></Link><br/>
                    <img class="code-type" src="screenshot/code-logos-html-js-tiny.png" alt="language"/>
                    <img class="app-pic" src="screenshot/quizpic.png" alt="quiz app"/>
                </div> 
            </section>
        </>
        );
    }
}