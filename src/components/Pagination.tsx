
type Props = {
  pagination: any;
  onBack: () => void;
  onNext: () => void;
}
const Pagination = ({ pagination, onBack, onNext }: Props) => {
  const {
    current, next, prev, totalPages
  } = pagination || {};

  if (!pagination) {
    return null;
  }

  return (
    <div className="flex justify-center items-center mt-4">
      <div className="flex rounded-md border border-gray-300 overflow-hidden">
        {prev !== null && (
          <button
            onClick={() => onBack()}
            className="w-auto py-2 px-4 bg-white text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Volver
          </button>
        )}
        <div className="flex space-x-2">
          <span className="bg-gray-100 py-2 px-4 text-sm text-gray-700">{current}</span>
          <span className="py-2 px-4 text-sm text-gray-700">de</span>
          <span className="bg-gray-100 py-2 px-4 text-sm text-gray-700">{totalPages}</span>
        </div>
        {next !== null && (
          <button
            onClick={() => onNext()}
            className="w-auto py-2 px-4 bg-white text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Siguiente
          </button>
        )}
      </div>
    </div>
  );
};

export default Pagination;