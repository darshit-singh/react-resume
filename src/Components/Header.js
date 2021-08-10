import React, { Component } from 'react';

class Header extends Component {
    render() {
        if (this.props.data) {
            var name = this.props.data.name;
            var occupation = this.props.data.occupation;
            var description = this.props.data.description;
            var workplace = this.props.data.workplace;
            var workplaceUrl = this.props.data.workplaceUrl;
            var blogUrl = this.props.data.blogUrl;
            var networks = this.props.data.social.map((network) => {
                return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
            })
        }
        return (
            <header id="home">
                <nav id="nav-wrap">
                    <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                    <a className="mobile-btn" href="#!" title="Hide navigation">Hide navigation</a>
                    <ul id="nav" className="nav">
                        <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                        <li><a className="smoothscroll" href="#about">About</a></li>
                        <li><a className="smoothscroll" href="#resume">Resume</a></li>
                        {/* <li><a className="smoothscroll" href="#portfolio">Works</a></li> */}
                        <li><a className="smoothscroll" href="#testimonials">Quotes</a></li>
                        <li><a className="smoothscroll" href="#contact">Contact</a></li>
                    </ul>

                </nav>

                <div className="row banner">
                    <div className="banner-text">
                        <h1 className="responsive-headline">I'm {name}.</h1>
                        <h3>I'm currently working as a <span style={{ color: '#F06000' }}>{occupation}</span> at <span><a target="_blank" rel="noreferrer" style={{ color: '#F06000' }} href={workplaceUrl}>{workplace}.</a></span><br /> {description} <span><a target="_blank" rel="noreferrer" style={{ color: '#F06000' }} href={blogUrl}>here.</a></span><br /></h3>
                        <hr />
                        <ul className="social">
                            {networks}
                        </ul>
                    </div>
                </div>
                <p className="scrolldown">
                    <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
                </p>

            </header>
        );
    }
}

export default Header;
