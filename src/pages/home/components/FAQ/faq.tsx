import { useState } from "react";
import { ContainerQuestions, FAQContainer } from "./styles";

type FAQItem = {
  question: string;
  answer: string | string[];
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
                <p className="respQuestion">{faq.answer}</p>
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
      question: "O que é o Ilhabela tech?",
      answer: "É um programa da Prefeitura de Ilhabela em parceria com o Instituto Joga Junto que visa capacitar e incluir novos profissionais no mercado tecnológico por meio do conhecimento técnico de testador de Qualidade de Sofware (Q.A)",
    },
    {
      question: "Vagas:",
      answer:
        "São disponibilizadas 30 vagas para o curso, com no mínimo 20 aprovados para formação da turma.",
    },
    {
      question:
        "Não sou residente de Ilhabela, mas frequento a cidade. Posso fazer o curso?",
      answer:
        "Sim, você pode fazer o curso desde que compareça presencialmente nas aulas. A frequência mínima é de 75% em sala de aula para obtenção do certificado.",
    },
    {
      question: "Preciso estar presencial para fazer o curso?",
      answer:
        "Sim, a frequência mínima é de 75% em sala de aula para obtenção do certificado.",
    },
    {
      question: "Recebo um certificado no final do curso?",
      answer:
        "Sim, você receberá certificado desde que tenha frequência de 75% em sala de aula e tenha entregue o projeto final.",
    },
    {
      question: "Quantos certificados posso receber?",
      answer:
        "Dois certificados, um do curso básico e outro do curso avançado de qualidade de software, desde que tenha realizado os dois cursos, com cumprimento dos requisitos de aprovação.",
    },
    {
      question: "Critério de classificação:",
      answer:
        "As 30 melhores classificações no teste de conhecimentos em informática básica.",
    },
    {
      question: "Critério de desempate:",
      answer: [
        "Beneficiário de programas sociais do Governo Federal",
        "Maior tempo de experiência na área",
        "Maior nota na etapa teórica",
      ],
    },
    {
      question: "Qual a frequência mínima para eu receber o certificado?",
      answer: "Frequência de 75% em sala de aula. ",
    },
    {
      question: "Preciso pagar para realizar o curso?",
      answer:
        "Não, o curso é realizado pelo  em parceria com a Prefeitura de Ilhabela e é oferecido gratuitamente para todos os aprovados no processo seletivo. ",
    },
    {
      question: "Eu preciso passar por todas as etapas do processo de seleção?",
      answer:
        "Sim. Todos os candidatos devem passar por todas as etapas do processo de seleção. Caso alguma etapa não seja concluída, haverá desclassificação. ",
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
