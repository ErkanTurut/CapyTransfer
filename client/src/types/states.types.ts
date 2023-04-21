export type ThemeMode = boolean;

export interface ThemeState {
  isDarkTheme: ThemeMode;
}

export interface RootState {
  theme: ThemeState;
}
