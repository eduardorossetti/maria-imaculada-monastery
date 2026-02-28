import { useCallback, useState } from "react"

export function useDialog(defaultValue = false): [boolean, VoidFunction] {
  const [show, setShow] = useState(defaultValue)
  const toggle = useCallback(() => setShow((prev) => !prev), [])

  return [show, toggle]
}
