import { create } from 'zustand';

type AmountType = {
  amount: number;
  setAmount: (value: number) => void;
};

export const useAmountStore = create<AmountType>(set => ({
  amount: 0,
  setAmount: (value: number) => set(() => ({ amount: Number(value) })),
}));
