import React from 'react';
import starRegular from '../assets/images/star-regular.svg';
import starSolid from '../assets/images/star-solid.svg';

function StarRating(props) {
    const stars = []
    for (var i = 0; i < 5; i++) {
        if (i < Math.floor(props.rating)) {
            const element = <img key={i} src={starSolid} style={{ width: "1em", height: "1em" }} />
            stars.push(element);
        } else {
            stars.push(<img key={i} src={starRegular} style={{ width: "1em", height: "1em" }} />)
        }
    }
    return (
        <div style={{ display: "inline" }}>
            {stars}
        </div>
    )
}

export default StarRating;
