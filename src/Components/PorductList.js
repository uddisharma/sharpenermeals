import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import FoodDetails from "../Pages/FoodDetails";
export default function ProductList() {
  const params = useParams();
  const category = params.name;
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${category}`)
      .then((res) => {
        // console.log(res.data.categories);
        setData(res.data.meals);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [category]);
  //   console.log(data);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl text-center font-bold tracking-tight text-gray-900">
          {category}
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data
            ? data.map((product) => (
                <Link to={`/category/${category}/${product.idMeal}`}>
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
                            {product.strMeal}
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
  );
}
