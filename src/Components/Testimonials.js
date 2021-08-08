import React, { Component } from 'react';

class Testimonials extends Component {
    render() {
        return (
            <section id="testimonials">
                <div className="text-container">
                    <div className="row">
                        <div className="ten columns flex-container">
                            <div className="flexslider">
                                <ul className="slides">
                                    <li>
                                        <blockquote>
                                            <p>hahahaha</p>
                                            <cite>ok</cite>
                                        </blockquote>
                                    </li>
                                    <li>
                                        <blockquote>
                                            <p>gagag</p>
                                            <cite>jaja</cite>
                                        </blockquote>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Testimonials;
