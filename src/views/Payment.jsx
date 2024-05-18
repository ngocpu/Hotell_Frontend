import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { Button, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Payment = () => {
  // const stripe = useStripe();
  // const elements = useElements();
  //   const { roomId } = useParams() 
  //   const searchInfo = useSelector((state) => state.search.searchInfo)   
  //   const username = useSelector((state) => state.user.userInfo.username)
  //   const accessToken  = useSelector((state) => state.user.userInfo.accessToken)
  //   const selectedRoom = searchInfo.searchInfo.find(room => room._id === roomId);
  //   console.log(selectedRoom) // Tìm phòng được chọn trong mảng search
  //   const [errorMessage, setErrorMessage] = useState("");
  //   const [successMessage, setSuccessMessage] = useState("");
  //   const [paymentMethodId, setPaymentMethodId] = useState("");
  // const [paymentMethod, setPaymentMethod] = useState("fullPayment");

  // const handlePaymentMethodChange = (event) => {
  //   setPaymentMethod(event.target.value);
  // };

  // const handleSubmit = async () => {
  //   try {
  //       // Gọi API để tạo paymentIntent từ stripe
  //       const response = await stripe.createPaymentMethod({
  //           type: 'card',
  //           card: CardElement, // Thay cardElement bằng phần tử card từ Stripe Elements hoặc thư viện Stripe.js khác
  //       });

  //       // Lấy paymentMethodId từ response trả về
  //       const paymentMethodId = response.paymentMethod.id;
  //       const roomPrice = selectedRoom ? selectedRoom.price : 0; // Lấy giá của phòng, nếu không tìm thấy thì gán giá trị mặc định là 0
  //       // Tính toán totalAmount từ searchInfo
  //       const capacity = searchInfo.capacity
  //       const checkinDate = new Date(searchInfo.checkinDate);
  //       const checkoutDate = new Date(searchInfo.checkoutDate);
  //       const numberOfDays = Math.floor((checkoutDate - checkinDate) / (1000 * 60 * 60 * 24)); // Số ngày lưu trú
  //       const amount = roomPrice * numberOfDays; // Tổng số tiền cần thanh toán

  //       // Gọi API tạo booking và xử lý thanh toán
  //       const data = {
  //           paymentMethodId,
  //           amount,
  //           roomId, // Thêm roomId vào request body
  //           username, // Thêm username vào request body
  //           checkinDate,
  //           checkoutDate,
  //           capacity
  //       };

  //       const result = await apiRequest("/api/payment", "POST", data, accessToken);

  //       // Xử lý kết quả trả về từ API
  //       if (result.success) {
  //           setSuccessMessage("Payment successful!");
  //       } else {
  //           setErrorMessage("Payment failed!");
  //       }
  //   } catch (error) {
  //       console.error("Error processing payment:", error);
  //       setErrorMessage("An error occurred while processing payment");
  //   }
  // };

  return (
    <div className="flex mx-auto, justify-center items-center flex-col gap-3">
        <Typography variant="h4" gutterBottom>
        Thanh toán
      </Typography>
      <div>
        <Typography variant="subtitle1">Thông tin phòng:</Typography>
        {selectedRoom && (
          <div>
            <Typography variant="body1">{selectedRoom.title}</Typography>
            <img src={selectedRoom.image} alt={selectedRoom.title} />
            <Typography variant="body1">Giá: {selectedRoom.price}</Typography>
          </div>
        )}
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Phương thức thanh toán:</label>
          <select
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={paymentMethod}
            onChange={handlePaymentMethodChange}
          >
            <option value="fullPayment">Thanh toán toàn bộ</option>
            <option value="depositPayment">Cọc tiền (1/3 số tiền)</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Thông tin thẻ tín dụng:</label>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
        </div>
        <Button type="submit" variant="contained" color="primary" className="mt-4" onClick={handleSubmit}>
          Thanh toán
        </Button>
      </form>
    </div>
  );
};

export default Payment;
