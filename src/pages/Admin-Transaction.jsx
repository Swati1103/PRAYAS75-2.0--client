import { AllTransactionFinancial } from "./AllTransactionFinancial";

export const AdminTransaction = () => {
  return (
    <div className="md:w-full w-[130%] md:ml-0 -ml-16 md:mb-0 -mb-96">
      <p className="text-3xl md:text-6xl font-bold text-white my-4 text-center"> Admin Transactions Data</p>
      <div className="md:mb-0 -pt-96 bg-inherit text-blue-800 md:scale-100 md:w-full w-[25rem] md:-ml-0 ml-2  scale-[82%] bg-slate-200  md:mt-0">
        <AllTransactionFinancial  />
      </div>
    </div>
  );
};