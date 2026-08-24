type Theme = {
  isDark: boolean;
  toggleTheme: () => void;
};

export const theme = $state<Theme>({
  isDark: false,
  toggleTheme: () => {
    theme.isDark = !theme.isDark;
  },
});
