export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}) {
  if (totalPages <= 1) return null;

  return (
    <div className="d-flex justify-content-end align-items-center gap-2 mt-3">
      <button
        className="btn btn-outline-secondary btn-sm"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Prev
      </button>

      <span className="text-muted">
        Page {currentPage} of {totalPages}
      </span>

      <button
        className="btn btn-outline-secondary btn-sm"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
}
