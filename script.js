function toggleMode() {
    const html = document.documentElement

    html.classList.toggle('light')

    const img = document.querySelector("#profile img")

    if (html.classList.contains('light')) {
        img.setAttribute('src', './assets/avatar-light.png')
        img.setAttribute('alt', "Foto de Everton Oliveira Sorrindo, usando uma blusa preta e fundo claro.")
    }
    else {
        img.setAttribute('src', './assets/avatar.png')
        img.setAttribute('alt', "Foto de Everton Oliveira Sorrindo, usando uma blusa preta e fundo cinza escuro.")
    }
}