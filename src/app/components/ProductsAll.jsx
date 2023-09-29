'use client'

import { useEffect, useState } from "react";
import axios from "../../../api/axios";
import Productos from "./Products";
import { Button } from "@nextui-org/button";
import { Pagination } from "@nextui-org/pagination";

function ProductsAll() {
    const [products, setProducts] = useState();
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [selectedSexo, setSelectedSexo] = useState();

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    

    useEffect(() => {
        const fetchTotalPages = async () => {
          try {
            const response = await axios.get('/productos');
            const totalProducts = response.data.length;
            const pages = Math.ceil(totalProducts / 40);
            setTotalPages(pages);
            
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchTotalPages();
        // getProducts(currentPage);
        console.log(currentPage)
      }, [currentPage]);

  return (
    <>
        {/* <Productos pageNumber={currentPage}/> */}
        <div className='flex justify-center w-full gap-1 items-center'>
        <Button
          size="sm"
          variant="flat"
          color="secondary"
          onPress={() => setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev))}
        >
          Previous
        </Button>
            <Pagination isCompact showControls total={totalPages} page={currentPage} />
            <Button
          size="sm"
          variant="flat"
          color="secondary"
          onPress={() => setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev))}
        >
          Next
        </Button>
        </div>
    </>
  )
}

export default ProductsAll