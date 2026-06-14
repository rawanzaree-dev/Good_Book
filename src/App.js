import BookSlider from "./components/book-slider/BookSlider";
import Header from "./components/header/Header";
import Services from "./components/services/Services";
import Slider from "./components/slider/Slider";
import { mostGiftedBooks } from "./data/books";
import { bestSeller } from "./data/books";
import {mostWishedFor} from "./data/books";
import Heading from "./components/heading/Heading";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <Services />
      <Heading title={"Most Gifted"} />
      <BookSlider data={mostGiftedBooks} folder_name={"most-gifted-books"}/>
      <Heading title={"Best Seller"} />
      <BookSlider data={bestSeller} folder_name={"best-seller-books"} />
      <Heading title={"Most Wished For"} />
      <BookSlider data={mostWishedFor} folder_name={"most-wished-for"} />
      <Footer />
    </div>
  );
}

export default App;
