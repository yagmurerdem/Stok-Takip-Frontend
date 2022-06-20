import React, {useState, useEffect} from 'react'
import {Link, useHistory, useParams } from 'react-router-dom';
import FirmaService from '../services/FirmaService'

const AddFirmaComponent = () => {


    const [firmaAdi, setFirma_adi] = useState('')
    const [marka, setMarka] = useState('')
    const [firmaAdresi, setFirma_adresi] = useState('')
    const [firmaTel1, setFirma_tel1] = useState('')
    const [firmaTel2, setFirma_tel2] = useState('')
    const [firmaVergiKimlikNo, setFirma_vergi_kimlik_no] = useState('')
    const [firmaFax, setFirma_fax] = useState('')
    const [firmaYetkiliAd, setFirma_yetkili_ad] = useState('')
    const [firmaAciklama, setFirma_aciklama] = useState('')


    // const [lastName, setLastName] = useState('')
    // const [emailId, setEmailId] = useState('')

    
    const history = useHistory();
    const {firmaId} = useParams();

    const saveOrUpdateFirma = (e) => {
        e.preventDefault();

        const firma = {firmaAdi,marka,firmaAdresi,firmaTel1,firmaTel2,firmaVergiKimlikNo,firmaFax,firmaYetkiliAd,firmaAciklama}

        if(firmaId){
            FirmaService.updateFirma(firmaId,firma).then((response) => {
                history.push('/firmas')
            }).catch(error => {
                console.log(error)
            })

        }
        else{
            FirmaService.createFirma(firma).then((response) =>{

                console.log(response.data)
    
                history.push('/firmas');
    
            }).catch(error => {
                console.log(error)
            })
        }
        
    }

    useEffect(() => {

            FirmaService.getFirmaById(firmaId).then((response) =>{
            setFirma_adi(response.data.firmaAdi)
            setMarka(response.data.marka)
            setFirma_adresi(response.data.firmaAdresi)
            setFirma_tel1(response.data.firmaTel1)
            setFirma_tel2(response.data.firmaTel2)
            setFirma_vergi_kimlik_no(response.data.firmaVergiKimlikNo)
            setFirma_fax(response.data.firmaFax)
            setFirma_yetkili_ad(response.data.firmaYetkiliAd)
            setFirma_aciklama(response.data.firmaAciklama)

        }).catch(error => {
            console.log(error)
        })
    }, [])

    const title = () => {

        if(firmaId){
            return <h2 className = "text-center">Firma Güncelle</h2>
        }else{
            return <h2 className = "text-center">Firma Ekle</h2>
        }
    }

    return (
        <div>
           <br /><br />
           <div className = "container">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                       {
                           title()
                       }
                        <div className = "card-body">
                            <form>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Firma Adı :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Firma Adını Giriniz"
                                        name = "firmaAdi"
                                        className = "form-control"
                                        value = {firmaAdi}
                                        onChange = {(e) => setFirma_adi(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Marka :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Markayı Giriniz"
                                        name = "marka"
                                        className = "form-control"
                                        value = {marka}
                                        onChange = {(e) => setMarka(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Firma Adresi :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Firma Adresini Giriniz"
                                        name = "firmaAdresi"
                                        className = "form-control"
                                        value = {firmaAdresi}
                                        onChange = {(e) => setFirma_adresi(e.target.value)}
                                    >
                                    </input>
                                </div>




                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Firma Tel 1 :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Firma Tel 1 Giriniz"
                                        name = "firmaTel1"
                                        className = "form-control"
                                        value = {firmaTel1}
                                        onChange = {(e) => setFirma_tel1(e.target.value)}
                                    >
                                    </input>
                                </div>




                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Firma Tel 2 :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Firma Tel 2 Giriniz"
                                        name = "firmaTel2"
                                        className = "form-control"
                                        value = {firmaTel2}
                                        onChange = {(e) => setFirma_tel2(e.target.value)}
                                    >
                                    </input>
                                </div>


                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Firma Vkn :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Firma Vkn Giriniz"
                                        name = "firmaVergiKimlikNo"
                                        className = "form-control"
                                        value = {firmaVergiKimlikNo}
                                        onChange = {(e) => setFirma_vergi_kimlik_no(e.target.value)}
                                    >
                                    </input>
                                </div>


                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Firma Fax :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Firma Fax Giriniz"
                                        name = "firmaFax"
                                        className = "form-control"
                                        value = {firmaFax}
                                        onChange = {(e) => setFirma_fax(e.target.value)}
                                    >
                                    </input>
                                </div>


                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Firma Yetkili Ad :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Firma Yetkili Ad Giriniz"
                                        name = "firmaYetkiliAd"
                                        className = "form-control"
                                        value = {firmaYetkiliAd}
                                        onChange = {(e) => setFirma_yetkili_ad(e.target.value)}
                                    >
                                    </input>
                                </div>




                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Firma Açıklama :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Firma Açıklama Giriniz"
                                        name = "firmaAciklama"
                                        className = "form-control"
                                        value = {firmaAciklama}
                                        onChange = {(e) => setFirma_aciklama(e.target.value)}
                                    >
                                    </input>
                                </div>



                                <button className = "btn btn-success" onClick = {(e) => saveOrUpdateFirma(e)} >Submit </button>
                                <Link to="/firmas" className="btn btn-danger"> Cancel </Link>
                            </form>

                        </div>
                    </div>
                </div>

           </div>

        </div>
    )
}

export default AddFirmaComponent
