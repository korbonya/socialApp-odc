export default function TextField(props) {
  const {label, type, placeholder, onChange, labelStyle, inputStyle} = props
  return (
    <div className="flex flex-col w-full">
        <label className={`text-gray-100 my-1 text-2xl ${labelStyle}`} htmlFor="textField">{label}</label>
        <input onChange={onChange} className={`py-4 px-8 bg-black/75 text-xl text-gray-100 ${inputStyle}`} type={type} placeholder={placeholder} />
    </div>
  )
}
