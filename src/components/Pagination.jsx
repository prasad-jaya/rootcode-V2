import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { useSearchParams } from "react-router-dom";

const Pagination = ({ total } ) => {
    const [searchParams, setSearchParams] = useSearchParams();

    const PAGE_SIZE = 6;
    const pageCount = Math.ceil(total / PAGE_SIZE);
    
    const currentPage  = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

    const nextPage = () =>{
        const next = currentPage === pageCount ? currentPage : currentPage + 1;
        searchParams.set("page", next);
        setSearchParams(searchParams);
      }
    
      const previousPage = () =>{
        const prev = currentPage === 1 ? currentPage : currentPage - 1;
        searchParams.set("page", prev);
        setSearchParams(searchParams);
      }

      if(pageCount <= 1) return null;

      return (
        <div className="flex justify-between">
            <p>
                Showing <span><strong>{(currentPage-1) * PAGE_SIZE + 1} </strong></span>
                <span>to </span> 
                <span><strong>{(currentPage === pageCount ? total : currentPage * PAGE_SIZE)} </strong></span> 
                <span>of </span>
                <span><strong>{total && total}</strong></span>
            </p>
        <div className="flex ">
            <button onClick={previousPage} className="flex pr-2 place-items-center"><HiChevronLeft /> <span>Previous</span></button>
            <button onClick={nextPage} className="flex place-items-center"><span>Next</span> <HiChevronRight /> </button>
        </div>
        </div>
      )
}

export default Pagination;