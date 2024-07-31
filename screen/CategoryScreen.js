import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummyData.js";
import CategoryGridTile from "../components/CategoryGridTile.jsx";

function renderCategoryItem(itemData) {
  return (
    <CategoryGridTile
      title={itemData.item.title}
      color={itemData.item.color}
      id={itemData.item.id}
    />
  );
}
const CategoriesScreen = () => {
  return (
    <FlatList
      data={CATEGORIES}
      key={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;
