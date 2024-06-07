/* eslint-disable react-refresh/only-export-components */
import { ReactNode } from "react";
import {
  extendTheme,
  defineStyleConfig,
  ChakraProvider,
} from "@chakra-ui/react";

const colors = {
  brand: {
    screenbg: "#F7F6FB",
    white: "#FFFFFF",
    red: "#C00000",
    greyPrimary: "#404040",
    greySecondary: "#737373",
    greyTertiary: "#C2C2C2",
    blue: "#216BFF",
    blackSecondary: "#666666",
    pendingApproval: "#D48D02",
    redPrimary: "#C00000",
  },
};

const FormLabel = defineStyleConfig({
  baseStyle: {
    color: "brand.blackSecondary",
    fontSize: "xs",
    fontWeight: "normal",
    mb: 1,
  },
});
const Button = defineStyleConfig({
  baseStyle: {
    rounded: "3xl",
  },
});
const Input = defineStyleConfig({
  baseStyle: {
    borderColor: "black",
  },
});

export const theme = extendTheme({
  components: {
    FormLabel,
    Button,
    Input,
  },
  colors,
  styles: {
    global: () => ({
      "html, body": {
        bg: "brand.screenbg",
      },
    }),
  },
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
