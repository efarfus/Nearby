import { View, Text } from "react-native";
import { styles } from "./styles";
import { colors } from "@/styles/colors";

export function Step(props) {
  return (
    <View style={styles.container}>
      <View style={styles.details}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.description}>{props.description}</Text>
      </View>
    </View>
  );
}
