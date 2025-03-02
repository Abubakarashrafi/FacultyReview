import {createContext, useCallback, useState,useContext} from "react";
import axios from "axios";

const TeacherContext = createContext();


export const TeacherProvider = ({children})=>{
    const [teachers,setTeachers] = useState([]);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);
    
    const fetchTeachers = useCallback(async(query,order,signal)=>{
    setLoading(true);
    setError(null);

    try {
        const resp = await axios.get('http://localhost:4000/teacher',{
            params:{search:query,order},
            signal,
        });
        setTeachers(resp.data.formattedTeachers);
        console.log(resp.data.formattedTeachers);
        
    } catch (err) {
        if(!axios.isCancel(err)){
            setError(err.message);
        }
    }finally{
        setLoading(false);
    }
   },[])
   return (
    <TeacherContext.Provider
    value={{
        teachers,
        loading,
        error,
        fetchTeachers,
    }}
    >
        {children}
    </TeacherContext.Provider>
   );
};


export const useTeachers = () => useContext(TeacherContext);
