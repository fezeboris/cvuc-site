import { useForm } from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from '@hookform/resolvers/yup'
import "bootstrap/dist/css/bootstrap.min.css";
import { log } from "console";

type UserSubmitForm = {
  fullName: string;
  username: string;
  age: number;
  email: string;
  password: string;
  confirmPassword: string;
};
function register() {
  const validationSchema = yup.object().shape({
    fullName: yup.string().required("Your full name is required"),
    email: yup.string().email().required(),
    age: yup.number().typeError('Age feild is required and must be a number').positive().integer().min(18).required(),
    password: yup.string().min(6).max(10).required(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Password don't match")
      .required(),
  });
  const { register, handleSubmit , formState:{errors}} = useForm<UserSubmitForm>({
    resolver:yupResolver(validationSchema)
  });
  const onSubmit = (data: UserSubmitForm) => {
    // e.preventDefault()
    // console.log(JSON.stringify(data, null, 2));
    console.log(data);
  };
  return (
    <div
      className="register-form"
      style={{ width: "100%", margin: "60px auto" }}
    >
      <form
        
        onSubmit={handleSubmit(onSubmit)}
        style={{ maxWidth: "500px", margin: "10px auto" }}
      >
        <input
          type="text"
          className="form-control"
          {...register("fullName")}
          placeholder="Full name"
        />
        <p>{errors.fullName?.message}</p>
       
        <input type="text" placeholder="Email" {...register("email")} />
        <p>{errors.email?.message}</p>
        <input type="number" placeholder="Age" {...register("age")} />
        <p>{errors.age?.message}</p>
        <input
          type="password"
          placeholder=" Password"
          {...register("password")}
       
        />
        <p>{errors.password?.message}</p>
        <input
          type="text"
          placeholder="Confirm Password"
          {...register("confirmPassword")}
        />
    <p>{errors.confirmPassword?.message}</p>
        <button
          type="submit"
          className="btn btn-primary"
          style={{ display: "block", margin: "20px auto" }}
        >
          sumit
        </button>
      </form>
    </div>
  );
}

export default register;
