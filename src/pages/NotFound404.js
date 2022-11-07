import { Box } from "components/utils/Box";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NotFound = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timeoutID = window.setTimeout(redirect, 6000)
        toast.error(`You will be redirected to the home page`)
        function redirect() {
            navigate("/", { replace: true });
        }

        return () => {
            window.clearTimeout(timeoutID)
        };
    },[navigate])



    return (
        <Box
            display="flex"
            alignItems="center"
            flexDirection="column"
        >
            <h1>404</h1>  
            <h2>Page not found</h2>
            <h4>The requested URL /badpage was not foun on this server. </h4>
            <ToastContainer/>
        </Box>
    )
}

export default NotFound