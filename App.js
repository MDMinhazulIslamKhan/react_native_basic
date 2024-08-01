import "./gesture-handler";
import { StatusBar } from "expo-status-bar";
import CategoriesScreen from "./screen/CategoryScreen";
import { NavigationContainer } from "@react-navigation/native";
import MealsOverview from "./screen/MealsOverview";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MealDetailsScreen from "./screen/MealDetailsScreen";
import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import FavoriteScreen from "./screen/FavoriteScreen";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "#351401",
        },
        sceneContainerStyle: { backgroundColor: "#3f2f25" },
        drawerActiveTintColor: "#351401",
        drawerInactiveTintColor: "white",
        drawerActiveBackgroundColor: "#e2b497",
        drawerContentStyle: {
          backgroundColor: "#351401",
        },
      }}
    >
      <Drawer.Screen
        name="categories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => {
            return <Ionicons color={color} size={size} name="list" />;
          },
        }}
      />
      <Drawer.Screen
        name="favorite"
        component={FavoriteScreen}
        options={{
          title: "Favorite Food",
          drawerIcon: ({ color, size }) => {
            return <Ionicons color={color} size={size} name="star" />;
          },
        }}
      />
    </Drawer.Navigator>
  );
}
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
            name="Drawer"
            component={DrawerNavigator}
            options={{
              // title: "All Categories",
              headerShown: false,
              // headerRight: () => {
              //   return (
              //     <Pressable
              //       style={({ pressed }) => pressed && { opacity: 0.5 }}
              //     >
              //       <Ionicons name="power" size={24} color="white" />
              //     </Pressable>
              //   );
              // },
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
