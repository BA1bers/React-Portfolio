import React from 'react'

function Project({ title, link, image }) {
    return (
        <div className={title}>
            <div className="project">
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <img src={image} alt={title} />
                </a>
            </div>
        </div>
    )
}

export default Project
