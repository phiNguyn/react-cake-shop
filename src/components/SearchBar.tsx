import {  useRef, useState } from "react";
import { Product } from "../interface/product";
import { Link, useNavigate } from "react-router-dom";
import { getProductBySearch } from "../data/ProductsData";

const SearchBar = () => {
    const navigate = useNavigate()
    const [input, setInput] = useState("");
    const [pro, setPro] = useState<Product[]>([]);
    const typingTimeoutRef = useRef<number | null>(null);
        const fetchProSearch = async (value: string) => {
            try {
                const resp = await getProductBySearch(value);
                setPro(resp.data.allPro);
                console.log(resp.data);
                
            } catch (error) {
                console.log(error);
            }
        };
        fetchProSearch

   

    const handleChange = (value: string) => {
        setInput(value);
        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current);
        }
        if(value.trim()){

            typingTimeoutRef.current = window.setTimeout(() => {
                fetchProSearch(value);
            }, 500);

        }else{
            setPro([])
        }
    };
    const onSearch = () => {
        if(input.trim()){
            navigate(`/products?q=${input}`)
            setPro([])
        }
        setInput("")
    }

    const detail = (slug: string) => {
        if(input.trim()){
            navigate(`/product/${slug}`)
            setPro([])
        }
        setInput("")
    }


    return (
        <form className="form-search">
            <div className="form flex">
                <input
                    className="input"
                    placeholder="Nhập tên bánh ..."
                    value={input}
                    onChange={(e) => handleChange(e.target.value)}
                    type="text"
                    id="serch_input"
                    name="search_input"
                    
                />
                <span className="input-border"></span>
                <button onClick={onSearch} className="btn-search" type="button" name="btn-search">
                    <i className="fa-solid fa-magnifying-glass fa-lg"></i>
                </button>
              
                    <div
                        style={{
                            position: "absolute",
                            top: "50px",
                            left: 0,
                            display: "flex",
                            flexDirection: "column",
                            background: "white",
                            width: "100%"
                        }}
                        className="br bl"
                    >
                        {pro.map((val) => (
                            <Link onClick={() => detail(val.slug)} to={`/product/${val.slug}`} key={val._id} className="bt bb"style={{padding: "10px", display: "flex", gap: "10px"}}>
                               <div>  <img src={`${import.meta.env.VITE_API_IMAGES}/${val.img}`} width={50} alt={val.name} /></div>
                               
                                <div style={{}}>
                
                                <div>{val.name}</div>
                                    <div>{val.price} đ</div>
                                </div>
                            </Link>
                        ))}
                    </div>
             
            </div>
        </form>
    );
};

export default SearchBar;
