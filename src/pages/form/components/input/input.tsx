import { InputText } from "primereact/inputtext";
import { InputType } from "../../../../interface/inputs";

export default function Input({placeholder, label}: InputType) {
    return (
        <div className="card flex justify-content-center">
            <div className="flex flex-column gap-2">
                <div style={{
                    display: "flex",
                    flexDirection: "column"
                }}>
                <label htmlFor="username">{label}</label>
                <InputText id="username" aria-describedby="username-help" placeholder={placeholder} />
                </div>
            </div>
        </div>
    )
}