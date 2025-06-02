import React from 'react';

const OrderSummary = ({ orderId, files, subtotal, gst, shippingCharges, leadTime }) => {
    const total = subtotal + gst + shippingCharges;
    return (
        <div className="container border-top mt-4">
            <table className="table">
                <tbody>
                    <tr>
                        <th className='fw-normal'>Order ID</th>
                        <td>{orderId}</td>
                    </tr>
                    <tr>
                        <th className='fw-normal'>Total Files:</th>
                        <td>{files.length}</td>
                    </tr>
                    <tr>
                        <th className='fw-normal'>Lead Time:</th>
                        <td>{leadTime}</td>
                    </tr>
                    <tr>
                        <th className='fw-normal'>Sub Total:</th>
                        <td>₹ {subtotal}</td>
                    </tr>
                    <tr>
                        <th className='fw-normal'>GST 18%:</th>
                        <td>₹ {gst}</td>
                    </tr>
                    <tr>
                        <th className='fw-normal'>Shipping</th>
                        <td>₹ {shippingCharges}</td>
                    </tr>
                    <tr>
                        <th className='fw-normal'>Total Including GST:</th>
                        <td>₹ {total}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default OrderSummary;
