import toast, { Toaster } from "react-hot-toast"
import { FormSignup } from "../components/auth/FormSignup"
import { UserSignup } from "../interface/Users";
import { signup } from "../data/auth";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const navigator  = useNavigate()
  const handleSubmit  = async(data: UserSignup) => {
    try {
      const resp = await signup(data)
      if(resp?.data.status ==='OK'){
        toast.success(resp.data.message)
        setTimeout(() => {
          navigator('/sign-in')
          
        }, 2000);
      }else{
      toast.error(resp?.data.message)
        
      }
    } catch (error) {
      console.log(error)
      
    }
  }

  return (
    <section className="" style={{ height: "auto" }}>
      <div className="about-left padding-top-bottom">
        <FormSignup onSubmit={handleSubmit} />
      </div>
      <Toaster />
    </section>
  )
}

export default SignupPage