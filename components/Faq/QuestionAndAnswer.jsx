"use client";
import { useState } from "react";
import Plus from "../../public/images/count/plus/plus.svg";
import Minus from "../../public/images/count/minus/minus.svg";

const questions = [
  {
    title: "How long does delivery usually take?",
    desc: "Delivery times can vary depending on your location and the current order volume. Typically, our deliveries are completed within 30 to 45 minutes from the time your order is confirmed. However, during peak hours or adverse weather conditions, it may take a bit longer. ",
    id: 1,
  },
  {
    title: "What are your delivery hours?",
    desc: "Delivery times can vary depending on your location and the current order volume. Typically, our deliveries are completed within 30 to 45 minutes from the time your order is confirmed. However, during peak hours or adverse weather conditions, it may take a bit longer. ",
    id: 2,
  },
  {
    title: "How can I track my order?",
    desc: "Delivery times can vary depending on your location and the current order volume. Typically, our deliveries are completed within 30 to 45 minutes from the time your order is confirmed. However, during peak hours or adverse weather conditions, it may take a bit longer. ",
    id: 3,
  },
  {
    title:
      "Is it possible to order in advance or subscribe to the weekly menu?",
    desc: "Delivery times can vary depending on your location and the current order volume. Typically, our deliveries are completed within 30 to 45 minutes from the time your order is confirmed. However, during peak hours or adverse weather conditions, it may take a bit longer. ",
    id: 4,
  },
  {
    title: "What if my order is late or my meals are damaged during delivery?",
    desc: "Delivery times can vary depending on your location and the current order volume. Typically, our deliveries are completed within 30 to 45 minutes from the time your order is confirmed. However, during peak hours or adverse weather conditions, it may take a bit longer. ",
    id: 5,
  },
];

const QuestionAndAnswer = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);

  return (
    <ul className="grid grid-cols-1 gap-[8px] md:row-start-1 lg:col-end-3">
      {questions?.map(({ title, id, desc }) => {
        return (
          <li
            key={id}
            className="grid grid-cols-1 gap-[12.5px] py-[8px] md:py-[17px] border-b border-[#F6F6F6]"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-[#536524] font-medium leading-[16.8px] text-[14px] w-[280px] md:w-full md:text-[16px] md:leading-[19.2px]">
                {title}
              </h3>

              {currentQuestion === id ? (
                <button type="button" onClick={() => setCurrentQuestion(null)}>
                  <Minus />
                </button>
              ) : (
                <button type="button" onClick={() => setCurrentQuestion(id)}>
                  <Plus />
                </button>
              )}
            </div>
            {id === currentQuestion && (
              <p className="w-[280px] leading-[16.8px] md:w-[654px] lg:w-[530px] md:text-[16px]">
                {desc}
              </p>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default QuestionAndAnswer;
