import React from 'react';


export default class Child extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }


    componentWillMount() {
        console.log('will mount');
    }

    componentDidMount() {
        console.log('did mount');
    }

    componentWillReceiveProps(newProps) {
        console.log('will props ' + newProps.name)
    }

    componentWillUpdate() {
        console.log('will update')
    }

    componentDidUpdate() {
        console.log('did update')
    }



    render() {
        return (
            <div>
                <p>{this.props.name}</p>
            </div>

        );
    }
}