import React from 'react'

function CustomerDetailsPage({data}) {
    console.log(data);
  return (
    <div className='customer-details'>
        <h4>Customer's Details</h4>
        <div className='customer-detail__main'>
            <div className='customer-detail-item'>
                <span>Name :</span>
                <p>{data.name}</p>
            </div>

            <div className='customer-detail-item'>
                <span>last Name :</span>
                <p>{data.lastName}</p>
            </div>

            <div className='customer-detail-item'>
                <span>Email :</span>
                <p>{data.email}</p>
            </div>

            <div className='customer-detail-item'>
                <span>Phone :</span>
                <p>{data.phone}</p>
            </div>

            <div className='customer-detail-item'>
                <span>Address :</span>
                <p>{data.address}</p>
            </div>

            <div className='customer-detail-item'>
                <span>Postal Code :</span>
                <p>{data.postalCode}</p>
            </div>

            <div className='customer-detail-item'>
                <span>date :</span>
                <p>{data.date}</p>
            </div>

        </div>
    </div>
  )
}

export default CustomerDetailsPage