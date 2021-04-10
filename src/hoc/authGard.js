import { useContext } from "react";
import { useHistory } from "react-router";
import { AuthContext } from "../contexts/AuthContext";


const authGard = (InnerComponent) => {

    const WrappedComponennt = (props) => {
        const { username, userToken } = useContext(AuthContext);
        const history = useHistory();

        if (!username || !userToken){
            history.push('/login');
            return null;
        }

        return <InnerComponent {...props} />;
    }

    return WrappedComponennt;
}

export default authGard;