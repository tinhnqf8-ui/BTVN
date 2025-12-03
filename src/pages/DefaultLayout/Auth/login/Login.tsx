import React from "react";
import { useForm } from "react-hook-form";
function Login() {
  const {
    register: login,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "có",
      password: "",
    },
  });
  return (
    <div>
      login
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <input
          type="text"
          {...login("email")}
          placeholder="Vui lòng nhập email"
          style={{ border: "1px solid black" }}
        />
        {errors.email && <span>This field is required</span>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
