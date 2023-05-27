import React, { useState } from 'react';

const Form = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardType, setCardType] = useState('');
  const [cardDate, setCardDate] = useState('');
  const [dateType, setDateType] = useState('');

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
    const cleanedCardNumber = cardNumber.replace(/ /g, '');
    if (cleanedCardNumber.startsWith('4')) {
      return cardNumber, <img className="w-[40px] m-[10px]" src="https://res.cloudinary.com/dzfbm5ddp/image/upload/v1685044493/image_10_h9bjln.png" alt="img" />;
    } else if (cleanedCardNumber.startsWith('5')) {
      return cardNumber, <img className="w-[40px] m-[10px]" src="https://res.cloudinary.com/dzfbm5ddp/image/upload/v1685044493/image_10_h9bjln.png" alt="img" />;
    } else if (cleanedCardNumber.startsWith('')) {
      return cardNumber;
    } else {
      return 'error';
    }
  };

  const determineCardDate = (cardDate) => {
    const cleanedCardDate = cardDate.replace(/ /g, '');
    if (cleanedCardDate.startsWith('0')) {
      return cardDate;
    } else if (cleanedCardNumber.startsWith('5')) {
      return cardDate;
    } else {
      return 'Unknown';
    }
  };

  return (
    <div className="flex  mt-[20px] max-w-7xl w-[75%] md:w-[75%] lg::w-[50%] mx-[auto] py-[50px]">
      <div className="" >
        <div className="flex justify-between items-center"  >
          <div className="flex justify-center items-center">
             <img
           className="w-[40px] "
           src="https://res.cloudinary.com/dzfbm5ddp/image/upload/v1685044493/image_10_h9bjln.png" alt="img" />
           <h3 className="font-bold  text-center ">
               AceCoin <span className="text-[#2E8C43]">Pay</span>{" "}
            </h3>
           </div>

          <div>09:12</div>

        </div>
      
        <div className="w-[75%] lg:w-[60%]">
          <label htmlFor="cardNumber" className="text-[#053AAC] font-bold">Card Number</label><br />
          <small className="text-[8px]">Enter the 16-digit card number on the card</small><br />
          <input
          className="border border-400-blue bg-[gray] rounded-[5px] p-[7px] mb-[10px]"
            type="number"
            id="cardNumber"
            value={cardNumber}
            onChange={handleCardNumberChange}
            
          />
        </div>
        <div>
          <label htmlFor="cardNumber" className="text-[#053AAC] font-bold">CVV Number</label><br />
          <small className="text-[8px]">Enter the 3 or 4 digit number on the card</small><br />
          <input
          className="border border-400-blue bg-[gray] rounded-[5px] p-[7px] mb-[10px]"
            type="number"
            // id="cardNumber"
            // value={cardNumber}
            // onChange={handleCardNumberChange}
            
          />
        </div>
        <div>
          <label htmlFor="cardNumber" className="text-[#053AAC] font-bold">Expiry Date</label><br />
          <small className="text-[8px]">Enter the expiration date on the card</small><br />
          <input
          className="border border-400-blue bg-[gray] rounded-[5px] p-[7px] mb-[10px]"
            type="date"
            id="cardNumber"
            value={cardDate}
            onChange={handleCardDateChange}
            
          />
        </div>
        <div>
          <label htmlFor="cardNumber" className="text-[#053AAC] font-bold">Password</label><br />
          <small className="text-[8px]">Enter your dynamic password</small><br />
          <input
           className="border border-400-blue bg-[gray] rounded-[5px] p-[7px] mb-[10px]"
            type="password"
            // id="cardNumber"
            // value={cardDate}
            // onChange={handleCardDateChange}
            
          />
        </div>
        <button type=" submit" className="bg-[#053AAC] w-[100%] p-[5px] text-[white]">Submit</button>
      </div>
     
      <div>
      {cardType && <p> {cardNumber}{cardType} </p>}
      </div>
      <div>
      {dateType && <p> {dateType} </p>}
      </div>
     
    </div>
  );
};

export default Form;