'use client';
import { useTranslations } from 'next-intl';
import React, { JSX } from 'react';
import PropTypes from 'prop-types'; // Para definir el tipo de la prop

// Icons
import { FaPaypal, FaMoneyBillTransfer, FaCreditCard } from 'react-icons/fa6';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'stripe-buy-button': any;
    }
  }
}

const PaymentSection = ({ buyButtonId }: { buyButtonId: string }) => {
  const t = useTranslations('paymentsection');

  return (
    <div className="flex flex-col pb-10 md:w-10/12 items-center md:items-start px-5">
      <h2 className="text-2xl font-bold uppercase text-primary">
        {t('title')}
      </h2>
      <p className="text-lg text-gray-500 text-center md:text-left">
        {t('subtitle')}
      </p>
      <p className="text-lg text-gray-500 mb-5 text-center md:text-left">
        {t('advertisement')}
      </p>
      <div className="flex flex-col md:flex-row gap-4">
        {/* Bank Transfer Payment Card */}
        <div className="bg-purple-100 px-14 py-5 w-full rounded-2xl border-2 border-purple-300 hover:border-purple-600 transition-all duration-300 flex flex-col items-center gap-5">
          <FaMoneyBillTransfer className="text-6xl text-purple-500" />
          <h3 className="text-lg font-semibold mb-2 text-center">
            {t('cta2')}
          </h3>
          <p className="text-sm text-gray-600 text-center">
            Transferencia bancaria a nutricaremx@yahoo.com
          </p>
        </div>

        {/* Stripe Payment Button */}
        <div className="px-14 py-5 w-full rounded-2xl border-2 border-teal-200 hover:border-teal-600 transition-all duration-300 flex justify-center items-center flex-col gap-5 bg-teal-100 cursor-pointer">
          <FaCreditCard className="text-6xl text-teal-500" />
          <h3 className="text-lg font-semibold mb-2 text-center">
            {t('cta3')}
          </h3>
          {/* Botón de compra de Stripe visible al cargar */}
          <script async src="https://js.stripe.com/v3/buy-button.js"></script>
          <stripe-buy-button
            buy-button-id={buyButtonId}
            publishable-key="pk_live_51QJhL9BceNIiOkbgmFKFoCUk5yS6g0117t64Sm5sjb3q6FP2CsG6LyCgK6Nnb58GaDprQKsSS3WEpLgWNCczn9dG00Tc7GMHtc"
            class="mt-2"
          ></stripe-buy-button>
        </div>
      </div>
    </div>
  );
};

// Definir el tipo de la prop
PaymentSection.propTypes = {
  buyButtonId: PropTypes.string.isRequired
};

export default PaymentSection;
