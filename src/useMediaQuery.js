import { ref, onMounted, onUnmounted } from 'vue'

export default function useMediaQuery(query) {
  const matches = ref(window.matchMedia(query).matches)

  const handler = (event) => (matches.value = event.matches)

  onMounted(() => window.matchMedia(query).addEventListener('change', handler))

  onUnmounted(() => window.matchMedia(query).removeEventListener('change', handler))

  return matches
}
