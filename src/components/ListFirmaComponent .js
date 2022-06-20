import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import FirmaService from '../services/FirmaService'

const ListFirmaComponent = () => {

    const [firmas, setFirma] = useState([])

    useEffect(() => {

        getAllFirma();
    }, [])

    const getAllFirma = () => {
        FirmaService.getAllFirma().then((response) => {
            setFirma(response.data)
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }

    const deleteFirma = (firmaId) => {
        FirmaService.deleteFirma(firmaId).then((response) => {
            getAllFirma();

        }).catch(error => {
            console.log(error);
        })

    }

    return (
        <div className="container">
            <h2 className="text-center"> Firma Listesi </h2>
            <Link to="/add-firma" className="btn btn-primary mb-2" > Firma Ekle </Link>
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th> Firma Id </th>
                        <th> Firma Adı </th>
                        <th> Marka </th>
                        <th> Firma Adresi </th>
                        <th> Firma Tel 1 </th>
                        <th> Firma Tel 2 </th>
                        <th> Firma Vergi Kimlik No </th>
                        <th> Firma Fax </th>
                        <th> Firma Yetkili Ad </th>
                        <th> Firma Açıklama </th>
                    </tr>

                </thead>

                <tbody>
                    {
                        firmas.map(
                            (firma) =>
                                <tr key={firma.firmaId}>
                                    <td>  {firma.firmaId} </td>
                                    <td>  {firma.firmaAdi} </td>
                                    <td>  {firma.marka}</td>
                                    <td>  {firma.firmaAdresi}</td>
                                    <td>  {firma.firmaTel1} </td>
                                    <td>  {firma.firmaTel2} </td>
                                    <td>  {firma.firmaVergiKimlikNo}</td>
                                    <td>  {firma.firmaFax}</td>
                                    <td>  {firma.firmaYetkiliAd}</td>
                                    <td>  {firma.firmaAciklama}</td>


                                    <td>
                                        <Link className="btn btn-info" to={`/edit-firma/${firma.firmaId}`}> Güncelle </Link>
                                        <button className="btn btn-danger" onClick={() => deleteFirma(firma.firmaId)}
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

export default ListFirmaComponent
