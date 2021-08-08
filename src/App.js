import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';
import Header from './Components/Header';
import About from './Components/About';
import Resume from './Components/Resume';
// import Portfolio from './Components/Portfolio';
import Testimonials from './Components/Testimonials';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            resumeData: {}
        }
    }
    getResumeData = () => {
        $.ajax({
            url: '/resumeData.json',
            dataType: 'json',
            cache: false,
            success: (data) => {
                this.setState({
                    resumeData: data
                })
            },
            error: (err) => {
                console.log(err);
            }
        })
    }
    componentDidMount() {
        this.getResumeData();
    }
    render() {
        // console.log(this.state.resumeData)
        let { resumeData } = this.state;
        return (
            <div className="App">
                <Header data={resumeData.main} />
                <About data={resumeData.main} />
                <Resume data={resumeData.resume} />
                {/* <Portfolio data={resumeData.portfolio} /> */}
                <Testimonials/>
                <Contact data={resumeData.main} />
                <Footer/>
            </div>
        );
    }
}

export default App;
