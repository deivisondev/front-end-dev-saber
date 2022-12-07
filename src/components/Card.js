import "./Card.css";

const Card = ({ title, description, url }) => {
    console.log(url)
  return (
    <div className="card-container">
      <h2>{title}</h2>
      <div className="card-video-box">
        <iframe
          width="420"
          height="315"
          src={url}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div className="card-description">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
