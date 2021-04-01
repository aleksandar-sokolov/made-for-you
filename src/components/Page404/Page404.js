import { Link } from "react-router-dom";


const Page404 = () => {
    return (
        <div className="page-not-found">
            <img src="./Page404.png" alt="Page404" />
            <h2>Page Not Found</h2>
            <p>Return to <Link to="/">Home</Link> Page?</p>
        </div>
    );
}

export default Page404;