import { Component } from 'react'

class Notification extends Component {
    render() {
        const { message } = this.props;
        return (
            <div className="Notification">
                <span>{message}</span>
            </div>
        )
    }
}

export default Notification;