import { useForm, SubmitHandler } from "react-hook-form"
import { Link } from "react-router-dom"
import {UserLogin} from "../../interface/Users"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useState } from "react"
const schema = yup
  .object({
    email: yup.string().required().email("test@example.com"),
    pass: yup.string().required()
  })
  .required()

  interface FormLoginProps {
    onSubmit: (data: UserLogin, reset: () => void) => void;
  }

 export const FormLogin = ({onSubmit} :FormLoginProps) => {
  
  const {  register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<UserLogin>({
    defaultValues: {
      email: "",
      pass: ""
    },
    resolver: yupResolver(schema),
  })
  const dataSubmit: SubmitHandler<UserLogin> = (data) => {
    onSubmit(data,reset)

  }

  const [type, setType] = useState(false)
  const  handleType = () => {
   setType(!type)
   console.log(type);
   
    }
  return (
    <form onSubmit={handleSubmit(dataSubmit)} className="login-box bd-all">
          <h2>Đăng Nhập</h2>
          <div>
            <div className="form mt-4 mb-4">
              <label htmlFor="email">Email</label>
              <input id="email"   {...register("email", {required: true})} type="text"  className="input" />
              <span className="input-border"></span>
              <small className="">{errors.email?.message}</small>
            </div>
            <div className="form mt-4">
              <label htmlFor="password">Mật Khẩu</label>
              <input  {...register("pass", {required: true})}  className="input" id="password"  type={type ? "text" : "password" } />
              <i onClick={handleType} className={`fa-regular ${type ? " fa-eye" : "fa-eye-slash"}  password`}></i>
              <span className="input-border"></span>
              <small className="">{errors.pass?.message}</small>
              <div></div>
            </div>
            <button type="submit" className="add btn-primary mt-6">Đăng Nhập</button>
          </div>
          <div>
            <h3 className="mt-6 text-center">Chưa có tài khoản? <a>Quên mật khẩu</a></h3>
            <Link to={'/sign-up'} className="add mt-6" >Đăng Ký</Link>
          </div>
          <div>
          </div>
        </form >
  )
}


