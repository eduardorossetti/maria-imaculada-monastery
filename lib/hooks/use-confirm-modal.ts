import { useCallback, useState } from "react"

export function useConfirmModal<T>() {
  const [isOpen, setIsOpen] = useState(false)
  const [resolver, setResolver] = useState<
    ((data: T, confirmed: boolean) => void | Promise<void>) | null
  >(null)
  const [data, setData] = useState<T | null>(null)

  const openModal = useCallback(
    (resolverFn: (data: T) => Promise<void>) => (modalData: T) => {
      setData(modalData)
      setIsOpen(true)

      return new Promise<void>((resolve) => {
        setResolver(() => async (d: T, confirmed: boolean) => {
          if (confirmed) {
            await resolverFn(d)
          }
          resolve()
        })
      })
    },
    []
  )

  const closeModal = useCallback(
    async (confirmed: boolean) => {
      setIsOpen(false)

      if (resolver && data) {
        await resolver(data, confirmed)
        setResolver(null)
      }

      setData(null)
    },
    [data, resolver]
  )

  return { isOpen, openModal, closeModal, data }
}
