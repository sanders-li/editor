import React from 'react';
import axios from 'axios';

const target = "http://127.0.0.1:5000/"
// const target = "https://ptsv2.com/t/6nho4-1605638448/post"

export default class Submit extends React.Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
        this.simplesubmit = this.simplesubmit.bind(this);
    };
    
    simplesubmit() {
        var hot = JSON.stringify(this.props.data)
        console.log(hot)
        //console.log(hot.getData())
    }

    submit() {
        var data = JSON.stringify(this.props.data)
        console.log(`Sending: ${data}`)
        axios.post(target, data, {
            headers: {
              // Overwrite Axios's automatically set Content-Type
              'Content-Type': 'application/json'
            }
        }
        ).then(res => {
            console.log(`Got response: ${res.status}`)
        }).catch(err => {
            console.log(`Got error: ${err}`)
        })
    }

    render() {
        return (
            <button type="submit" onClick={this.submit}>Submit</button>
        )
    }
}