import { useContext, useRef } from "react";
import { FeedbackContext } from "./FeedbackContext";

function FeedbackButtons({ options }) {
  const { onLeaveFeedback } = useContext(FeedbackContext);
  const buttonRef = useRef(null);

  return (
    <div>
      {options.map((opt, index) => (
        <button
          key={opt}
          ref={index === 0 ? buttonRef : null}
          onClick={() => onLeaveFeedback(opt)}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <FeedbackContext.Provider value={{ onLeaveFeedback }}>
      <FeedbackButtons options={options} />
    </FeedbackContext.Provider>
  );
}

export default FeedbackOptions;
