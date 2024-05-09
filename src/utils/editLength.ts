export const editLength = (name: string) => {
  if (name.length >= 9) {
    return name.substring(0, 9) + '...'
  } else return name
}
