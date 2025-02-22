"use client"


export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}) {
  const maxVisiblePages = 5 // Number of visible page buttons
  const halfVisiblePages = Math.floor(maxVisiblePages / 2)

  // Generate the range of visible pages
  let startPage = Math.max(1, currentPage - halfVisiblePages)
  let endPage = Math.min(totalPages, currentPage + halfVisiblePages)

  // Adjust the range if it's near the start or end
  if (currentPage <= halfVisiblePages) {
    endPage = Math.min(maxVisiblePages, totalPages)
  } else if (currentPage >= totalPages - halfVisiblePages) {
    startPage = Math.max(totalPages - maxVisiblePages + 1, 1)
  }

  const pages = []
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i)
  }

  return (
    <div className="flex justify-center gap-2 mt-12">
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Previous
      </button>

      {/* First Page */}
      {startPage > 1 && (
        <>
          <button
            onClick={() => onPageChange(1)}
            className={`px-4 py-2 rounded-full ${
              currentPage === 1
                ? "bg-pink-800 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            1
          </button>
          {startPage > 2 && <span className="px-4 py-2">...</span>}
        </>
      )}

      {/* Visible Pages */}
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-4 py-2 rounded-full ${
            currentPage === page
              ? "bg-pink-800 text-white"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          {page}
        </button>
      ))}

      {/* Last Page */}
      {endPage < totalPages && (
        <>
          {endPage < totalPages - 1 && <span className="px-4 py-2">...</span>}
          <button
            onClick={() => onPageChange(totalPages)}
            className={`px-4 py-2 rounded-full ${
              currentPage === totalPages
                ? "bg-pink-800 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {totalPages}
          </button>
        </>
      )}

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Next
      </button>
    </div>
  )
}