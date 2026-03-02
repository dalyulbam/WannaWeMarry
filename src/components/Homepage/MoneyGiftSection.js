/**
 * @file MoneyGiftSection.js
 * @description Displays congratulatory money (축의금) transfer section with
 *              Toss/KakaoPay deep links and account details with copy-to-clipboard.
 *              Edit TRANSFER_CONFIG below to change bank/transfer info.
 *              Replace /public/images/couple_photo.jpg to change the photo.
 */

"use client";

import React, { useState } from "react";
import images from "@/utils/imagesImport";
import Image from "next/image";
import { IoCopyOutline } from "react-icons/io5";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import translations from "@/utils/translations";

// ============================================================
// TRANSFER_CONFIG — 여기서 계좌 정보와 송금 링크를 수정하세요
// Edit this object to change bank details and transfer links.
// ============================================================
const TRANSFER_CONFIG = {
  toss: "https://toss.me/사용자명", // Toss 송금 링크 (Replace with your Toss username)
  kakaopay: "https://qr.kakaopay.com/코드", // KakaoPay 송금 링크 (Replace with your KakaoPay code)
  bank: "토스뱅크", // 은행명 (Bank name)
  accountNumber: "1000-1234-5678", // 계좌번호 (Account number)
  accountHolder: "홍길동", // 예금주 (Account holder name)
};

const MoneyGiftSection = ({ language }) => {
  const t = translations[language].money_gift_section;
  const { toast } = useToast();
  const [showAccount, setShowAccount] = useState(false);

  const primaryVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  const secondaryVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, delay: 0.1 } },
  };

  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        toast({ title: t.toast_copied });
      })
      .catch(() => {
        toast({ variant: "destructive", title: t.toast_error });
      });
  };

  const dashedLine = Array(3)
    .fill()
    .map((_, index) => (
      <div key={index} className="w-[2px] h-[5px] my-[3px] bg-gold" />
    ));

  return (
    <section
      id="money-gift-section"
      className="relative bg-blue px-4 sm:px-12 py-12 flex items-center flex-col overflow-hidden"
    >
      {/* Title */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={primaryVariants}
        viewport={{ once: true, amount: 0.2 }}
        className="w-full flex flex-col items-center px-4 z-10 mb-8 md:mb-12"
      >
        <Image
          src={images.glass}
          alt="gift"
          width={95}
          height={95}
          quality={100}
          className="mb-4 w-[90px] h-auto brightness-95"
        />
        <div className="flex flex-col justify-center items-center">
          <h3 translate="no" className="text-white font-bold z-20">
            {t.title.main}
          </h3>
          <h3
            translate="no"
            className="text-gold text-6xl sm:text-8xl alex-brush z-10 transform font-light -mt-8 md:-mt-10"
          >
            {t.title.sub}
          </h3>
        </div>
      </motion.div>

      <div className="relative w-full max-w-[700px] text-white text-center flex flex-col items-center z-10">
        {/* Description */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          variants={secondaryVariants}
          viewport={{ once: true, amount: 0.2 }}
          translate="no"
          className="text-center mb-6"
        >
          {t.description}
        </motion.p>

        {dashedLine}

        {/* Couple Photo */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={secondaryVariants}
          viewport={{ once: true, amount: 0.2 }}
          className="w-full max-w-[280px] my-8"
        >
          <Image
            src={images.couple_photo}
            alt="couple"
            width={400}
            height={400}
            quality={100}
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </motion.div>

        {dashedLine}

        {/* Account Toggle */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={secondaryVariants}
          viewport={{ once: true, amount: 0.2 }}
          className="w-full max-w-[400px] mt-6"
        >
          <button
            onClick={() => setShowAccount(!showAccount)}
            className="text-gold underline underline-offset-4 text-lg mb-4"
          >
            {showAccount ? t.hide_account : t.show_account}
          </button>

          {showAccount && (
            <div className="w-full bg-white/10 backdrop-blur-sm rounded-lg p-5 mt-3 text-white text-left">
              {/* Bank */}
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm">
                  <span className="font-semibold">{t.bank_label}:</span>{" "}
                  {TRANSFER_CONFIG.bank}
                </span>
              </div>
              {/* Account Holder */}
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm">
                  <span className="font-semibold">
                    {t.account_holder_label}:
                  </span>{" "}
                  {TRANSFER_CONFIG.accountHolder}
                </span>
                <button
                  onClick={() =>
                    copyToClipboard(TRANSFER_CONFIG.accountHolder)
                  }
                  className="ml-2 hover:opacity-70"
                >
                  <IoCopyOutline size={16} />
                </button>
              </div>
              {/* Account Number */}
              <div className="flex justify-between items-center">
                <span className="text-sm">
                  <span className="font-semibold">
                    {t.account_number_label}:
                  </span>{" "}
                  {TRANSFER_CONFIG.accountNumber}
                </span>
                <button
                  onClick={() =>
                    copyToClipboard(TRANSFER_CONFIG.accountNumber)
                  }
                  className="ml-2 hover:opacity-70"
                >
                  <IoCopyOutline size={16} />
                </button>
              </div>
            </div>
          )}
        </motion.div>

        {/* Transfer Buttons */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={secondaryVariants}
          viewport={{ once: true, amount: 0.2 }}
          className="w-full max-w-[340px] flex flex-col gap-3 mt-8"
        >
          <a
            href={TRANSFER_CONFIG.toss}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center bg-[#0064FF] text-white py-3 rounded-lg font-medium text-lg hover:opacity-90 transition-opacity no-underline"
          >
            {t.toss_button}
          </a>
          <a
            href={TRANSFER_CONFIG.kakaopay}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center bg-[#FEE500] text-[#191919] py-3 rounded-lg font-medium text-lg hover:opacity-90 transition-opacity no-underline"
          >
            {t.kakaopay_button}
          </a>
        </motion.div>

        {/* Divider & Thanks */}
        <Image
          src={images.divider}
          alt="divider"
          width={650}
          height={0}
          quality={100}
          className="w-[160px] h-auto mt-12 mb-8"
        />

        <motion.h3
          initial="hidden"
          whileInView="visible"
          variants={primaryVariants}
          viewport={{ once: true, amount: 0.2 }}
          translate="no"
          className="font-bold text-center text-gold"
        >
          {t.thanks}
        </motion.h3>
      </div>

      {/* Decorative line art */}
      <Image
        src={images.la2}
        alt="Line art 1"
        width={650}
        height={0}
        quality={100}
        className="max-md:hidden absolute w-[250px] md:w-[350px] lg:w-[450px] top-24 xl:top-72 right-0 xl:right-16 z-0 opacity-30 transform rotate-[45deg]"
      />
      <Image
        src={images.la3}
        alt="Line art 2"
        width={650}
        height={0}
        quality={100}
        className="max-md:hidden w-[250px] md:w-[350px] lg:w-[450px] absolute bottom-20 xl:bottom-32 left-0 z-0 opacity-30 transform scale-x-[-1] rotate-[45deg]"
      />
    </section>
  );
};

export default MoneyGiftSection;
