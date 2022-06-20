import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import DepoService from '../services/DepoService'

const ListDepoComponent = () => {

    const [depos, setDepo] = useState([])

    useEffect(() => {

        getAllDepo();
    }, [])

    const getAllDepo = () => {
        DepoService.getAllDepo().then((response) => {
            setDepo(response.data)
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }

    const deleteDepo = (depoId) => {
        DepoService.deleteDepo(depoId).then((response) => {
            getAllDepo();

        }).catch(error => {
            console.log(error);
        })

    }

    return (
        <div className="container">
            <h2 className="text-center"> Depo Listesi </h2>
            <Link to="/add-depo" className="btn btn-primary mb-2" > Depo Ekle </Link>
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th> Depo Id </th>
                        <th> Depo Adı </th>
                        <th> Depo Adresi </th>
                        <th> Depo Açıklama </th>
                        <th> İşlem </th>
                    </tr>

                </thead>

                <tbody>
                    {
                        depos.map(
                            (depo) =>
                                <tr key={depo.depoId}>
                                    <td>  {depo.depoId} </td>
                                    <td>  {depo.depoAdi} </td>
                                    <td>  {depo.depoAdresi}</td>
                                    <td>  {depo.depoAciklama}</td>
                                    <td>
                                        <Link className="btn btn-info" to={`/edit-depo/${depo.depoId}`}> Güncelle </Link>
                                        <button className="btn btn-danger" onClick={() => deleteDepo(depo.depoId)}
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

export default ListDepoComponent
