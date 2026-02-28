export function errorMessageHandler({
  status,
  message,
}: {
  status: number
  message?: string
}) {
  if (status === 401) {
    return "Efetue novo acesso a sua conta."
  }

  if (status === 403) {
    return "Você não tem permissão para executar essa ação."
  }

  if (status === 404 && !message) {
    return "Não encontrado."
  }

  if (status === 429) {
    return "Muitas requisições. Tente novamente em alguns instantes."
  }

  if (message) {
    return message
  }

  return "Sem conexão com o servidor."
}
