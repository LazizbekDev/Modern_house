import React from 'react'
import "./promocard.css"

export default function TextCard({index,description}) {
    return (
        <div className="promo-inner-box">
            <div className="promo-number-box">
                {index}
            </div>

            <p className="promo-inner-text">
                {description}
            </p>
        </div>

    )
}
