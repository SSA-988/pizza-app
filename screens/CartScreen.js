import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  ScrollView,
} from "react-native";
import React, { useContext } from "react";
import { CartItems } from "../Context";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const CartScreen = () => {
  const navigation = useNavigation();
  const { cart, setCart } = useContext(CartItems);
  const total = cart
    .map((item) => Number(item.price * item.quantity))
    .reduce((prev, curr) => prev + curr, 0);
  //   console.log(total, "total price");
  const sides = [
    {
      id: "0",
      name: "Chicken Parcel",
      image:
        "https://www.dominos.co.in/files/items/150135_Aha_Non_Veg_439x307-01.jpg",
      price: 80,
      description: "Filled with delecious molten chocolate inside.",
      quantity: 1,
    },
    {
      id: "1",
      name: "Taco Mexican",
      image: "https://www.dominos.co.in/files/items/Main_Menu-NVG.jpg",
      price: 120,
      description: "A crispy flaky wrap filled with Mexican Arancini",
      quantity: 1,
    },
    {
      id: "2",
      name: "7Up (500ml)",
      image: "https://www.dominos.co.in/files/items/7up.png",
      price: 56,
      description: "cool drink ",
      quantity: 1,
    },
    {
      id: "3",
      name: "lava cake",
      image: "https://www.dominos.co.in/files/items/choco-lava-cake-771.jpg",
      price: 80,
      description: "Filled with delecious molten chocolate inside",
      quantity: 1,
    },
  ];
  const addToCart = (item) => {
    setCart([...cart, item]);
  };
  const placeOrder = () => {
    navigation.navigate("Order")

    setCart([])
  }
  return (
    <>
      <View style={{ backgroundColor: "white", flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {cart.map((item, key) => (
            <Pressable
              style={{
                backgroundColor: "#006491",
                padding: 10,
                margin: 10,
                borderRadius: 8,
              }}
              key={key}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  style={{ width: 70, height: 70, borderRadius: 6 }}
                  source={{ uri: item.image }}
                />

                <View style={{ marginLeft: 10 }}>
                  <Text
                    style={{ fontSize: 16, fontWeight: "bold", color: "white" }}
                  >
                    {item.name}
                  </Text>

                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      marginVertical: 6,
                    }}
                  >
                    <Text style={{ color: "white", fontSize: 17 }}>
                      {item.size}
                    </Text>
                    <Text style={{ color: "white", fontSize: 15 }}>
                      {" "}
                      | {item.description.substr(0, 25) + "..."}
                    </Text>
                  </View>

                  <Text style={{ color: "white", fontSize: 16 }}>
                    ₹{item.price * item.quantity}
                  </Text>
                </View>
              </View>
            </Pressable>
          ))}
          <View>
            <Text style={{fontSize:18,fontWeight: "bold",padding:8}}> People Also Ordered</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {sides.map((item, index) => (
                <Pressable
                  style={{
                    margin: 10,
                    backgroundColor: "#E8E8E8",
                    borderRadius: 4,
                    width: 160,
                    height: 130,
                  }}
                >
                  <View
                    style={{
                      padding: 10,
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      style={{ width: 60, height: 60, borderRadius: 6 }}
                      source={{ uri: item.image }}
                    />
                    <View style={{ marginLeft: 10 }}>
                      <Text style={{ width: 70, fontSize: 15 }}>
                        {item.name}
                      </Text>
                      <Text style={{ fontSize: 14, fontWeight: "bold" }}>
                        ₹{item.price}
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      borderColor: "#BEBEBE",
                      borderRadius: 1,
                      borderStyle: "dotted",
                      borderWidth: 0.5,
                      marginTop: 3,
                    }}
                  />
                  <Pressable onPress={() => addToCart(item)}>
                    <Text
                      style={{
                        textAlign: "center",
                        fontSize: 16,
                        color: "green",
                        marginTop: 10,
                        fontWeight: "600",
                      }}
                    >
                      ADD TO CART
                    </Text>
                  </Pressable>
                </Pressable>
              ))}
            </ScrollView>
          </View>
        </ScrollView>
      </View>

      {total === 0 ? (
         <Pressable
         style={{
           marginBottom: "auto",
           marginTop: "auto",
           alignItems: "center",
           justifyContent: "center",
           height: "100%",
         }}
       >
         <Text style={{ marginTop: 20, fontSize: 20, fontWeight: "500" }}>
           Cart is empty!
         </Text>
         <Image
           style={{
             width: 250,
             height: 600,
             resizeMode: "contain",
           }}
           source={{
             uri: "https://pizzaonline.dominos.co.in/static/assets/empty_cart@2x.png",
           }}
         />
       </Pressable>
      ) : (
        <View style={{ height: 200 }}>
        <View
          style={{ margin: 10, flexDirection: "row", alignItems: "center" }}
        >
          <Entypo name="location-pin" size={24} color="black" />
          <View style={{ marginLeft: 10 }}>
            <Text style={{ fontWeight: "bold", fontSize: 15 }}>
              Delivering To Home
            </Text>
            <Text
              style={{ fontSize: 16, width: 200, marginTop: 3, color: "gray" }}
            >
              25/2 Rna Shopping arcade Lucknow complex
            </Text>
          </View>
        </View>

        <View
          style={{ margin: 10, flexDirection: "row", alignItems: "center" }}
        >
          <FontAwesome5 name="amazon-pay" size={24} color="black" />
          <View style={{ marginLeft: 10 }}>
            <Text style={{ fontWeight: "bold", fontSize: 15 }}>₹{total}</Text>
            <Text
              style={{ fontSize: 16, width: 200, marginTop: 3, color: "gray" }}
            >
              Pay Via Cash
            </Text>
          </View>
        </View>
        <Pressable
        onPress={placeOrder}
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            backgroundColor: "green",
            padding: 10,
            borderRadius: 5,
          }}
        >
          <Text
            style={{ textAlign: "center", color: "white", fontWeight: "bold" }}
          >
            Place Order
          </Text>
        </Pressable>
      </View>
      )}  
     
    </>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
