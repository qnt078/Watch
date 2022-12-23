import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { saveShippingAddress } from "../Redux/Actions/cartActions";

const Checkout = ({ history }) => {
  window.scrollTo(0, 0);

  const cart = useSelector((state) => state.cart);
  const  shippingAddress  = cart?.shippingAddress;

  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ address, city, postalCode, country }));
    history.push("/payment");
  };
  return (
    <>
    
      <div className="container d-flex justify-content-center align-items-center login-center">
        <form
          className="Login col-md-8 col-lg-4 col-11"
          onSubmit={submitHandler}
        >
          <h6>THÔNG TIN KHÁCH HÀNG</h6>
          <input
            type="text"
            placeholder="Họ và tên"
            value={address}
            required
            onChange={(e) => setAddress(e.target.value)}
          />
            <input
            type="text"
            placeholder="Số điện thoại"
            value={postalCode}
            required
            onChange={(e) => setPostalCode(e.target.value)}
          />
          <input
            type="text"
            placeholder="Địa chỉ"
            value={city}
            required
            onChange={(e) => setCity(e.target.value)}
          />
        
          <input
            type="text"
            placeholder="Xác nhận địa chỉ"
            value={country}
            required
            onChange={(e) => setCountry(e.target.value)}
          />
          <button type="submit">Tiếp tục</button>
        </form>
      </div>
    </>
  );
};

export default Checkout;
