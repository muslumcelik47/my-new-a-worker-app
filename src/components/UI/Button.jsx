

const Button = (props) => {
  return (
    <button className={`p-2 text-lg hover:bg-slate-500 bg-teal-900  text-white ${props.className}`} onClick={props.onClick}>{props.children}
   
    </button>
  )
}

export default Button