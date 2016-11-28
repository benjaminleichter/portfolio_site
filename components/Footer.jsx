import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <div className="inner">
                    <div className="under-line">
                        <div className="under-line-inner" />
                    </div>
                    <span className="footer-text">
                        Check out the code for this website on <a className="hover-me" href="https://github.com/benjaminleichter/portfolio_site" target="_">GitHub</a>.
                        <br />
                        Icons on this site created by <a className="hover-me" href="https://thenounproject.com/ryo.sato.7127/" target="_">Ryo Sato</a> and used under the <a className="hover-me" href="https://creativecommons.org/" target="_">Creative Commons License</a>.
                    </span>
                </div>
            </div>
        );
    }
}

export default Footer;