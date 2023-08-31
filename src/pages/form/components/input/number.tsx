import { useState } from "react";
import { InputNumber, InputNumberValueChangeEvent } from 'primereact/inputnumber';

export default function CurrencyDemo() {
    const [value1, setValue1] = useState<number | undefined>(1320);

    return (
        <div className="card flex flex-wrap gap-3 p-fluid">
            <div className="flex-auto" style={{
                display: "flex",
                flexDirection: "column",
                gap: ".0rem"
            }}>
                <label htmlFor="currency-us" className="font-bold block mb-2">Qual a renda média mensal 
da sua família?</label>
                <InputNumber
                    inputId="currency-us"
                    value={value1 !== undefined ? value1 : null}
                    onValueChange={(e: InputNumberValueChangeEvent) => setValue1(e.value !== null ? e.value : undefined)}
                    mode="currency"
                    currency="BRL"
                    locale="pt-BR"
                />
           </div>
        </div>
    )
}
