import Categories from "../../components/categories";
import { clothesCategories } from "../../mocks/categories";

function Home() {
  return <Categories clothesCategories={clothesCategories} />;
}

export default Home;
