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
import { useContext, useEffect, useRef, useState } from "react";
import { Steps } from "primereact/steps";
import { FileUpload } from "primereact/fileupload";
import { ImageContext } from "../../context/image";
import { Toast } from "primereact/toast";
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
  const { image, setImage } = useContext(ImageContext);

  const [user, setUser] = useState(localStorage.getItem("username") || "");
  const [email, setEmail] = useState(localStorage.getItem("email") || "");

  const [activeTab, setActiveTab] = useState(0);
  const toast = useRef<Toast | null>(null);

  const [isTabEnabled, setTabEnabled] = useState(true);
  const [isTabEnabledSocial, setIsTabEnabledSocial] = useState(false);

  const [isTabEnabledDate, setIsTabEnabledDate] = useState(false);
  const [visible, setVisible] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [dateValue, setDateValue] = useState<any>("");
  const [selectedCity, setSelectedCity] = useState<City | null>(null);
  const [selectedStateSocial, setelectedStateSocial] = useState<City | null>(null);
  const [data, setData] = useState();

  console.log(data);
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

  function fileToJSON(file: any) {
    return {
      name: file.name,
      size: file.size,
      type: file.type,
      lastModified: file.lastModified,
      lastModifiedDate: new Date(file.lastModifiedDate),
      webkitRelativePath: file.webkitRelativePath,
    };
  }
  const handleUpload = (event: { files: any[] }) => {
    const uploadedFile = event.files[0];
    const validationResult = FormSchema.safeParse(event);
    if (validationResult.success) {
      console.log(event);
      console.log("imagem enviada", image);
    } else {
      if (uploadedFile instanceof File) {
        if (uploadedFile.size > 0) {
          image.name = "reenviar novo arquivo";
        }
        const imageJSON = fileToJSON(uploadedFile);
        setImage(imageJSON);
      }
    }
  };

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
  });

  const apiUrl = "https://back.ilhabelatech.com/personalinfo/";

  async function sendPersonalInfo(data: FormSchemaType) {
    localStorage.setItem("personalForm", "true");
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        apiUrl,
        {
          cpf: data.cpf.replace(/\D/g, ""),
          first_name: data.first_name,
          last_name: data.first_name,
          social_name: data.socialName,
          city: data.city,
          phone: data.phone,
          date_of_birth: data.date,
          living_uf: data.state.name,
          country: data.state.name,
          civil_state: data.civil_state,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

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
          <Toast ref={toast} />
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
                            <InputText
                              maxLength={15}
                              {...register("cpf")}
                              
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
                                errors.civil_state
                                  ? "p-invalid w-full md:w-14rem"
                                  : "w-full md:w-14rem"
                              }
                              showClear
                            />
                          </div>
                          
                          <label>Estado civil:</label>
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
                            <FileUpload
                              onSelect={handleUpload}
                              mode="basic"
                              accept="image/*"
                              maxFileSize={1000000}
                              onUpload={handleUpload}
                              chooseLabel={
                                image.name ? image.name : "Selecionar imagem"
                              }
                            />
                          </div>

                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                            }}
                          >
                            <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                            }}
                          >
                            <label>Cidade:</label>
                            <InputText
                              maxLength={15}
                              {...register("city")}
                              placeholder="Cidade"
                              className={errors.city ? "p-invalid" : ""}
                            />
                          </div>
                        </div>
                            
                          
                          <ContainerButtons className="flexEnd">
                            <button className="buttonForm" type="submit">
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
