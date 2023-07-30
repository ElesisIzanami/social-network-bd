function error(){
    const errorContainer = document.createElement('section')
    const errorText = document.createElement('p')
    errorText.textContent="ERROR-404"
    errorContainer.append(errorText)
    return errorContainer
}

export default error