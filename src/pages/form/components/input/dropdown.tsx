
import { useState } from "react";
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';

interface City {
    name: string;
    code: string;
}

export default function InputTypeDropdown({label}) {
    const [selectedCity, setSelectedCity] = useState<City | null>(null);
    const states = [
        { name: 'Acre', code: 'AC' },
        { name: 'Alagoas', code: 'AL' },
        { name: 'Amapá', code: 'AP' },
        { name: 'Amazonas', code: 'AM' },
        { name: 'Bahia', code: 'BA' },
        { name: 'Ceará', code: 'CE' },
        { name: 'Distrito Federal', code: 'DF' },
        { name: 'Espírito Santo', code: 'ES' },
        { name: 'Goiás', code: 'GO' },
        { name: 'Maranhão', code: 'MA' },
        { name: 'Mato Grosso', code: 'MT' },
        { name: 'Mato Grosso do Sul', code: 'MS' },
        { name: 'Minas Gerais', code: 'MG' },
        { name: 'Pará', code: 'PA' },
        { name: 'Paraíba', code: 'PB' },
        { name: 'Paraná', code: 'PR' },
        { name: 'Pernambuco', code: 'PE' },
        { name: 'Piauí', code: 'PI' },
        { name: 'Rio de Janeiro', code: 'RJ' },
        { name: 'Rio Grande do Norte', code: 'RN' },
        { name: 'Rio Grande do Sul', code: 'RS' },
        { name: 'Rondônia', code: 'RO' },
        { name: 'Roraima', code: 'RR' },
        { name: 'Santa Catarina', code: 'SC' },
        { name: 'São Paulo', code: 'SP' },
        { name: 'Sergipe', code: 'SE' },
        { name: 'Tocantins', code: 'TO' }
    ];
    

    return (
        <div style={{
            display: 'flex',
            flexDirection: "column",
            gap: ".0rem",

        }} className="card flex justify-content-center">
              <label  htmlFor="date">{label}</label>
            <Dropdown value={selectedCity} onChange={(e: DropdownChangeEvent) => setSelectedCity(e.value)} options={states} optionLabel="name" 
                showClear placeholder="Selecione" className="w-full md:w-14rem" />
        </div>
    )
}
        