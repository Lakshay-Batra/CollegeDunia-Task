import React from 'react';
import collegeImage from '../assets/images/college_02.jpg';
import StarRating from "./StarRating";

const darkImageBackground = {
    backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) ),url(${collegeImage})`
}

function Card(props) {
    return (
        <div className="card">
            <div className="card-image-background" style={darkImageBackground}>
                <div className="card-image-top-layer">
                    {props.college.promoted &&
                        <div className="bookmark-ribbon">
                            <span>PROMOTED</span>
                        </div>}
                    <div className="rating-box">
                        <div><span>{props.college.rating}</span>/5</div>
                        <div>{props.college.rating_remarks}</div>
                    </div>
                    <div className="bottom-container">
                        <div className="capsule-container">
                            {props.college.tags.map(tag => <span key={tag} className="white-capsule">{tag}</span>)}
                        </div>
                        <div className="ranking"><p>#{props.college.ranking}</p></div>
                    </div>
                </div>
            </div>
            <div className="card-details-container">
                <div className="details">
                    <div><h3 className="college-name">{props.college.college_name}</h3> <StarRating rating={props.college.rating} /></div>
                    <div>{props.college.nearest_place.map((place, index) => {
                        if (!index) {
                            return <span key={place}>{place}</span>
                        } else {
                            return <span key={place} className="grey-text"> | {place}</span>
                        }
                    })}</div>
                    <p><span className="green-text">93% Match: </span>{<span>{props.college.famous_nearest_places}</span>}</p>
                </div>
                <div className="pricing">
                    <div className="previous-price-container"><span className="previous-price">₹ {props.college.original_fees}</span>&ensp;
                    <div className="discount-tag-triangle"></div><div className="discount-tag"><span>• {props.college.discount}</span></div>
                    </div>
                    <h2 className="price">₹ {props.college.discounted_fees}</h2>
                    <span>{props.college.fees_cycle}</span>
                </div>
            </div>
            <div className="card-footer">
                <div className="offer">
                    <p>{props.college.offertext}</p>
                </div>
                <div className="amenities">
                    <p className="green-text">{props.college.amenties.map((amenity, index) => {
                        if (!index) {
                            return amenity;
                        } else {
                            return " • " + amenity;
                        }
                    })}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;
