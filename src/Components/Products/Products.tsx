import data from "../../data/productData.js";
import SingleProduct from "../../shared-components/SingleProduct/SingleProduct";
import { Product } from "../Home/Productssec/Products";

const Products = () => {
  return (
    <section className="bg-image">
      <div className="container">
        <h2 className="mb-0 py-3 py-md-5 page-title">Products</h2>

        <div className="row py-3 py-md-5">
          {data.map((product: Product) => (
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
