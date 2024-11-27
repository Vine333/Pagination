import Service from "./Service.js";

class CardService extends Service{

    async Card(){
        return this.request('/carts');
    }

}
export default new CardService()