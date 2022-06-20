import axios from 'axios'

// const EMPLOYEE_BASE_REST_API_URL = 'http://localhost:8196/depo';

class UrunService {


    getAllUrun() {
        return axios.get('http://localhost:8156/uruntumliste')
    }

    createUrun(urun) {
        return axios.post('http://localhost:8156/urunekle', urun)
    }

    deleteUrun(urunId) {
        return axios.delete('http://localhost:8156/urunsil/' + urunId)
    }

    getUrunById(urunId) {
        return axios.get('http://localhost:8156/urunidgetir/' + urunId)
    }

    updateUrun(urunId, urun) {
        return axios.put('http://localhost:8156/urunguncelle/' + urunId, urun)
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

export default new UrunService();