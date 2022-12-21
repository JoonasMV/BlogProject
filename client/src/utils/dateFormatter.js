export const formatDate = (dateAsString) => {
  const date = new Date(dateAsString)
  return [
    date.getDate(),
    date.getMonth() + 1,
    date.getFullYear(),
  ].join("/")
}

export const formatTime = (dateAsString) => {
  const date = new Date(dateAsString)
  return [ 
    date.getHours(),
    date.getMinutes(),
  ].join(".")
}