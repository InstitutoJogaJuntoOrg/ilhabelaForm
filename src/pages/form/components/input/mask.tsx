import { InputMask } from 'primereact/inputmask';

const InputTypeMask = () => {
  return ( 
    <div style={{
        display: "flex",
        flexDirection: "column"
    }}>
      <label htmlFor="cpf">CPF:</label>
      <InputMask
        key="cpf"
        mask="999.999.999-99"
        placeholder="___.___.___-__"
      />
    </div>
  );
};

export default InputTypeMask;
