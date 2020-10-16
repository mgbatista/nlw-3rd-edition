const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

// create map
const map = L.map('mapid', options).setView([-21.7849191,-48.2019123], 15);

// create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',)
.addTo(map)

// create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})



// create and add marker
L
.marker([-21.7849191,-48.20191233], { icon })
.addTo(map)


/* image gallery */

function selectImage(event) {
    const button = event.currentTarget

    // remover todas as classes .active
    const buttons = document.querySelectorall(".images button")
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button) {
        button.classList.remove("active")
    }


    // selecionar a imagem clicada

    // atualizar o container de image

    // adicionar a classe .active para este botao
    button.classList.add('active')
}

