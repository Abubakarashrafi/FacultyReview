import {createContext, useCallback, useState,useContext, useEffect} from "react";
import axios from "axios";
const TeacherContext = createContext();


export const TeacherProvider = ({children})=>{
    
    const [teachers,setTeachers] = useState([]);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);
    const [teacher,setTeacher] = useState({});
    
   

    const fetchTeachers = useCallback(async(query,order,approved,signal)=>{
    setLoading(true);
    setError(null);

    try {
        const config = {
            params: { search: query, order },
        };
        
        if(approved!==undefined) config.params.approved = approved;
        if (signal) {
            config.signal = signal;
        }
        const resp = await axios.get(`${import.meta.env.VITE_API_URL}/teacher`,config);
        setTeachers(resp.data.formattedTeachers);
       
       
        
    } catch (err) {
        if(!axios.isCancel(err)){
            setError(err.message);
        }
    }finally{
        setLoading(false);
    }
   },[])

   const fetchTeacherById = useCallback(async(id)=>{
    setLoading(true)
    setError(null);
    try {
        const resp = await axios.get(`${import.meta.env.VITE_API_URL}/teacher/${id}`);
        
        
        
        setTeacher(resp.data);
       
    } catch (error) {
        setError(error.message);
    }finally{
        setLoading(false);
    }
   },[]) 

   return (
    <TeacherContext.Provider
    value={{
        teachers,
        teacher,
        loading,
        error,
        fetchTeachers,
        fetchTeacherById
    }}
    >
        {children}
    </TeacherContext.Provider>
   );
};


export const useTeachers = () => useContext(TeacherContext);
