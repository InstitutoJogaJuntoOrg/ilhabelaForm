import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { ContainerQuestions, FAQContainer } from "./styles";

type FAQItem = {
  question: string;
  answer: string | string[];
};

type FAQProps = {
  faqs: FAQItem[];
};

const FAQList: React.FC<FAQProps> = ({ faqs }) => {
  const [selectedItem, setSelectedItem] = useState<number | null>(-1);

  const toggleItem = (index: number) => {
    setSelectedItem((currentItem) => (currentItem === index ? null : index));
  };

  return (
    <ContainerQuestions>
      {faqs.map((faq, index) => {
        const isOpen = selectedItem === index;

        return (
          <article key={`${faq.question}-${index}`} className="questionCard">
            <button
              aria-expanded={isOpen}
              className="questionTrigger"
              onClick={() => toggleItem(index)}
              type="button"
            >
              <span>{faq.question}</span>
              <i aria-hidden="true">{isOpen ? <FaMinus /> : <FaPlus />}</i>
            </button>

            {isOpen && (
              <div className="answerPanel">
                {Array.isArray(faq.answer) ? (
                  <ul className="respQuestion">
                    {faq.answer.map((item, i) => (
                      <li key={i} className="list">
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p
                    className="respQuestion"
                    dangerouslySetInnerHTML={{ __html: faq.answer }}
                  />
                )}
              </div>
            )}
          </article>
        );
      })}
    </ContainerQuestions>
  );
};

const FAQs: React.FC<FAQProps> = ({ faqs }) => {
  return (
    <FAQContainer>
      <span>Perguntas frequentes</span>
      <h1 className="title">Tire suas dúvidas sobre o processo</h1>
      <FAQList faqs={faqs} />
    </FAQContainer>
  );
};

export default FAQs;
