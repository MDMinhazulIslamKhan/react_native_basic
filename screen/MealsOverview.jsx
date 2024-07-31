import { View, StyleSheet, FlatList } from "react-native";
import React from "react";
import { MEALS } from "../data/dummyData";
import MealItem from "../components/MealItem.jsx";

const MealsOverview = ({ navigation, route }) => {
  const { categoryId } = route?.params;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categoryId) >= 0;
  });

  function renderMealItem(itemData) {
    const mealProps = {
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
