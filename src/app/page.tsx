import ImageCarousel from "./components/ImageCarousel";
import Search from "./components/Search";
import TodoList from "./components/TodoList";
import Hero from "./sections/Hero";
import ProductList from "./sections/ProductList";

export default function Page() {
  return(
    <main>
      <Hero/>
      <ProductList/>
      <TodoList id={12} text="Write a report"/>
      <ImageCarousel/>
      <Search id={0} name="p" phone={1234} email="p"/>
    </main>
  );
}