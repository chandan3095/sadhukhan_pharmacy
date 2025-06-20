import { useEffect, useState } from "react";
import SingleProduct from "../../shared-components/SingleProduct/SingleProduct";
import { Product } from "../Home/Productssec/Products";
import { apiRequests } from "../../api/api_requests.js";

const Products = () => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const fetchProductsData = async () => {
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
    };

    fetchProductsData();
  }, []);

  return (
    <section className="bg-image">
      <div className="container">
        <h2 className="mb-0 py-3 py-md-5 page-title">Products</h2>

        <div className="row py-3 py-md-5">
          {products.map((product: Product) => (
            <div
              className="col-12 col-sm-12 col-md-6 col-lg-4 mb-3 mb-md-4"
              key={product.id}
            >
              <SingleProduct
                key={product.id}
                id={product.id}
                title={product.title}
                basePrice={product.basePrice}
                currentPrice={product.currentPrice}
                desc={product.desc}
                img={product.img}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
