import cn from 'classnames';
import s from './Pagination.module.scss';

export interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  showFirstLast?: boolean;
  showPrevNext?: boolean;
  maxVisiblePages?: number;
  className?: string;
}

export function Pagination({
  totalPages,
  currentPage,
  onPageChange,
  showFirstLast = true,
  showPrevNext = true,
  maxVisiblePages = 7,
  className,
}: PaginationProps) {
  // Don't render if there's only one page
  if (totalPages <= 1) return null;

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      onPageChange(page);
    }
  };

  const renderPageNumbers = () => {
    const pages: (number | string)[] = [];

    if (totalPages <= maxVisiblePages) {
      // Show all pages if total is small
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Smart pagination with ellipsis
      const halfVisible = Math.floor(maxVisiblePages / 2);

      // Always show first page
      pages.push(1);

      if (currentPage <= halfVisible + 1) {
        // Near the beginning
        for (let i = 2; i <= maxVisiblePages - 1; i++) {
          pages.push(i);
        }
        if (totalPages > maxVisiblePages - 1) {
          pages.push('...');
        }
        pages.push(totalPages);
      } else if (currentPage >= totalPages - halfVisible) {
        // Near the end
        pages.push('...');
        for (let i = totalPages - maxVisiblePages + 2; i <= totalPages - 1; i++) {
          pages.push(i);
        }
        pages.push(totalPages);
      } else {
        // In the middle
        pages.push('...');
        for (let i = currentPage - halfVisible + 1; i <= currentPage + halfVisible - 1; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      }
    }

    return pages;
  };

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  return (
    <nav className={cn(s.pagination, className)} role="navigation" aria-label="Pagination">
      <div className={s.paginationList}>
        {/* First page button */}
        {showFirstLast && (
          <button
            className={cn(s.paginationArrow, s.paginationArrowFirst)}
            onClick={() => handlePageChange(1)}
            disabled={isFirstPage}
            aria-label="Go to first page"
          >
            «
          </button>
        )}

        {/* Previous page button */}
        {showPrevNext && (
          <button
            className={cn(s.paginationArrow, s.paginationArrowPrev)}
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={isFirstPage}
            aria-label="Go to previous page"
          >
            ‹
          </button>
        )}

        {/* Page numbers */}
        {renderPageNumbers().map((page, index) => (
          <div key={index} className={s.paginationItemWrapper}>
            {typeof page === 'number' ? (
              <button
                className={cn(s.paginationItem, {
                  [s.paginationItemActive]: page === currentPage,
                })}
                onClick={() => handlePageChange(page)}
                aria-label={`Go to page ${page}`}
                aria-current={page === currentPage ? 'page' : undefined}
              >
                {page}
              </button>
            ) : (
              <span className={s.paginationEllipsis} aria-hidden="true">
                {page}
              </span>
            )}
          </div>
        ))}

        {/* Next page button */}
        {showPrevNext && (
          <button
            className={cn(s.paginationArrow, s.paginationArrowNext)}
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={isLastPage}
            aria-label="Go to next page"
          >
            ›
          </button>
        )}

        {/* Last page button */}
        {showFirstLast && (
          <button
            className={cn(s.paginationArrow, s.paginationArrowLast)}
            onClick={() => handlePageChange(totalPages)}
            disabled={isLastPage}
            aria-label="Go to last page"
          >
            »
          </button>
        )}
      </div>
    </nav>
  );
}
