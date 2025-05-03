import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setShipment } from '../slices/cartSlice';
import { Link } from 'react-router-dom';

export default function Cart() {
  const { items, shipment } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Your Cart</h2>
      {items.map((item) => (
        <div key={item.title} className="mb-3">
          <p>
            {item.title} x {item.quantity} - ${item.price.toFixed(2)} each
          </p>
        </div>
      ))}
      <label htmlFor="shipment">Shipping Method:</label>
      <select
        id="shipment"
        className="form-control"
        value={shipment}
        onChange={(e) => dispatch(setShipment(e.target.value))}
      >
        <option value="">-- Select --</option>
        <option value="Standard">Standard</option>
        <option value="Express">Express</option>
        <option value="Overnight">Overnight</option>
      </select>
      <p className="mt-3">Total: ${total.toFixed(2)}</p>
      <Link to="/Help" className="btn btn-link">Need Help?</Link>
    </div>
  );
}
