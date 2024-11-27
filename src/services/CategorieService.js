import Service from "./Service.js";


class CategorieService extends Service {

    async Categories() {
        return this.request('/categories')
    }
}

export default new CategorieService();