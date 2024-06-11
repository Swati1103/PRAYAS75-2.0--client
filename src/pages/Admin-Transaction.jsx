import { AllTransactionFinancial } from "./AllTransactionFinancial";

export const AdminTransaction = () => {
  return (
    <div>
      <p className="text-6xl font-bold text- white my-4"> Admin Transactions Date</p>
      <div className="text-blue-800 bg-slate-200">
        <AllTransactionFinancial />
      </div>
    </div>
  );
};