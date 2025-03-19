import { useState } from "react";
import {
  FaArrowDown,
  FaArrowUp,
  FaWifi,
  FaHistory,
  FaPlus,
  FaMinus,
} from "react-icons/fa";
import { FcSimCardChip } from "react-icons/fc";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { BiTransfer } from "react-icons/bi";

const Wallet = () => {
  const [balance, setBalance] = useState(50.0);
  const [amount, setAmount] = useState("");
  const [showDepositModal, setShowDepositModal] = useState(false);
  const [showWithdrawModal, setShowWithdrawModal] = useState(false);
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
    if (amount && !isNaN(amount)) {
      const parsedAmount = parseFloat(amount);
      const newBalance = balance + parsedAmount;
      setBalance(newBalance);
      setTransactions([
        {
          type: "Deposit",
          amount: parsedAmount,
          date: new Date().toISOString().split("T")[0],
          status: "pending",
        },
        ...transactions,
      ]);
      setAmount("");
      setShowDepositModal(false);
    }
  };

  const handleWithdraw = () => {
    if (amount && !isNaN(amount)) {
      const parsedAmount = parseFloat(amount);
      if (parsedAmount <= balance) {
        const newBalance = balance - parsedAmount;
        setBalance(newBalance);
        setTransactions([
          {
            type: "Withdrawal",
            amount: -parsedAmount,
            date: new Date().toISOString().split("T")[0],
            status: "pending",
          },
          ...transactions,
        ]);
        setAmount("");
        setShowWithdrawModal(false);
      }
    }
  };

  return (
    <div className="w-full bg-gray-50 min-h-screen font-sans">
      {/* Header */}
      <div className="bg-white p-6 shadow-sm">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-800">My Wallet</h1>
          <div className="flex items-center space-x-4">
            <div className="flex flex-col items-end">
              <span className="text-sm text-gray-500">Welcome back</span>
              <span className="font-medium">Muhammed Musa</span>
            </div>
            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="font-semibold text-gray-700">MM</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Left Column */}
          <div className="md:col-span-5 space-y-6">
            {/* Balance Card */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-medium text-gray-700">
                    Current Balance
                  </h2>
                  <BiTransfer className="text-gray-400 text-xl" />
                </div>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold text-gray-900">
                    ${balance.toFixed(2)}
                  </span>
                  <span className="ml-2 text-green-500 text-sm">Available</span>
                </div>
                <div className="flex mt-6 space-x-3">
                  <button
                    onClick={() => setShowDepositModal(true)}
                    className="flex-1 flex items-center justify-center gap-2 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors"
                  >
                    <FaPlus size={12} /> Deposit
                  </button>
                  <button
                    onClick={() => setShowWithdrawModal(true)}
                    className="flex-1 flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <FaMinus size={12} /> Withdraw
                  </button>
                </div>
              </div>
              <div className="bg-gray-50 px-6 py-4 border-t border-gray-100">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-gray-500">Total Deposits</p>
                    <p className="text-lg font-medium text-gray-800">
                      $2,300.00
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Total Withdrawals</p>
                    <p className="text-lg font-medium text-gray-800">
                      $2,300,000.00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-medium text-gray-700 mb-4">
                Quick Actions
              </h2>
              <div className="grid grid-cols-3 gap-4">
                <button className="flex flex-col items-center justify-center p-4 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors">
                  <FaPlus className="text-indigo-600 text-xl mb-2" />
                  <span className="text-xs text-gray-700">Top Up</span>
                </button>
                <button className="flex flex-col items-center justify-center p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                  <FaMinus className="text-purple-600 text-xl mb-2" />
                  <span className="text-xs text-gray-700">Withdraw</span>
                </button>
                <button className="flex flex-col items-center justify-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                  <FaHistory className="text-green-600 text-xl mb-2" />
                  <span className="text-xs text-gray-700">History</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="md:col-span-7 space-y-6">
            {/* Card Display */}
            <div className="relative">
              <div className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-900 rounded-xl p-6 h-[260px] text-white shadow-lg">
                <div className="flex justify-between items-start">
                  <h1 className="text-xl font-medium tracking-wide">
                    Muhammed Musa
                  </h1>
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                      <FaWifi className="rotate-90 w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-start gap-6 mt-6">
                  <FcSimCardChip className="w-12 h-12" />
                </div>

                <div className="mt-8">
                  <p className="text-xl font-mono tracking-widest">
                    •••• •••• •••• 4567
                  </p>
                  <div className="flex justify-between items-center mt-4">
                    <p className="text-sm text-gray-300">VALID THRU 24/25</p>
                    <div className="flex space-x-1">
                      <div className="w-8 h-8 bg-red-500 rounded-full opacity-70"></div>
                      <div className="w-8 h-8 bg-yellow-500 rounded-full opacity-70 -ml-4"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Shadow Effect */}
              <div className="absolute -bottom-2 left-4 right-4 h-8 bg-indigo-900 rounded-xl opacity-20 blur-sm"></div>
            </div>

            {/* Transaction History */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="flex justify-between items-center p-6 border-b border-gray-100">
                <h2 className="text-lg font-medium text-gray-700">
                  Transaction History
                </h2>
                <button className="text-indigo-600 text-sm font-medium hover:text-indigo-800">
                  View All
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 text-sm">
                    <tr>
                      <th className="px-6 py-3 text-left font-medium text-gray-500">
                        Type
                      </th>
                      <th className="px-6 py-3 text-right font-medium text-gray-500">
                        Amount
                      </th>
                      <th className="px-6 py-3 text-right font-medium text-gray-500">
                        Date
                      </th>
                      <th className="px-6 py-3 text-right font-medium text-gray-500">
                        Status
                      </th>
                      <th className="px-6 py-3 text-right font-medium text-gray-500"></th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700 divide-y divide-gray-100">
                    {transactions.map((transaction, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            <div
                              className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                                transaction.type.toLowerCase() === "deposit"
                                  ? "bg-green-100"
                                  : "bg-red-100"
                              }`}
                            >
                              {transaction.type.toLowerCase() === "deposit" ? (
                                <FaArrowUp className="text-green-600 text-xs" />
                              ) : (
                                <FaArrowDown className="text-red-600 text-xs" />
                              )}
                            </div>
                            <span className="font-medium">
                              {transaction.type}
                            </span>
                          </div>
                        </td>
                        <td
                          className={`px-6 py-4 text-right font-medium ${
                            transaction.type.toLowerCase() === "deposit"
                              ? "text-green-600"
                              : "text-red-600"
                          }`}
                        >
                          {transaction.type.toLowerCase() === "deposit"
                            ? "+"
                            : ""}
                          ${Math.abs(transaction.amount).toFixed(2)}
                        </td>
                        <td className="px-6 py-4 text-right text-sm text-gray-500">
                          {transaction.date}
                        </td>
                        <td className="px-6 py-4 text-right">
                          <span
                            className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
                              transaction.status === "pending"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-green-100 text-green-800"
                            }`}
                          >
                            {transaction.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button className="text-gray-400 hover:text-gray-600">
                            <HiOutlineDotsVertical />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Deposit Modal */}
      {showDepositModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-md">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-xl font-medium text-gray-800">
                Deposit Funds
              </h2>
            </div>
            <div className="p-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Amount
              </label>
              <div className="relative">
                <span className="absolute left-3 top-3 text-gray-500">$</span>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                  placeholder="0.00"
                />
              </div>
            </div>
            <div className="p-6 bg-gray-50 rounded-b-xl flex justify-end space-x-3">
              <button
                onClick={() => {
                  setShowDepositModal(false);
                  setAmount("");
                }}
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={handleFundWallet}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
              >
                Deposit
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Withdraw Modal */}
      {showWithdrawModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-md">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-xl font-medium text-gray-800">
                Withdraw Funds
              </h2>
            </div>
            <div className="p-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Amount
              </label>
              <div className="relative">
                <span className="absolute left-3 top-3 text-gray-500">$</span>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  max={balance}
                  className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                  placeholder="0.00"
                />
              </div>
              <p className="text-sm text-gray-500 mt-2">
                Available balance: ${balance.toFixed(2)}
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-b-xl flex justify-end space-x-3">
              <button
                onClick={() => {
                  setShowWithdrawModal(false);
                  setAmount("");
                }}
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={handleWithdraw}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                disabled={!amount || parseFloat(amount) > balance}
              >
                Withdraw
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Wallet;
