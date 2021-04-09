import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import productServices from "../../services/productServices";
import Card from "../Cards/Card";

const UserProfile = () => {
    const [products, setProducts] = useState([]);
    const { username, userId, userToken } = useContext(AuthContext);

    useEffect(() => {
        productServices.getAllFromUser(userToken, userId)
            .then(data => {
                if (data.hasOwnProperty("errorData")) throw new Error(data.message);
                setProducts(data);
            })
    }, [])

    return (
        <div className="user-profile">
            <h2>Hello, {username}!</h2>

            <h4>Here you can find all your products.</h4>
            {products && products.map(x => <Card key={x.objectId} {...x} />)}
        </div>
    );
}

export default UserProfile;