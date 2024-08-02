

import UserList from './UserList';
import ProductList from './ProductList';

export default function Layout({ children }) {
  return (
    <div className="grid grid-cols-1 h-screen">
      <div className="border-r p-4">
        <h2>Users</h2>
        <UserList />
      </div>
      <div className="border-r p-4">
        <h2>Products</h2>
        <ProductList />
      </div>
      <div className="p-4">
        {children}
      </div>
    </div>
  );
}