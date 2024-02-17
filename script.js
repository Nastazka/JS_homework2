// Задание 1
// Представьте, что у вас есть класс для управления библиотекой. В этом классе
// будет приватное свойство для хранения списка книг, а также методы для
// добавления книги, удаления книги и получения информации о наличии книги.

// Класс должен содержать приватное свойство #books, которое
// инициализируется пустым массивом и представляет собой список книг в библиотеке.

// Реализуйте геттер allBooks, который возвращает текущий список книг.

// Реализуйте метод addBook(title), который позволяет добавлять книгу в
// список. Если книга с таким названием уже существует в списке, выбросьте
// ошибку с соответствующим сообщением.

// Реализуйте метод removeBook(title), который позволит удалять книгу из
// списка по названию. Если книги с таким названием нет в списке, выбросьте
// ошибку с соответствующим сообщением.

// Реализуйте метод hasBook(title), который будет проверять наличие книги
// в библиотеке и возвращать true или false в зависимости от того, есть
// ли такая книга в списке или нет.

// Реализуйте конструктор, который принимает начальный список книг (массив)
// в качестве аргумента. Убедитесь, что предоставленный массив не содержит
// дубликатов; в противном случае выбрасывайте ошибку.

class Library {
  #books = [];
  
  constructor(initialBooks = []) {
    if (initialBooks.length > 0) {
      const uniqueBooks = new Set(initialBooks);
      if (uniqueBooks.size !== initialBooks.length) {
        throw new Error('Список книг содержит дубликаты.');
      }
      this.#books = initialBooks;
    }
  }

  get allBooks() {
    return this.#books;
  }

  addBook(title) {
    if (this.#books.includes(title)) {
      throw new Error(`Книга с названием "${title}" уже существует в библиотеке.`);
    }
    this.#books.push(title);
  }

  removeBook(title) {
    const bookIndex = this.#books.indexOf(title);
    if (bookIndex === -1) {
      throw new Error(`Книга с названием "${title}" не найдена в библиотеке.`);
    }
    this.#books.splice(bookIndex, 1);
  }

  hasBook(title) {
    return this.#books.includes(title);
  }
}

const library = new Library(['Война и мир', 'Преступление и наказание', 'Идиот']);
//console.log(library.allBooks); // ['Война и мир', 'Преступление и наказание', 'Идиот']

library.addBook('Братья Карамазовы');
//console.log(library.allBooks); // ['Война и мир', 'Преступление и наказание', 'Идиот', 'Братья Карамазовы']

library.removeBook('Преступление и наказание');
console.log(library.allBooks); // ['Война и мир', 'Идиот', 'Братья Карамазовы']

console.log(library.hasBook('Война и мир')); // true
console.log(library.hasBook('Незнакомка')); // false




// Задание 2
// Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут оставлять
// отзывы, но чтобы исключить слишком короткие или слишком длинные сообщения, вы
// решаете установить некоторые ограничения.

// Создайте HTML-структуру с текстовым полем для ввода отзыва, кнопкой для
// отправки и контейнером, где будут отображаться отзывы.

// Напишите функцию, которая будет добавлять отзыв в контейнер с отзывами. Однако
// если длина введенного отзыва менее 50 или более 500 символов, функция должна генерировать исключение.

// При добавлении отзыва, он должен отображаться на странице под предыдущими отзывами, а не заменять их.

// const initialData = [
//     {
//         product: "Apple iPhone 13",
//         reviews: [
//             {
//                 id: "1",
//                 text: "Отличный телефон! Батарея держится долго.",
//             },
//             {
//                 id: "2",
//                 text: "Камера супер, фото выглядят просто потрясающе.",
//             },
//         ],
//     },
//     {
//         product: "Samsung Galaxy Z Fold 3",
//         reviews: [
//             {
//                 id: "3",
//                 text: "Интересный дизайн, но дорогой.",
//             },
//         ],
//     },
//     {
//         product: "Sony PlayStation 5",
//         reviews: [
//             {
//                 id: "4",
//                 text: "Люблю играть на PS5, графика на высоте.",
//             },
//         ],
//     },
// ];

// const reviewsListEl = document.querySelector('.reviews-list');
// const reviewFormEl = document.querySelector('.review-form');

// function addReview(reviewText) {
//     if (reviewText.length < 50 || reviewText.length > 500) {
//         throw new Error('Длина отзыва должна быть от 50 до 500 символов.');
//     }

//     const newReviewEl = document.createElement('div');
//     newReviewEl.classList.add('review');
//     newReviewEl.textContent = reviewText;

//     reviewsListEl.appendChild(newReviewEl);
// }

// reviewFormEl.addEventListener('submit', (event) => {
//     event.preventDefault();

//     const reviewText = event.target.elements.review.value;

//     try {
//         addReview(reviewText);
//     } catch (error) {
//         alert(error.message);
//     }
// });

// // Загрузка начальных данных
// initialData.forEach((product) => {
//     const productEl = document.createElement('div');
//     productEl.classList.add('product');
//     productEl.innerHTML = `<h3>${product.product}</h3>`;

//     product.reviews.forEach((review) => {
//         const reviewEl = document.createElement('div');
//         reviewEl.classList.add('review');
//         reviewEl.textContent = review.text;

//         productEl.appendChild(reviewEl);
//     });

//     reviewsListEl.appendChild(productEl);
// });