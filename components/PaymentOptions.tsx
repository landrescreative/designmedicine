'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PaymentOptions = () => {
  const [selectedPayment, setSelectedPayment] = useState('stripe');

  const handleSelectPayment = (method) => {
    setSelectedPayment(method);
  };

  return (
    <div className="flex flex-col items-center w-full p-6 min-h-screen">
      <h2 className="text-3xl font-semibold mb-3">Elige tu método de pago</h2>
      <p className="text-gray-500 mb-6 text-center max-w-md">
        Cada método de pago tiene comisiones diferentes. Selecciona el que más
        te convenga.
      </p>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Stripe Card */}
        <motion.div
          className={`flex flex-col items-center p-6 w-72 border rounded-lg shadow-lg cursor-pointer ${
            selectedPayment === 'stripe'
              ? 'border-blue-600 bg-blue-50'
              : 'border-gray-300'
          }`}
          onClick={() => handleSelectPayment('stripe')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-1 text-blue-600">
              Pago en línea con Stripe
            </h3>
            <p className="text-gray-600 text-center text-sm">
              Compra segura a través de Stripe
            </p>
          </div>
          <div className="mt-6 min-h-[80px] flex justify-center items-center">
            <AnimatePresence>
              {selectedPayment === 'stripe' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Stripe Button Script */}
                  <script
                    async
                    src="https://js.stripe.com/v3/buy-button.js"
                  ></script>
                  <stripe-buy-button
                    buy-button-id="buy_btn_1QKUYfBceNIiOkbgAqjN489c"
                    publishable-key="pk_live_51QJhL9BceNIiOkbgmFKFoCUk5yS6g0117t64Sm5sjb3q6FP2CsG6LyCgK6Nnb58GaDprQKsSS3WEpLgWNCczn9dG00Tc7GMHtc"
                  ></stripe-buy-button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Zelle Card */}
        <motion.div
          className={`flex flex-col items-center p-6 w-72 border rounded-lg shadow-lg cursor-pointer ${
            selectedPayment === 'zelle'
              ? 'border-purple-600 bg-purple-50'
              : 'border-gray-300'
          }`}
          onClick={() => handleSelectPayment('zelle')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-1 text-purple-600">
              Pago con Zelle
            </h3>
            <p className="text-gray-600 text-center text-sm">
              Transferencia directa y sin complicaciones
            </p>
          </div>
          <div className="mt-6 min-h-[80px] flex justify-center items-center">
            <AnimatePresence>
              {selectedPayment === 'zelle' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-purple-700 font-semibold">
                    Correo: ejemplo@zelle.com
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PaymentOptions;
