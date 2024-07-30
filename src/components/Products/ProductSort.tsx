import React from "react"

interface ProductSortProps {
    onChange: (newValue: string)=> void,
    currentSort: string
}
const ProductSort:React.FC<ProductSortProps> = ({onChange,currentSort} ) => {
    const handelSortChange = (e: React.ChangeEvent<HTMLSelectElement> ) => {
        if(onChange) onChange(e.target.value)
    }
  return (
    <div

        style={{
          width: "fit-content",
          marginLeft: "auto",
          padding: "10px",
          display: "flex",
          gap: "20px",
        }}
      >
        <select className="btn-primary" style={{ width: "fit-content" }} onChange={handelSortChange} value={currentSort}>
          <option value="default">Sắp theo giá sản phẩm</option>
          <option value="asc">Giá tăng dần</option>
          <option value="desc">Giá giảm dần</option>
        </select>
      </div>
  )
}

export default ProductSort