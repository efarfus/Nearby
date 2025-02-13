import { Image, Text, View } from "react-native";
import { styles } from "./styles";

export function Welcome() {
  return (
    <View>
      <Image
        source={require("@/assets/splash-icon.png")}
        style={styles.logo}
      ></Image>
      <Text style={styles.title}>Boas vindas ao Nearby!</Text>
      <Text style={styles.subtitle}>
        Tenha cupons de vantagem para usar em seus estabelecimentos favoritos.
      </Text>
    </View>
  );
}
