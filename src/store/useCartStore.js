import {create} from "zustand";
import {createJSONStorage, persist} from "zustand/middleware";
import {v4 as uuidv4} from 'uuid';


let useCartStore = (set, get) => ({
    cart:[],


    async addToCart(product) {
        const cart = get().cart;
        const productWithId = {...product, id: uuidv4()};
        const updateCart = [...cart, productWithId];
        set({
            cart: updateCart
        })
    },

    async removeFromCart(productId) {
        const cart = get().cart;
        set({
            cart: [...cart].filter(product => product.id !== productId)
        })

    },
})


useCartStore = persist(useCartStore, {
    name: 'CART',
    storage: createJSONStorage(() => localStorage)
})
export default create(useCartStore);