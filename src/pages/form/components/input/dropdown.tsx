
import { useState } from "react";
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';


interface City {
    name: string;
    code: string;
}

export default function InputTypeDropdown({label, states}: any) {
    const [selectedCity, setSelectedCity] = useState<City | null>(null);    

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
        