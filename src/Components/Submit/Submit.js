import React from 'react';
// import { Route, Redirect, Link } from 'react-router-dom';

export default class Submit extends React.Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
    };
    
    submit() {
        let data = this.props.table.current.hotInstance.getSourceData()
        this.props.post_data(data)
    }

    render() {
        return (
            <button type="submit" onClick={this.submit}>Submit</button>
        )
    }
}