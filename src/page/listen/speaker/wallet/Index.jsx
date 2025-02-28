import React, { useState } from "react";
import { FaWallet, FaArrowUp, FaArrowDown } from "react-icons/fa";

const Wallet = () => {
  const [balance, setBalance] = useState(50.0);
  const [amount, setAmount] = useState("");
  const [transactions, setTransactions] = useState([
    { type: "Deposit", amount: 20, date: "2024-02-10" },
    { type: "Earned", amount: 15, date: "2024-02-09" },
    { type: "Call Deduction", amount: -10, date: "2024-02-08" },
  ]);

  const handleFundWallet = () => {
    if (amount) {
      const newBalance = balance + parseFloat(amount);
      setBalance(newBalance);
      setTransactions([
        { type: "Deposit", amount: parseFloat(amount), date: new Date().toISOString().split("T")[0] },
        ...transactions,
      ]);
      setAmount("");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-6">
      <div className="p-6 shadow-lg border rounded-lg">
        <div className="flex items-center gap-2 text-xl font-semibold">
          <FaWallet className="text-green-600" /> Wallet Balance: ${balance.toFixed(2)}
        </div>
        <div className="mt-4 flex gap-2">
          <input
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="border p-2 rounded w-full"
          />
          <button onClick={handleFundWallet} className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
            withdraw
          </button>
        </div>
      </div>
      <div className="p-6 shadow-lg border rounded-lg">
        <h2 className="text-lg font-semibold mb-4">Transaction History</h2>
        <table className="w-full border-collapse border">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left border">Date</th>
              <th className="px-4 py-2 text-left border">Type</th>
              <th className="px-4 py-2 text-right border">Amount ($)</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                <td className="px-4 py-2 border">{tx.date}</td>
                <td className="px-4 py-2 border flex items-center gap-1">
                  {tx.amount > 0 ? <FaArrowUp className="text-green-500" /> : <FaArrowDown className="text-red-500" />}
                  {tx.type}
                </td>
                <td className={`px-4 py-2 text-right border font-semibold ${tx.amount < 0 ? 'text-red-500' : 'text-green-500'}`}>
                  {tx.amount < 0 ? "-" : "+"}${Math.abs(tx.amount).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Wallet;
