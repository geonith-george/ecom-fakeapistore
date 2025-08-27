import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../api/ProductListApi";

export const usePosts = () => {
    return useQuery({
        queryKey: ['posts'],
        queryFn: getPosts
    })
}