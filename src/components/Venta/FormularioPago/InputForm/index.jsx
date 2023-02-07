const InputForm = ({typeInput='text',textPlaceHolder}) =>{
  return (
    <input className="mb-2 border rounded p-[6px]" type={typeInput} placeholder={textPlaceHolder} />
    )
}
export default InputForm;