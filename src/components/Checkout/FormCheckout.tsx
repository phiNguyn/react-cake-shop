import { useSelector } from "react-redux"
import CheckoutItem from "./checkoutItem"
import { cartItemsSelector, cartTotalSelector } from "../../features/Cart/selector"

// ///////////////////////
import { useForm, SubmitHandler } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Order } from "../../interface/order"
import StorageKeys from "../../constants/storage-keys"
import { User } from "../../interface/Users"
import { Link } from "react-router-dom"




const schema = yup.object({
    email: yup.string().required("Không được bỏ trống email").email("Hãy nhập email hợp lệ"),
    phone: yup.string().required('Nhập số điện thoại').min(10, 'hoi ngan').max(10, 'hoi dai'),
    address: yup.string().required('Nhập địa chỉ của bạn'),
    name: yup.string().required('Họ và tên'),
    user_id: yup.string(),
    order_status: yup.number(),
    total_amount: yup.number(),
    type_payment: yup.number()
}).required()

interface FormOrder {
    onSubmit: (data: Order) => void;
}
const FormCheckout = ({ onSubmit }: FormOrder) => {
    const total_amount  = useSelector(cartTotalSelector)

    const user = localStorage.getItem(StorageKeys.USER)
    let userData: Partial<User> = {};
    if (user) {
        userData = JSON.parse(user)
    }



    const { register,
        handleSubmit,
        formState: { errors }
    } = useForm<Order>({
        defaultValues: {
            address: userData.address || "",
            email: userData.email || "",
            name: userData.name || "",
            user_id: userData._id || undefined,
            phone: userData.phone || "",
            order_status: 1,
            total_amount: total_amount,
            type_payment: 1
        },
        resolver: yupResolver(schema),
    })

    const dataOrder: SubmitHandler<Order> = (data) => {
        onSubmit(data)
    }

    const itemCheckouts = useSelector(cartItemsSelector)
  const totalCart = useSelector(cartTotalSelector)

    return (
        <form onSubmit={handleSubmit(dataOrder)} className="pay grid-2 bb">

            <div className="checkout-left">

                <div >
                    <h1>Thông tin người đặt hàng</h1>
                    <div className="form">
                        <input {...register("name", { required: true })} title="Điền họ tên" className="input" placeholder="Họ tên" type="text" />
                        <span className="input-border"></span>
                        <small className="">{errors.name?.message}</small>

                    </div>

                    <div className=" mt-6 grid-60-30-gap">
                        <div className="form">
                            <input {...register("email", { required: true })} className="input" placeholder="Email" name="email" type="text" />
                            <span className="input-border"></span>
                            <small className="">{errors.email?.message}</small>

                        </div>
                        <div className="form ">
                            <input {...register("phone", { required: true })} className="input" placeholder="Số điện thoại" name="phone" type="number" />
                            <span className="input-border"></span>
                            <small className="">{errors.phone?.message}</small>

                        </div>
                    </div>

                    <div className="form mt-6">
                        <input {...register("address", { required: true })} className="input" placeholder="Địa chỉ" name="address" type="text" />
                        <span className="input-border"></span>
                        <small className="">{errors.address?.message}</small>

                    </div>

                </div>

            </div>

            {/* <app-address></app-address> */}

            <div className="checkout-right bl mb-5">
                <h1>Giỏ hàng</h1>
                <div id="checkout">

                    {itemCheckouts.map((itemCheckout) => (
                        <CheckoutItem key={itemCheckout._id} itemCheckout={itemCheckout} />

                    ))}

                </div>
                <div className="tong grid-2">
                    <span>Tổng</span>
                    <span>{totalCart}</span>
                </div>
                <div className="w-full flex-center">
                    {user ? (
                        <button type="submit" className="add mt-6 btn-primary" style={{ width: "fit-content", margin: "0 auto" }}>
                            Đặt hàng
                        </button>

                    ) : (
                        <Link to={'/sign-in'}  className="add mt-6 btn-primary" style={{ width: "fit-content" }}>
                            Đăng nhập để mua hàng
                        </Link>

                    )}
                </div>
            </div>
        </form>
    )
}

export default FormCheckout