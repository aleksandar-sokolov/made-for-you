import './Card.css'

const Card = ({ imgUrl, name, description, price, owner, id }) => {

    return (
        <div className="card" id={id}>
            <img src={imgUrl} alt={name} style={{ "width": "100%" }} />
            <h1>{name}</h1>
            <p className="price">${price}</p>
            <p>{description}</p>
            <p><a href={`/product/${id}`}>Add to Cart</a></p>
        </div>
    );
}

export default Card;