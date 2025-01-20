import { StyleSheet } from "react-native";
import { colors, fontFamily } from "@/styles/theme";

export const styles = StyleSheet.create({
    logo:{
        width: 100,
        height:100,
    },
    title:{
        fontSize:24,
        fontFamily: fontFamily.bold,
        color: colors.gray[600]
    },
    subtitle:{
        fontSize:16,
        fontFamily: fontFamily.regular,
        color:colors.gray[500],
        marginTop:12
    }
})