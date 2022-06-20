import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import UrunTipService from '../services/UrunTipService'

const ListUrunTipComponent = () => {

    const [uruntips, setUrunTip] = useState([])

    useEffect(() => {

        getAllUrunTip();
        
    }, [])

    const getAllUrunTip = () => {
        UrunTipService.getAllUrunTip().then((response) => {
            setUrunTip(response.data)
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }

    const deleteUrunTip = (urunTipId) => {
        UrunTipService.deleteUrunTip(urunTipId).then((response) => {
            getAllUrunTip();

        }).catch(error => {
            console.log(error);
        })

    }

    return (
        <div className="container">
            <h2 className="text-center"> Ürün Tip Listesi </h2>
            <Link to="/add-uruntip" className="btn btn-primary mb-2" >  Ürün Tip Ekle </Link>
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>  Ürün Tip Id </th>
                        <th>  Üst Ürün Id </th>
                        <th>  Ürün Tip Adı </th>
                        <th>  Ürün Tip Açıklama </th>
                        <th> Ürün Varyant</th>
                        <th> İşlem </th>
                    </tr>

                </thead>

                <tbody>
                    {
                        uruntips.map(
                            (uruntip) =>
                                <tr key={uruntip. urunTipId}>
                                    <td>  {uruntip.urunTipId} </td>
                                    <td>  {uruntip. ustUrunId} </td>
                                    <td>  {uruntip.urunTipAdi}</td>
                                    <td>  {uruntip.urunTipAciklama}</td>
                                    <td>  {uruntip.urunVaryant}</td>
                                    <td>
                                        <Link className="btn btn-info" to={`/edit-uruntip/${uruntip.urunTipId}`}> Güncelle </Link>
                                        <button className="btn btn-danger" onClick={() => deleteUrunTip(uruntip.urunTipId)}
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

export default ListUrunTipComponent
