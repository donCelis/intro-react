import "../styles/card.css";
import photo_default from "../images/photo-default.jpg";

const text_default = "No hay descripción";

//Descontrucción de una prop
const Card = ({ photo, title, text = text_default, col }) => {
  return (
    <div className={col}>
      <article className="card">
        <img
          src={photo ? photo : photo_default}
          alt={title}
          className="card-img-top"
        />
        <div className="card-body">
          <h3 className="card-title">{title}</h3>
          <p className="card-text">{text ? text : text_default}</p>
        </div>
      </article>
    </div>
  );
};

export default Card;
