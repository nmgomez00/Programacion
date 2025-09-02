import Control from "./control";

export default function Form({ handleSubmit, register, errors }) {
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* <div className="control">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" {...register("username")} />
          {errors?.username && (
            <span className="error">{errors.username.message}</span>
          )}
        </div> */}
        <Control
          type={"text"}
          register={register}
          errors={errors?.username}
          name={"username"}
          label={"Username:"}
        />
        {/* <div className="control">
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" {...register("email")} />
          {errors?.email && (
            <span className="error">{errors.email.message}</span>
          )}
        </div> */}

        <Control
          type={"email"}
          register={register}
          errors={errors?.email}
          name={"email"}
          label={"Email"}
        />
        {/* <div className="control">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" {...register("password")} />
          {errors?.password && (
            <span className="error">{errors.password.message}</span>
          )}
        </div> */}
        <Control
          type={"password"}
          register={register}
          errors={errors?.password}
          name={"password"}
          label={"Contraseña"}
        />
        {/* <div className="control">
          <label htmlFor="password2">Confirmar contraseña:</label>
          <input
            type="password"
            id="password2"
            {...register("confirmPassword")}
          />
          {errors?.confirmPassword && (
            <span className="error">{errors.confirmPassword.message}</span>
          )}
        </div> */}
        <Control
          type={"password"}
          register={register}
          errors={errors?.confirmPassword}
          name={"confirmPassword"}
          label={"Confirmar contraseña"}
        />
        <button>Aceptar</button>
      </form>
    </>
  );
}
