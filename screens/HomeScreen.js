import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  Pressable
} from "react-native";
import React  ,{useContext}from "react";
import MenuComponent from "../components/MenuComponent";
import { useNavigation } from "@react-navigation/native";
import { CartItems } from "../Context";

const HomeScreen = () => {
  const data = [
    {
      id: "0",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe-n_NBXmFXRWT7iGC-THljTXxeSLHJsV9kg&usqp=CAU",
    },
    {
      id: "1",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtyUHaJAMXYPvV6a_-_XqE0YhhDGpCPofVOQ&usqp=CAU",
    },
    {
      id: "2",
      image:
        "https://i0.wp.com/www.promotionsinuae.com/wp-content/uploads/2018/07/Buy-Any-Medium-or-Large-Pizza-Get-The-2nd-Pizza-Free-Order-Online-Only..jpg?fit=552%2C287&ssl=1",
    },
    {
      id: "3",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDEcz7DVk3uBX_33FZVdPjiCvgpKsmx_9eSh7x4GrTyeMsQixOTd7SHXByKmdibQSQF94&usqp=CAU",
    },
    {
      id: "4",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEez8xQZfPxqFsk250_vhXqgRz5Nv8NsHayohTjVexmQwLwhsFUxnElS6bkxLb7gTvHTM&usqp=CAU",
    },
    {
      id: "5",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeyDcZ1Y3GcIx0CB9Qd8MGw5IE6eASPzwWVIs-yklFqqd7O3bfXj5egUmREG0dUK6M6o8&usqp=CAU",
    },
  ];
  return (
    <SafeAreaView>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data.map((item, key) => (
          <View style={{ margin: 10 }} key={key}>
            <Image
              style={{ width: 220, height: 130 }}
              source={{ uri: item.image }}
            />
          </View>
        ))}
      </ScrollView>

      <MenuComponent />

      <View style={{ padding: 10 }}>
        <Image
          style={{ width: "100%", height: 120, borderRadius: 7 }}
          source={{
            uri: "https://api.dominos.co.in/prod-olo-api/images/flashBanner/Dominos_Howzzat_IPL-2021_Menu.jpg",
          }}
        />
      </View>

      <View style={{ padding: 10 }}>
        <Image
          style={{ width: "100%", height: 120, borderRadius: 7 }}
          source={{
            uri: "https://www.dominos.co.in/theme2/front/images/voucherimages/carousel9.png",
          }}
        />
      </View>

      <View style={{ padding: 10 }}>
        <Image
          style={{ width: "100%", height: 120, borderRadius: 7 }}
          source={{
            uri: "https://www.dominos.co.in/theme2/front/images/voucherimages/carousel13.png",
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
