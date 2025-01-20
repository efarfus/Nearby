import { View, Text } from "react-native";
import { styles } from "./styles";
import { colors } from "@/styles/colors";
import { Icon, IconProps } from "@tabler/icons-react-native";
import React from "react";

type Props ={
    title: string
    description: string
    icon: React.ComponentType<IconProps>
}

export function Step({title, description, icon: Icon}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.details}>
        <Icon size={32} color={colors.red.base}></Icon>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
}
