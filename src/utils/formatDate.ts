export const formatDate = (dateString: string) => {
    const date = new Date(dateString.replace(" ", "T"))

    const options: Intl.DateTimeFormatOptions = {
        month: "short",
        day: "numeric",
        year: "numeric",
    }

    return date.toLocaleDateString("en-US", options)
}
