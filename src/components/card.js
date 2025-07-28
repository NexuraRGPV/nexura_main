import { useState } from "react";
import "./card.css";

function Card({ image, name, position, description }) {
  const [showPopup, setShowPopup] = useState(false);

  const handleCardClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <div className="card" onClick={handleCardClick}>
        <div className="image-container">
          <img src={image} alt={name} />
          <div className="overlay">
            <p>{description}</p>
          </div>
        </div>
        <div className="info-container">
          <h3>{name}</h3>
          <p>{position}</p>
        </div>
      </div>

      {showPopup && (
        <div className="popUp active">
          <button className="close-btn" onClick={handleClosePopup}>✖</button>
          <p>{description}</p>
        </div>
      )}
    </>
  );
}

export default Card;
