import { showErrorToast } from "./toast";

export const handleApiError = (error) => {
   

    if (error.response) {
        
        
      showErrorToast(error.response.data.error);
      
        
        
    } else if (error.request) {
        
        showErrorToast("Please check your internet connection.");
    } else {
        
        showErrorToast("An unexpected error occurred. Please try again.");
    }
};