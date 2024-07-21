import { Category } from "../../interface/category"

const SecTionCate = ({cate}: {cate: Category}) => {
  return (
    <div className="banhSN">
        <div className="banhSN-content">
          <h2 className="banhSN-content_h2">{cate.name}</h2>
          <div className="banhSN-content_text">
            <span>
              {cate.content}
            </span>
          </div>
        </div>
      </div>
  )
}

export default SecTionCate