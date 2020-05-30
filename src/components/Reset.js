import React from 'react';

export default class Reset extends React.Component {
    render() {
        return (
            <button onClick={() =>this.props.handleReset()} type="button" className="reset">Reset</button>
        )
    }
}