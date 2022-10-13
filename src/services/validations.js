
import { checkIfCompanyEmailExists } from "../data/SignUpLogin/companies"
import { checkIfUserEmailExists } from "../data/SignUpLogin/users"
import { checkPasswordStrength, validateEmail } from "./common"

async function validateFields({
    email,
    password,
    passwordConfirmation
}) {
    const errors = cleanUndefinedProperties({
        email: await getEmailErrors(email),
        password: getPasswordErrors(password),
        passwordConfirmation: getPasswordConfirmationErrors(passwordConfirmation, password)
    })

    const success = Object.keys(errors).length === 0
    return cleanUndefinedProperties({
        success: success,
        errors: success ? undefined : errors
    })
}

function checkRequiredValueMissing(value) {
    return value === undefined || value.length === 0
}

async function getEmailErrors(email) {
    if (checkRequiredValueMissing(email)) {
        return "Please enter a valid email address."
    }
    if (!validateEmail(email)) {
        return "please enter a valid email address."
    }
    if ((await checkIfUserEmailExists(email)).length > 0) {
        return "The email address is already in use by another account."
    }
    if ((await checkIfCompanyEmailExists(email)).length > 0) {
        return "The email address is already in use by another account"
    }
}

function getPasswordErrors(password) {
    if (checkRequiredValueMissing(password)) {
        return "Please enter a valid password."
    }
    if (password.length < 8) {
        return "Password must be at least 8 characters long."
    }
    //if (checkPasswordStrength(password) < 4) {
      //  return "A sua password deve ter pelo menos um número, uma mínuscula, uma maiúscula e um símbolo."
    //}
}

function getPasswordConfirmationErrors(passwordConfirmation, password) {
    if (checkRequiredValueMissing(passwordConfirmation)) {
        return "Please confirm your password."
    }
    if (password !== passwordConfirmation) {
        return "The passwords specified must be identical."
    }
}


function cleanUndefinedProperties(obj) {
    return Object.keys(obj)
        .reduce((acc, p) =>
            obj[p] !== undefined
                ? ({ ...acc, [p]: obj[p] })
                : acc,
            {})
}

export {
    validateFields
}