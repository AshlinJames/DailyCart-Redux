import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllProducts } from '../redux/slices/productSlice'

const Home = () => {
  const dispatch = useDispatch()
  const { loading, error, allProducts } = useSelector((state) => state.productReducer)

  const productsPerPage = 8
  const totalPages = Math.ceil(allProducts?.length / productsPerPage)
  const [currentPage, setCurrentPage] = useState(1)

  const currentPageProductsLastIndex = currentPage * productsPerPage
  const currentPageProductsFirstIndex = currentPageProductsLastIndex - productsPerPage
  const visibleProductCards = allProducts?.slice(currentPageProductsFirstIndex, currentPageProductsLastIndex)

  useEffect(() => {
    dispatch(fetchAllProducts())
  }, [dispatch])

  const navigatePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const navigateNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  return (
    <>
      <Header insideHeader={true} />
      <div className="pt-28 px-5 md:px-10">
        {loading ? (
          <p className="text-center text-lg font-semibold">Loading...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {allProducts?.length > 0 ? (
              visibleProductCards.map((product) => (
                <div
                  key={product?.id}
                  className="rounded-xl p-4 shadow-md bg-white hover:shadow-lg transition-all duration-300 flex flex-col"
                >
                  {/* Image */}
                  <div className="w-full h-56 overflow-hidden rounded-lg">
                    <img
                      src={product?.thumbnail}
                      alt={product?.title}
                      className="w-full h-full object-cover transform hover:scale-105 transition duration-300"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="text-center mt-4 flex-grow flex flex-col justify-between">
                    <h3 className="font-semibold text-lg text-gray-800 line-clamp-2">
                      {product?.title}
                    </h3>
                    <Link
                      to={`/${product?.id}/view`}
                      className="bg-purple-900 text-white px-4 py-2 rounded-lg mt-4 inline-block hover:bg-purple-700 transition"
                    >
                      View More
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <p className="col-span-full text-center text-gray-600 text-lg">
                No products found
              </p>
            )}
          </div>
        )}
      </div>

      {/* Pagination */}
      {allProducts?.length > 0 && (
        <div className="flex justify-center items-center gap-6 mt-12 mb-10">
          <button
            onClick={navigatePrevPage}
            disabled={currentPage === 1}
            className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
          >
            <i className="fa-solid fa-backward"></i>
          </button>

          <span className="text-lg font-semibold text-blue-900">
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={navigateNextPage}
            disabled={currentPage === totalPages}
            className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
          >
            <i className="fa-solid fa-forward"></i>
          </button>
        </div>
      )}
    </>
  )
}

export default Home
