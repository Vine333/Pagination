import Service from "./Service.js";

class CartStoreService extends Service{


    async addProductToCart({id,title,price,image}){
        return this.request('/products',{
            method:"POST",
            body:JSON.stringify({id,title,price,image})
        })
    }


    async removeProductFromCart(productId){
        return this.request(`/products/${productId}`,{
            method:"DELETE"
        })
    }
}
export default new CartStoreService();