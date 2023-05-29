// 

import Image from "next/image";
import React, { useState } from "react";
import { CgMenuGridR } from "react-icons/cg";
import { AiOutlineWifi } from "react-icons/ai"
import { BsApple } from "react-icons/bs";
import { FcSimCardChip } from "react-icons/fc"

const Form = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardType, setCardType] = useState("");
  const [cardDate, setCardDate] = useState("");
  const [dateType, setDateType] = useState("");

  const handleCardNumberChange = (e) => {
    const value = e.target.value;
    setCardNumber(value);
    setCardType(determineCardType(value));
  };
  const handleCardDateChange = (e) => {
    const value = e.target.value;
    setCardDate(value);
    setDateType(determineCardDate(value));
  };

  const determineCardType = (cardNumber) => {
    const cleanedCardNumber = cardNumber.replace(/ /g, "");
    if (cleanedCardNumber.startsWith("4")) {
      return (
        cardNumber,
        (
          <img
            className="w-[40px] m-[10px]"
            src="https://res.cloudinary.com/dzfbm5ddp/image/upload/v1685044493/image_10_h9bjln.png"
            alt="img"
          />
         
        )
        
      );
    } else if (cleanedCardNumber.startsWith("5")) {
      return (
        cardNumber,
        (
          <img
            className="w-[40px] h-[30px] "
            src="/Mastercard.jpg"
            alt="img"
          />
      
        )
      );
    } else if (cleanedCardNumber.startsWith("")) {
      return cardNumber;
    } else {
      return "error";
    }
  };

  const determineCardDate = (cardDate) => {
    const cleanedCardDate = cardDate.replace(/ /g, "");
    if (cleanedCardDate.startsWith("2")) {
      return cardDate;
    } else {
      return "Unknown";
    }
  };

  return (
    <div className="max-w-5xl mx-auto bg-blue-200  border-2 border-white pb-8 h-screen lg:items-center justify-center flex" >
      <div className="block bg-white mx-auto  max-w-5xl  md:flex justify-center mt-[30px] lg:w-[90%]  mt-[30px] lg:mx-[auto] py-[20px]">
        <div className="p-4 bg-white lg:w-2/3 mx-4 ">
          <div className="flex justify-between items-center mb-4 lg:mt-4">
            <div className="flex justify-center items-center">
              {/* <img
                className="w-[40px] "
                src="https://res.cloudinary.com/dzfbm5ddp/image/upload/v1685044493/image_10_h9bjln.png"
                alt="img"
              /> */}
              <h3 className="font-bold  text-center ">
                AceCoin <span className="text-blue-400">Pay</span>{" "}
              </h3>
            </div>

            <div className="flex">
              <div className="bg-gray-600 text-white mr-2 p-2 rounded-sm h-[30px] w-[20px] text-center flex items-center justify-center">
                0
              </div>
              <div className="bg-gray-600 text-white  p-2 rounded-sm h-[30px] w-[20px] text-center flex items-center justify-center">
                1
              </div>
              <div className="  p-2 rounded-sm h-[30px] w-[20px] text-center flex items-center justify-center">
                :
              </div>
              <div className="bg-gray-600 text-white mr-2 p-2 rounded-sm h-[30px] w-[20px] text-center flex items-center justify-center">
                1
              </div>
              <div className="bg-gray-600 text-white p-2 rounded-sm h-[30px] w-[20px] text-center flex items-center justify-center">
                9
              </div>
            </div>
          </div>

          <div className="w-[100%] lg:w-[100%] mb-8">
            <div className="flex items-center justify-between ">
              <div>
                <label
                  htmlFor="cardNumber"
                  className="text-[#053AAC] font-bold"
                >
                  Card Number
                </label>

                <small className="block text-[12px] my-2">
                  Enter the 16-digit card number on the card
                </small>
              </div>
              <div className="text-blue-400">Edit</div>
            </div>
            <div className="relative flex items-center">
            {/* {cardType && (
              <p>
          
              {" "}
              
              {cardType}{" "}
            </p>
            )} */}
              <input
                className="border border-400-blue bg-sky-50 rounded-[5px] w-full p-[16px] pl-[50px] my-[10px]"
                type="number"
                id="cardNumber"
                value={cardNumber}
                onChange={handleCardNumberChange}
              />
            </div>
          </div>
          <div className="block md:flex items-center lg:mb-8">
            <div className="md:w-1/2">
              <label htmlFor="cardNumber" className="text-[#053AAC] font-bold">
                CVV Number
              </label>

              <small className="block text-[12px] my-2">
                Enter the 3 or 4 digit number on the card
              </small>
              <br />
            </div>
            <div className="relative flex items-center justify-between md:w-1/2">
              <input
                className="border border-400-blue w-full rounded-[5px] p-[16px] mb-[10px] "
                type="number"
                // id="cardNumber"
                // value={cardDate}
                // onChange={handleCardDateChange}
              />
              <div className="absolute left-60 mt-[-10px] mr-[10px]">
                <CgMenuGridR
                  size={30}
                  className="text-gray-300 cursor-pointer"
                />
              </div>
            </div>
          </div>
          <div className="block md:flex items-center lg:mb-8 ">
            <div className="md:w-1/2">
              <label htmlFor="cardNumber" className="text-[#053AAC] font-bold">
                Expiry Date
              </label>

              <small className="block text-[12px] my-2">
                Enter the expiration date on the card
              </small>
              <br />
            </div>
            <input
              className="border border-400-blue w-full  bg-sky-50 rounded-[5px] p-[16px] mb-[10px] md:w-1/2"
              type="month"
              id="cardNumber"
              value={cardDate}
              onChange={handleCardDateChange}
            />
          </div>
          <div className="block md:flex items-center lg:mb-2">
            <div className="md:w-1/2">
              <label htmlFor="cardNumber" className="text-[#053AAC] font-bold">
                Password
              </label>

              <small className="block text-[12px] my-2">
                Enter your dynamic password
              </small>
              <br />
            </div>
            <div className="relative flex items-center justify-between md:w-1/2">
              <input
                className="border border-400-blue w-full rounded-[5px] p-[16px] mb-[10px] "
                type="password"
                // id="cardNumber"
                // value={cardDate}
                // onChange={handleCardDateChange}
              />
              <div className="absolute left-60 ">
                <CgMenuGridR
                  size={30}
                  className="text-gray-300 cursor-pointer"
                />
              </div>
            </div>
          </div>
          <button
            type=" submit"
            className="bg-[#053AAC] w-[100%] p-5 rounded-md text-[white] cursor-pointer
          "
          >
            Pay Now
          </button>
        </div>

        <div className="  md:h-full lg:w-1/3 mx-4 md:relative">
          <div className="rounded-md mb-[30px] bg-white shadow-lg p-4 w-full md:absolute top-[-10px] right-[-0px] mr-2  lg:w-[260px] ">
            <div className="flex justify-between ">
            <Image
              src="/chip.jpg"
              width={20}
              height={20}
              alt="img"
                  /> 
              
              <AiOutlineWifi 
               size={30}
              />
              
            </div>
            <div className="mb-[10px] mt-[50px]">
              <p>Jonathan Michael</p>
               {cardType && (
             <p>
              ****
              {" "}
              {cardNumber}
              {" "}
            </p>
            )}
            </div>
            <div className="flex justify-between">
              <div>{dateType && <p> {dateType} </p>}</div>
              <div className="flex flex-col justify-center items-center">
                {/* <Image
                  src="/Mastercard.jpg"
                  width={30}
                  height={30}
                  alt="card icon"
                /> */}
                  {cardType && (
              <p>
          
              {" "}
              
              {cardType}{" "}
            </p>
            )}
              </div>
            </div>
          </div>

          <div className="bg-gray-100 rounded-lg p-4 md:w-full md:pt-[300px] ">
            <div className="flex justify-between items-center my-4">
              <p className="text-gray-500">Company</p>
              <div className="flex items-center justify-center">
                <div className="rounded-full bg-black  flex items-center justify-center">
                  {/* <Image
                    src="/mackbook.jpg"
                    width={20}
                    height={20}
                    alt="img"
                  /> */}
                 
                </div>
                <BsApple />
                <p>Apple</p>
              </div>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-500">Order Number</p>
              <p>1266201</p>
            </div>
            <div className="flex justify-between my-4">
              <p className="text-gray-500">Product</p>
              <p>MackBook Air</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-500">VAT(20%)</p>
              <p>$100.00</p>
            </div>
            <div className="flex items-center justify-between border-dotted border-gray-400 border-t-2 py-8 mt-8 ">
              <div>
                <p className="text-gray-500">You have to Pay</p>
                <p>
                  <span className="text-[20px] font-bold">549.</span>
                  <span>99</span>
                  <span className="text-gray-500 ml-2">USD</span>
                </p>
              </div>
              <div>
                <Image
                  src="/reciept.jpg"
                  width={30}
                  height={30}
                  alt="receipt icon"
                />
              </div>
            </div>
          </div>
        </div>

       
      </div>
    </div>
  );
};

export default Form;

