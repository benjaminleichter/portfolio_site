import React from 'react';

class App extends React.Component {
    render() {
        return (
            <div>
                <div className="header">
                    <p>
                        Hey, I'm Ben Leichter. I'll keep it short unless you want to know more <span className="about-me">about me</span>.
                        I'm currently a web developer at <a href="https://www.bevspot.com" target="_">BevSpot</a> in Boston, Massachusetts.
                        I really enjoy writing web apps with ReactJS/TypeScript and working with designers and other developers to make great software.
                    </p>
                    <div className="under-line">
                        <div className="under-line-inner" />
                    </div>
                </div>
                <div>
                    <a href="https://github.com/benjaminleichter" target="_">link to github</a>
                    <a href="https://teamtreehouse.com/benjaminleichter" target="_">link to treehouse</a>
                </div>
            </div>
        )
    }
}

export default App;