export default function generatePass() {
    let password: string = ''

    let characters: string = 'AaBbCcDdEeFfGgHhIiJjLlMmNnOoPpQqRrSsTtUuVvXxZzWwYyÇç1234567890!@#$%&'
    let passwordLength = 9

    for (let index = 0; index < passwordLength; index++)
        password += characters.charAt (
            Math.floor(Math.random() * characters.length)
    )

    return password
}