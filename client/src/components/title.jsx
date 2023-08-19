
export default function Title({title, style}) {
  return (
    <h1 className={`text-center text-4xl font-bold text-white my-4 ${style}`}>
       {title}
    </h1>
  )
}
