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
import { deficiency } from "./components/options/deficiency";
import { collor } from "./components/options/collor";
import { gender } from "./components/options/gender";
import { guildance } from "./components/options/guidance";
import { childrens } from "./components/options/childrens";
import { TabView, TabPanel } from "primereact/tabview";
import { InputText } from "primereact/inputtext";
import { InputMask } from "primereact/inputmask";
import { Dropdown } from "primereact/dropdown";
import { useContext, useRef, useState } from "react";
import { Steps } from "primereact/steps";
import { FileUpload } from "primereact/fileupload";
import { ImageContext } from "../../context/image";
import { benefits } from "./components/options/benefits";
import { scholl } from "./components/options/scholl";
import { connect } from "./components/options/conect";
import { displays } from "./components/options/display";
import { Toast } from "primereact/toast";
import DeclarativeDemo from "./sucess";
import { Dialog } from "primereact/dialog";
import { ConfirmDialog } from "primereact/confirmdialog";
import { Button } from "primereact/button";

interface City {
  name: string;
  code: string;
}

export const FormPage = () => {
  const { image, setImage } = useContext(ImageContext);
  const [activeTab, setActiveTab] = useState(0);
  const toast = useRef<Toast | null>(null);
  const [visible, setVisible] = useState<boolean>(true);
  const [activeIndex, setActiveIndex] = useState<number>(1);
  const [cpfValue, setCpfValue] = useState<any>("");
  const [dateValue, setDateValue] = useState<any>("");
  const [selectedCity, setSelectedCity] = useState<City | null>(null);
  const [selectedcollor, setSelectedcollor] = useState<City | null>(null);
  const [selectedchildrens, setSelectedchildrens] = useState<City | null>(null);
  const [selectedconexao, setSelectedconexao] = useState<City | null>(null);
  const [selectedguildance, setSelectedguildance] = useState<City | null>(null);
  const [selecteddisplay, setSelecteddisplay] = useState<City | null>(null);
  const [selectedscholl, setSelectedscholl] = useState<City | null>(null);

  const [selectedgender, setSelectedgender] = useState<City | null>(null);
  const [selectedBenefits, setSelectedBenefits] = useState<City | null>(null);
  const [selectedDeficiency, SetSelectedDeficiency] = useState<City | null>(
    null
  );

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
  const showResultMessage = (data: any) => {
    const validationResult = FormSchema.safeParse(data);
    if (validationResult.success) {
      if (toast.current) {
        toast.current.show({
          severity: "success",
          summary: "Sucesso",
          detail: "Seu formulário foi enviado com sucesso!",
          life: 3000,
        });
      } else {
        console.error("Toast não foi inicializado corretamente.");
      }
    } else {
      if (toast.current) {
        toast.current.show({
          severity: "error",
          summary: "Campos incorretos!",
          detail: " validationResult.error.message",
          life: 5000,
          closable: true,
        });
      } else {
        console.error("Toast não foi inicializado corretamente.");
      }
    }
  };

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
  });

  function handleForm(data: FormSchemaType) {
    console.log(data);
    console.log("imagem enviada", image);
    setVisible(true);
  }

  console.log(errors);
  return (
    <>
      <Container>
      <Toast ref={toast} />
      <Dialog
        header=""
        visible={visible}
        style={{ width: "20vw" }}
        onHide={() => setVisible(false)}
      >
        <div className="modal">
          <img style={{
            width: '50px',
            paddingBottom: '1rem'
          }} className="imgModal" src="https://cdn.discordapp.com/attachments/566850308702208001/1148304394228600832/Group_93.png" alt="" />
          <p
            style={{
              fontSize: "1.2rem",
              fontWeight: "600",
            }}
            className="m-0"
          >
            Respostas enviadas!
          </p>
          <span>Agora é só aguardar o resultado.</span>
        </div>
      </Dialog>
        <form onSubmit={handleSubmit(handleForm)}>
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
                  <TabPanel header="Dados pessoais">
                    <div></div>
                    <ContainerFlexInputs>
                      <div>
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
                            className={errors.name ? "p-invalid" : ""}
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
                            value={cpfValue ?? ""}
                            onComplete={(e) => setCpfValue(e.value || "")}
                            mask="999.999.999-99"
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
                            mask="99/99/9999"
                            placeholder="dd/mm/yyyy"
                            className={errors.date ? "p-invalid" : ""}
                          />
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                          }}
                        >
                          <label>Telefone (WhatsApp)</label>
                          <InputText
                            {...register("phone")}
                            placeholder="11999999999"
                            className={errors.phone ? "p-invalid" : ""}
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
                          <label>Nome social</label>
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
                            <label>Email</label>
                            <InputText
                              {...register("email")}
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
                            className={
                              errors.date
                                ? "p-invalid w-full md:w-14rem"
                                : "w-full md:w-14rem"
                            }
                            showClear
                          />
                        </div>
                        <ContainerButtons className="flexEnd">
                          <button
                            className="buttonForm"
                            onClick={() => setActiveTab(1)}
                          >
                            Próximo
                          </button>
                        </ContainerButtons>
                      </div>
                    </ContainerFlexInputs>
                    <ContainerSteps>
                      <Steps
                        model={items}
                        activeIndex={0}
                        onSelect={(e) => setActiveIndex(e.index)}
                      />
                    </ContainerSteps>
                  </TabPanel>
                  <TabPanel header="Dados socioeconômicos">
                    <div></div>
                    <br />
                    <div className="dadosSocieconomicos">
                      <ContainerFlexInputs>
                        <div>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              gap: ".0rem",
                            }}
                            className="card flex justify-content-center"
                          >
                            <label>
                              Possui algum tipo de deficiência física?
                            </label>
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
                            <label
                              htmlFor="currency-us"
                              className="font-bold block mb-2"
                            >
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
                                errors.color
                                  ? "p-invalid w-full md:w-14rem"
                                  : "w-full md:w-14rem"
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
                            <label>Qual sua escolaridade</label>
                            <Dropdown
                              value={selectedscholl}
                              options={scholl}
                              optionLabel="name"
                              onChange={(e) => {
                                setSelectedscholl(e.value);
                                setValue("schooling", e.value);
                              }}
                              placeholder="Selecione"
                              className={
                                errors.benefit
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
                            <label>
                              Benefício governamental seu ou da sua família
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

                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              gap: ".0rem",
                            }}
                            className="card flex justify-content-center"
                          >
                            <label>
                              Tipo de dispositivo para acessar as aulas
                            </label>
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
                                errors.gender
                                  ? "p-invalid w-full md:w-14rem"
                                  : "w-full md:w-14rem"
                              }
                              showClear
                            />
                          </div>
                        </div>
                      </ContainerFlexInputs>
                      <ContainerButtons>
                        <button
                          className="buttonForm back"
                          onClick={() => setActiveTab(0)}
                        >
                          Voltar
                        </button>
                        <button
                          className="buttonForm"
                          onClick={() => setActiveTab(2)}
                        >
                          Próximo
                        </button>
                      </ContainerButtons>
                    </div>
                    <ContainerSteps>
                      <Steps
                        model={items}
                        activeIndex={1}
                        onSelect={(e) => setActiveIndex(e.index)}
                      />
                    </ContainerSteps>
                  </TabPanel>

                  <TabPanel header="Prova">
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
                          {...register("questionTree")}
                          id="q3-option1"
                          value="resposta 3A"
                        />
                        Resposta 3A
                      </label>

                      <label className="hLabel" htmlFor="q3-option2">
                        <input
                          className="inputWidth"
                          type="radio"
                          {...register("questionTree")}
                          id="q3-option2"
                          value="resposta 3B"
                        />
                        Resposta 3B
                      </label>

                      <label className="hLabel" htmlFor="q3-option3">
                        <input
                          className="inputWidth"
                          type="radio"
                          {...register("questionTree")}
                          id="q3-option3"
                          value="resposta 3C"
                        />
                        Resposta 3C
                      </label>

                      <label className="hLabel" htmlFor="q3-option4">
                        <input
                          className="inputWidth"
                          type="radio"
                          {...register("questionTree")}
                          id="q3-option4"
                          value="resposta 3D"
                        />
                        Resposta 3D
                      </label>
                    </div>

                    <ContainerButtons>
                      <button
                        className="buttonForm back"
                        onClick={() => setActiveTab(1)}
                      >
                        Voltar
                      </button>
                      <button
                        className="buttonFormSubmit"
                        type="submit"
                        onClick={showResultMessage}
                      >
                        Enviar
                      </button>
                    </ContainerButtons>

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
    </>
  );
};
