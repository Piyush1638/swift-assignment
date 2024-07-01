import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { fetchComments } from "@/lib/dataFetchers/fetchComments";
import SortButtons from "./SortButtons";
import SearchBox from "./SearchBox";
import HeadRow from "./HeadRow";
import TableDataCell from "./TableDataCell";
import PaginationButton from "./PaginationButton";
import ArrowButton from "./ArrowButton";


const DataTable = () => {
  const [comments, setComments] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10); // Default rows per page
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    const fetchCommentsData = async () => {
      try {
        const data = await fetchComments();
        setComments(data);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchCommentsData();
  }, []);

  // Calculate total pages based on rowsPerPage
  const totalPages = Math.ceil(comments.length / rowsPerPage);

  // Function to handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Function to handle rows per page change
  const handleRowsPerPageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setRowsPerPage(Number(event.target.value));
    setCurrentPage(1); // Reset to first page when changing rows per page
  };

  // Function to handle sorting
  const handleSort = (column: string) => {
    if (sortColumn === column) {
      // Toggle sort order if same column clicked again
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      // Set new sort column and default to ascending order
      setSortColumn(column);
      setSortOrder("asc");
    }
  };

  // Function to handle search term change
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // Reset to first page when changing search term
  };

  // Function to filter comments based on search term
  const getFilteredComments = () => {
    if (!searchTerm) {
      return comments; // Return all comments if no search term
    }

    const lowercasedSearchTerm = searchTerm.toLowerCase();
    return comments.filter((comment) =>
      Object.values(comment).some(
        (value) =>
          typeof value === "string" &&
          value.toLowerCase().includes(lowercasedSearchTerm)
      )
    );
  };

  // Function to get sorted and filtered comments based on current sort settings
  const getSortedAndFilteredComments = () => {
    const filteredComments = getFilteredComments();

    if (!sortColumn) {
      return filteredComments; // Return filtered comments if no sort column selected
    }

    // Sort filtered comments based on current sort column and order
    return filteredComments.slice().sort((a, b) => {
      if (sortOrder === "asc") {
        return a[sortColumn] < b[sortColumn] ? -1 : 1;
      } else {
        return a[sortColumn] > b[sortColumn] ? -1 : 1;
      }
    });
  };

  // Function to get pagination buttons based on current page
  const getPaginationButtons = () => {
    const buttons = [];

    if (totalPages <= 2) {
      // Show all pages if total pages are 2 or less
      for (let i = 1; i <= totalPages; i++) {
        buttons.push(
          <PaginationButton key={i} page={i} currentPage={currentPage} onPageChange={handlePageChange}/>
        );
      }
    } else {
      if (currentPage === 1) {
        // Show first two pages
        buttons.push(
          <PaginationButton key={1} page={1} currentPage={currentPage} onPageChange={handlePageChange}/>,
          <PaginationButton key={2} page={2} currentPage={currentPage} onPageChange={handlePageChange}/>,
          <ArrowButton key="next" direction="next" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}/>
        );
      } else if (currentPage === totalPages) {
        // Show last two pages
        buttons.push(
          <ArrowButton key="prev" direction="prev" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}/>,
          <PaginationButton key={totalPages - 1} page={totalPages - 1} currentPage={currentPage} onPageChange={handlePageChange}/>,
          <PaginationButton key={totalPages} page={totalPages} currentPage={currentPage} onPageChange={handlePageChange}/>
        );
      } else {
        // Show current page and next page
        buttons.push(
          <ArrowButton key="prev" direction="prev" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}/>,
          <PaginationButton key={currentPage} page={currentPage} currentPage={currentPage} onPageChange={handlePageChange}/>,
          <ArrowButton key="next" direction="next" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}/>
        );
      }
    }
    return buttons;
  };

  return (
    <section className="flex flex-col h-full w-full">
      <div className="flex md:flex-row flex-col-reverse gap-4 items-center justify-between my-5">
        <SortButtons handleSort={handleSort} />
        <SearchBox
          searchTerm={searchTerm}
          handleSearchChange={handleSearchChange}
        />
      </div>
      <Table>
        <TableHeader className="bg-[#c8c8d2]">
          <TableRow>
            <HeadRow label="Post ID" />
            <HeadRow label="Name" />
            <HeadRow label="Email" />
            <HeadRow label="Comment" />
          </TableRow>
        </TableHeader>
        <TableBody>

          {/* Slice comments array to show current page range */}
          {getSortedAndFilteredComments()
            .slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage)
            .map((comment) => (
              <TableRow key={comment.id}>
                <TableDataCell
                  postId={comment.postId}
                  name={comment.name}
                  email={comment.email}
                  comment={comment.body}
                />
              </TableRow>
            ))}
        </TableBody>
      </Table>

      <div className="flex items-center gap-1 justify-end my-6">
        <p className="text-sm">
          {`${(currentPage - 1) * rowsPerPage + 1}-${Math.min(
            currentPage * rowsPerPage,
            comments.length
          )} of ${comments.length} items`}
        </p>
        {getPaginationButtons()}
        <select
          name="rowsPerPage"
          id="rowsPerPage"
          className="border border-gray-500 rounded-[5px] py-1 px-2 outline-none text-sm"
          onChange={handleRowsPerPageChange}
          value={rowsPerPage}
        >
          <option value="10" className="text-sm">10/Page</option>
          <option value="50" className="text-sm">50/Page</option>
          <option value="100" className="text-sm">100/Page</option>
        </select>
      </div>
    </section>
  );
};

export default DataTable;
