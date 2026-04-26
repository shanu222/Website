import { useNavigate } from "react-router-dom";
import ProductsSection from "../components/ProductsSection";

function Products() {
  const navigate = useNavigate();

  return (
    <section className="w-full px-6 py-[60px]">
      <div className="mx-auto w-full max-w-7xl">
        <ProductsSection onNavigate={(path) => navigate(path)} />
      </div>
    </section>
  );
}

export default Products;
