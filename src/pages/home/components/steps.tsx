import "./styles";
import { CardsContainer, StepsContainer } from "./styles";
import {
  FaEnvelope,
  FaFileAlt,
  FaMapMarkerAlt,
  FaUserCheck,
} from "react-icons/fa";

export default function StepsHome() {
  const steps = [
    {
      icon: <FaFileAlt aria-hidden="true" />,
      title: "Leia o edital",
      description:
        'Acesse o edital disponível nessa página e leia tudo com atenção. Em seguida, clique no botão "QUERO SER UXPERTS" para fazer a sua inscrição.',
    },
    {
      icon: <FaUserCheck aria-hidden="true" />,
      title: "Complete seu perfil",
      description:
        "Após ler o edital, preencha seus dados pessoais e socioeconômicos na sessão “Meu Perfil”. Feito isso, acesse o processo seletivo do UXperts, clique em “Inscreva-se” e depois em “Realizar prova” para seguir com o questionário de conhecimentos gerais. Essa etapa é fundamental para o processo seletivo.",
    },
    {
      icon: <FaMapMarkerAlt aria-hidden="true" />,
      title: "Acompanhe a convocação",
      description:
        "Se você for um dos aprovados no curso, será convocado a comparecer na IETEC portando os documentos comprobatórios, segundo edital.",
    },
    {
      icon: <FaEnvelope aria-hidden="true" />,
      title: "Mantenha contato atualizado",
      description: "Mantenha o seu número de telefone e e-mail atualizados.",
    },
  ];

  return (
    <StepsContainer>
      <CardsContainer>
        {steps.map((step, index) => (
          <article key={step.title}>
            <span className="stepNumber">{String(index + 1).padStart(2, "0")}</span>
            <div className="stepIcon">{step.icon}</div>
            <h2>{step.title}</h2>
            <p>{step.description}</p>
          </article>
        ))}
      </CardsContainer>
    </StepsContainer>
  );
}
