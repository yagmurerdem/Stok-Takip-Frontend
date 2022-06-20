import axios from 'axios'

const EMPLOYEE_BASE_REST_API_URL = 'http://localhost:8159/firma';

class FirmaService {


    getAllFirma() {
        return axios.get('http://localhost:8159/firmatumliste')
    }

    createFirma(firma) {
        return axios.post('http://localhost:8159/firmaniekle', firma)
    }

    deleteFirma(firmaId) {
        return axios.delete('http://localhost:8159/firmasil/' + firmaId)
    }

    getFirmaById(firmaId) {
        return axios.get('http://localhost:8159/firmaidgetir/' + firmaId)
    }

    updateFirma(firmaId, firma) {
        return axios.put('http://localhost:8159/firmaguncelle/' + firmaId, firma)
    }

    
}

export default new FirmaService();