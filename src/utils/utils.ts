export const formatDate = (date: Date | string) => {
  if (typeof date === 'string') return date

  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short' }

  return date.toLocaleDateString('en-US', options)
}
