var banners = ["Do lixo ao luxo!", "Reaproveitar e aproveitar!"]

var banner = 0

function trocaBanner() {
    bannerAtual = (banner + 1) % 2
    document.querySelector("h2#message").textContent = banners[bannerAtual]
}

setInterval(trocaBanner, 1000)