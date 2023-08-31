import { FormSchema, FormSchemaType } from "../../schema/formSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Container } from ".";
import Input from "./components/input/input";
import InputTypeMask from "./components/input/mask";
import InputTypeDate from "./components/input/date";
import InputTypeDropdown from "./components/input/dropdown";

export const FormPage = () => {
  //const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
  });

  function handleForm(data: FormSchemaType) {
    console.log(data);
  }
  console.log(errors);
  return (
    <Container>
      <h1>Inscrição</h1>
      <form onSubmit={handleSubmit(handleForm)}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "2rem",
          }}
        >
          <div>
            <h1>Dados pessoais</h1>
            <Input
              label="Nome"
              {...register("name")}
              key="name"
              placeholder="Nome"
            />
            <Input
              label="Nome"
              {...register("socialName")}
              placeholder="Nome"
            />
            <InputTypeMask {...register("cpf")} key="cpf" />
            <Input label="Email" {...register("email")} placeholder="Email" />
            <InputTypeDate {...register("date")} key="date" />
            <InputTypeDropdown label="Estado" {...register("state")} key="state" />
          </div>
          <div className="dadosSocieconomicos">
            <h1>Dados socioeconômicos</h1>
            <InputTypeDropdown label="Possui algum tipo de deficiência física?" {...register("deficiency")} key="state" />
            <InputTypeDropdown label="Cor/raça:" {...register("color")} key="state" />
            <InputTypeDropdown label="Qual gênero você se identifica?" {...register("gender")} key="state" />
            <InputTypeDropdown label="Qual sua orientação sexual?" {...register("children")} key="state" />
            <InputTypeDropdown label="Tem filhos?" {...register("schooling")} key="state" />
            <InputTypeDropdown label="Tem filhos?" {...register("schooling")} key="state" />
            <InputTypeDropdown label="Tem filhos?" {...register("schooling")} key="state" />
            <Input
              label="Qual a renda média mensal da sua família?"
              {...register("income")}
              placeholder="R$"
            />
          </div>
        </div>
        <button type="submit">Inscrever-se</button>
      </form>
    </Container>
  );
};
