import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import Writer from './Writer';

class Contact extends Component {
    render() {
        const { writers, match: { url } } = this.props;
        console.log(this.props);
        return (
            <div className='sampleRouteComponent'>
                <h2 id='contactHeader'>Contact Component</h2>
                <br />
                <h3 className="writersInfoHeader">Writers Information</h3>
                <ul>
                    {
                        writers.map(({id,name}) => {
                            return <li key={id}>
                                        <NavLink to={`${url}/${id}`}>{name}</NavLink>
                                    </li>
                        })
                    }
                </ul>
                <Route path={`${url}/:writerId`} 
                    render={(props) => <Writer {...props} writers={writers}/>}>
                </Route>
            </div>
        );
    }
}

export default Contact;