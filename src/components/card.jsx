import "../styles/card.css";

const Card = ({photo, title, text, col}) => {
  return (
    <div className={col}>
      <article className="card">
        <img src={photo} alt={title} className="card-img-top" />
        <div className="card-body">
          <h3 className="card-title">{title}</h3>
          <p className="card-text">{text}</p>
        </div>
      </article>
    </div>
  );
};

export default Card;
