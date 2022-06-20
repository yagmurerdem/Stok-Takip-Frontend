import React, {useState, useEffect} from 'react'
import {Link, useHistory, useParams } from 'react-router-dom';

import SeriNoluUrunService from '../services/SeriNoluUrunService'

const AddSeriNoluUrunComponent = () => {


    const [seriNoluUrunAdi, setSeri_nolu_urun_adi] = useState('')
    const [seriNoluUrunSeriNo, setSeri_nolu_urun_seri_no] = useState('')
    


    // const [lastName, setLastName] = useState('')
    // const [emailId, setEmailId] = useState('')

    
    const history = useHistory();
    const {seriNoluUrunId} = useParams();

    const saveOrUpdateSeriNoluUrun = (e) => {
        e.preventDefault();

        const seriNoluUrun = {seriNoluUrunAdi,seriNoluUrunSeriNo}

        if(seriNoluUrunId){
            SeriNoluUrunService.updateSeriNoluUrun(seriNoluUrunId,seriNoluUrun).then((response) => {
                history.push('/seriNoluUruns')
            }).catch(error => {
                console.log(error)
            })

        }
        else{
            SeriNoluUrunService.createSeriNoluUrun(seriNoluUrun).then((response) =>{

                console.log(response.data)
    
                history.push('/seriNoluUruns');
    
            }).catch(error => {
                console.log(error)
            })
        }
        
    }

    useEffect(() => {

        SeriNoluUrunService.getSeriNoluUrunById(seriNoluUrunId).then((response) =>{
            setSeri_nolu_urun_adi(response.data.seriNoluUrunAdi)
            setSeri_nolu_urun_seri_no(response.data.seriNoluUrunSeriNo)
            
        }).catch(error => {
            console.log(error)
        })
    }, [])

    const title = () => {

        if(seriNoluUrunId){
            return <h2 className = "text-center">Seri Nolu Ürün Güncelle</h2>
        }else{
            return <h2 className = "text-center">Seri Nolu Ürün Ekle</h2>
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
                                    <label className = "form-label"> Seri Nolu Ürün Adı :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Seri Nolu Ürün Adını Giriniz"
                                        name = "seriNoluUrunAdi"
                                        className = "form-control"
                                        value = {seriNoluUrunAdi}
                                        onChange = {(e) => setSeri_nolu_urun_adi(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Seri Nolu Ürün Seri No :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Seri Nolu Ürün Seri No Giriniz"
                                        name = "seriNoluUrunSeriNo"
                                        className = "form-control"
                                        value = {seriNoluUrunSeriNo}
                                        onChange = {(e) => setSeri_nolu_urun_seri_no(e.target.value)}
                                    >
                                    </input>
                                </div>

                                

                                <button className = "btn btn-success" onClick = {(e) => saveOrUpdateSeriNoluUrun(e)} >Submit </button>
                                <Link to="/seriNoluUruns" className="btn btn-danger"> Cancel </Link>
                            </form>

                        </div>
                    </div>
                </div>

           </div>

        </div>
    )
}

export default AddSeriNoluUrunComponent
