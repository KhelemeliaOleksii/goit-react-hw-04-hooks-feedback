import { Component } from 'react'
import PropTypes from 'prop-types'

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

Notification.propTypes = {
    message: PropTypes.string.isRequired,
}

export default Notification;