const ButtonGhost = ({children,color='purple-500'}) =>{
  return (
    <button className={` styles_button-base bg-transparent text-${color} border border-${color}  hover:text-white  hover:shadow-md transition-all ease-in-out duration-150 hover:bg-${color}`}>
      {children}
    </button>
    )
}
export default ButtonGhost