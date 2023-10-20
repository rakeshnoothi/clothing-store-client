import { useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance";

const useFetch = url => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setIsLoading(true);
                const response = await axiosInstance.get(url);
                setData(response);
            } catch (err) {
                console.log(err);
                setError(true);
            } finally {
                setIsLoading(false);
            }
        };
        fetchProducts();
    }, [url]);

    return {
        data,
        isLoading,
        error,
    };
};

export default useFetch;
