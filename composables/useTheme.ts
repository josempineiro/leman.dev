interface Theme {
  color: string;
  text: string;
  title: string;
}

const theme = reactive({
  color: "var(--bg-color)",
  text: "var(--text-color-primary)",
  title: "Leman.dev"
})

export default function () {

  function setTheme(value: Theme) {
    theme.color = value.color;
    theme.text = value.text;
    theme.title = value.title;
  }

  function handleEvent(event: CustomEvent) {
    setTheme(event.detail);
  }

  watch(theme, setTheme);

  onMounted(() => {
    document.addEventListener("theme", handleEvent as EventListener);
  });

  onUnmounted(() => {
    document.removeEventListener("theme", handleEvent as EventListener);
  });

  return {
    theme,
    setTheme,
  };
}
