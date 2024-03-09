import axios from "axios";

const apiClient = axios.create({
    baseURL:"http://127.0.0.1:8000"
})


export default {
    async posts(){
        const response = await apiClient.get('api/posts');
        return response.data.data;
    },
    async increaseVote(body){
        const response = await apiClient.put(`api/upvote/${body.id}`, body);
        return response.data.data;
    },
}