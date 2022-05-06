import { Component } from 'react'
import s from './Section.module.css'
class Section extends Component {
    render() {
        const { title, children } = this.props;
        return (
            <div className={s.Section}>
                <h2 className="Title">{title}</h2>
                {children}
            </div>
        )
    }
};

export default Section;