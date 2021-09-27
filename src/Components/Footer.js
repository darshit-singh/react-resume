import React, { Component } from 'react';

class Footer extends Component {
    render() {
        var year = new Date().getFullYear();
        if (this.props.data) {
            var networks = this.props.data.social.map((network) => {
                return <li key={network.name} style={{ display: 'inline-block', margin: '0 15px' }}><a href={network.url}><i className={network.className}></i></a></li>
            })
        }
        return (
            <footer>
                <div className="row banner">
                    <div className="banner-text">
                        <ul className="social" style={{ fontSize: '35px' }}>
                            {networks}
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="twelve columns">
                        <ul className="copyright">
                            <li style={{ color: '#aaa' }}>&copy; Copyright {year} Darshit Singh Sarna</li>
                            {/* <li>Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li> */}
                        </ul>
                    </div>

                    <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>

                </div>

            </footer>
        );
    }
}

export default Footer;
