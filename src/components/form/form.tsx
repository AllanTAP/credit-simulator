import { useEffect, useState } from 'react';
import SliderInput from './sliderInput';
import { LimitType } from '../../types/types';
import { useAmountStore } from '../../store/amount';
import { usePaymentMonthStore } from '../../store/paymentMonth';

export default function Form() {
  const { amount, setAmount } = useAmountStore();
  const { paymentMonth, setPaymentMonth } = usePaymentMonthStore();

  const [limitInfo, setlimitInfo] = useState<LimitType>({
    min: undefined,
    max: undefined,
  });

  const paymentLimitInfo: LimitType = {
    min: 3,
    max: 12,
  };

  useEffect(() => {
    const getLimit = () => {
      fetch('http://localhost:3001/limits')
        .then(data => data.ok && data.json())
        .then(data => setlimitInfo(data));
    };

    getLimit();
  }, []);

  return (
    <div>
      <div>
        <div>Please select the amount of credit you'll need</div>
        <SliderInput limitInfo={limitInfo} value={amount} setValue={setAmount} />
      </div>
      <div>
        <div>Please select the amount of months you'll need</div>
        <SliderInput limitInfo={paymentLimitInfo} value={paymentMonth} setValue={setPaymentMonth} />
      </div>
    </div>
  );
}
