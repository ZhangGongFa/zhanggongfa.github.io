// Objek untuk menyimpan semua pengaturan profil
const profileSettings = {
  favicon: "media/thanhvan.jpg", // Path ke favicon
  title: "Trần Thị Thanh Vân | Profile", // Judul halaman
  metaTitle: "Trần Thị Thanh Vân || Profile", // Meta title untuk SEO
 // metaDescription: , // Deskripsi meta untuk SEO
  //metaKeywords: , // Keywords meta untuk SEO
  metaRobots: "index, follow", // Pengaturan robot meta untuk SEO
  imageSrc: "media/thanhvan.jpg", // Path ke gambar profil
  name: "Trần Thị Thanh Vân", // Nama profil
  occupation: "Cựu Phó Chủ Nhiệm GIEO", // Pekerjaan atau jabatan
  links: [
    { title: "Facebook", url: "https://www.facebook.com/yun.thanhzan", icon: "fa-facebook" }, // Tautan GitHub
    { title: "Instagram", url: "https://www.instagram.com/yun_shi.nv", icon: "fa-instagram" }, // Tautan Instagram
    { title: "Telegram", url: "https://t.me/", icon: "fa-telegram" }, // Tautan Telegram
    { title: "Email", url: "https://www.facebook.com/yun.thanhzan", icon: "fa-envelope" }, // Tautan Email
    { title: "WhatsApp", url: "https://www.facebook.com/yun.thanhzan", icon: "fa-whatsapp" }, // Tautan WhatsApp
    { title: "YouTube", url: "https://www.facebook.com/yun.thanhzan", icon: "fa-youtube" } // Tautan YouTube
  ]
};

// Mengatur favicon
document.getElementById('favicon').href = profileSettings.favicon;

// Mengatur judul halaman
document.getElementById('title').textContent = profileSettings.title;

// Mengatur meta tags
document.getElementById('meta-title').content = profileSettings.metaTitle;
document.getElementById('meta-description').content = profileSettings.metaDescription;
document.getElementById('meta-keywords').content = profileSettings.metaKeywords;
document.getElementById('meta-robots').content = profileSettings.metaRobots;

// Mengatur gambar profil
document.getElementById('profile-image').src = profileSettings.imageSrc;

// Mengatur nama profil
document.getElementById('profile-name').textContent = profileSettings.name;

// Mengatur teks pekerjaan atau jabatan
document.getElementById('occupation-text').textContent = profileSettings.occupation;

// Mengatur tautan-tautan
const linkBoxes = document.getElementById('link-boxes');
profileSettings.links.forEach(link => {
  // Hanya menambahkan tautan yang tidak kosong
  if (link.title && link.url) {
    const linkElement = document.createElement('a');
    linkElement.href = link.url;
    linkElement.innerHTML = `<i class="fa ${link.icon}" aria-hidden="true"></i> ${link.title}`;
    linkBoxes.appendChild(linkElement);
  }
});
 
