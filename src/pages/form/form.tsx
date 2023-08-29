import { FormSchema, FormSchemaType } from "../../schema/formSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export const FormPage = () => {
  //const navigate = useNavigate();
  const { register, handleSubmit, formState: {errors} } = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
  });

  function handleForm(data: FormSchemaType) {
    console.log(data);
  }
console.log(errors)
  return (
    <div>
      <h1>formPage</h1>
      <form onSubmit={handleSubmit(handleForm)}>
        <input {...register("question")} type="text" />
        <input {...register("password")} type="text" />
        <button type="submit">enviar</button>
      </form>
    </div>
  );
};
