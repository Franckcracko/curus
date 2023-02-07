const ButtonFill = ({children,color='purple-500'}) =>{
return (
    <button className={`bg-${color} hover:bg-[#6D28D9DD] styles_button-base text-white transition-all ease-in-out duration-150 `}>
      {children}
    </button>
  )
}
export default ButtonFill;