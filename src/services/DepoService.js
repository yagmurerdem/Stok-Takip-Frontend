import axios from 'axios'

const EMPLOYEE_BASE_REST_API_URL = 'http://localhost:8158/depo';

class DepoService {


    getAllDepo() {
        return axios.get('http://localhost:8158/depotumliste')
    }

    createDepo(depo) {
        return axios.post('http://localhost:8158/depoekle', depo)
    }

    deleteDepo(depoId) {
        return axios.delete('http://localhost:8158/deposil/' + depoId)
    }

    getDepoById(depoId) {
        return axios.get('http://localhost:8158/depoidgetir/' + depoId)
    }

    updateDepo(depoId, depo) {
        return axios.put('http://localhost:8158/depoguncelle/' + depoId, depo)
    }

    // getAllEmployees(){
    //     return axios.get('http://localhost:9115/depo/tumliste')
    // }

    // createEmployee(depo){
    //     return axios.post('http://localhost:9115/depo/ekle', depo)
    // }

    // getEmployeeById(depo_id){
    //     return axios.get('http://localhost:9115/depo/getir/'+depo_id)
    // }

    // updateEmployee(depo_id,depo){
    //     return axios.put('http://localhost:9115/depo/guncelle/'+depo_id, depo)
    // }

    // deleteEmployee(depo_id){
    //     return axios.delete('http://localhost:9115/depo/sil/'+depo_id)
    // }










    // getEmployeeById(depo_id){
    //     return axios.get(EMPLOYEE_BASE_REST_API_URL + '/' + depo_id);
    // }

    // updateEmployee(depo_id, depo){
    //     return axios.put(EMPLOYEE_BASE_REST_API_URL + '/' +depo_id,depo);
    // }

    // deleteEmployee(depo_id){
    //     return axios.delete(EMPLOYEE_BASE_REST_API_URL + '/' + depo_id);
    // }
}

export default new DepoService();