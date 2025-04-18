import React from "react";

const AccordionItem = ({
  showDescription,
  ariaExpanded,
  fontWeightBold,
  item,
  index,
  onClick,
}) => (
  <div className="faq-question" key={item.question}>
    <dt>
      <button
        aria-expanded={ariaExpanded}
        aria-controls={`faq${index + 1}-desc`}
        data-qa="faq-question-button"
        className={`faq-question-button ${fontWeightBold}`}
        onClick={onClick}
      >
        {item.question}
      </button>
    </dt>
    <dd>
      <p
        id={`faq${index + 1}-desc`}
        data-qa="faq-desc"
        className={`faq-desc ${showDescription}`}
      >
        {item.answer}
      </p>
    </dd>
  </div>
);

export default AccordionItem;
