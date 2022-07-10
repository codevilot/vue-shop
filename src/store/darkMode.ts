import { defineStore } from "pinia";

export const useDarkMode = defineStore("darkMode", {
  state: () => ({
    isDark: localStorage.getItem("darkMode") || "dark",
  }),

  actions: {
    toggleDarkMode() {
      this.isDark === "dark" ? (this.isDark = "light") : (this.isDark = "dark");
      localStorage.setItem("darkMode", this.isDark);
      this.colorSet();
    },
    colorSet() {
      document.documentElement.setAttribute("class", this.isDark);
    },
  },
});
