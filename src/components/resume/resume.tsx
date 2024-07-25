import { Button } from 'antd';
import { useAmountStore } from '../../store/amount';
import { usePaymentMonthStore } from '../../store/paymentMonth';

export default function Resume({
  pageSelector,
  setPageSelector,
}: {
  pageSelector: number;
  setPageSelector: React.Dispatch<React.SetStateAction<number>>;
}) {
  const { amount } = useAmountStore();
  const { paymentMonth } = usePaymentMonthStore();

  let euroFormat = new Intl.NumberFormat('pt-PT', {
    style: 'currency',
    currency: 'EUR',
  });

  return (
    <div>
      <h2>Resume</h2>
      <div>Amount: {euroFormat.format(amount)}</div>
      <div>Months: {paymentMonth}</div>
      <div>
        <Button onClick={() => setPageSelector(pageSelector - 1)}>Previous</Button>
        <Button disabled>Next</Button>
      </div>
    </div>
  );
}
