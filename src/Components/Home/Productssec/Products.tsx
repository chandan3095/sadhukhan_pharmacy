import CommonTitle from "../../../shared-components/CommonTitle/CommonTitle";
import CustomButton from "../../../shared-components/Button/CustomButton";
import { RiMedicineBottleLine } from "react-icons/ri";
import SingleProduct from "../../../shared-components/SingleProduct/SingleProduct";
import { useEffect, useState } from "react";
import { apiRequests } from "../../../api/api_requests";
import { useNavigate } from "react-router-dom";

export interface Product {
  id: number;
  title: string;
  desc: string;
  img: string;
  basePrice: number;
  currentPrice: number;
}

const Products = () => {
  const navigate = useNavigate();
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
    <div className="container">
      <div className="row">
        <div className="col-6 col-sm-6 col-md-8 col-lg-9 col-xl-10">
          <CommonTitle title="Products" withIcon={true} />
        </div>
        <div className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2 d-flex justify-content-end align-items-center">
          <CustomButton
            title="View Products"
            variant="light"
            customBgColor="#fff"
            customTextColor="#000"
            icon={<RiMedicineBottleLine size={18} />}
            handleClick={() => navigate("/products")}
          />
        </div>
      </div>

      <div className="row pt-3 pt-md-5">
        {products.map((item: Product) => (
          <div
            className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 d-flex justify-content-center mb-4"
            key={item.id}
          >
            <SingleProduct
              key={item.id}
              id={item.id}
              title={item.title}
              basePrice={item.basePrice}
              currentPrice={item.currentPrice}
              desc={item.desc}
              img={item.img}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
