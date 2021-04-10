import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { ErrorContext } from "../../contexts/ErrorContext";
import productServices from "../../services/productServices";
import Card from "../Cards/Card";

const UserProfile = () => {
    const [products, setProducts] = useState([]);
    const [isPending, setIsPending] = useState(true);
    const { username, userId, userToken } = useContext(AuthContext);
    const { displayError } = useContext(ErrorContext);

    useEffect(() => {
        setIsPending(true);
        productServices.getAllFromUser(userToken, userId)
            .then(data => {
                if (data.hasOwnProperty("errorData")) throw new Error(data.message);
                setProducts(data);
                setIsPending(false)
            })
            .catch(err => {
                setIsPending(false);
                displayError(err.message);
            })
    }, [])

    return (
        <div className="user-profile">
            <h2>Hello, {username}!</h2>

            <h4>Here you can find all your products.</h4>

            {isPending && <p>Loading...</p>}
            {!products.length && !isPending && <div>We still don't have a product from you. Add your first from <Link to="/product/add">here</Link>. </div>}
            {products && products.map(x => <Card key={x.objectId} {...x} />)}
        </div>
    );
}

export default UserProfile;