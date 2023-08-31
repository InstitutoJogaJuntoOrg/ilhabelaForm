import { FormSchema, FormSchemaType } from "../../schema/formSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Container } from ".";

import { states } from "./components/options/state";
import { deficiency } from "./components/options/deficiency";
import { collor } from "./components/options/collor";
import { gender } from "./components/options/gender";
import { guildance } from "./components/options/guidance";
import { childrens } from "./components/options/childrens";

import { InputText } from "primereact/inputtext";
import { InputMask } from "primereact/inputmask";

import { Dropdown } from "primereact/dropdown";

import { useState } from "react";

interface City {
  name: string;
  code: string;
}

export const FormPage = () => {
  const [selectedCity, setSelectedCity] = useState<City | null>(null);
  const [selectedcollor, setSelectedcollor] = useState<City | null>(null);
  const [selectedchildrens, setSelectedchildrens] = useState<City | null>(null);
  const [selectedguildance, setSelectedguildance] = useState<City | null>(null);
  const [selectedgender, setSelectedgender] = useState<City | null>(null);
  const [selectedDeficiency, SetSelectedDeficiency] = useState<City | null>(
    null
  );
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      state: '',
      deficiency: "",
      color: "",
      children: "",
      gender: "",
      guidance: "",
      income: '',
    },
  });

  function handleForm(data: FormSchemaType) {
    console.log(data);

    reset()
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
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <label>Nome</label>
              <InputText
                {...register("name")}
                id="username"
                aria-describedby="username-help"
                placeholder="Nome"
              />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <label>Nome social</label>
              <InputText
                {...register("socialName")}
                id="socialName"
                aria-describedby="username-help"
                placeholder="Nome socil"
              />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <label>CPF:</label>
              <InputMask
                {...register("cpf")}
                key="cpf"
                mask="999.999.999-99"
                placeholder="___.___.___-__"
              />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <label>Email</label>
              <InputText {...register("email")} placeholder="Email" />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <label htmlFor="date">Data de nascimento:</label>
              <InputMask
                {...register("date")}
                id="date"
                mask="99/99/9999"
                placeholder="dd/mm/yyyy"
              />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: ".0rem",
              }}
              className="card flex justify-content-center"
            >
              <label>Estado:</label>
              <Dropdown
                value={selectedCity}
                options={states}
                optionLabel="name"
                onChange={(e) => {
                  setSelectedCity(e.value);
                  setValue("state", e.value);
                }}
                placeholder="Selecione"
                className="w-full md:w-14rem"
                showClear
              />
            </div>
          </div>

          <div className="dadosSocieconomicos">
            <h1>Dados socioeconômicos</h1>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: ".0rem",
              }}
              className="card flex justify-content-center"
            >
              <label>Possui algum tipo de deficiência física?</label>
              <Dropdown
                value={selectedDeficiency}
                options={deficiency}
                optionLabel="name"
                onChange={(e) => {
                  SetSelectedDeficiency(e.value);
                  setValue("deficiency", e.value);
                }}
                placeholder="Selecione"
                className="w-full md:w-14rem"
                showClear
              />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: ".0rem",
              }}
              className="card flex justify-content-center"
            >
              <label>Cor/raça:</label>
              <Dropdown
                value={selectedcollor}
                options={collor}
                optionLabel="name"
                onChange={(e) => {
                  setSelectedcollor(e.value);
                  setValue("color", e.value);
                }}
                placeholder="Selecione"
                className="w-full md:w-14rem"
                showClear
              />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: ".0rem",
              }}
              className="card flex justify-content-center"
            >
              <label>Qual gênero você se identifica?</label>
              <Dropdown
                value={selectedgender}
                options={gender}
                optionLabel="name"
                onChange={(e) => {
                  setSelectedgender(e.value);
                  setValue("gender", e.value);
                }}
                placeholder="Selecione"
                className="w-full md:w-14rem"
                showClear
              />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: ".0rem",
              }}
              className="card flex justify-content-center"
            >
              <label>Qual sua orientação sexual?</label>
              <Dropdown
                value={selectedguildance}
                options={guildance}
                optionLabel="name"
                onChange={(e) => {
                  setSelectedguildance(e.value);
                  setValue("guidance", e.value);
                }}
                placeholder="Selecione"
                className="w-full md:w-14rem"
                showClear
              />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: ".0rem",
              }}
              className="card flex justify-content-center"
            >
              <label>Tem filhos?</label>
              <Dropdown
                value={selectedchildrens}
                options={childrens}
                optionLabel="name"
                onChange={(e) => {
                  setSelectedchildrens(e.value);
                  setValue("children", e.value);
                }}
                placeholder="Selecione"
                className="w-full md:w-14rem"
                showClear
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <label htmlFor="currency-us" className="font-bold block mb-2">
                Qual a renda média mensal da sua família?
              </label>
              <InputText
                {...register("income")}
                id="renda"
                aria-describedby="username-help"
                placeholder="R$"
              />
            </div>
          </div>
        </div>
        <button type="submit">Inscrever-se</button>
      </form>
    </Container>
  );
};
