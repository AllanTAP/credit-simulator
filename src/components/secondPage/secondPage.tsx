import SliderInput from '../form/sliderInput';
import { LimitType } from '../../types/types';
import { usePaymentMonthStore } from '../../store/paymentMonth';
import { Button } from 'antd';

export default function SecondPage({
  pageSelector,
  setPageSelector,
}: {
  pageSelector: number;
  setPageSelector: React.Dispatch<React.SetStateAction<number>>;
}) {
  const { paymentMonth, setPaymentMonth } = usePaymentMonthStore();

  const paymentLimitInfo: LimitType = {
    min: 3,
    max: 12,
  };

  return (
    <div>
      <div>Please select the amount of months you'll need</div>
      <SliderInput limitInfo={paymentLimitInfo} value={paymentMonth} setValue={setPaymentMonth} />
      <div>
        <Button onClick={() => setPageSelector(pageSelector - 1)}>Previous</Button>
        <Button onClick={() => setPageSelector(pageSelector + 1)}>Next</Button>
      </div>
    </div>
  );
}
