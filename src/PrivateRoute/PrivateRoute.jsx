import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types'
import useApi from "../AuthApi/useApi";

const PrivateRoute = ({children}) => {
    const {user, isLoading} = useApi()
    if(isLoading){
        return <div className=" w-full h-[90vh]  flex items-center">
            <div className=" border-2 border-black w-40 text-center mx-auto rounded-lg">

            <span className="loading  loading-infinity loading-lg"></span>
            </div>
        </div>
        
    }
    if(user){
        return children
    }
    return<Navigate to={'/login'}/>

    
};
PrivateRoute.propTypes ={
    children: PropTypes.node
}
export default PrivateRoute;