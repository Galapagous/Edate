import { useState } from 'react';
import PaymentCard from '../../../component/card/Paymentcard';

const Payment = () => {
  // Mock data for demonstration (replace with API data)
  const paymentData = {
    incoming: [
      { id: 1, event: 'Tech Conference 2025', amount: 20, status: 'Pending', date: 'March 16, 2025' },
      { id: 2, event: 'Design Workshop', amount: 15, status: 'Processed', date: 'April 11, 2025' },
    ],
    spent: [
      { id: 1, description: 'Event Registration Fee', amount: 5, date: 'March 10, 2025' },
    ],
    balance: 30, // Total available for withdrawal
  };

  const [showRequestModal, setShowRequestModal] = useState(false);

  const handleRequestPayment = () => {
    // Placeholder for payment request logic
    alert(`Requesting payment of $${paymentData.balance}`);
    setShowRequestModal(false);
  };

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-8">
      {/* Header */}
      <h1 className="text-3xl font-semibold text-gray-900">Payment Section</h1>

      {/* Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Payment Card */}
        <div className="col-span-1">
          <PaymentCard
            cardNumber="1234 5678 9012 3456"
            validThru="06/26"
            cardholderName="JOHN DOE"
          />
        </div>

        {/* Balance Summary */}
        <div className="col-span-2 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-medium text-gray-900 mb-4">Balance Overview</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Incoming Earnings</span>
              <span className="text-green-600 font-semibold">
                ${paymentData.incoming.reduce((sum, item) => sum + item.amount, 0)}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Spent</span>
              <span className="text-red-600 font-semibold">
                ${paymentData.spent.reduce((sum, item) => sum + item.amount, 0)}
              </span>
            </div>
            <div className="flex justify-between items-center text-lg">
              <span className="text-gray-800 font-medium">Available Balance</span>
              <span className="text-blue-600 font-semibold">${paymentData.balance}</span>
            </div>
            <button
              onClick={() => setShowRequestModal(true)}
              className="w-full px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
              disabled={paymentData.balance <= 0}
            >
              Request Payment
            </button>
          </div>
        </div>
      </div>

      {/* Incoming Payments */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-medium text-gray-900 mb-4">Incoming Payments</h2>
        {paymentData.incoming.length === 0 ? (
          <p className="text-gray-600">No incoming payments yet.</p>
        ) : (
          <div className="space-y-4">
            {paymentData.incoming.map((payment) => (
              <div
                key={payment.id}
                className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0"
              >
                <div>
                  <p className="text-gray-900 font-medium">{payment.event}</p>
                  <p className="text-sm text-gray-600">{payment.date}</p>
                </div>
                <div className="text-right">
                  <p className="text-green-600 font-semibold">${payment.amount}</p>
                  <span
                    className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      payment.status === 'Processed'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {payment.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Spent Payments */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-medium text-gray-900 mb-4">Spent</h2>
        {paymentData.spent.length === 0 ? (
          <p className="text-gray-600">No spending records yet.</p>
        ) : (
          <div className="space-y-4">
            {paymentData.spent.map((spent) => (
              <div
                key={spent.id}
                className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0"
              >
                <div>
                  <p className="text-gray-900 font-medium">{spent.description}</p>
                  <p className="text-sm text-gray-600">{spent.date}</p>
                </div>
                <p className="text-red-600 font-semibold">${spent.amount}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Payment Request Modal */}
      {showRequestModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm" onClick={() => setShowRequestModal(false)} />
          <div className="relative max-w-md w-full bg-white rounded-lg shadow-xl p-6">
            <button
              onClick={() => setShowRequestModal(false)}
              className="absolute top-3 right-3 p-1.5 rounded-full hover:bg-gray-100"
            >
              <svg className="h-5 w-5 text-gray-600 hover:text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h3 className="text-xl font-medium text-gray-900 mb-4">Request Payment</h3>
            <p className="text-gray-600 mb-4">You are requesting a payout of <span className="font-semibold text-blue-600">${paymentData.balance}</span>.</p>
            <button
              onClick={handleRequestPayment}
              className="w-full px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            >
              Confirm Request
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Payment;