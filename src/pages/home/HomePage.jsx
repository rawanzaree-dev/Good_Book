import BookSlider from "../../components/book-slider/BookSlider";
import Heading from "../../components/heading/Heading";
import Services from "../../components/services/Services";
import Slider from "../../components/slider/Slider";
import { books } from "../../data/books";

export default function HomePage() {
  const giftedBooks= books.filter(book => book.category === "gifted"),
    bestSellerBooks= books.filter(book => book.category === "best-seller"),
    wishedBooks= books.filter(book => book.category === "wished");

  return (
    <div className="home">
      <Slider />
      <Services />
      <Heading title={"Most Gifted"} />
      <BookSlider data={giftedBooks} />
      <Heading title={"Best Seller"} />
      <BookSlider data={bestSellerBooks} />
      <Heading title={"Most Wished For"} />
      <BookSlider data={wishedBooks} />
    </div>
  );
}
