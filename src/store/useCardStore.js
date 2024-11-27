import {create} from "zustand";
import {CardService} from "../services/index.js";


const useCardStore = (set, get)=>({
    isLoading:false,
    card:[],

    async loadCard(){
        set({
            isLoading: true
        })
        const response=await CardService.Card();

        console.log("request",response);
        set({
            isLoading: false
        })
        if(response.error){
            return;
        }
    set({
        card:response,
    })

    }

})
export default create(useCardStore)