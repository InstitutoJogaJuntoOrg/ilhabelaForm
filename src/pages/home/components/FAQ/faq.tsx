import { useState } from "react";
import { ContainerQuestions, FAQContainer } from "./styles";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQProps = {
  faqs: FAQItem[];
};

const FAQ: React.FC<FAQProps> = ({ faqs }) => {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

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
     {faqs.map((faq, index) => (
        <div key={index} style={{ marginBottom: "10px" }} className="questions">
          <div
           className="openClass"
            onClick={() => toggleItem(index)}
          >
            <h1 style={{
                 fontSize: '22px',
                 fontWeight: '400',
                 color: "white"
         
          
            }}>{faq.question}</h1>
            <span style={{ float: "right",
            color: "white",
        
            fontWeight: '500', 
        marginTop: '-20px', 
       }}>
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
              {faq.answer}
            </div>
          )}
        </div>
      ))}
     </div>
    </ContainerQuestions>
  );
};

const FAQs: React.FC = () => {
  const faqs: FAQItem[] = [
    {
      question: "Posso fazer o curso mesmo tendo mais de 24 anos? ",
      answer:
        "Sim, ainda que você tenha mais que 24 anos, você pode fazer o curso normalmente.",
    },
    {
      question: "Tenho menos que 17 anos, posso fazer o curso?",
      answer:
        "A idade mínima para fazer o curso é de 15 anos completos.",
    },
    {
      question:
        "Vou fazer 15 anos durante o curso, posso fazer minha inscrição?",
      answer: "Não. No momento da sua inscrição, você já precisa ter 15 anos. ",
    },
    {
      question:
        "Posso fazer o curso mesmo tendo estudado em escola particular?",
      answer: "Sim, você pode fazer o curso normalmente.",
    },
  ];

  return (
    <FAQContainer>
      <h1 className="title">FAQ (Perguntas Frequentes)</h1>
      <FAQ faqs={faqs} />
    </FAQContainer>
  );
};

export default FAQs;
