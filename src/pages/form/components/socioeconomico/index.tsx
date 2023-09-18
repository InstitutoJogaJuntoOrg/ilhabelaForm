import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { ContainerButtons } from "../..";
import {
  SocioeconomicoSchema,
  SocioeconomicoSchemaType,
} from "../../../../schema/socioeconomico";
import { benefits } from "../options/benefits";
import { childrens } from "../options/childrens";
import { collor } from "../options/collor";
import { deficiency } from "../options/deficiency";
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
  const [selectedemprego, setSelectedEmprego] = useState<City | null>(null);
  const [selectedguildance, setSelectedguildance] = useState<City | null>(null);
  const [selectedfamily, setSelectedfamily] = useState<City | null>(null);
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

  console.log(hasFormBeenSubmitted);

  async function convertFileToBase64Blob(file: File): Promise<Blob> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => {
        const result = reader.result;
        if (result instanceof ArrayBuffer) {
          const blob = new Blob([new Uint8Array(result)], { type: file.type });
          resolve(blob);
        } else {
          reject(new Error("Error reading file as ArrayBuffer"));
        }
      };

      reader.onerror = (error) => {
        reject(error);
      };

      reader.readAsArrayBuffer(file);
    });
  }

  const apiUrl = "https://back.ilhabelatech.com/socioeconomics/";

  async function sendSocioEconomicInfo(data: SocioeconomicoSchemaType) {
    localStorage.setItem("socioeconomicForm", "true");

    try {
      const residency_proof = data.residency_proof[0];
      const enrollment_proof = data.enrollment_proof[0];

      if (enrollment_proof === 0) {
        toast.error("Por favor, envie os comprovantes necessários.");
        return;
      }
      const formData = new FormData();
      formData.append("deficiency", data.deficiency);
      formData.append("average_monthly_income", data.income);
      formData.append("race", data.color);
      formData.append("gender", data.gender);
      formData.append("sexual_orientation", data.guidance);
      formData.append("children", data.children);
      formData.append("education_level", data.schooling);
      formData.append("benefit", data.benefit);

      formData.append("income", data.income);
      formData.append("household_count", data.family.name);
      formData.append("employment_status", data.employment_status);

      if (residency_proof) {
        try {
          const blob = await convertFileToBase64Blob(residency_proof);

          formData.append("residency_proof", blob, residency_proof.name);
        } catch (error) {
          console.error("Error converting file:", error);
          return;
        }
      }

      if (enrollment_proof) {
        try {
          const blob = await convertFileToBase64Blob(enrollment_proof);

          formData.append("enrollment_proof", blob, enrollment_proof.name);
        } catch (error) {
          console.error("Error converting file:", error);
          return;
        }
      }

      const token = localStorage.getItem("token");

      const response = await axios.post(apiUrl, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success("Formulário enviado com sucesso!");
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
  const token = localStorage.getItem('token')
  console.log(token)

  useEffect(() => {
    const checkFormSubmission = async () => {
      try {
        const response = await axios.get(
          "https://back.ilhabelatech.com/socioeconomics/"
        );
        localStorage.setItem("token", response.data.access);
        if (response.status === 200 || response.status === 201) {
          toast.success("Formulário enviado com sucesso!");
          setHasFormBeenSubmitted(true);
        } else if (response.status === 400) {
          toast.error("Erro ao enviar formulário");
        } else if (response.status === 401) {
          if (response.data && response.data.detail) {
            toast.error(response.data.detail); // Exibir a mensagem de erro da API
          } else {
            toast.error("Erro ao enviar formulário"); // Mensagem de erro padrão
          }
        }
      } catch (error: any) {
        if (error.response && error.response.status === 500) {
          toast.error("Erro ao enviar formulário");
          setTabEnabled(false);
        }
      }
    };

    checkFormSubmission();
  }, []);

  return (
    <div
      style={{
        width: "2rem",
      }}
    >
      <form
        onSubmit={handleSubmit(sendSocioEconomicInfo)}
        className="boxSh"
        style={{
          maxWidth: "40rem",
        }}
      >
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
              optionLabel="name"
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
                errors.color
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
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <label htmlFor="residency_proof">Comprovante de residencia</label>
              <input
                required
                {...register("residency_proof")}
                className="custom-file-input input-img"
                type="file"
              />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <label htmlFor="date">
                Comprovante de matrícula em um colégio
              </label>
              <input
                required
                {...register("enrollment_proof")}
                className="custom-file-input input-img"
                type="file"
              />
            </div>
            <label>
              Você ou alguém da sua família recebe algum benefício social?
            </label>
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
        </div>
        <ContainerButtons>
          <button type="submit" onClick={handleSubmit(sendSocioEconomicInfo)}>
            Enviar
          </button>
        </ContainerButtons>
      </form>
    </div>
  );
};
