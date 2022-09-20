import Cart from "../service/сart";
import Book from "../domain/book";
import MusicAlbom from "../domain/music_albom";
import Movie from "../domain/movie";

const cart = new Cart();

test("Проверка пустой карточки", () => {
  expect(cart.items.length).toBe(0);
});

const book = new Book(1, "Евгений Онегин", "Пушкин А.С.", 100, 500);
const music = new MusicAlbom(2, "Народные русские песни", "Шестакович", 500, 20);
const movie = new Movie(3, "Мстители", "США", 600, 2012, "Avengers Assemble", ["фантастика", "боевик", "фэнтези", "приключения"], "137 мин");

test("Проверка добавления в корзину", () => {
  cart.add(book);
  cart.add(music);
  cart.add(movie);
  expect(cart.items.length).toBe(3);
});

test("Проверка суммы цен", () => {
  const sum = cart.sum();
  expect(sum).toBe(1200);
});

test("Проверка суммы со скидкой", () => {
  const sumsale = cart.sumSale(15);
  expect(sumsale).toBe(1020);
});

test("Проверка суммы со скидкой", () => {
  const sumsale = cart.sumSale(0.15);
  expect(sumsale).toBe(1020);
});

test("Проверка удаления", () => {
  cart.delete(2);
  expect(cart.items.length).toBe(2);
});