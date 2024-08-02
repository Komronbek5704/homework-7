
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { fetchProducts } from '../lib/products';

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts().then(data => {
      setProducts(data);
      setLoading(false);
    }).catch(error => {
      setLoading(false);
      console.error(error);
    });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>
          <Link href={`/product/${product.id}`}>
            {product.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}