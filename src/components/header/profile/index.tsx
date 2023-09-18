import { useState } from "react";
import { Dropdown } from "primereact/dropdown";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";

const options = [
  { label: "Sair", value: "logout" },
  //{ label: "Excluir conta", value: "delete" },
];

const MyDropdown = () => {
  const [selectedOption, setSelectedOption] = useState(null);
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
    // Lógica para excluir a conta
    console.log("Conta excluída");
    setDisplayDeleteConfirmation(false); // Esconder o modal de confirmação após a exclusão
  };

  const cancelDelete = () => {
    setDisplayDeleteConfirmation(false); // Esconder o modal de confirmação se o usuário cancelar
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
          <div>
            <Button onClick={cancelDelete} className="p-button-danger">
              Cancelar
            </Button>
            <Button onClick={confirmDelete} className="p-button-confirm">
              Confirmar
            </Button>
          </div>
        }
      >
        Tem certeza de que deseja excluir sua conta?
      </Dialog>
    </>
  );
};

export default MyDropdown;
