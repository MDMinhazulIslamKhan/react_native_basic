import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { MEALS } from "../data/dummyData";
import { Ionicons } from "@expo/vector-icons";

const MealDetailsScreen = ({ route, navigation }) => {
  const { id } = route.params;
  const selectedMeal = MEALS.find((meal) => meal.id === id);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <Pressable
            onPress={headerButtonPressHandler}
            style={({ pressed }) => pressed && { opacity: 0.5 }}
          >
            <Ionicons name="star" size={24} color="white" />
          </Pressable>
        );
      },
      title: "About The Meal",
    });
  }, [navigation, headerButtonPressHandler]);
  const headerButtonPressHandler = () => {};
  return (
    <ScrollView style={{ marginBottom: 30 }}>
      <View>
        <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
        <Text style={styles.title}>{selectedMeal.title}</Text>
        <View style={styles.details}>
          <Text style={styles.detailItem}>{selectedMeal.duration}m</Text>
          <Text style={styles.detailItem}>{selectedMeal.complexity}</Text>
          <Text style={styles.detailItem}>{selectedMeal.affordability}</Text>
        </View>
        <View style={styles.subTitleContainer}>
          <Text style={styles.subTitle}>INGREDIENTS</Text>
        </View>
        {selectedMeal.ingredients.map((ingredients) => (
          <Text style={styles.listItem} key={ingredients}>
            {ingredients}
          </Text>
        ))}
        <View style={styles.subTitleContainer}>
          <Text style={styles.subTitle}>STEPS</Text>
        </View>
        {selectedMeal.steps.map((steps) => (
          <Text style={styles.listItem} key={steps}>
            {steps}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
};

export default MealDetailsScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 24,
    margin: 8,
    color: "white",
  },
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "white",
    elevation: 4,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    color: "white",
    fontSize: 12,
  },
  subTitle: {
    color: "#e2b497",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  subTitleContainer: {
    margin: 4,
    padding: 6,
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
    marginHorizontal: 24,
    marginVertical: 4,
  },
  listItem: {
    color: "#361e10",
    backgroundColor: "#cca58d",
    marginHorizontal: 20,
    borderRadius: 20,
    textAlign: "center",
    fontWeight: "bold",
    marginVertical: 3,
    paddingVertical: 4,
    paddingHorizontal: 20,
  },
});
