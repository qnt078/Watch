import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";
import Message from "../LoadingError/Error";
import Loading from "../LoadingError/Loading";

const LatestOrder = (props) => {
  const { loading, error, orders } = props;
  console.log(orders);
  return (
    <div className="card-body">
      <h4 className="card-title">Đơn đặt hàng mới</h4>
      {loading ? (
        <Loading />
      ) : error ? (
        <Message variant="alert-danger">{error}</Message>
      ) : (
        <div className="table-responsive">
          <table className="table">
            <tbody>
              {orders.slice(0, 5).map((order) => (
                <tr key={order._id}>
                  <td>
                    <b>{order.user.name}</b>
                  </td>
                  <td>{order.user.email}</td>
                  <td>{order.totalPrice} &#8363;</td>
                  <td>
                    {order.isPaid ? (
                      <span className="badge rounded-pill alert-success">
                        Đã thanh toán : {moment(order.paidAt).format("HH:mm:ss")}
                      </span>
                    ) : (
                      <span className="badge rounded-pill alert-danger">
                        Chưa thanh toán
                      </span>
                    )}
                  </td>
                  <td>{moment(order.createdAt).format("DD/MM/yyyy")}</td>
                  <td className="d-flex justify-content-end align-item-center">
                    <Link to={`/order/${order._id}`} className="text-success">
                      <i className="fas fa-eye"></i>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default LatestOrder;
