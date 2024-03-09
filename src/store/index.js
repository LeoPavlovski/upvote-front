import Vue from "vue";
import Vuex from 'vuex'

import postRepository from "@/repository/postRepository";

Vue.use(Vuex);


export default new Vuex.Store({
    //State
    state:{
        posts:[]
    },
    mutations:{

    },
    actions:{
        async posts(){
            const response = await postRepository.posts();
            return response;
        },
        // eslint-disable-next-line no-unused-vars
        async increaseVote({commit } ,body){
            console.log(body);
            const response = await postRepository.increaseVote(body);
            return response;
        }
    }
})

