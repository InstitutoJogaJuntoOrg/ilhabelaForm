import { useEffect, useState } from "react";
import axios from "axios";
import { Footer } from "../../components/footer";
import { CardOne } from "./components/card";
import FAQs from "./components/FAQ/faq";
import { CardTree } from "./components/cardtre";
import { CardTwo } from "./components/cardTwo";
import StepsHome from "./components/steps";
import {
  About,
  ContainerCardLayout,
  ContainerHome,
  CtaSection,
  FeatureCard,
  FeatureGrid,
  HeroContent,
  HeroMedia,
  LearningGrid,
  LearningItem,
  LearningSection,
  SectionEyebrow,
  VideoCourseSection,
} from "./styles";

const hardSkills = [
  "Planejar e executar testes em API",
  "Automatizar validações e rotinas com Python",
  "Escrever reports de bugs claros, completos e acionáveis",
];

const softSkills = [
  "Trabalho em equipe",
  "Comunicação profissional",
  "Pensamento crítico",
  "Organização e colaboração",
];

const courseFeatures = [
  {
    title: "Apoio Total",
    description:
      "Conte com facilitadores e um laboratório equipado durante sua jornada de aprendizado. Receba suporte para estudar, praticar e evoluir com consistência.",
  },
  {
    title: "Projeto Prático",
    description:
      "Desde as primeiras semanas, você aplica os conceitos em desafios próximos da rotina de qualidade: análise, testes, documentação e melhoria contínua.",
  },
  {
    title: "Mentoria Especializada",
    description:
      "Ao longo do curso, você terá orientações práticas, feedbacks personalizados e direcionamento para transformar teoria em entrega profissional.",
  },
];

export const HomePage = () => {
  const [faqs, setFaqs] = useState<any[]>([]);
  const [studentsApprovedPdf, setStudentsApprovedPdf] = useState<string | null>(
    null
  );

  useEffect(() => {
    axios
      .get(
        "https://api.jogajuntoinstituto.org/hotsite/selective/?process_id=37"
      )
      .then((response) => {
        const result = response.data.results[0];
        const orderedFaqs = [...(result.faqs || [])].sort(
          (a, b) => Number(b?.id ?? 0) - Number(a?.id ?? 0)
        );
        setFaqs(orderedFaqs);
        setStudentsApprovedPdf(result?.students_approved_pdf ?? null);
      })
      .catch((err) => console.error(err));
  }, []);

  const hasApprovedPdf = Boolean(studentsApprovedPdf);
  const primaryLink = hasApprovedPdf
    ? studentsApprovedPdf ?? ""
    : "https://aluno.jogajuntoinstituto.org/";

  return (
    <ContainerHome>
      <HeroMedia>
        <video
          src="https://estaticos-ijj.s3.sa-east-1.amazonaws.com/JogaJunto_Ilhabela.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <HeroContent>
          <SectionEyebrow>Ilhabela Tech</SectionEyebrow>
          <h1>Qualidade de Software</h1>
          <p>
            Uma formação gratuita para quem quer aprender a testar produtos
            digitais, identificar falhas e comunicar melhorias com clareza.
          </p>
          <a target="_blank" rel="noopener noreferrer" href={primaryLink}>
            {hasApprovedPdf
              ? "Ver resultado do processo"
              : "Comece aqui a sua jornada"}
          </a>
        </HeroContent>
      </HeroMedia>

      <ContainerCardLayout>
        <CardTree
          description=""
          className=""
          titleCard="O que é Ilhabela Tech?"
          image="https://estaticos-ijj.s3.sa-east-1.amazonaws.com/card_ilhabela_bannerlogo.png"
          key={3}
          alt="Logo Ilhabela Tech"
        />
        <CardTwo
          description=""
          titleCard="O que é Qualidade de Software?"
          image="https://estaticos-ijj.s3.sa-east-1.amazonaws.com/card_ilhabela_IETEC.png"
          key={1}
          alt="Laboratório IETEC"
        />
        <CardOne
          description=""
          titleCard="Informações sobre o curso"
          image="https://estaticos-ijj.s3.sa-east-1.amazonaws.com/card_ilhabela_IETEC.png"
          key={2}
          alt="Informações do curso"
        />
      </ContainerCardLayout>

      <FeatureGrid>
        {courseFeatures.map((feature) => (
          <FeatureCard key={feature.title}>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </FeatureCard>
        ))}
      </FeatureGrid>

      <LearningSection>
        <SectionEyebrow>O que você vai desenvolver</SectionEyebrow>
        <h2>Hardskills e softskills para atuar com qualidade</h2>
        <LearningGrid>
          <div>
            <h3>Hardskills</h3>
            {hardSkills.map((skill) => (
              <LearningItem key={skill}>{skill}</LearningItem>
            ))}
          </div>
          <div>
            <h3>Softskills</h3>
            {softSkills.map((skill) => (
              <LearningItem key={skill}>{skill}</LearningItem>
            ))}
          </div>
        </LearningGrid>
      </LearningSection>

      <VideoCourseSection>
        <div className="videoFrame">
          <video
            src="/video_qualidade_de_software.mov"
            controls
            controlsList="nodownload"
          >
            Seu navegador não suporta a tag de vídeo.
          </video>
        </div>
        <div className="courseText">
          <SectionEyebrow>Saiba mais sobre o curso</SectionEyebrow>
          <h2>Aprenda qualidade praticando</h2>
          <p>
            O curso de Qualidade de Software apresenta a rotina de quem testa,
            documenta e ajuda a melhorar produtos digitais. A proposta combina
            fundamentos, exercícios práticos e acompanhamento para que você
            aprenda a analisar APIs, usar Python como apoio aos testes e criar
            reports de bugs objetivos.
          </p>
          <p>
            Ao final da jornada, você terá repertório para colaborar com times
            de tecnologia, comunicar problemas de forma profissional e apoiar a
            entrega de softwares mais confiáveis.
          </p>
        </div>
      </VideoCourseSection>

      <CtaSection>
        <div>
          <SectionEyebrow>Vagas limitadas</SectionEyebrow>
          <h2>Dê o primeiro passo na sua carreira em Qualidade de Software</h2>
          <p>
            Um curso gratuito, presencial e prático para aprender testes em API,
            Python, report de bugs e colaboração em times de tecnologia.
          </p>
          <a
            href="https://aluno.jogajuntoinstituto.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Quero me inscrever
          </a>
        </div>
      </CtaSection>

      <About>
        <h1>Como participar</h1>
        <StepsHome />
      </About>
      <FAQs faqs={faqs} />
      <Footer />
    </ContainerHome>
  );
};
