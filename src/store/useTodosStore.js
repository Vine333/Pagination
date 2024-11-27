import {create} from "zustand";
import {TodosService} from "../services/index.js";

const useTodosStore = (set, get) => ({

    isLoading: false,
    todos: [],

    async loadTodos() {
        set({
            isLoading: true
        });

        const response = await TodosService.List();

        console.log('request', response);
        set({
            isLoading: false
        });


        if (response.error) {
            return;
        }


        set({
            todos: response.slice(0, 50)
        })
    }
});


export default create(useTodosStore)
