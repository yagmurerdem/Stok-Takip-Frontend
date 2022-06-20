import axios from 'axios'

//const EMPLOYEE_BASE_REST_API_URL = 'http://localhost:8161/depo';

class SeriNoluUrunService {


    getAllSeriNoluUrun() {
        return axios.get('http://localhost:8161/serinoluuruntumliste')
    }

    createSeriNoluUrun(seriNoluUrun) {
        return axios.post('http://localhost:8161/serinoluurunekle', seriNoluUrun)
    }

    deleteSeriNoluUrun(seriNoluUrunId) {
        return axios.delete('http://localhost:8161/serinoluurunsil/' + seriNoluUrunId)
    }

    getSeriNoluUrunById(seriNoluUrunId) {
        return axios.get('http://localhost:8161/serinoluurunidgetir/' + seriNoluUrunId)
    }

    updateSeriNoluUrun(seriNoluUrunId,seriNoluUrun) {
        return axios.put('http://localhost:8161/serinoluurunguncelle/' + seriNoluUrunId, seriNoluUrun)
    }

}

export default new SeriNoluUrunService();