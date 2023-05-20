import React from 'react';
import { Link } from 'react-router-dom';
import OrdersCard from '../OrdersCard';
import Layout from '../Layout';
import { useSelector } from 'react-redux';


export default function MyOrders() {

  const order = useSelector( state => state.order );

  

  return (
    <Layout>
      <div className='flex items-center justify-center relative w-80 mb-6'>

        <h1 className='font-medium text-xl'>My Orders</h1>

      </div>
      {order?.map( (order, index) => {
          return (
            <Link key={index} to={`/my-orders/${index}`}>
              <OrdersCard 
                totalPrice={order.totalPrice} 
                totalProducts={order.totalProducts} />
            </Link>
          )
      })}
    </Layout>
  );
}
