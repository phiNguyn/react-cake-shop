import toast, { Toaster } from "react-hot-toast"
import { signin } from "../data/auth"
import { FormLogin } from "../components/auth/FormLogin"
import { UserLogin } from '../interface/Users';
import StorageKeys from "../constants/storage-keys";

const Signin = () => {

  const handleSubmit = async (data: UserLogin, reset: () => void) => {
    try {
      const resp = await signin(data)
      if (resp?.data.status === "OK") {
        toast.success(resp.data.message)
        const userData = JSON.stringify(resp.data.result)
        localStorage.setItem(StorageKeys.USER, userData)
        localStorage.setItem(StorageKeys.TOKEN, resp.data.result.token)
        setTimeout(() => {
         window.location.href ='/'
        }, 2000)
      } else {
       toast.error(resp?.data.message)
        reset()
      }
    } catch (error) {
      console.log(error)
      reset()
    }
  }

  return (
    <section className="" style={{ height: "auto" }}>
      <div className="about-left padding-top-bottom">
        <FormLogin onSubmit={handleSubmit} />
      </div>
      <Toaster />
    </section>
  )
}

export default Signin
