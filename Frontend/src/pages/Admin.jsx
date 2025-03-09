import React, { useEffect, useState, useMemo } from "react";
import { Users, AlertTriangle, BookOpen, Star } from "lucide-react";
import TeacherTable from '../components/Admin/TeacherTable';
import axios from "axios";
import Button from "../components/ui/Button"
import { handleApiError } from "../utils/errorhandler";
import { Navigate, useNavigate } from "react-router";

const AdminPanel = () => {
    const [analytics, setAnalytics] = useState({ pending: 0, totalReviews: 0, totalTeacher: 0, totalUsers: 0 });
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
   
    useEffect(() => {
        const fetchAnalytics = async () => {
            try {
               
                
                const resp = await axios.get(`${import.meta.env.VITE_API_URL}/admin/stats`, {
                    withCredentials: true,
                });
                setAnalytics(resp.data);
               
            } catch (err) {
                handleApiError(err,navigate)
            } finally {
                setLoading(false);
                
            }
        };

        fetchAnalytics();
    }, []);

    
    const statsCards = useMemo(() => [
        {
            title: "Total Users",
            value: analytics.totalUsers,
            icon: <Users className="w-8 h-8 text-blue-500" />,
            bgColor: "bg-blue-50",
        },
        {
            title: "Pending Approvals",
            value: analytics.pending,
            icon: <AlertTriangle className="w-8 h-8 text-yellow-400" />,
            bgColor: "bg-yellow-50",
        },
        {
            title: "Total Teachers",
            value: analytics.totalTeacher,
            icon: <BookOpen className="w-8 h-8 text-blue-500" />,
            bgColor: "bg-blue-50",
        },
        {
            title: "Total Reviews",
            value: analytics.totalReviews,
            icon: <Star className="w-8 h-8 text-blue-500" />,
            bgColor: "bg-blue-50",
        },
    ], [analytics]);

    return (
        <div className="container py-20 rounded-xl ">
            <div className="flex justify-between">
                <h1 className="text-3xl text-black pb-7 text-center md:text-4xl md:text-left font-bold">
                    Admin Dashboard
                </h1>
                <Button 
                href={"/add-faculty"}
                text={"Add Teacher"}
                className={"p-2"}
                color={"PRIMARY"}/>
            </div>

            {loading ? (
                <div className="flex justify-center items-center h-64">
                    <p>Loading...</p>
                </div>
            ) : (
                <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center sm:text-left">
                        {statsCards.map((card, index) => (
                            <div key={index} className="bg-white border border-gray-200 p-6 rounded-lg flex flex-col sm:flex-row items-center justify-between shadow-lg">
                                <div className="flex-col flex space-y-1">
                                    <p className="text-gray-600 font-medium">{card.title}</p>
                                    <h2 className="font-semibold text-4xl sm:text-left">{card.value}</h2>
                                </div>
                                <div className={`${card.bgColor} p-4 rounded-full mt-4 sm:mt-0`}>
                                    {card.icon}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8">
                        <TeacherTable />
                    </div>
                </>
            )}
        </div>
    );
};

export default AdminPanel;