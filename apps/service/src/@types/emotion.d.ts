import "@emotion/react";
import { Theme as ThemeModel } from "design-system/theme";

declare module "@emotion/react" {
  export interface Theme extends ThemeModel {}
}
