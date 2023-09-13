import { FormSchema, FormSchemaType } from "../../schema/formSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Container,
  ContainerButtons,
  ContainerFlexInputs,
  ContainerSteps,
} from ".";
import { states } from "./components/options/state";
import { TabView, TabPanel } from "primereact/tabview";
import { InputText } from "primereact/inputtext";
import { InputMask } from "primereact/inputmask";
import { Dropdown } from "primereact/dropdown";
import { useContext, useEffect, useState } from "react";
import { Steps } from "primereact/steps";
import { ImageContext } from "../../context/image";
import { ToastContainer, toast } from "react-toastify";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import Timer from "./components/timer";
import { Prova } from "./components/prova";
import { SocioEconomico } from "./components/socioeconomico";
import axios from "axios";
import { civilState } from "./components/options/civil_state";

interface City {
  name: string;
  code: string;
}

export const FormPage = () => {
  const { image } = useContext(ImageContext);

  const [user, setUser] = useState(localStorage.getItem("username") || "");
  const [email, setEmail] = useState(localStorage.getItem("email") || "");

  const [activeTab, setActiveTab] = useState(0);

  const [isTabEnabled, setTabEnabled] = useState(true);
  const [isTabEnabledSocial, setIsTabEnabledSocial] = useState(false);

  const [isTabEnabledDate, setIsTabEnabledDate] = useState(false);
  const [visible, setVisible] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [dateValue, setDateValue] = useState<any>("");
  const [selectedCity, setSelectedCity] = useState<City | null>(null);
  const [selectedStateSocial, setelectedStateSocial] = useState<City | null>(
    null
  );
  const [data, setData] = useState();

  console.log(data);

  function ErrosSending() {
    if (errors.cpf) {
      toast.error("Por favor informe um CPF válido");
    }
    if (errors.city) {
      toast.error("Por favor informe um Cidade válida");
    }
    if (errors.date) {
      toast.error("Por favor informe uma Data válida");
    }
    if (errors.civil_state) {
      toast.error("Por favor informe seu Estado Civil");
    }
    if (errors.first_name) {
      toast.error("Por favor informe seu Nome");
    }
    if (errors.last_name) {
      toast.error("Por favor informe seu Sobrenome");
    }
    if (errors.phone) {
      toast.error("Por favor informe seu Número para contato");
    }
    if (errors.socialName) {
      toast.error("Por favor informe seu Nome social");
    }
    if (errors.state) {
      toast.error("Por favor informe seu Estado");
    }
  }

  useEffect(() => {
    const personalForm = localStorage.getItem("personalForm");
    const socioeconomicForm = localStorage.getItem("socioeconomicForm");
    const quizForm = localStorage.getItem("quizForm");

    if (personalForm === "true" && socioeconomicForm !== "true") {
      setTabEnabled(true);
      setIsTabEnabledDate(true);
      setIsTabEnabledSocial(false);
      setActiveTab(1);
    }

    if (personalForm === "true" && socioeconomicForm === "true") {
      setTabEnabled(false);
      setIsTabEnabledSocial(true);
      setIsTabEnabledDate(true);
      setActiveTab(2);
    }

    if (socioeconomicForm === "true" && personalForm !== "true") {
      setIsTabEnabledSocial(true);
      setActiveTab(1);
    }

    if (socioeconomicForm === "true" && personalForm === "true") {
      setIsTabEnabledSocial(true);
      setActiveTab(2);
    }

    if (socioeconomicForm !== "true" && personalForm !== "true") {
      setIsTabEnabledSocial(true);
      setActiveTab(0);
    }
    if (
      quizForm !== "true" &&
      personalForm === "true" &&
      socioeconomicForm === "true"
    ) {
      setActiveTab(2);
    }

    if (
      quizForm == "true" &&
      personalForm === "true" &&
      socioeconomicForm === "true"
    ) {
      setActiveTab(5);
    }
  }, []);

  const items = [
    {
      label: "Dados",
    },
    {
      label: "Social",
    },
    {
      label: "Prova",
    },
  ];

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
  });

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

  const apiUrl = "https://back.ilhabelatech.com/personalinfo/";
  async function sendPersonalInfo(data: FormSchemaType) {
    console.log("Enviando dados:", data);
    localStorage.setItem("personalForm", "true");

    const file = data.rg[0];

    const formData = new FormData();
    formData.append("cpf", data.cpf.replace(/\D/g, ""));
    formData.append("first_name", data.first_name);
    formData.append("last_name", data.first_name);
    formData.append("social_name", data.socialName);
    formData.append("city", data.city);
    formData.append("phone", data.phone);
    formData.append("date_of_birth", data.date);
    formData.append("living_uf", data.state.name);
    formData.append("country", data.state.name);
    formData.append("civil_state", data.civil_state);

    if (file) {
      try {
        const blob = await convertFileToBase64Blob(file);

        formData.append("rg", blob, file.name);
      } catch (error) {
        console.error("Error converting file:", error);
        return;
      }
    }

    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(apiUrl, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      setIsTabEnabledSocial(true);
      setIsTabEnabledDate(true);
      setActiveTab(1);
      console.log("imagem enviada", image);
      console.log("Data sent successfully:", response.data);
      localStorage.getItem("personalForm");
      localStorage.getItem("socioeconomicForm");
      localStorage.getItem("quizForm");

      if (response.status === 200) {
        console.log("logado");
        setData(response.data);
        localStorage.setItem("token", response.data.access);
        localStorage.setItem("refresh", response.data.refresh);
        localStorage.setItem("username", response.data.user);
      }
    } catch (error) {
      console.error("Error sending data:", error);
    }
  }
  console.log(errors);
  const personalForm = localStorage.getItem("personalForm");
  const socioeconomicForm = localStorage.getItem("socioeconomicForm");
  const quizForm = localStorage.getItem("quizForm");

  return (
    <>
      {!(
        quizForm === "true" &&
        personalForm === "true" &&
        socioeconomicForm === "true"
      ) && (
        <Container>
          <ToastContainer />
          <Dialog
            header=""
            visible={visible}
            style={{ width: "20vw" }}
            onHide={() => setVisible(false)}
          >
            <div className="modal">
              <img
                style={{
                  width: "50px",
                  paddingBottom: "1rem",
                }}
                className="imgModal"
                src="https://cdn.discordapp.com/attachments/566850308702208001/1148304394228600832/Group_93.png"
                alt=""
              />
              <p
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "600",
                }}
                className="m-0"
              >
                Inscrição realizada!
              </p>
              <span>
                A partir daqui, a prova será iniciada e você terá{" "}
                <strong>30 minutos</strong> para respondê-la
              </span>
              <div className="card flex justify-content-center">
                <br />
                <Button
                  onClick={() => setVisible(false)}
                  icon="pi pi-check"
                  label="Iniciar"
                />
              </div>
            </div>
          </Dialog>
          <form onSubmit={handleSubmit(sendPersonalInfo)}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "2rem",
              }}
            >
              <div>
                <div className="card">
                  <TabView
                    activeIndex={activeTab}
                    onTabChange={(e) => setActiveTab(e.index)}
                  >
                    <TabPanel
                      header="Dados pessoais"
                      disabled={isTabEnabledDate}
                    >
                      <ContainerFlexInputs>
                        <div>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                            }}
                          >
                            <label>Nome: </label>
                            <InputText
                              {...register("first_name")}
                              id="username"
                              onChange={(e) => setUser(e.target.value)}
                              value={user}
                              aria-describedby="username-help"
                              placeholder="Nome"
                              className={errors.first_name ? "p-invalid" : ""}
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
                              mask="999.999.999-99"
                              {...register("cpf", { required: true })}
                              placeholder="___.___.___-__"
                              className={errors.cpf ? "p-invalid" : ""}
                            />
                          </div>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                            }}
                          >
                            <label htmlFor="date">Data de nascimento:</label>
                            <InputMask
                              value={dateValue ?? ""}
                              onComplete={(e) => setDateValue(e.value || "")}
                              {...register("date")}
                              id="date"
                              mask="9999-99-99"
                              placeholder="dd-mm-yyyy"
                              className={errors.date ? "p-invalid" : ""}
                            />
                          </div>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                            }}
                          >
                            <label>Telefone (WhatsApp):</label>
                            <InputText
                              {...register("phone")}
                              placeholder="12 999999999"
                              maxLength={15}
                              className={errors.phone ? "p-invalid" : ""}
                            />
                          </div>

                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                            }}
                          >
                            <label>Estado:</label>
                            <Dropdown
                              options={states}
                              value={selectedCity}
                              optionLabel="name"
                              onChange={(e) => {
                                setSelectedCity(e.value);
                                setValue("state", e.value);
                              }}
                              placeholder="Estado"
                              className={
                                errors.state
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
                            <label>Cidade</label>
                            <InputText
                              maxLength={15}
                              {...register("city")}
                              placeholder="Cidade"
                              className={errors.city ? "p-invalid" : ""}
                            />
                          </div>
                        </div>

                        <div>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                            }}
                          >
                            <label>Sorenome:</label>
                            <InputText
                              {...register("last_name")}
                              id="Sobrenome"
                              aria-describedby="username-help"
                              placeholder="Sobrenome"
                              className={errors.last_name ? "p-invalid" : ""}
                            />
                          </div>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                            }}
                          >
                            <label>Nome social:</label>
                            <InputText
                              {...register("socialName")}
                              id="socialName"
                              aria-describedby="username-help"
                              placeholder="Nome social"
                              className={errors.socialName ? "p-invalid" : ""}
                            />
                          </div>
                          <div>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                              }}
                            >
                              <label>Email:</label>
                              <InputText
                                {...register("email")}
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                placeholder="Email"
                                className={errors.email ? "p-invalid" : ""}
                              />
                            </div>
                          </div>

                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                            }}
                          >
                            <label htmlFor="date">RG:</label>
                            <input
                              {...register("rg")}
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
                            <label>Estado civil</label>
                            <Dropdown
                              options={civilState}
                              value={selectedStateSocial}
                              optionLabel="name"
                              onChange={(e) => {
                                setelectedStateSocial(e.value);
                                setValue("civil_state", e.value);
                              }}
                              placeholder="Estado civil"
                              className={
                                errors.civil_state
                                  ? "p-invalid w-full md:w-14rem"
                                  : "w-full md:w-14rem"
                              }
                              showClear
                            />
                          </div>

                          <ContainerButtons className="flexEnd">
                            <button
                              className="buttonForm"
                              type="submit"
                              onClick={ErrosSending}
                            >
                              Próximo
                            </button>
                          </ContainerButtons>
                        </div>
                      </ContainerFlexInputs>
                      <ContainerSteps>
                        <Steps
                          model={items}
                          activeIndex={activeIndex}
                          onSelect={(e) => setActiveIndex(e.index)}
                        />
                      </ContainerSteps>
                    </TabPanel>
                    <TabPanel
                      header="Dados socioeconômicos"
                      disabled={isTabEnabledSocial}
                    >
                      <br />
                      <div className="dadosSocieconomicos">
                        <ContainerFlexInputs>
                          <SocioEconomico
                            setTabEnabled={setTabEnabled}
                            setActiveTab={setActiveTab}
                            setVisible={setVisible}
                          />
                        </ContainerFlexInputs>
                      </div>
                      <ContainerSteps>
                        <Steps
                          model={items}
                          activeIndex={1}
                          onSelect={(e) => setActiveIndex(e.index)}
                        />
                      </ContainerSteps>
                    </TabPanel>

                    <TabPanel header="Prova" disabled={isTabEnabled}>
                      <Timer />
                      <Prova />
                      <ContainerSteps>
                        <Steps
                          model={items}
                          activeIndex={2}
                          onSelect={(e) => setActiveIndex(e.index)}
                        />
                      </ContainerSteps>
                    </TabPanel>
                  </TabView>
                </div>
              </div>
            </div>
          </form>
        </Container>
      )}
      {quizForm === "true" &&
        personalForm === "true" &&
        socioeconomicForm === "true" && (
          <Container>
            <div className="success">
              Parabéns! Você já completou todos os formulários.
              <p>
                Assim que saírem, as respostas serão enviadas para o seu e-mail.
              </p>
            </div>
          </Container>
        )}
    </>
  );
};
