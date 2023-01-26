import Directory from "../../components/directory";
import { clothesCategories } from "../../mocks/categories";

function Home() {
  return <Directory clothesCategories={clothesCategories} />;
}

export default Home;
