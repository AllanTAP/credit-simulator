import { useEffect, useState } from 'react';
import SliderInput from '../form/sliderInput';
import { LimitType } from '../../types/types';
import { useAmountStore } from '../../store/amount';
import { Button } from 'antd';

export default function FirstPage({
  pageSelector,
  setPageSelector,
}: {
  pageSelector: number;
  setPageSelector: React.Dispatch<React.SetStateAction<number>>;
}) {
  const { amount, setAmount } = useAmountStore();

  const [limitInfo, setlimitInfo] = useState<LimitType>({
    min: undefined,
    max: undefined,
  });

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
      <div>Please select the amount of credit you'll need</div>
      <SliderInput limitInfo={limitInfo} value={amount} setValue={setAmount} />
      <div>
        <Button disabled>Previous</Button>
        <Button onClick={() => setPageSelector(pageSelector + 1)}>Next</Button>
      </div>
    </div>
  );
}
