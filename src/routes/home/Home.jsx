import Categories from "../../components/Categories";
import { clothesCategories } from "../../mocks/categories";

function Home() {
  return <Categories clothesCategories={clothesCategories} />;
}

export default Home;
