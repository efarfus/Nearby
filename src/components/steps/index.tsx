import { styles } from "./styles";
import { Text, View } from "react-native";
import { Step } from "../step";

export function Steps() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Veja como funciona:</Text>
      <Step
        title="Encontre estabelecimentos"
        description="Veja os locais mais perto de você que são parceiros da Nearby"
      ></Step>
      <Step
        title="Ative o cupom com QR Code"
        description="Escaneie o código no estabelecimento para ganhar seus benefícios"
      ></Step>
    </View>
  );
}
