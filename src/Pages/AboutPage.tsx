import React from 'react'
import { useHistory } from 'react-router-dom'

export const AboutPage: React.FC = () => {
    const history = useHistory()
    return (
        <React.Fragment>
            <h2>Страница информации</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed perferendis sapiente consequuntur deserunt. Id sunt consectetur, et distinctio quod explicabo.</p>
            <button className="btn" onClick={() => history.push('/')}>Обратно к списку дел</button>
        </React.Fragment>
    )
}