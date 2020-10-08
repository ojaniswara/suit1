let acak = Math.floor(Math.random()*3)
let acak2 = Math.floor(Math.random()*3)

let path_gambar_p1 = ""
let path_gambar_p2 = ""


path_gambar_p1 = [
    "img/kertas-kiri.png", 
    "img/batu-kiri.png", 
    "img/gunting-kiri.png"
]

path_gambar_p2 = [
    "img/kertas-kanan.png",
    "img/batu-kanan.png",
    "img/gunting-kanan.png"
]

document.querySelector("#player1").setAttribute("src", path_gambar_p1[acak])
document.querySelector("#player2").setAttribute("src", path_gambar_p2[acak2])


let p1_batu = (acak == 1)
let p1_gunting = (acak == 2)
let p1_kertas = (acak == 0)

let p2_batu = (acak2 == 1)
let p2_gunting = (acak2 == 2)
let p2_kertas = (acak2 == 0)

if ((p1_batu && p2_gunting) || (p1_gunting && p2_kertas) || (p1_kertas && p2_batu)) {
    document.querySelector("#pesan_p1").innerHTML = "Kamu Menang !"
    document.querySelector("#pesan_p2").innerHTML = "Kamu kalah"
    document.querySelector("#pesan_p1").classList.add("menang")
    document.querySelector("#pesan_p2").classList.add("kalah")
}

if ((p2_batu && p1_gunting) || (p2_gunting && p1_kertas) || (p2_kertas && p1_batu)) {
    document.querySelector("#pesan_p1").innerHTML = "Kamu kalah"
    document.querySelector("#pesan_p2").innerHTML = "Kamu Menang !"
    document.querySelector("#pesan_p1").classList.add("kalah")
    document.querySelector("#pesan_p2").classList.add("menang")
}

if (acak == acak2) {
    document.querySelector("#pesan_p1").innerHTML = "game seri"
    document.querySelector("#pesan_p2").innerHTML = "game seri"
    document.querySelector("#pesan_p1").classList.add("seri")
    document.querySelector("#pesan_p2").classList.add("seri")
}