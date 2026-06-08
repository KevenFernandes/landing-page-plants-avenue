"use client";
import clsx from "clsx";
import { Container } from "../Container";
import { useEffect, useState } from "react";
import { ProductArticle } from "../ProductArticle";
import { MOCK_CATEGORIES } from "@/src/mocks/categories";
import { MOCK_PRODUCTS } from "@/src/mocks/products";
import { TitleSection } from "../TitleSection";
import { TrashIcon } from "lucide-react";

export function ProductSection() {
  const [activeCat, setActiveCat] = useState<number>(1);
  const [limitItems, setLimitItems] = useState<number>(4);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isDesktop, setIsDesktop] = useState<boolean>(false);

  const categories = MOCK_CATEGORIES;

  useEffect(() => {
    function listenScreen() {
      const width = window.innerWidth;
      let newLimit = 4;
      let desktop = false;

      if (width >= 1024) {
        newLimit = 8;
        desktop = true;
      } else if (width >= 640) {
        newLimit = 6;
        desktop = false;
      } else {
        newLimit = 4;
        desktop = false;
      }

      setLimitItems((prev) => {
        if (prev !== newLimit) {
          setCurrentPage(1);
          return newLimit;
        }
        return prev;
      });

      setIsDesktop(desktop);
    }

    listenScreen();
    window.addEventListener("resize", listenScreen);
    return () => window.removeEventListener("resize", listenScreen);
  }, []);

  const getOrderedProducts = () => {
    switch (activeCat) {
      case 1:
        return MOCK_PRODUCTS.toSorted((a, b) => b.sales - a.sales);
      case 2:
        return MOCK_PRODUCTS.toSorted((a, b) => b.favorites - a.favorites);
      case 3:
        return MOCK_PRODUCTS.toSorted((a, b) => Number(b.new) - Number(a.new));
      default:
        return MOCK_PRODUCTS;
    }
  };

  const currentProductList = getOrderedProducts();

  const startIndex = (currentPage - 1) * limitItems;
  const endIndex = startIndex + limitItems;

  const visibleProducts = currentProductList.slice(startIndex, endIndex);
  const qtdPages = Math.ceil(currentProductList.length / limitItems);

  const handleCategoryChange = (catId: number) => {
    setActiveCat(catId);
    setCurrentPage(1);
  };

  return (
    <section>
      <Container>
        <div>
          <header className="py-4 flex flex-col items-center gap-2">
            <TitleSection variant="primary" size="xl" text="Our Products" />
            <div className="w-20 h-0.5 bg-primary/80"></div>
          </header>
          <div className="flex gap-2 font-semibold text-sm text-primary">
            {categories.map((cat) => {
              return (
                <button
                  className={clsx(
                    "border-2 border-primary rounded-2xl px-2 py-1",
                    "transition-all cursor-pointer",
                    `${activeCat === cat.id && "bg-primary text-light"}`,
                  )}
                  onClick={() => handleCategoryChange(cat.id)}
                  key={cat.id}
                >
                  {cat.name}
                </button>
              );
            })}
            <button
              className="cursor-pointer"
              onClick={() => handleCategoryChange(0)}
            >
              <TrashIcon />
            </button>
          </div>
          <div
            className={clsx(
              "my-8 grid grid-cols-2 grid-rows-2 gap-x-4 gap-y-2",
              "sm:grid-cols-3 lg:grid-cols-4",
            )}
          >
            {visibleProducts.map((product) => {
              return (
                <ProductArticle
                  key={product.id}
                  name={product.name}
                  price={product.price}
                  imageUrl={product.imageUrl}
                />
              );
            })}
          </div>
          {!isDesktop && qtdPages > 1 && (
            <div className="flex gap-2 justify-center mb-6">
              {Array.from({ length: qtdPages }).map((_, idx) => {
                return (
                  <button
                    key={idx}
                    disabled={currentPage === idx + 1}
                    onClick={() => setCurrentPage(idx + 1)}
                    className=" h-2.5 w-2.5 bg-[#ddd] disabled:bg-[#8f8f8f] rounded-full cursor-pointer"
                  ></button>
                );
              })}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
