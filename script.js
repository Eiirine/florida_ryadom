// Данные о людях
const peopleData = {
    nikki: {
        name: "Никки Холм",
        age: "ххх",
        city: "ххх",
        circumstances: "ххх",
        features: "ххх",
        clothes: "ххх"
    },
    jennifer: {
        name: "Дженнифер",
        age: "ххх",
        city: "ххх",
        circumstances: "ххх",
        features: "ххх",
        clothes: "ххх"
    },
    eiirine: {
        name: "Эйрин Файрхарт",
        age: "26 лет (2000 г.р.)",
        city: "г. ХХХ",
        circumstances: "14 октября ушла из дома на вечеринку и не вернулась. ",
        features: "Рост 163, нормального телосложения, волосы крашеные блонд, серо-карие глаза, очки, пирсинг губы, татуировки на ключицах и левой лодыжке.",
        clothes: "Серое пальто, синие свитер и джинсы, коричневые сапоги."
    },
    poppy: {
        name: "Поппи",
        age: "ххх",
        city: "ххх",
        circumstances: "ххх",
        features: "ххх",
        clothes: "ххх"
    },
    mia: {
        name: "Мия Кэнэко",
        age: "ххх",
        city: "ххх",
        circumstances: "ххх",
        features: "ххх",
        clothes: "ххх"
    },
    alex: {
        name: "Алекс",
        age: "ххх",
        city: "ххх",
        circumstances: "ххх",
        features: "ххх",
        clothes: "ххх"
    }
};

// Открытие модального окна
function openModal(personId) {
    const person = peopleData[personId];
    if (!person) return;

    document.getElementById("modalName").textContent = person.name;
    document.getElementById("modalAge").textContent = person.age;
    document.getElementById("modalCity").textContent = person.city;
    document.getElementById("modalCircumstances").textContent = person.circumstances;
    document.getElementById("modalFeatures").textContent = person.features;
    document.getElementById("modalClothes").textContent = person.clothes;
    document.getElementById("modalImage").textContent = "[Фото " + person.name.split(" ")[0] + "]";
    
    const modalImg = document.getElementById("modalImage");
    modalImg.src = "images/" + personId + ".jpg"; // Формируем путь: images/eiirine.jpg
    modalImg.style.display = "block"; // Показываем фото
    document.getElementById("modalImagePlaceholder").style.display = "none"; // Скрываем заглушку

    document.getElementById("modalOverlay").classList.add("active");
    document.body.style.overflow = "hidden";
}

// Закрытие модального окна
function closeModal() {
    document.getElementById("modalOverlay").classList.remove("active");
    document.body.style.overflow = "";
}

// Закрытие по клику на overlay
document.getElementById("modalOverlay").addEventListener("click", function (e) {
    if (e.target === this) {
        closeModal();
    }
});

// Закрытие по Escape
document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
        closeModal();
    }
});

// Плавная прокрутка
document.querySelector(".hero-btn").addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector("#missing").scrollIntoView({
        behavior: "smooth"
    });
});

// Обработчик для кнопки "У меня есть информация"
document.querySelector(".header-btn").addEventListener("click", function () {
    alert("Здесь будет форма для предоставления информации");
});
