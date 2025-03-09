import { showErrorToast } from "./toast";
export const handleApiError = (error, navigate) => {


    if (error.response) {


        if (error.response.status === 412) {
            navigate("/");
        } else {



            showErrorToast(error.response.data.error);
        }



    } else if (error.request) {

        showErrorToast("Please check your internet connection.");
    } else {

        showErrorToast("An unexpected error occurred. Please try again.");
    }
};