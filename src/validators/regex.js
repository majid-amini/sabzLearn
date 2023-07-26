const testEmail = (value) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/g
    return emailPattern.test(value)
}
const testNationalCode = (value) => {

}
const testPhoneNumber = (value) => {

}

export default {
    testEmail,
    testNationalCode,
    testPhoneNumber
}