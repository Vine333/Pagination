import {create} from "zustand";
import {ProductService} from "../services/index.js";
import productService from "../services/ProductService.js";


const useProductStore = (set, get)=>({
    isLoadingProducts: false,
    product:[],
    currentPage: 1,
    isAtEnd: false,

    async loadProducts(country,category_id){

        const isAtEnd = get().isAtEnd
        const currentPage = get().currentPage



        if(isAtEnd){
            console.log(errorrrrr)
            return;
        }

        set({
            isLoadingProducts: true,
        })

        console.log("Loading products...")


        const response = await ProductService.Products(country,category_id);

        console.log('response',response)

        set({
            isLoadingProducts: false
        });

        if(response.error){
            return console.log('Error response')
        }


        if (!response.data|| response.data.length === 0) {
            set({
                isAtEnd: true,
            });
            console.log("No more data available")

        }
        console.log("Updating products...");
        set({
            currentPage: currentPage + 1,
            product:[...get().product,...response.products]
        })
     console.log("Products updated successfully")
    },
       async resetProducts() {
           set({
               isAtEnd: false,
               currentPage: 1,
               product: []
           });
           //   async loadProduct(){
           //       set({
           //           isLoading: true,
           //       })
           //
           //   const response = await ProductService.Product();
           //
           //       console.log('request',response);
           //       set({
           //           isLoading: false
           //       })
           //       if(response.error){
           //           return;
           //       }
           //
           //       set({
           //           products: response,
           //       })
           //
           //   },
           //   async loadProduct2(){
           //       set({
           //           isLoading: true,
           //       })
           //
           //       const response = await ProductService.ProductPage2();
           //
           //       console.log('request',response);
           //       set({
           //           isLoading: false
           //       })
           //       if(response.error){
           //           return;
           //       }
           //
           //       set({
           //           products: response,
           //       })
           //
           //   },
           //
           //
           //   async productsByCategory(category){
           //     set({
           //         isLoading: true,
           //     })
           //
           //     const response = await ProductService.ProductsByCategory(category);
           //
           //     console.log('request',response);
           //     set({
           //         isLoading: false
           //     })
           //     if(response.error){
           //         return;
           //     }
           //
           //     set({
           //         products: response,
           //     })
           //
           //
           // },
           //
           //
           //   async productBySorts(){
           //
           //       set({
           //           isLoading: true
           //       })
           //       const response = await ProductService.ProductsBySorted();
           //       console.log("requestBySorted",response);
           //       set({
           //           isLoading: false
           //       })
           //       if(response.error){
           //           return;
           //       }
           //
           //       set({
           //           products: response
           //       })
           //   },
           //
           //
           //
           //
           //   async clearProducts(){
           //       set({
           //           products: [],
           //       })
           //   }
           //

       }

})

export default create(useProductStore)