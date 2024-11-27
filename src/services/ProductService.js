import Service from "./Service.js";

class ProductService extends Service{

    // async Product(){
    //     return this.request(`/products?limit=10`);
    // }
    // async ProductPage2(){
    //     return this.request(`/products?limit=20`);
    // }
    // async ProductsByCategory(category){
    //     return this.request(`/products/category/${category}`);
    // }
    //
    // async ProductsBySorted(){
    //     return this.request(`/products?sort=desc`)
    // }

async Products(country,category_id){
    return this.request(`/products?country_iso=${country}&category_id=${category_id}`)
}

 }
export default new ProductService();