import axios from 'axios'

const EMPLOYEE_BASE_REST_API_URL = 'http://localhost:8158/depo';

class UrunTipService {


    getAllUrunTip() {
        return axios.get('http://localhost:8157/uruntiptumliste')
    }

    createUrunTip(uruntip) {
        return axios.post('http://localhost:8157/uruntipekle',uruntip)
    }

    deleteUrunTip(urunTipId) {
        return axios.delete('http://localhost:8157/uruntipsil/' + urunTipId)
    }

    getUrunTipById(urunTipId) {
        return axios.get('http://localhost:8157/uruntipidgetir/' +urunTipId)
    }

    updateUrunTip(urunTipId, uruntip) {
        return axios.put('http://localhost:8157/uruntipguncelle/' + urunTipId,uruntip)
    }

   
}

export default new UrunTipService();