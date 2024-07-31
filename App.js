import { StatusBar } from "expo-status-bar";
import CategoriesScreen from "./screen/CategoryScreen";
import { NavigationContainer } from "@react-navigation/native";
import MealsOverview from "./screen/MealsOverview";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealDetailsScreen from "./screen/MealDetailsScreen";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerTintColor: "white",
            headerStyle: {
              backgroundColor: "#351401",
            },
            contentStyle: { backgroundColor: "#3f2f25" },
          }}
        >
          <Stack.Screen
            name="Meal Categories"
            component={CategoriesScreen}
            options={{
              title: "All Categories",
            }}
          />
          <Stack.Screen
            name="MealOverview"
            component={MealsOverview}
            // options={({ route }) => {
            //   return {
            //     title: route?.params?.categoryId,
            //   };
            // }}
          />
          <Stack.Screen name="MealDetails" component={MealDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
