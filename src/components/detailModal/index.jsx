import React, { useState, useEffect } from 'react'
import Modal from './modal'
import Skeleton from '../skeleton'


const DetailModal = ({ id }) => {
    const [detailTransaction, setDetailTransaction] = useState()
    const [skeleton, setSkeleton] = useState(false)

    const fetchDetail = async () => {
        try {
            await fetch(`http://localhost:3000/api/transactions/${id}`)
                .then(response => response.json())
                .then(data => setDetailTransaction(data))
            setSkeleton(true)
        } catch (err) {
            console.log(err.message);
        }
    }

    useEffect(() => {
        fetchDetail()
    }, [id, skeleton])

    return (
        <div className="detail-modal-container">
            {skeleton ?
                <>
                    {detailTransaction?.map(({ type, title, description, amount, index }) =>
                        <Modal key={index} type={type} title={title} description={description} amount={amount} />
                    )}</>
                :
                <div className="detail-modal-skeleton">
                    <Skeleton />
                </div>
            }
        </div>
    )
}
export default DetailModal