import React, {Component} from 'react';

class About extends Component {
    constructor(props){
        super();
    }
    componentDidMount() {
        console.log(this.props);
    }
    
    render() {
        return (
            <div className='sampleRouteComponent'>
                <h2 id='aboutHeader'>{this.props.title}</h2>
                <br />
                <p>jhewgf kdsh aewoihcjdnzs uaid jsdsu fhaoiewufjdvknliju </p>
            </div>
        );
    }
}

export default About;