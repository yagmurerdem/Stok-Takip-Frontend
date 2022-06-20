import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import SeriNoluUrunService from '../services/SeriNoluUrunService'

const ListSeriNoluUrunComponent = () => {

    const [seriNoluUruns, setSeri_nolu_urun] = useState([])

    useEffect(() => {

        getAllSeriNoluUrun();
        
    }, [])

    const getAllSeriNoluUrun = () => {
        SeriNoluUrunService.getAllSeriNoluUrun().then((response) => {
            setSeri_nolu_urun(response.data)
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }

    const deleteSeriNoluUrun = (seriNoluUrunId) => {
        SeriNoluUrunService.deleteSeriNoluUrun(seriNoluUrunId).then((response) => {
            getAllSeriNoluUrun();

        }).catch(error => {
            console.log(error);
        })

    }

    return (
        <div className="container">
            <h2 className="text-center"> Seri Nolu Ürün Listesi </h2>
            <Link to="/add-seriNoluUrun" className="btn btn-primary mb-2" >Seri Nolu Ürün Ekle </Link>
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th> Seri Nolu Ürün Id </th>
                        <th> Seri Nolu Ürün Adı </th>
                        <th> Seri Nolu Ürün Seri No </th>
                        <th> İşlem </th>
                    </tr>

                </thead>

                <tbody>
                    {
                        seriNoluUruns.map(
                            (seriNoluUrun) =>
                                <tr key={seriNoluUrun.seriNoluUrunId}>
                                    <td>  {seriNoluUrun.seriNoluUrunId} </td>
                                    <td>  {seriNoluUrun.seriNoluUrunAdi} </td>
                                    <td>  {seriNoluUrun.seriNoluUrunSeriNo}</td>
                                    
                                    <td>
                                        <Link className="btn btn-info" to={`/edit-seriNoluUrun/${seriNoluUrun.seriNoluUrunId}`}> Güncelle </Link>
                                        <button className="btn btn-danger" onClick={() => deleteSeriNoluUrun(seriNoluUrun.seriNoluUrunId)}
                                            style={{ marginLeft: "10px" }}>Sil</button>
                                    </td>
                                </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListSeriNoluUrunComponent
