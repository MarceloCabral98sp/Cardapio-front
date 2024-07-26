import axios, { AxiosPromise } from "axios";
import { FoodData } from "../interfaces/FoodData";
import { useQuery } from "@tanstack/react-query";

const API_URL = 'http://localhost:8080';

const fetchData = async (): Promise<FoodData[]> => {
    const response = await axios.get(API_URL + '/food');
    return response.data;
}

export function useFoodData() {
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['food-data'],
        retry: 2
    });

    return {
        ...query, 
        data: query.data
    }
}


// import { useQuery } from '@tanstack/react-query';
// import axios, { AxiosPromise } from 'axios';
// import { FoodData } from '../interfaces/FoodData';

// const API_URL = 'http://localhost:8080';

// const fetchData = (): AxiosPromise<FoodData[]> => {
//   return axios.get<FoodData[]>(`${API_URL}/food`);
// };

// export function useFoodData() {
//   return useQuery(['food-data'], fetchData, { retry: 2 });
// }
