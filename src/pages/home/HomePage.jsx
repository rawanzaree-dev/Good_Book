import BookSlider from "../../components/book-slider/BookSlider";
import Heading from "../../components/heading/Heading";
import Services from "../../components/services/Services";
import Slider from "../../components/slider/Slider";
import { mostGiftedBooks } from "../../data/books";
import { bestSeller } from "../../data/books";
import { mostWishedFor } from "../../data/books";

export default function HomePage() {
  return (
    <div className="home">
      <Slider />
      <Services />
      <Heading title={"Most Gifted"} />
      <BookSlider data={mostGiftedBooks} folder_name={"most-gifted-books"} />
      <Heading title={"Best Seller"} />
      <BookSlider data={bestSeller} folder_name={"best-seller-books"} />
      <Heading title={"Most Wished For"} />
      <BookSlider data={mostWishedFor} folder_name={"most-wished-for"} />
    </div>
  );
}
