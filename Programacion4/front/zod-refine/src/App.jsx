import Form from "./components/Form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userValidation } from "./validation/user-validation";

function App() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: zodResolver(userValidation) });
  return (
    <div>
      <Form handleSubmit={handleSubmit} register={register} errors={errors} />
    </div>
  );
}
export default App;
