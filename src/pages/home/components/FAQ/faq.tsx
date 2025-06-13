import {
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactNode,
  ReactPortal,
  useState,
} from "react";
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
    if (selectedItem === index) {
      setSelectedItem(null);
    } else {
      setSelectedItem(index);
    }
  };

  return (
    <ContainerQuestions>
      <div className="wrapper">
        {faqs.map(
          (
            faq: {
              question:
                | string
                | number
                | boolean
                | ReactElement<any, string | JSXElementConstructor<any>>
                | Iterable<ReactNode>
                | ReactPortal
                | null
                | undefined;
              answer: (
                | string
                | number
                | boolean
                | ReactPortal
                | ReactElement<any, string | JSXElementConstructor<any>>
                | Iterable<ReactNode>
                | null
                | undefined
              )[];
            },
            index: Key | any | undefined
          ) => (
            <div
              key={index}
              style={{ marginBottom: "10px" }}
              className="questions"
            >
              <div className="openClass" onClick={() => toggleItem(index)}>
                <h1
                  style={{
                    fontSize: "22px",
                    fontWeight: "400",
                    color: "white",
                  }}
                >
                  {faq.question}
                </h1>
                <span
                  style={{
                    float: "right",
                    color: "white",
                    fontWeight: "500",
                    marginTop: "-20px",
                  }}
                >
                  {selectedItem === index ? "-" : "+"}
                </span>
              </div>
              {selectedItem === index && (
                <div
                  style={{
                    backgroundColor: "#cbe0c4",
                    padding: "10px",
                    borderRadius: "5px",
                  }}
                >
                  {Array.isArray(faq.answer) ? (
                    <ul className="respQuestion">
                      {faq.answer.map(
                        (
                          item:
                            | string
                            | number
                            | boolean
                            | ReactElement<
                                any,
                                string | JSXElementConstructor<any>
                              >
                            | Iterable<ReactNode>
                            | ReactPortal
                            | null
                            | undefined,
                          i: Key | null | undefined
                        ) => (
                          <li key={i} className="list">{item}</li>
                        )
                      )}
                    </ul>
                  ) : (
                    <p
                      className="respQuestion"
                      dangerouslySetInnerHTML={{ __html: faq.answer }}
                    />
                  )}
                </div>
              )}
            </div>
          )
        )}
      </div>
    </ContainerQuestions>
  );
};

const FAQs: React.FC<FAQProps> = ({ faqs }) => {
  return (
    <FAQContainer>
      <h1 className="title">FAQ (Perguntas Frequentes)</h1>
      <FAQList faqs={faqs} />
    </FAQContainer>
  );
};

export default FAQs;
