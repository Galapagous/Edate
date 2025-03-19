import { useState } from "react";
import MasterCardLogo from "../../../../assets/date/Mastercard-logo.svg";
import { FaArrowDown, FaArrowUp, FaWifi } from "react-icons/fa";
import { FcSimCardChip } from "react-icons/fc";

const Wallet = () => {
  const [balance, setBalance] = useState(50.0);
  const [amount, setAmount] = useState("");
  const [transactions, setTransactions] = useState([
    { type: "Deposit", amount: 20, date: "2024-02-10", status: "confirmed" },
    { type: "Deposit", amount: 15, date: "2024-02-09", status: "pending" },
    {
      type: "Withdrawal",
      amount: -10,
      date: "2024-02-08",
      status: "confirmed",
    },
  ]);

  const handleFundWallet = () => {
    if (amount) {
      const newBalance = balance + parseFloat(amount);
      setBalance(newBalance);
      setTransactions([
        {
          type: "Deposit",
          amount: parseFloat(amount),
          date: new Date().toISOString().split("T")[0],
          status: "pending",
        },
        ...transactions,
      ]);
      setAmount("");
    }
  };

  return (
    <div className="w-full bg-gray-100 min-h-screen font-sans">
      <div className="grid grid-cols-1 md:grid-cols-5 p-6 gap-6">
        {/* Left Panel */}
        <div className="md:col-span-2 bg-white rounded-xl shadow-sm p-6">
          <h1 className="text-2xl font-medium text-gray-900 mb-6">Hi Musa</h1>

          <div className="space-y-4">
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg p-4 text-white">
              <p className="text-sm uppercase tracking-wide">Total Deposit</p>
              <div className="flex items-center justify-between mt-4">
                <p className="text-3xl font-light">2,300</p>
                <button className="bg-white text-orange-600 px-4 py-1.5 rounded-md text-sm font-medium hover:bg-orange-50 transition-colors">
                  Deposit
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-900 to-purple-800 rounded-lg p-4 text-white">
              <p className="text-sm uppercase tracking-wide">
                Total Withdrawal
              </p>
              <div className="flex items-center justify-between mt-4">
                <p className="text-3xl font-light">2,300,000</p>
                <button className="bg-white text-purple-900 px-4 py-1.5 rounded-md text-sm font-medium hover:bg-purple-50 transition-colors">
                  Withdraw
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Card Display */}
        <div className="md:col-span-3">
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 h-[300px] text-white shadow-lg">
            <div className="flex justify-between items-start">
              <h1 className="text-xl font-medium tracking-wide">
                Muhammed Musa
              </h1>
              <img
                className="h-8 object-contain"
                src={MasterCardLogo}
                alt="MasterCard logo"
              />
            </div>

            <div className="flex items-center justify-start gap-6 mt-8">
              <FcSimCardChip className="w-12 h-12" />
              <FaWifi className="rotate-90 w-8 h-8 text-gray-300" />
            </div>

            <div className="mt-auto">
              <p className="text-2xl font-mono tracking-wider">
                1234 5678 9123 4567
              </p>
              <p className="text-sm text-gray-300 mt-2">VALID THRU 24/25</p>
            </div>
          </div>
        </div>
      </div>

      {/* Transaction History */}
      <div className="px-6 pb-6">
        <h1 className="text-xl font-medium text-gray-900 mb-4">
          Transaction History
        </h1>
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-800 text-white text-sm">
              <tr>
                <th className="px-6 py-3 text-left font-medium">Type</th>
                <th className="px-6 py-3 text-right font-medium">Amount</th>
                <th className="px-6 py-3 text-right font-medium">Date</th>
                <th className="px-6 py-3 text-right font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {transactions.map((transaction, index) => (
                <tr
                  key={index}
                  className="border-t border-gray-100 hover:bg-gray-50"
                >
                  <td className="px-6 py-4">
                    {transaction.type.toLowerCase() === "deposit" ? (
                      <FaArrowUp className="text-green-600" />
                    ) : (
                      <FaArrowDown className="text-red-600" />
                    )}
                  </td>
                  <td className="px-6 py-4 text-right font-mono">
                    {transaction.amount.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 text-right text-sm">
                    {transaction.date}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <span
                      className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
                        transaction.status === "pending"
                          ? "bg-orange-100 text-orange-800"
                          : "bg-green-100 text-green-800"
                      }`}
                    >
                      {transaction.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
