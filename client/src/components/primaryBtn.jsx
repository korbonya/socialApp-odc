export default function PrimaryBtn({ title, onClick }) {
  return (
    <div className="flex items-center justify-center py-4">
      <button onClick={onClick} className="bg-gray-600 text-white text-xl font-bold px-8 py-4 text-center">
        {title}
      </button>
    </div>
  )
}
