import './index.css'
const Loading = () => {
  return (
    <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}>
      <div className="spinner"></div>
   </div>
  )
}

export default Loading