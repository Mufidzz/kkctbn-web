export const mysqlToDate = dateString => {
    const myDate = dateString.replace(/[A-Z]/g, " ")
    const t = myDate.split(/[- :]/);
    return new Date(Date.UTC(t[0], t[1]-1, t[2], t[3], t[4], t[5]));
}

export const mysqlToDateString = dateString => {
    const str = dateString.replace(/[A-Z]/g, " ")
    return str.split(" ")[0]
}
