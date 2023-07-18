import { useQuery } from "react-query";
import { fetchFilteredTips } from "./fetchFilteredTips";

export default function useFilteredTips(filter){
    const {data, status} = useQuery(['filter',filter], fetchFilteredTips);
    return {data,status};
}