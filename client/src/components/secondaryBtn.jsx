export default function SecondaryBtn({ title, onClick }) {
  return (
    <div className="flex items-center justify-center py-4">
      <button
        typeof="button"
        type="button"
        onClick={onClick}
        className="border-2 rounded-lg border-gray-800 text-gray-700 text-xl font-bold px-8 py-4 text-center"
      >
        {title}
      </button>
    </div>
  );
}
