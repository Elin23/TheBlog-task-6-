import { NextArrow } from "../svgIcons/NextArrow";
import { PrevArrow } from "../svgIcons/PrevArrow";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({ totalPages, currentPage, onPageChange }: PaginationProps) {
  return (
    <div className="mt-[30px] border-t border-borderColor-02 flex flex-col md:flex-row gap-5 justify-between text-sm font-medium items-center pb-[30px] text-gray-500 dark:text-white pt-5 font-inter">
      <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}
        className="text-sm font-medium flex justify-center items-center gap-2 dark:text-white">
        <PrevArrow className="stroke-gray-500 dark:stroke-white" />
        Previous
      </button>
      <div>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`w-10 h-10 p-auto rounded-lg ${currentPage === index + 1 ? 'bg-lightPurple text-purple dark:text-dark' : 'text-gray-500 dark:text-white'}`}
            onClick={() => onPageChange(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
      <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}
        className="text-sm font-medium flex justify-center items-center gap-2 dark:text-white cursor-pointer">
        Next
        <NextArrow className="stroke-gray-500 dark:stroke-white" />
      </button>
    </div>
  );
}
