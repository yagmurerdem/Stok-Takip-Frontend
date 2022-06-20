import React, {useState, useEffect} from 'react'
import {Link, useHistory, useParams } from 'react-router-dom';
import UrunService from '../services/UrunService'

const AddUrunComponent = () => {



    const [urunAdi, setUrun_adi] = useState('')
    const [urunKodu, setUrun_kodu] = useState('')
    const [urunAciklama, setUrun_aciklama] = useState('')
    const [urunBirimi, setUrun_birimi] = useState('')
    const [urunVaryant, setUrun_varyant] = useState('')
    const [urunTipId, setUrun_tip_id] = useState('')
    const [ustUrunId, setUst_urun_id] = useState('')


    // const [lastName, setLastName] = useState('')
    // const [emailId, setEmailId] = useState('')

    
    const history = useHistory();
    const {urunId} = useParams();

    
    const saveOrUpdateUrun = (e) => {
        e.preventDefault();

        const urun = {urunAdi,urunKodu,urunAciklama,urunBirimi,urunVaryant,urunTipId,ustUrunId}

        if(urunId){
            UrunService.updateUrun(urunId,urun).then((response) => {
                history.push('/uruns')
            }).catch(error => {
                console.log(error)
            })

        }
        else{
            UrunService.createUrun(urun).then((response) =>{

                console.log(response.data)
    
                history.push('/uruns');
    
            }).catch(error => {
                console.log(error)
            })
        }
        
    }

    useEffect(() => {

        UrunService.getUrunById(urunId).then((response) =>{

            setUrun_adi(response.data.urunAdi)
            setUrun_kodu(response.data.urunKodu)
            setUrun_aciklama(response.data.urunAciklama)
            setUrun_birimi(response.data.urunBirimi)
            setUrun_varyant(response.data.urunVaryant)
            setUrun_tip_id(response.data.urunTipId)
            setUst_urun_id(response.data.ustUrunId)


        }).catch(error => {
            console.log(error)
        })
    }, [])

    const title = () => {

        if(urunId){
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
                                    <label className = "form-label"> Ürün Adı :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Ürün Adını Giriniz"
                                        name = "urunAdi"
                                        className = "form-control"
                                        value = {urunAdi}
                                        onChange = {(e) => setUrun_adi(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Ürün Kodu :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Ürün Kodunu Giriniz"
                                        name = "urunKodu"
                                        className = "form-control"
                                        value = {urunKodu}
                                        onChange = {(e) => setUrun_kodu(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Ürün Açıklama :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Ürün Açıklama Giriniz"
                                        name = "urunAciklama"
                                        className = "form-control"
                                        value = {urunAciklama}
                                        onChange = {(e) => setUrun_aciklama(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Ürün Birimi :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Ürünün Birimini Giriniz"
                                        name = "urunBirimi"
                                        className = "form-control"
                                        value = {urunBirimi}
                                        onChange = {(e) => setUrun_birimi(e.target.value)}
                                    >
                                    </input>
                                </div>


                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Ürün Varyant :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Ürün Varyantını Giriniz"
                                        name = "urunVaryant"
                                        className = "form-control"
                                        value = {urunVaryant}
                                        onChange = {(e) => setUrun_varyant(e.target.value)}
                                    >
                                    </input>
                                </div>



                                  <div className = "form-group mb-2">
                                    <label className = "form-label"> Ürün Tip Id :</label>
                                    <input
                                    
                                        type = "Integer"
                                        placeholder = "Ürün Tip Id Giriniz"
                                        name = "urunTipId"
                                        className = "form-control"
                                        value = {urunTipId}
                                        onChange = {(e) => setUrun_tip_id(e.target.value)}
                                    >
                                    </input>
                                </div> 



                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Üst Ürün Id :</label>
                                    <input
                                    
                                        type = "Integer"
                                        placeholder = "Üst Ürün Id Giriniz"
                                        name = "ustUrunId"
                                        className = "form-control"
                                        value = {ustUrunId}
                                        onChange = {(e) => setUst_urun_id(e.target.value)}
                                    >
                                    </input>
                                </div> 




                                <button className = "btn btn-success" onClick = {(e) => saveOrUpdateUrun(e)} >Submit </button>
                                <Link to="/uruns" className="btn btn-danger"> Cancel </Link>
                            </form>

                        </div>
                    </div>
                </div>

           </div>

        </div>
    )
}

export default AddUrunComponent
