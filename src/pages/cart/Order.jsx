import "./cart.css";

export default function Order({ totalPrice }) {
  return (
    <div className="order-summary">
      <table>
        <thead>
          <tr>
            <th>
              <h3>Order Summary</h3>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Subtotal</td>
            <td>${totalPrice}</td>
          </tr>
          <tr>
            <td>Shipping Cost</td>
            <td>0</td>
          </tr>
          <tr>
            <td>Discount</td>
            <td>0</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td>${totalPrice}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
