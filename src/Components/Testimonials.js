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
                                            <p>Enthusiasm is common. Endurance is rare.</p>
                                            <cite>Angela Duckworth, Grit: The Power of Passion and Perseverance</cite>
                                        </blockquote>
                                    </li>
                                    <li>
                                        <blockquote>
                                            <p>Keep learning and keep moving forward.</p>
                                            <cite>My philosophy</cite>
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
