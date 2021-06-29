import React from 'react'

function Service({ title, description, image, alt, backgroundImage }) {
    return (
        
        <div className="feature text-center is-revealing headline">
            <div className="feature-inner">
                <div className="feature-icon feature-relative">
                    <img className="image-absolute" src={image} alt={alt} />
                    <img className="image-opacity" src={backgroundImage} alt={alt} />
                </div>
                <h4 className="feature-title mt-24">{title}</h4>
                <p className="text-sm mb-0">{description}</p>
            </div>
        </div>
    )
}

export default Service