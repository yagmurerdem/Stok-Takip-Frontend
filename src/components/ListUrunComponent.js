import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import UrunService from '../services/UrunService'

const ListUrunComponent = () => {

    const [uruns, setUrun] = useState([])

    useEffect(() => {

        getAllUrun();
    }, [])

    const getAllUrun = () => {
        UrunService.getAllUrun().then((response) => {
            setUrun(response.data)
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }

    const deleteUrun = (urunId) => {
        UrunService.deleteUrun(urunId).then((response) => {
            getAllUrun();

        }).catch(error => {
            console.log(error);
        })

    }

    return (
        <div className="container">
            <h2 className="text-center"> Ürün Listesi </h2>
            <Link to="/add-urun" className="btn btn-primary mb-2" > Ürün Ekle </Link>
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th> Ürün Id </th>
                        <th> Ürün Adı </th>
                        <th> Ürün Kodu </th>
                        <th> Ürün Açıklama </th>
                        <th> Ürün Birimi </th>
                        <th> Ürün Varyant </th>
                        <th> Ürün Tip Id </th> 
                        <th> Üst Ürün Id </th> 
                        <th> İşlem </th>
                    </tr>

                </thead>
                
                <tbody>
                    {
                        uruns.map(
                            (urun) =>
                                <tr key={urun.urunId}>
                                    <td>  {urun.urunId} </td>
                                    <td>  {urun.urunAdi} </td>
                                    <td>  {urun.urunKodu}</td>
                                    <td>  {urun.urunAciklama}</td>
                                    <td>  {urun.urunBirimi}</td>
                                    <td>  {urun.urunVaryant}</td>
                                    <td>  {urun.urunTipId}</td> 
                                    <td>  {urun.ustUrunId}</td> 
                                    
                                    <td>
                                        <Link className="btn btn-info" to={`/edit-urun/${urun.urunId}`}> Güncelle </Link>
                                        <button className="btn btn-danger" onClick={() => deleteUrun(urun.urunId)}
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

export default ListUrunComponent
