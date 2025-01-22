import { ImageBackground, View } from "react-native";
import { IconArrowLeft } from "@tabler/icons-react-native";
import { router, Router } from "expo-router";
import { styles } from "./styles";
import { Button } from "@/components/button";
import { colors } from "@/styles/colors";

type Props = {
  uri: string;
};

export function Cover({ uri }: Props) {
  return (
    <ImageBackground source={{ uri }} style={styles.container}>
      <View style={styles.header}>
        <Button style={{ width: 40, height: 40 }} onPress={() => router.back()}>
          <Button.Icon icon={IconArrowLeft}></Button.Icon>
        </Button>
      </View>
    </ImageBackground>
  );
}
