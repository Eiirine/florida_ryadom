// Данные о людях
const peopleData = {
    nikki: {
        name: "Никки Хольм",
        date: "02.23.15",
        birthYear: "1994",
        city: "г. ХХХ",
        circumstances: "23 февраля ушла с друзьями отмечать День рождения, так и не вернулась. Род занятий: художник-фрилансер.",
        features: "Рост 5 футов 6 дюймов, карие глаза, волосы короткие цвета калико (крашеные: белый, рыжий, коричневый), стройная.",
        clothes: "Коричневый топ, чёрные джинсы, кроссовки и джинсовая куртка тёмно-синего цвета.",
        image: "nikki.png"
    },
    jennifer: {
        name: "Дженнифер",
        date: "03.02.22",
        birthYear: "1994",
        city: "г. ХХХ",
        circumstances: "Ушла на прогулку в центр и не вернулась.",
        features: "Молодая женщина, рост около 5 футов 4 дюймов, рыжие/медно-рыжие волосы, голубые глаза, веснушки. Стройное/спортивное телосложение.",
        clothes: "в черное летнее платье с разноцветными цветами.",
        image: "jennifer.png"
    },
    eiirine: {
        name: "Эйрин Файрхарт",
        date: "10.14.22",
        birthYear: "2000",
        city: "г. ХХХ",
        circumstances: "14 октября ушла из дома на вечеринку и не вернулась.",
        features: "Рост 5 футов 4 дюйма, нормального телосложения, волосы крашеные блонд, серо-карие глаза, очки, пирсинг губы, татуировки на ключицах и левой лодыжке.",
        clothes: "Серое пальто, синие свитер и джинсы, коричневые сапоги.",
        image: "eiirine.jpg"
    },
    poppy: {
        name: "Поппи",
        date: "01.08.24",
        birthYear: "1997",
        city: "г. ХХХ",
        circumstances: "Ушла на подработку курьером в южный район и не вернулась со смены.",
        features: "Блондинка среднего роста нормального телосложения, пирсинг губ, часто носит солнечные очки.",
        clothes: "В последний раз была одета в черную майку, фиолетовый пиджак, синие джинсы и ботинки.",
        image: "poppy.png"
    },
    mia: {
        name: "Мия Кэнэко",
        date: "09.05.24",
        birthYear: "2004",
        city: "г. ХХХ",
        circumstances: "5 сентября ушла на ночную смену, так и не вернулась домой, работодатель с того дня тоже больше её не видел, на связь не выходит.",
        features: "Блондинка, невысокого роста, узкие зелёные глаза, странно подстриженные волосы.",
        clothes: "Бежевая кофта и юбка.",
        image: "mia.png"
    },
    alex: {
        name: "Алекс",
        date: "07.07.19",
        birthYear: "1996",
        city: "г. ХХХ",
        circumstances: "4 августа ушла на утреннюю пробежку в ближайший от дома парк, так и не вернувшись в течение суток.",
        features: "Высокая девушка под 5 футов 9 дюймов ростом, долговязого телосложения, волосы светлые и короткие, глаза карие.",
        clothes: "Черная шапка бини, серый спортивный костюм, красные кеды.",
        image: "alex.png"
    }
};
// Открытие модального окна
function openModal(personId) {
    const person = peopleData[personId];
    if (!person) return;

    // Заполнение имени и даты
    document.getElementById("modalName").textContent = person.name;
    document.getElementById("modalDate").textContent = person.date;

    // Формирование единого текстового блока
    const textBlock = `<strong>Год рождения:</strong> ${person.birthYear}
<strong>Город пропажи:</strong> ${person.city}
<strong>Обстоятельства пропажи:</strong> ${person.circumstances}
<strong>Приметы:</strong> ${person.features}
<strong>Одежда:</strong> ${person.clothes}`;

document.getElementById("modalTextBlock").innerHTML = textBlock;

    // Загрузка фотографии
    const modalImg = document.getElementById("modalImage");
    const modalPlaceholder = document.getElementById("modalImagePlaceholder");

    modalImg.src = "images/" + personId + ".jpg";
    modalImg.style.display = "block";
    modalPlaceholder.style.display = "none";

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
