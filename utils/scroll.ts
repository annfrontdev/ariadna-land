export function scrollToSection(sectionId: string) {
  if (!sectionId) return;
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}
