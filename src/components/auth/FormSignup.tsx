import { useForm, SubmitHandler } from "react-hook-form"
import { Link } from "react-router-dom"
import { UserSignup } from "../../interface/Users"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useState } from "react"
const schema = yup
    .object({
        email: yup.string().required("Không được bỏ trống email").email("Hãy nhập email hợp lệ"),
        pass: yup.string().required("Không được bỏ trống").min(8, "Mật khẩu phải ít nhất 8 kí tự"),
        name: yup.string().required("Không được bỏ trống").test('Nhập họ và tên', 'Tên phả từ 2 từ', values => {
            if (!values) return false
            return values.split(/\s+/).length >= 2;
        }),
        retypePass: yup.string().required('Hãy Nhập lại mật khẩu').oneOf([yup.ref('pass')], 'Mật khẩu không khớp')

    })
    .required()

interface FormLoginProps {
    onSubmit: (data: UserSignup, reset: () => void) => void;
}

export const FormSignup = ({ onSubmit }: FormLoginProps) => {

    const { register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<UserSignup>({
        defaultValues: {
            email: "",
            pass: "",
            name: ""
        },
        resolver: yupResolver(schema),
    })
    const dataSubmit: SubmitHandler<UserSignup> =  (data) => {
      onSubmit(data, reset)

    }

        const [type, setType] = useState(false)
        const [reTypePass,setReTypePass ] = useState(false)
       const handleType = () => {
        setType((v) => !v)
       }

       const handlReTypePass = () => {
        setReTypePass((v) =>!v)
       }
       

    return (
        <form onSubmit={handleSubmit(dataSubmit)} className="login-box bd-all">
            <h2>Đăng Nhập</h2>
            <div>
                <div className="form mt-4 mb-4">
                    <label htmlFor="name">Tên của bạn</label>
                    <input id="name"   {...register("name", { required: true })} type="text" className="input" />
                    <span className="input-border"></span>
                    <small className="">{errors.name?.message}</small>
                </div>
                <div className="form mt-4 mb-4">
                    <label htmlFor="email">Email</label>
                    <input id="email"   {...register("email", { required: true })} type="text" className="input" />
                    <span className="input-border"></span>
                    <small className="">{errors.email?.message}</small>
                </div>
                <div className="form mt-4">
                    <label htmlFor="password">Mật Khẩu</label>
                    <input  {...register("pass", { required: true })} className="input" id="password" type={type ? "text" : "password" }  />
                    <span className="input-border"></span>
              <i onClick={handleType} className={`fa-regular ${type ? " fa-eye" : "fa-eye-slash"}  password`}></i>

                    <small className="">{errors.pass?.message}</small>
                </div>
                <div className="form mt-4">
                    <label htmlFor="retypePass">Nhập lại mật khẩu</label>
                    <input id="retypePass" {...register("retypePass", { required: true })} className="input" type={reTypePass ? "text" : "password" }  />
                    <span className="input-border"></span>
              <i onClick={handlReTypePass} className={`fa-regular ${reTypePass ? " fa-eye" : "fa-eye-slash"}  password`}></i>

                    <small className="">{errors.retypePass?.message}</small>

                </div>
                <button type="submit" className="add btn-primary mt-6">Đăng kí</button>
            </div>
            <div className="mt-6" style={{display: "flex", justifyContent: "space-between"}}>
                <h3 >Đã có tài khoản?</h3>
                <Link to={'/sign-in'}  >Đăng nhập</Link>
            </div>
            <div>
            </div>
        </form >
    )
}


