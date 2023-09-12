import { useState } from 'react';
import { Dropdown } from 'primereact/dropdown';

const options = [
  { label: 'Perfil', value: 'profile' },
  { label: 'Sair', value: 'logout' },
];

const MyDropdown = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const user = localStorage.getItem("username");

  const handleDropdownChange = (e: any) => {
    setSelectedOption(e.value);

    if (e.value === 'logout') {
        localStorage.removeItem("token");
        localStorage.removeItem("refresh");
        localStorage.removeItem("username");
        window.location.reload();
    }
  };

  return (
    <Dropdown
      value={selectedOption}
      options={options}
      onChange={handleDropdownChange}
      placeholder={`Olá, ${user}`}
    />
  );
};

export default MyDropdown;
