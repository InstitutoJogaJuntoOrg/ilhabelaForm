import { useState } from "react";
import { Dropdown } from "primereact/dropdown";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { useForm } from "react-hook-form";
const options = [
  { label: "Sair", value: "logout" },
  //{ label: "Excluir conta", value: "delete" },
];
import {
  deleteFormSchema,
  deleteFormSchemaType,
} from "../../../schema/deleteAccount";
import { zodResolver } from "@hookform/resolvers/zod";
const MyDropdown = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<deleteFormSchemaType>({
    resolver: zodResolver(deleteFormSchema),
  });
  const [selectedOption, setSelectedOption] = useState(null);
  const [
    displayDeleteConfirmationPassword,
    setDisplayDeleteConfirmationPassword,
  ] = useState(false);
  const [displayDeleteConfirmation, setDisplayDeleteConfirmation] =
    useState(false); // Adicionado o estado para controlar a exibição do modal
  const user = localStorage.getItem("username");

  const handleDropdownChange = (e: any) => {
    setSelectedOption(e.value);

    if (e.value === "logout") {
      localStorage.removeItem("token");
      localStorage.removeItem("refresh");
      localStorage.removeItem("username");
      localStorage.removeItem("email");
      window.location.reload();
    }

    if (e.value === "delete") {
      setDisplayDeleteConfirmation(true); // Exibir o modal de confirmação
    }
  };

  const confirmDelete = () => {
    setDisplayDeleteConfirmationPassword(true);
    setDisplayDeleteConfirmation(false); // Esconder o modal de confirmação após a exclusão
  };

  const cancelDelete = () => {
    setDisplayDeleteConfirmation(false); // Esconder o modal de confirmação se o usuário cancelar
  };

  const cancelDeletePassword = (data: any) => {
    console.log("deletado");
    setDisplayDeleteConfirmationPassword(false); // Esconder o modal de confirmação se o usuário cancelar
  };

  return (
    <>
      <Dropdown
        style={{
          zIndex: 4,
        }}
        value={selectedOption}
        options={options}
        onChange={handleDropdownChange}
        placeholder={`Olá, ${user}`}
      />

      <Dialog
        className="accontDelete"
        visible={displayDeleteConfirmation}
        onHide={cancelDelete}
        header="Confirmação de Exclusão"
        footer={
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            Tem certeza de que deseja excluir sua conta?
            <div>
              <Button onClick={cancelDelete} className="p-button-danger">
                Cancelar
              </Button>

              <Button onClick={confirmDelete} className="p-button-confirm">
                Confirmar
              </Button>
            </div>
          </div>
        }
      ></Dialog>

      <Dialog
        className="accontDelete"
        visible={displayDeleteConfirmationPassword}
        onHide={handleSubmit(cancelDeletePassword)}
        header="Informe sua senha"
        footer={
          <>
            <div>
              Para realizar a exclusão da conta, por favor Informe sua senha
            </div>
            <form
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
              onSubmit={handleSubmit(cancelDeletePassword)}
            >
              <InputText
                className="textFieldInput"
                type="password"
                placeholder="Digite sua senha"
                {...register("password")}
              />
              <Button
                style={{
                  width: "100%",
                }}
                onClick={confirmDelete}
                className="p-button-danger"
              >
                Excluir minha conta
              </Button>
            </form>
          </>
        }
      ></Dialog>
    </>
  );
};

export default MyDropdown;
