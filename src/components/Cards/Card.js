import { Link } from 'react-router-dom';
import './Card.css'

const Card = ({ imgUrl, name, description, price, owner, objectId }) => {

    return (
        <div className="card">
            <img src={imgUrl} alt={name} style={{ "width": "100%" }} />
            <h1>{name}</h1>
            <p className="price">${price}</p>
            <p>{description}</p>
            <p><Link to={`/product/${objectId}`}>Details</Link></p>
        </div>
    );
}

export default Card;