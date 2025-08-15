import ImageCarousel from "./components/ImageCarousel";
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
    </main>
  );
}