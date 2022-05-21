import styles from './Section.module.css'
import PropTypes from 'prop-types'

const Section = ({ title, children }) => {
    return (
        <div className={styles.Section}>
            <h2 className="Title">{title}</h2>
            {children}
        </div>
    )
};

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
}

export default Section;