import { styles } from "./styles";
import { Text, View } from "react-native";
import { Step } from "../step";
import { IconMapPin, IconQrcode, IconTicket } from "@tabler/icons-react-native";


export function Steps() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Veja como funciona:</Text>
      <Step
        title="Encontre estabelecimentos"
        description="Veja os locais mais perto de você que são parceiros da Nearby"
        icon={IconMapPin}
      ></Step>
      <Step
        title="Ative o cupom com QR Code"
        description="Escaneie o código no estabelecimento para ganhar seus benefícios"
        icon={IconQrcode}
      ></Step>
      <Step
        title="Garanta as vantagens perto de você"
        description="Ative os cupons onde estiver, em diferentes tipos de estabelecimentos"
        icon={IconTicket}
      ></Step>
    </View>
  );
}
