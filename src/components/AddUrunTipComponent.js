import React, {useState, useEffect} from 'react'
import {Link, useHistory, useParams } from 'react-router-dom';
import UrunTipService from '../services/UrunTipService'

const AddUrunTipComponent = () => {

    const [ustUrunId, setUst_urun_id] = useState('')
    const [urunTipAdi, setUrun_tip_adi] = useState('')
    const [urunTipAciklama, setUrun_tip_aciklama] = useState('')
    const [urunVaryant, setUrun_varyant] = useState('')


    // const [lastName, setLastName] = useState('')
    // const [emailId, setEmailId] = useState('')

    
    const history = useHistory();
    const {urunTipId} = useParams();

    const saveOrUpdateUrunTip = (e) => {
        e.preventDefault();

        const uruntip = {ustUrunId,urunTipAdi,urunTipAciklama,urunVaryant}

        if(urunTipId){
            UrunTipService.updateUrunTip(urunTipId,uruntip).then((response) => {
                history.push('/uruntips')
            }).catch(error => {
                console.log(error)
            })

        }
        else{
            UrunTipService.createUrunTip(uruntip).then((response) =>{

                console.log(response.data)
    
                history.push('/uruntips');
    
            }).catch(error => {
                console.log(error)
            })
        }
        
    }

    useEffect(() => {

        UrunTipService.getUrunTipById(urunTipId).then((response) =>{
            setUst_urun_id(response.data.ustUrunId)
            setUrun_tip_adi(response.data.urunTipAdi)
            setUrun_tip_aciklama(response.data.urunTipAciklama)
            setUrun_varyant(response.data.urunVaryant)

          
        }).catch(error => {
            console.log(error)
        })
    }, [])

    const title = () => {

        if(urunTipId){
            return <h2 className = "text-center">Ürün Güncelle</h2>
        }else{
            return <h2 className = "text-center">Ürün Ekle</h2>
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
                                    <label className = "form-label"> Üst Ürün Id :</label>
                                    <input
                                        type = "integer"
                                        placeholder = "Üst Ürün Id Giriniz"
                                        name = "ustUrunId"
                                        className = "form-control"
                                        value = {ustUrunId}
                                        onChange = {(e) => setUst_urun_id(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Ürün Tip Adı :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Ürün Tip Adını Giriniz"
                                        name = "urunTipAdi"
                                        className = "form-control"
                                        value = {urunTipAdi}
                                        onChange = {(e) => setUrun_tip_adi(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Ürün Tip Açıklama :</label>
                                    <input
                                        type = "text"
                                        placeholder = " Ürün Tip Açıklama Giriniz"
                                        name = "urunTipAciklama"
                                        className = "form-control"
                                        value = {urunTipAciklama}
                                        onChange = {(e) => setUrun_tip_aciklama(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Ürün Varyant:</label>
                                    <input
                                        type = "text"
                                        placeholder = "Ürün Varyant Giriniz"
                                        name = "urunVaryant"
                                        className = "form-control"
                                        value = {urunVaryant}
                                        onChange = {(e) => setUrun_varyant(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <button className = "btn btn-success" onClick = {(e) => saveOrUpdateUrunTip(e)} >Submit </button>
                                <Link to="/uruntips" className="btn btn-danger"> Cancel </Link>
                            </form>

                        </div>
                    </div>
                </div>

           </div>

        </div>
    )
}

export default AddUrunTipComponent
