import CommonTitle from "../../../shared-components/CommonTitle/CommonTitle";
import CustomButton from "../../../shared-components/Button/CustomButton";
import { RiMedicineBottleLine } from "react-icons/ri";
import data from "../../../data/productData.js";
import SingleProduct from "../../../shared-components/SingleProduct/SingleProduct";

export interface Product {
  id: number;
  title: string;
  desc: string;
  img: string;
  basePrice: number;
  currentPrice: number;
}

const Products = () => {
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
            handleClick={() => console.log("Clicked")}
          />
        </div>
      </div>

      <div className="row pt-3 pt-md-5">
        {data.map((item: Product) => (
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
