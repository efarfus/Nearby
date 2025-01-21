import { View } from "react-native";
import { Welcome } from "@/components/welcome";
import { Steps } from "@/components/steps";
import { Button } from "@/components/button";
import { colors } from "@/styles/colors";
import { IconPlayerPlayFilled } from "@tabler/icons-react-native";
import { router } from "expo-router";

export default function Index() {
  return (
    <View style={{ flex: 1, padding: 20, gap: 20 }}>
      <Welcome />
      <Steps />
      <Button style={{ backgroundColor: colors.gray[500] }} onPress={() => router.navigate("/home")}>
        <Button.Icon icon={IconPlayerPlayFilled}></Button.Icon>
        <Button.Title>Começar</Button.Title>
      </Button>
    </View>
  );
}
