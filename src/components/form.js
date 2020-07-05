import React from 'react';


import '../styles/form.scss'

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            words: 'initial State',
            options: {},
            headersArr: [],
            methodArr: [],
            bodyArr: [],
            urlArr: [],
            metodeUrlObj: {
                'GET': [],
                'POST': [],
                'PUT': [],
                'DELETE': [],
            },
            metodeUrlObjID: {
                'GET': [],
                'POST': [],
                'PUT': [],
                'DELETE': [],
            },
            data: {},
            headerValue: '',
            headerType: ''
        };
        this.url = '';
        this.method = 'GET';

    }

    handleClick = async e => {
        this.props.toggleLoading();

        this.url = document.getElementById('url').value;
        let words = `${this.method}!${this.url}`;
        this.props.all.push({ words });



        fetch(`${this.url}`, this.state.options).then(async (raw) => {
            let data = await raw.json();
            let all = this.props.all;

            // let headers = raw.headers.get('content-type');
            let headers = {};
            for (let [key, value] of raw.headers) {
              headers[key] = value;
            }

            if (!this.state.metodeUrlObj[this.method].includes(this.url)) {
                this.state.headersArr.push(headers);
                this.state.methodArr.push(this.method);
                this.state.bodyArr.push(data);
                let idx = this.state.urlArr.length;
                this.state.urlArr.push(this.url);
                this.state.metodeUrlObj[`${this.method}`].push(`${this.url}`);
                this.state.metodeUrlObjID[`${this.method}`].push(`${idx}`);
            }



            localStorage.setItem('headers-state', JSON.stringify(this.state.headersArr));
            localStorage.setItem('method-state', JSON.stringify(this.state.methodArr));
            localStorage.setItem('body-state', JSON.stringify(this.state.bodyArr));
            localStorage.setItem('URL-state', JSON.stringify(this.state.urlArr));
            localStorage.setItem('Method-URL-state', JSON.stringify(this.state.metodeUrlObj));
            localStorage.setItem('Method-URL-ID-state', JSON.stringify(this.state.metodeUrlObjID));

            this.props.handler(data, all, headers);
            this.props.show(true)
            // no need for settimeout just to see the loader because loader is coooool 
            setTimeout(() => {
                this.props.toggleLoading();

            }, 1000);

        }).catch((e) => {
            this.props.handler({
                msg1: 'Error Error Error',
                msg2: 'maybe you do not have access',
                msg3: 'maybe your request is wrooong',
            }, this.props.all, null);

            this.props.toggleLoading();
        });
    }

    get = e => {
        this.method = 'GET'
        document.getElementsByClassName('aqua')[0].removeAttribute('class');
        e.target.setAttribute('class', 'aqua');
        let options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${this.state.headertype} ${this.state.headerValue}`
            },
        }
        this.setState({ options })
    }

    post = e => {
        this.method = 'POST'
        document.getElementsByClassName('aqua')[0].removeAttribute('class');
        e.target.setAttribute('class', 'aqua');
        let options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Authorization': `${this.state.headertype} ${this.state.headerValue}`
            },
            mode: 'cors',
            body: JSON.stringify(this.state.data),
        }
        this.setState({ options })
    }

    put = e => {
        this.method = 'PUT'
        document.getElementsByClassName('aqua')[0].removeAttribute('class');
        e.target.setAttribute('class', 'aqua');
        let options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Authorization': `${this.state.headertype} ${this.state.headerValue}`

            },
            mode: 'cors',
            body: JSON.stringify(this.state.data),
        }
        this.setState({ options })
    }

    delete = e => {
        this.method = 'DELETE'
        document.getElementsByClassName('aqua')[0].removeAttribute('class');
        e.target.setAttribute('class', 'aqua');
        let options = {
            method: 'DELETE',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${this.state.headertype} ${this.state.headerValue}`

            },
        }
        this.setState({ options })
    }
    handleBody = e => {
        this.setState({ data: e.target.value });
    }

    handleHeader = e => {
        this.setState({ headerValue: e.target.value })
    }

    handleHeaderType = e => {
        this.setState({ headertype: e.target.value })
    }

    render() {
        return (
            <div id='form'>
                <div id='main-header'>
                    <div id='url-div'>
                        <label for='url'>URL:</label>
                        <input id='url'></input>
                        <button onClick={this.handleClick}>GO!</button>

                        <div id='header'>
                            <label > Header</label>
                            <br></br>
                            <label for="Basic">Basic</label>
                            <input checked type="radio" id="Basic" name="auth" value="Basic" onChange={this.handleHeaderType}></input>
                            <label for="Bearer">Bearer</label>
                            <input type="radio" id="Bearer" name="auth" value="Bearer" onChange={this.handleHeaderType}></input>
                            <br></br>
                            <input id="headerValue" onChange={this.handleHeader}></input>
                        </div>


                        <label id='textarea'>
                            Body
                        <textarea rows="4" cols="50" onChange={this.handleBody} ></textarea>
                        </label>

                    </div>

                    <div id='buttons'>
                        <button id='GET' class='aqua' onClick={this.get}>GET</button>
                        <button id='POST' onClick={this.post}>POST</button>
                        <button id='PUT' onClick={this.put}>PUT</button>
                        <button id='DELETE' onClick={this.delete}>DELETE</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Form;
