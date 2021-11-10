import React, { useState, useEffect } from "react";

const Timer = ({ minute, second }) => {
  return (
    <div className="border-2 border-solid rounded-timer border-RedVermilionBird box-border flex flex-col items-center justify-between font-body text-RedVermilionBird px-timerLR py-timerTB w-w79 h-w60 leading-A18 tracking-A8">
      <div className="font-semibold text-header">
        {minute}:{second}
      </div>
      <span className="text-about w-w59 mt-1">left to order</span>
    </div>
  );
};

export default Timer;
