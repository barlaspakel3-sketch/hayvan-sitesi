// Hayvan ilanları (örnek veriler)
const ilanlar = [
  {
    ad: "Boncuk",
    tur: "Kedi",
    yas: "2 yaşında",
    resim: "https://placekitten.com/400/300",
    aciklama: "Sahiplendirilmek üzere, oyuncu ve sağlıklı."
  },
  {
    ad: "Karabaş",
    tur: "Köpek",
    yas: "1 yaşında",
    resim: "https://placedog.net/400/300",
    aciklama: "Sadık dost arayanlara özel."
  }
];

// Ürünler (örnek veriler)
const urunler = [
  {
    ad: "Vitamin Takviyesi",
    fiyat: "120 TL",
    resim: "https://via.placeholder.com/400x300?text=Vitamin",
    aciklama: "Kedi ve köpekler için multivitamin."
  },
  {
    ad: "Tüy Dökülme Önleyici Şampuan",
    fiyat: "95 TL",
    resim: "https://via.placeholder.com/400x300?text=Sampuan",
    aciklama: "Doğal içerikli, hassas ciltlere uygun."
  }
];

// İlanları ekle
const ilanListesi = document.getElementById('ilanListesi');
ilanlar.forEach(ilan => {
  const kart = document.createElement('div');
  kart.classList.add('kart');
  kart.innerHTML = `
    <img src="${ilan.resim}" alt="${ilan.ad}">
    <h3>${ilan.ad}</h3>
    <p><strong>Tür:</strong> ${ilan.tur}</p>
    <p><strong>Yaş:</strong> ${ilan.yas}</p>
    <p>${ilan.aciklama}</p>
  `;
  ilanListesi.appendChild(kart);
});

// Ürünleri ekle
const urunListesi = document.getElementById('urunListesi');
urunler.forEach(urun => {
  const kart = document.createElement('div');
  kart.classList.add('kart');
  kart.i
