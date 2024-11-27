import Service from "./Service.js";

class TodosService extends Service {


    async List() {
        return this.request('/todos');
    }

    async GetTodo(id) {
        return this.request(`/todos/${id}`);
    }
}

export default new TodosService();
