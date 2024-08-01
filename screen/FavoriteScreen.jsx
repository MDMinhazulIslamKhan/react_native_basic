import { FlatList, StyleSheet, Text, View } from "react-native";
import { useContext } from "react";
import { FavoriteContext } from "../store/context/favorite-context";
import MealItem from "../components/MealItem";
import { MEALS } from "../data/dummyData";

const FavoriteScreen = () => {
  const favoriteMealContext = useContext(FavoriteContext);
  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealContext.ids.includes(meal.id)
  );

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
      {favoriteMeals?.length > 0 ? (
        <FlatList
          data={favoriteMeals}
          key={(item) => item.id}
          renderItem={renderMealItem}
        />
      ) : (
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
            textAlign: "center",
            fontSize: 18,
          }}
        >
          You Have No Favorite Meals Yet.
        </Text>
      )}
    </View>
  );
};

export default FavoriteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
