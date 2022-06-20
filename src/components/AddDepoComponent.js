import React, {useState, useEffect} from 'react'
import {Link, useHistory, useParams } from 'react-router-dom';
import DepoService from '../services/DepoService'

const AddDepoComponent = () => {


    const [depoAdi, setDepo_adi] = useState('')
    const [depoAdresi, setDepo_adresi] = useState('')
    const [depoAciklama, setDepo_aciklama] = useState('')


    // const [lastName, setLastName] = useState('')
    // const [emailId, setEmailId] = useState('')

    
    const history = useHistory();
    const {depoId} = useParams();

    const saveOrUpdateDepo = (e) => {
        e.preventDefault();

        const depo = {depoAdi,depoAdresi, depoAciklama}

        if(depoId){
            DepoService.updateDepo(depoId,depo).then((response) => {
                history.push('/depos')
            }).catch(error => {
                console.log(error)
            })

        }
        else{
            DepoService.createDepo(depo).then((response) =>{

                console.log(response.data)
    
                history.push('/depos');
    
            }).catch(error => {
                console.log(error)
            })
        }
        
    }

    useEffect(() => {

        DepoService.getDepoById(depoId).then((response) =>{
            setDepo_adi(response.data.depoAdi)
            setDepo_adresi(response.data.depoAdresi)
            setDepo_aciklama(response.data.depoAciklama)
        }).catch(error => {
            console.log(error)
        })
    }, [])

    const title = () => {

        if(depoId){
            return <h2 className = "text-center">Depo Güncelle</h2>
        }else{
            return <h2 className = "text-center">Depo Ekle</h2>
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
                                    <label className = "form-label"> Depo Adı :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Depo Adını Giriniz"
                                        name = "depoAdi"
                                        className = "form-control"
                                        value = {depoAdi}
                                        onChange = {(e) => setDepo_adi(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Depo Adresi :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Depo Adresini Giriniz"
                                        name = "depoAdresi"
                                        className = "form-control"
                                        value = {depoAdresi}
                                        onChange = {(e) => setDepo_adresi(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Depo Açıklama :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Depo Açıklama Giriniz"
                                        name = "depoAciklama"
                                        className = "form-control"
                                        value = {depoAciklama}
                                        onChange = {(e) => setDepo_aciklama(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <button className = "btn btn-success" onClick = {(e) => saveOrUpdateDepo(e)} >Submit </button>
                                <Link to="/depos" className="btn btn-danger"> Cancel </Link>
                            </form>

                        </div>
                    </div>
                </div>

           </div>

        </div>
    )
}

export default AddDepoComponent
