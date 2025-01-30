type Theme = {
  isDark: boolean;
  toggleTheme: () => void;
};

export const theme = $state<Theme>({
  isDark: true,
  toggleTheme: () => {
    theme.isDark = !theme.isDark;
  },
});
