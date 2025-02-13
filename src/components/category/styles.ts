import { colors, fontFamily } from "@/styles/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: 36,
    backgroundColor: colors.gray[100],
    borderWidth: 1,
    borderRadius: 8,
    justifyContent: "center",
    borderColor: colors.gray[300],
    flexDirection: "row",
    alignItems:"center",
    paddingHorizontal: 12,
    gap: 10,
  },
  name: {
    fontSize: 14,
    fontFamily: fontFamily.regular,
    color: colors.gray[500],
  },
  containerSelected: {
    backgroundColor: colors.green.base,
    borderColor: colors.green.base,
    borderWidth: 1,
  },
  nameSelected: {
    color: colors.gray[100],
  },
});
