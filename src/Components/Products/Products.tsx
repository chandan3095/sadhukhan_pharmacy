import { useEffect, useState } from "react";
import SingleProduct from "../../shared-components/SingleProduct/SingleProduct";
import { Product } from "../Home/Productssec/Products";
import { apiRequests } from "../../api/api_requests.js";
import noProductImage from "../../assets/no_product.png";
import CustomLoader from "../../shared-components/CustomLoader/CustomLoader";

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchProductsData = async () => {
      setLoading(true);
      try {
        const response = await apiRequests.getAllProducts();

        const transformedData: Product[] = response.map((item: any) => ({
          id: item.id,
          title: item.name,
          desc: item.description,
          img: item.image_url,
          basePrice: parseFloat(item.mrp_price),
          currentPrice: parseFloat(item.price),
        }));

        setProducts(transformedData);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductsData();
  }, []);

  return (
    <section className="bg-image">
      <div className="container">
        <h2 className="mb-0 py-3 py-md-5 page-title">Products</h2>

        <div className="row py-3 py-md-5">
          {loading ? (
            <div
              className="d-flex justify-content-center align-items-center w-100"
              style={{ minHeight: "200px" }}
            >
              <CustomLoader />
            </div>
          ) : products.length > 0 ? (
            products.map((product: Product) => (
              <div
                className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 mb-3 mb-md-4"
                key={product.id}
              >
                <SingleProduct
                  id={product.id}
                  title={product.title}
                  basePrice={product.basePrice}
                  currentPrice={product.currentPrice}
                  desc={product.desc}
                  img={product.img}
                />
              </div>
            ))
          ) : (
            <div className="text-center w-100">
              <img
                src={noProductImage}
                alt="No Products"
                style={{ maxWidth: "300px", width: "100%" }}
              />
              <h3 className="mt-3 fw-bold fs-5" style={{ color: "red" }}>
                No Products Found!
              </h3>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Products;
