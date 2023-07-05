import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../reducers/cartReducer";
const FoodDetails = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const [added, setAdded] = useState(false);
  const [data, setData] = useState([]);
  const [relatedData, setRelatedData] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.meal}`
      )
      .then((res) => {
        // console.log(res.data.meals[0]);
        setData(res.data.meals[0]);
        axios
          .get(
            `https://www.themealdb.com/api/json/v1/1/search.php?s=${"chicken"}`
          )
          .then((res) => {
            // console.log(res.data.categories);
            setRelatedData(res.data.meals);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // console.log(relatedData);
  const handleAddToCart = () => {
    dispatch(addToCart(data));
  };

  return (
    <div>
      <section class="text-gray-700 mt-8 body-font overflow-hidden bg-white">
        <div class="container px-5  mx-auto">
          <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              class="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
              src={data ? data.strMealThumb : ""}
            />
            <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 class="text-sm title-font text-gray-500 tracking-widest">
                {data ? data.strCategory : ""}
              </h2>
              <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
                {data ? data.strMeal : ""}
              </h1>
              
              <p class="leading-relaxed">
                {data && data.strInstructions
                  ? data.strInstructions.slice(0, 500)
                  : ""}
              </p>
            
              <br />
              <div class="flex">
                <span class="title-font font-medium text-2xl text-gray-900">
                  ₹{data && data.idMeal ? data.idMeal.slice(0, 3) : ""}
                </span>
                {added ? (
                  <Link to="/cart">
                    <button class="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
                      View Cart
                    </button>
                  </Link>
                ) : (
                  <button
                    onClick={() => {
                      handleAddToCart();
                      setAdded(true);
                    }}
                    class="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"
                  >
                    Add to Cart
                  </button>
                )}
                <button class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl text-center font-bold tracking-tight text-gray-900">
            Related Foods
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {relatedData
              ? relatedData.map((product) => (
                  <Link to={`/category/${product.strCategory}`}>
                    <div
                      style={{ cursor: "pointer" }}
                      key={product.id}
                      className="group relative"
                    >
                      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                        <img
                          src={product.strMealThumb}
                          alt={product.imageAlt}
                          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                        />
                      </div>
                      <div className="mt-4 flex justify-between">
                        <div>
                          <h3 className="text-sm text-gray-700">
                            <a href={product.href}>
                              <span
                                aria-hidden="true"
                                className="absolute inset-0"
                              />
                              {product.strCategory}
                            </a>
                          </h3>
                          <p className="mt-1 text-sm text-gray-500">
                            {/* {product.strCategory} */}
                          </p>
                        </div>
                        <p className="text-sm font-medium text-gray-900">
                          {/* {product.strCategory} */}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))
              : ""}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
