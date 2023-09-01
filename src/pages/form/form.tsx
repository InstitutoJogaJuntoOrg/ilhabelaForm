import { FormSchema, FormSchemaType } from "../../schema/formSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Container, ContainerFlexInputs } from ".";
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
import { useContext, useState } from "react";
import { useRef } from "react";
import { Toast } from "primereact/toast";
import { FileUpload } from "primereact/fileupload";
import { ImageContext } from "../../context/image";

interface City {
  name: string;
  code: string;
}

export const FormPage = () => {
  const { image, setImage } = useContext(ImageContext);
  const [selectedCity, setSelectedCity] = useState<City | null>(null);
  const [selectedcollor, setSelectedcollor] = useState<City | null>(null);
  const [selectedchildrens, setSelectedchildrens] = useState<City | null>(null);
  const [selectedguildance, setSelectedguildance] = useState<City | null>(null);

  const [selectedgender, setSelectedgender] = useState<City | null>(null);
  const [selectedDeficiency, SetSelectedDeficiency] = useState<City | null>(
    null
  );

  const toast = useRef<Toast>(null);
  console.log(image);

  const handleUpload = (event: { files: any[]; }) => {
    const uploadedFile = event.files[0]; // Assumes the array 'files' contains only one file
    setImage(uploadedFile); // Set the uploaded image in the ImageContext
  };
  const onUpload = () => {
    if (toast.current) {
      toast.current.show({
        severity: "info",
        summary: "Success",
        detail: "File Uploaded",
      });
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
    defaultValues: {
      income: "",
    },
  });

  function handleForm(data: FormSchemaType) {
    console.log(data);

    setSelectedCity(null);
    setSelectedcollor(null);
    setSelectedchildrens(null);
    setSelectedguildance(null);
    setSelectedgender(null);
    SetSelectedDeficiency(null);

    reset();

    console.log(image);
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
            <div className="card">
              <TabView>
                <TabPanel header="Dados pessoais">
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
                          {...register("cpf")}
                          key="cpf"
                          mask="999.999.999-99"
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
                        <Toast ref={toast}></Toast>
                        <FileUpload
                          onSelect={handleUpload}
                          mode="basic"
                          {...register('image')}
                          accept="image/*"
                          maxFileSize={1000000}
                          onUpload={handleUpload}
                          chooseLabel="Selecionar imagem"
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
                    </div>
                  </ContainerFlexInputs>
                </TabPanel>
                <TabPanel header="Dados socioeconômicos">
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
                      </div>
                    </ContainerFlexInputs>
                  </div>
                </TabPanel>
              </TabView>
            </div>
          </div>
        </div>
        <button type="submit">Inscrever-se</button>
      </form>
    </Container>
  );
};
