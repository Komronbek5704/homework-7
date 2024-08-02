
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { fetchProducts } from '../../lib/products';

export default function ProductDetail() {
  const router = useRouter();
  const { productId } = router.query;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (productId) {
      fetchProducts().then(data => {
        const productData = data.find(product => product.id === parseInt(productId));
        setProduct(productData);
        setLoading(false);
      }).catch(error => {
        setLoading(false);
        console.error(error);
      });
    }
  }, [productId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Error: Product not found</div>;
  }

  return (
    <div>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} />
      <button onClick={() => router.back()}>Back</button>
    </div>
  );
}