export type ThemeMode = "light" | "dark";

export interface AuthState {
  mode: ThemeMode;
  user: any;
  files: any[];
}
