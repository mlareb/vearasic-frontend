import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default function Home(){
  const [products,setProducts] = useState([]);
  useEffect(()=> {
    axios.get(`${import.meta.env.VITE_API_URL}/api/products`)
      .then(r=>setProducts(r.data))
      .catch(e=>console.error(e));
  },[]);
  return (
    <div>
      <h2 className="text-xl mb-4">Products</h2>
      <div className="grid grid-cols-3 gap-4">
        {products.map(p=>(
          <div key={p.id} className="border p-3 rounded">
            <div className="h-40 bg-gray-100 flex items-center justify-center">
              <img src={p.images && p.images[0] ? p.images[0] : 'https://via.placeholder.com/150'} alt={p.name} className="max-h-36"/>
            </div>
            <h3 className="mt-2 font-medium">{p.name}</h3>
            <div className="text-lg font-semibold">₹{p.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
