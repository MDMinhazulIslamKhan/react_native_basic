import { StatusBar } from "expo-status-bar";
import CategoriesScreen from "./screen/CategoryScreen";
import { NavigationContainer } from "@react-navigation/native";
import MealsOverview from "./screen/MealsOverview";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Meal Categories"
            component={CategoriesScreen}
            // options={{
            //   title: "Home",
            //   headerTintColor: "white",
            //   headerStyle: {
            //     backgroundColor: "red",
            //   },
            //   headerTitleStyle: { fontSize: 30 },
            // }}
          />
          <Stack.Screen name="Meal Overview" component={MealsOverview} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
