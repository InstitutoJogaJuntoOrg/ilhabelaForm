import { Container } from "../..";
import { useForm } from "react-hook-form";
import { ProvaSchema, ProvaSchemaType } from "../../../../schema/provaSchema";
import { zodResolver } from "@hookform/resolvers/zod";

export const Prova = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProvaSchemaType>({
    resolver: zodResolver(ProvaSchema),
  });

  const handleForm = (data: ProvaSchemaType) => {
    console.log(data);
  };

  console.log(errors);
  return (
    <Container>
      <form onSubmit={handleSubmit(handleForm)} className="boxSh">
        <div className="options">
          <h1 style={{ fontSize: "1rem" }}>Questão 1</h1>
          <label className="hLabel" htmlFor="q1-option1">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionOne")}
              id="q1-option1"
              value="resposta 1A"
            />
            Resposta 1A
          </label>

          <label className="hLabel" htmlFor="q1-option2">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionOne")}
              id="q1-option2"
              value="resposta 1B"
            />
            Resposta 1B
          </label>

          <label className="hLabel" htmlFor="q1-option3">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionOne")}
              id="q1-option3"
              value="resposta 1C"
            />
            Resposta 1C
          </label>

          <label className="hLabel" htmlFor="q1-option4">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionOne")}
              id="q1-option4"
              value="resposta 1D"
            />
            Resposta 1D
          </label>
        </div>

        <div className="options">
          <h1 style={{ fontSize: "1rem" }}>Questão 2</h1>
          <label className="hLabel" htmlFor="q2-option1">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionTwo")}
              id="q2-option1"
              value="resposta 2A"
            />
            Resposta 2A
          </label>

          <label className="hLabel" htmlFor="q2-option2">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionTwo")}
              id="q2-option2"
              value="resposta 2B"
            />
            Resposta 2B
          </label>

          <label className="hLabel" htmlFor="q2-option3">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionTwo")}
              id="q2-option3"
              value="resposta 2C"
            />
            Resposta 2C
          </label>

          <label className="hLabel" htmlFor="q2-option4">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionTwo")}
              id="q2-option4"
              value="resposta 2D"
            />
            Resposta 2D
          </label>
        </div>

        <div className="options">
          <h1 style={{ fontSize: "1rem" }}>Questão 3</h1>
          <label className="hLabel" htmlFor="q3-option1">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionThree")}
              id="q3-option1"
              value="resposta 3A"
            />
            Resposta 3A
          </label>

          <label className="hLabel" htmlFor="q3-option2">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionThree")}
              id="q3-option2"
              value="resposta 3B"
            />
            Resposta 3B
          </label>

          <label className="hLabel" htmlFor="q3-option3">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionThree")}
              id="q3-option3"
              value="resposta 3C"
            />
            Resposta 3C
          </label>

          <label className="hLabel" htmlFor="q3-option4">
            <input
              className="inputWidth"
              type="radio"
              {...register("questionThree")}
              id="q3-option4"
              value="resposta 3D"
            />
            Resposta 3D
          </label>
        </div>
        <button type="button" onClick={handleSubmit(handleForm)}>
          Enviar
        </button>
      </form>
    </Container>
  );
};
