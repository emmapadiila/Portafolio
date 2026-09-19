import { useEffect, useState } from 'react'

export function useTheme(): [boolean, () => void] {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
  }, [isDark])

  return [isDark, () => setIsDark((current) => !current)]
}
