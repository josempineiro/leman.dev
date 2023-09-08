interface Theme {
  color: string;
  backgroundColor: string;
}

export default function () {
  const theme = reactive({
    color: "#fddf00",
    backgroundColor: "#295ebb",
  });

  function setTheme(value: Theme) {
    console.log(value);
  }

  function handleEvent(event: CustomEvent) {
    setTheme(event.detail);
  }

  watch(() => theme, setTheme);

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
