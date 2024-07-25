import { create } from 'zustand';

type PaymentMonthType = {
  paymentMonth: number;
  setPaymentMonth: (value: number) => void;
};

export const usePaymentMonthStore = create<PaymentMonthType>(set => ({
  paymentMonth: 0,
  setPaymentMonth: (value: number) => set(() => ({ paymentMonth: Number(value) })),
}));
