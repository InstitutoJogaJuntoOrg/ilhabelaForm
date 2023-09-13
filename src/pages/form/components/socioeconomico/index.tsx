import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ContainerButtons } from "../..";
import {
  SocioeconomicoSchema,
  SocioeconomicoSchemaType,
} from "../../../../schema/socioeconomico";
import { benefits } from "../options/benefits";
import { childrens } from "../options/childrens";
import { collor } from "../options/collor";
import { connect } from "../options/conect";
import { deficiency } from "../options/deficiency";
import { displays } from "../options/display";
import { emprego } from "../options/emprego";
import { family } from "../options/family";
import { gender } from "../options/gender";
import { guildance } from "../options/guidance";
import { scholl } from "../options/scholl";

export const SocioEconomico = ({
  setTabEnabled,
  setActiveTab,
  setVisible,
}: any) => {
  interface City {
    name: string;
    code: string;
  }
  const [selectedcollor, setSelectedcollor] = useState<City | null>(null);
  const [selectedchildrens, setSelectedchildrens] = useState<City | null>(null);
  const [selectedconexao, setSelectedconexao] = useState<City | null>(null);
  const [selectedemprego, setSelectedEmprego] = useState<City | null>(null);
  const [selectedguildance, setSelectedguildance] = useState<City | null>(null);
  const [selectedfamily, setSelectedfamily] = useState<City | null>(null);
  const [selecteddisplay, setSelecteddisplay] = useState<City | null>(null);
  const [selectedscholl, setSelectedscholl] = useState<City | null>(null);
  const [selectedgender, setSelectedgender] = useState<City | null>(null);
  const [selectedBenefits, setSelectedBenefits] = useState<City | null>(null);
  const [selectedDeficiency, SetSelectedDeficiency] = useState<City | null>(
    null
  );

  const [hasFormBeenSubmitted, setHasFormBeenSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<SocioeconomicoSchemaType>({
    resolver: zodResolver(SocioeconomicoSchema),
  });

  console.log(hasFormBeenSubmitted)
  const apiUrl = "https://back.ilhabelatech.com/socioeconomics/";

  async function sendSocioEconomicInfo(data: SocioeconomicoSchemaType) {
    localStorage.setItem("socioeconomicForm", 'true');
    try {
      const formData = new FormData();
      formData.append("deficiency", data.deficiency.name);
      formData.append("average_monthly_income", data.income);
      formData.append("race", data.color);
      formData.append("gender", data.gender);
      formData.append("sexual_orientation", data.guidance);
      formData.append("children", data.children.name);
      formData.append("education_level", data.schooling);
      formData.append("benefit", data.benefit.name);
      formData.append("device_type", data.display.name);
      formData.append("internet_connection_type", data.connect);
      formData.append("income", data.income);
      formData.append("household_count", data.family.name);
      formData.append("employment_status", data.employment_status);

      const token = localStorage.getItem("token"); // Obter o token do localStorage

      const response = await axios.post(apiUrl, formData, {
        headers: {
          Authorization: `Bearer ${token}`, // Incluir o token no cabeçalho
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(data);
      setTabEnabled(false);
      setActiveTab(2);
      setVisible(true);
      console.log("Data sent successfully:", response.data);
    } catch (error) {
      console.error("Error sending data:", error);
    }
  }
  console.log(errors);

  useEffect(() => {
    const checkFormSubmission = async () => {
      try {
        const response = await axios.get(
          "http://back.ilhabelatech.com/socioeconomics/"
        );

        if (response.status === 200) {
            console.log("nao enviou");
          setHasFormBeenSubmitted(true);
        }
      } catch (error: any) {
        // Se a API retornar um erro 500, você pode tratar isso aqui
        if (error.response && error.response.status === 500) {
          console.log("ja enviou");
          setTabEnabled(false);
        }
      }
    };

    checkFormSubmission();
  }, []);

  return (
    <form onSubmit={handleSubmit(sendSocioEconomicInfo)} className="boxSh">
      <div>
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
            className={
              errors.deficiency
                ? "p-invalid w-full md:w-14rem"
                : "w-full md:w-14rem"
            }
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
            optionLabel="value"
            onChange={(e) => {
              setSelectedgender(e.value);
              setValue("gender", e.value);
            }}
            placeholder="Selecione"
            className={
              errors.gender
                ? "p-invalid w-full md:w-14rem"
                : "w-full md:w-14rem"
            }
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
          <label>Qual sua situação de emprego?</label>
          <Dropdown
            value={selectedemprego}
            options={emprego}
            optionLabel="name"
            onChange={(e) => {
              setSelectedEmprego(e.value);
              setValue("employment_status", e.value);
            }}
            placeholder="Selecione"
            className={
              errors.employment_status
                ? "p-invalid w-full md:w-14rem"
                : "w-full md:w-14rem"
            }
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
            className={
              errors.children
                ? "p-invalid w-full md:w-14rem"
                : "w-full md:w-14rem"
            }
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
            className={
              errors.income
                ? "p-invalid w-full md:w-14rem"
                : "w-full md:w-14rem"
            }
            placeholder="R$"
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
          <label>Tipos de conexão</label>
          <Dropdown
            value={selectedconexao}
            options={connect}
            optionLabel="name"
            onChange={(e) => {
              setSelectedconexao(e.value);
              setValue("connect", e.value);
            }}
            placeholder="Selecione"
            className={
              errors.color ? "p-invalid w-full md:w-14rem" : "w-full md:w-14rem"
            }
          />
        </div>
      </div>
      <div>
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
            className={
              errors.color ? "p-invalid w-full md:w-14rem" : "w-full md:w-14rem"
            }
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
            className={
              errors.guidance
                ? "p-invalid w-full md:w-14rem"
                : "w-full md:w-14rem"
            }
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
          <label>Números de membros da família</label>
          <Dropdown
            value={selectedfamily}
            options={family}
            optionLabel="name"
            onChange={(e) => {
              setSelectedfamily(e.value);
              setValue("family", e.value);
            }}
            placeholder="Selecione"
            className={
              errors.family
                ? "p-invalid w-full md:w-14rem"
                : "w-full md:w-14rem"
            }
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
          <label>Qual sua escolaridade</label>
          <Dropdown
            value={selectedscholl}
            options={scholl}
            optionLabel="value"
            optionValue="name"
            onChange={(e) => {
              setSelectedscholl(e.value);
              setValue("schooling", e.value);
            }}
            placeholder="Selecione"
            className={
              errors.schooling
                ? "p-invalid w-full md:w-14rem"
                : "w-full md:w-14rem"
            }
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
          <label>Benefício governamental seu ou da sua família</label>
          <Dropdown
            value={selectedBenefits}
            options={benefits}
            optionLabel="name"
            onChange={(e) => {
              setSelectedBenefits(e.value);
              setValue("benefit", e.value);
            }}
            placeholder="Selecione"
            className={
              errors.benefit
                ? "p-invalid w-full md:w-14rem"
                : "w-full md:w-14rem"
            }
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
          <label>Tipo de dispositivo para acessar as aulas</label>
          <Dropdown
            value={selecteddisplay}
            options={displays}
            optionLabel="name"
            onChange={(e) => {
              setSelecteddisplay(e.value);
              setValue("display", e.value);
            }}
            placeholder="Selecione"
            className={
              errors.display
                ? "p-invalid w-full md:w-14rem"
                : "w-full md:w-14rem"
            }
            showClear
          />
        </div>
      </div>
      <ContainerButtons>
        <button type="button" onClick={handleSubmit(sendSocioEconomicInfo)}>
          Enviar
        </button>
      </ContainerButtons>
    </form>
  );
};
