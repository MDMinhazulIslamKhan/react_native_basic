import { View, StyleSheet, FlatList } from "react-native";
import { useLayoutEffect } from "react";
import { MEALS, CATEGORIES } from "../data/dummyData";
import MealItem from "../components/MealItem.jsx";

const MealsOverview = ({ navigation, route }) => {
  const { categoryId } = route?.params;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categoryId) >= 0;
  });

  // same as use effect
  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === categoryId
    ).title;
    // setting header title
    navigation.setOptions({ title: categoryTitle });
  }, [categoryId, navigation]);

  function renderMealItem(itemData) {
    const mealProps = {
      id: itemData.item.id,
      title: itemData.item.title,
      color: itemData.item.color,
      id: itemData.item.id,
      duration: itemData.item.duration,
      complexity: itemData.item.complexity,
      affordability: itemData.item.affordability,
      imageUrl: itemData.item.imageUrl,
    };
    return <MealItem {...mealProps} />;
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        key={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsOverview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
