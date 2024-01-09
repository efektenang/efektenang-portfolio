import { FaRegRectangleList } from "react-icons/fa6";

interface Order {
    id: number;
    name: {
      first: string;
      last: string;
    };
    total: number;
    status: string;
    method: string;
    date: string;
  }
  
  interface OrderListProps {
    orders: Order[];
  }
  
  const OrderList: React.FC<OrderListProps> = ({ orders }) => {
    return (
      <div className="w-full col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white overflow-scroll">
        <h1>Recent Orders</h1>
        <ul>
          {orders.map((order, id) => (
          <li key={id} className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer">
              <div className="bg-purple-100 rounded-lg p-3">
                <FaRegRectangleList className="text-purple-800" />
              </div>
              <div className="pl-4">
                <p className="text-gray-800 font-bold">${order.total}</p>
                <p className="text-gray-400 text-sm">${order.name.first}</p>
              </div>
              <p className="lg:flex md:hidden absolute right-6 text-sm">{order.date}</p>
          </li>
          // <div key={order.id}>
          //   <p>Name: {`${order.name.first} ${order.name.last}`}</p>
          //   <p>Total: {order.total}</p>
          //   <p>Status: {order.status}</p>
          //   <p>Method: {order.method}</p>
          //   <p>Date: {order.date}</p>
          // </div>
        ))}
        </ul>
      </div>
    );
  };
  
  export default OrderList;