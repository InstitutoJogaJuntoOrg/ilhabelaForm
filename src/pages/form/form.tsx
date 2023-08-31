import { FormSchema, FormSchemaType } from "../../schema/formSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Container } from ".";
import Input from "./components/input/input";
import InputTypeMask from "./components/input/mask";
import InputTypeDate from "./components/input/date";
import InputTypeDropdown from "./components/input/dropdown";
import { states } from "./components/options/state";
import { deficiency } from "./components/options/deficiency";
import { collor } from "./components/options/collor";
import { gender } from "./components/options/gender";
import { guildance } from "./components/options/guidance";
import { childrens } from "./components/options/childrens";
import CurrencyDemo from "./components/input/number";

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
              label="Nome social"
              {...register("socialName")}
              placeholder="Nome social"
            />
            <InputTypeMask {...register("cpf")} key="cpf" />
            <Input label="Email" {...register("email")} placeholder="Email" />
            <InputTypeDate {...register("date")} key="date" />
            <InputTypeDropdown
              states={states}
              label="Estado"
              {...register("state")}
              key="state"
            />
          </div>
          <div className="dadosSocieconomicos">
            <h1>Dados socioeconômicos</h1>
            <InputTypeDropdown
              states={deficiency}
              label="Possui algum tipo de deficiência física?"
              {...register("deficiency")}
              key="state"
            />
            <InputTypeDropdown
            states={collor}
              label="Cor/raça:"
              {...register("color")}
              key="state"
            />
            <InputTypeDropdown
            states={gender}
              label="Qual gênero você se identifica?"
              {...register("gender")}
              key="state"
            />
            <InputTypeDropdown
            states={guildance}
              label="Qual sua orientação sexual?"
              {...register("guidance")}
              key="state"
            />
            <InputTypeDropdown
            states={childrens}
              label="Tem filhos?"
              {...register("children")}
              key="state"
            />
            <CurrencyDemo
key={''}
              {...register("income")}
            />
          </div>
        </div>
        <button type="submit">Inscrever-se</button>
      </form>
    </Container>
  );
};
