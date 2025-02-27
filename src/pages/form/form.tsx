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
import { Footer } from "../../components/footer";
import { differenceInYears, format } from "date-fns";
import { institutoOptions } from "./components/options/instituto";

interface City {
  name: string;
  code: string;
}
type CepResponse = {
  cep: string;
  logradouro: string;
  complemento: string;
  unidade: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
};
export const FormPage = () => {
  const { image } = useContext(ImageContext);
  const [user, setUser] = useState(localStorage.getItem("username") || "");
  const [message, setMessage] = useState(
    localStorage.getItem("subscription_code") || ""
  );
  const [email, setEmail] = useState(localStorage.getItem("email") || "");
  const [date, setDate] = useState("");
  const [youngerAge, setYoungerAge] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState(0);

  const [isTabEnabled, setTabEnabled] = useState(true);
  const [isTabEnabledSocial, setIsTabEnabledSocial] = useState(false);

  const [isTabEnabledDate, setIsTabEnabledDate] = useState(false);
  const [visible, setVisible] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number>(0);
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

    // if (errors.civil_state) {
    //   toast.error("Por favor informe seu Estado Civil");
    // }
    if (errors.first_name) {
      toast.error("Por favor informe seu Nome");
    }
    if (errors.last_name) {
      toast.error("Por favor informe seu Sobrenome");
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
    watch,
    formState: { errors },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      state: "a",
      civil_state: "a",
    },
  });
  const [selectedDate, setSelectedDate] = useState<Date | any>(null);
  const [isUnderage, setIsUnderage] = useState(false);
  const [cep, setCep] = useState<any>("");
  const [cepData, setCepData] = useState<CepResponse | any>(null);

  async function buscaCEP(cep: string) {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      const cepData = response.data;
      setCepData(cepData);
  
      // Procura no array "states" o objeto que tenha o name igual ao uf retornado
      const stateObj = states.find((state) => state.name === cepData.uf);
  
      // Atualiza os valores do formulário e o estado do dropdown
      setValue("state", stateObj); // Aqui você atribui o objeto
      setValue("adress", cepData.logradouro);
      setValue("city", cepData.localidade);
      if (stateObj) {
        setValue("state", stateObj);
        setSelectedCity(stateObj);
      }// Atualiza o estado do dropdown se necessário
    } catch (error) {
      console.log("CEP não encontrado");
    }
  }
  const isValidDate = (dateString: string) => {
    const [day, month, year] = dateString.split("/").map(Number);
    if (
      month < 1 ||
      month > 12 ||
      day < 1 ||
      day > 31 ||
      year < 1900 ||
      year > 2100
    ) {
      return false;
    }
    const date = new Date(year, month - 1, day);
    return (
      date.getDate() === day &&
      date.getMonth() === month - 1 &&
      date.getFullYear() === year
    );
  };
  const parseDate = (dateString: string) => {
    const [day, month, year] = dateString.split("/").map(Number);
    return new Date(year, month - 1, day);
  };

  const applyMask = (value: string) => {
    value = value.replace(/\D/g, "");
    if (value.length <= 2) return value;
    if (value.length <= 4) return `${value.slice(0, 2)}/${value.slice(2)}`;
    return `${value.slice(0, 2)}/${value.slice(2, 4)}/${value.slice(4, 8)}`;
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = event.target.value;
    const maskedValue = applyMask(rawValue);
    setSelectedDate(maskedValue);

    if (maskedValue.length === 10 && isValidDate(maskedValue)) {
      const date = parseDate(maskedValue);
      const age = differenceInYears(new Date(), date);
      setIsUnderage(age < 18);
      setValue("date", format(date, "yyyy-MM-dd"));
    } else {
      setIsUnderage(false);
    }
  };

  const apiUrl =
    "https://api.jogajuntoinstituto.org/hotsite/students/personalinfo/";
  async function sendPersonalInfo(data: FormSchemaType) {
    // console.log("Enviando dados:", data);
    // console.log('errors', errors)
  
    localStorage.setItem("personalForm", "true");

    const formData = new FormData();
    formData.append("cpf", data.cpf.replace(/\D/g, ""));
    formData.append("rg", data.cpf.replace(/\D/g, ""));
    formData.append("first_name", data.first_name);
    formData.append("last_name", data.last_name);
    formData.append("social_name", data.socialName ?? "");
    formData.append("city", data.city);
    formData.append("address", data.adress);
    formData.append("email", data.email);
    formData.append("linkedin_profile", data.linkedin ?? "")
    formData.append("date_of_birth", data.date);
    formData.append("living_uf", data.state.name);
    formData.append("country", data.country);
    formData.append("civil_state", data.civil_state);
    formData.append("selective_process_id", "3");
    formData.append("zip_code", cep);

    if (isUnderage) {
      formData.append("resp_name", data.guardian?.name ?? "");
      formData.append("resp_phone", data.guardian?.phone ?? "");
      formData.append("resp_cpf", data.guardian?.cpf ?? "");
      formData.append("resp_email", data.guardian?.email ?? "");
    }

    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(apiUrl, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      console.log("response: ", response);
      setIsTabEnabledSocial(true);
      setIsTabEnabledDate(true);
      setActiveTab(1);
      console.log("imagem enviada", image);
      console.log("Data sent successfully:", response.data);
      localStorage.getItem("personalForm");
      localStorage.getItem("socioeconomicForm");
      localStorage.getItem("quizForm");

      if (response.status === 200) {
        toast.success("Formulário enviado com sucesso!");
        console.log("logado");
        console.log("Enviando dados:", data);
        setData(response.data);
        localStorage.setItem("refresh", response.data.refresh);
      }
      if (response.status === 201) {
        toast.success("Formulário enviado com sucesso!");
        console.log("logado");
        console.log("Enviando dados:", data);
        setData(response.data);
        localStorage.setItem("refresh", response.data.refresh);
      }
      if (response.status === 401) {
        toast.error("Erro ao enviar formulario");
      }
      if (response.status === 400) {
        toast.error("Erro ao enviar formulario");
      }
    } catch (error) {
      console.error("Error sending data:", error);
      toast.error("Erro ao enviar formulario");
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
            visible={youngerAge}
            className="modals"
            onHide={() => setYoungerAge(false)}
          >
            <div className="modal">
              <p
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "600",
                }}
                className="m-0"
              >
                Aviso para menores de idade
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

          <Dialog
            header=""
            visible={visible}
            className="modals"
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
                          <span
                            style={{
                              color: "white",
                              fontSize: "12px",
                            }}
                          >
                            * Campos obrigatórios
                          </span>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                            }}
                          >
                            <label>Primeiro nome *</label>
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
                            <label>Sobrenome: *</label>
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

                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                            }}
                          >
                            <label>CPF: *</label>
                            <InputMask
                              mask="999.999.999-99"
                              {...register("cpf", { required: true })}
                              placeholder="___.___.___-__"
                              className={errors.cpf ? "p-invalid" : ""}
                            />
                          </div>
                          <br />
                          <div className="inputForm">
                            <span
                              style={{
                                color: "white",
                                paddingBottom: "25px",
                              }}
                            >
                              RG *
                            </span>

                            <InputText
                              style={{
                                marginTop: "16px",
                              }}
              
                              {...register("rg", { required: true })}
                              placeholder="__.___.___-__"
                              className={errors.rg ? "p-invalid" : ""}
                            />
                          </div>

                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                            }}
                          >
                            <label>Estado civil: *</label>

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


                          
                          <div>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                              }}
                            >
                              <label>Email: *</label>

                              <InputText
                                {...register("email")}
                                value={email}
                                placeholder="Email"
                                className={errors.email ? "p-invalid" : ""}
                              />
                            </div>
                          </div>
                        </div>

                        <div>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                            }}
                          >
                            <label>Data de nascimento *</label>
                            <input
                              {...register("date")}
                              id="date"
                              type="text"
                              onChange={handleDateChange}
                              value={selectedDate}
                              placeholder="dd/MM/yyyy"
                              className={
                                errors.date
                                  ? "p-invalid inputForm"
                                  : "inputForm"
                              }
                            />
                            {isUnderage && (
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                  gap: "1rem",
                                  marginTop: "12px",
                                }}
                              >
                                <span
                                  style={{
                                    color: "white",
                                  }}
                                >
                                  Dados dos responsáveis
                                </span>
                                <InputText
                                  {...register("guardian.name")}
                                  id="Sobrenome"
                                  aria-describedby="username-help"
                                  placeholder="Nome do responsável"
                                  className={
                                    errors.guardian?.name ? "p-invalid" : ""
                                  }
                                />
                                <InputText
                                  {...register("guardian.email")}
                                  id="Sobrenome"
                                  aria-describedby="username-help"
                                  placeholder="Email do responsável"
                                  className={
                                    errors.guardian?.email ? "p-invalid" : ""
                                  }
                                />
                                <InputText
                                  {...register("guardian.phone")}
                                  id="Sobrenome"
                                  aria-describedby="username-help"
                                  placeholder="Telefone do responsável"
                                  className={
                                    errors.guardian?.phone ? "p-invalid" : ""
                                  }
                                />
                                <InputText
                                  {...register("guardian.cpf")}
                                  id="Sobrenome"
                                  aria-describedby="username-help"
                                  placeholder="CPF do responsável"
                                  className={
                                    errors.guardian?.cpf ? "p-invalid" : ""
                                  }
                                />
                              </div>
                            )}
                          </div>
                          <div
                            style={{
                              marginTop: "10px",
                            }}
                            className="inputForm"
                          >
                            <label>CEP *</label>
                            <InputMask
                              aria-describedby="cep-help"
                              id="cep"
                              mask="99999999"
                              placeholder="________"
                              onChange={(e) => {
                                setCep(e.target.value);
                                if (e.target.value?.length === 8) {
                                  buscaCEP(e.target.value);
                                }
                              }}
                              className={errors.cpf ? "p-invalid" : ""}
                            />
                          </div>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                            }}
                          >
                            <label>Cidade *</label>
                            <InputText
                              maxLength={15}
                              {...register("city")}
                              placeholder="Cidade"
                              className={errors.city ? "p-invalid" : ""}
                              defaultValue={watch('city')}
                            />
                          </div>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                            }}
                          >
                            <label>Rua *</label>
                            <InputText
                              maxLength={40}
                              {...register("adress")}
                              placeholder="adress"
                              className={errors.adress ? "p-invalid" : ""}
                              defaultValue={cepData?.logradouro}
                            />
                          </div>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                            }}
                          >
                            <label>Estado: *</label>
                            <Dropdown
                              options={states}
                              value={selectedCity}
                              optionLabel="name"
                              defaultValue={cepData?.uf}
                              onChange={(e) => {
                                const selectedValue = e.value
                                  ? e.value
                                  : cepData?.uf || cepData?.uf;
                                setSelectedCity(selectedValue);
                                setValue("state", selectedValue);
                              }}
                              placeholder={
                                cepData?.uf ? cepData.uf : "Selecione o estado"
                              }
                              className={
                                errors.state
                                  ? "p-invalid w-full md:w-14rem"
                                  : "w-full md:w-14rem"
                              }
                              showClear
                            />
                          </div>

                          <br />

                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                            }}
                          >
                            <label>País *</label>
                            <InputText
                              maxLength={15}
                              {...register("country")}
                              placeholder="País"
                              defaultValue="Brasil"
                              className={errors.city ? "p-invalid" : ""}
                            />
                          </div>
                          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
                <label>Qual seu linkedin: </label>
                <InputText
                  {...register("linkedin")}
                  id="linkedin"
                  aria-describedby="username-help"
                  className={
                    errors.linkedin
                      ? "p-invalid w-full md:w-14rem"
                      : "w-full md:w-14rem"
                  }
                  placeholder="link do seu perfil"
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
                      <SocioEconomico
                        setTabEnabled={setTabEnabled}
                        setActiveTab={setActiveTab}
                        setVisible={setVisible}
                      />

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
              Parabéns! Você completou sua inscrição. Código da inscrição:
              <p>{message}</p>
            </div>
          </Container>
        )}
      <Footer />
    </>
  );
};
