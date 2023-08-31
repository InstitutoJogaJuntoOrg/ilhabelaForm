import { InputMask } from 'primereact/inputmask';

const InputTypeDate = () => {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column"
  }}>
      <label htmlFor="date">Date:</label>
      <InputMask
        id="date"
        mask="99/99/9999"
        placeholder="dd/mm/yyyy"
      />
    </div>
  );
};

export default InputTypeDate;
