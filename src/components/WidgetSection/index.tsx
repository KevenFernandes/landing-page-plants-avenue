"use client";
import Link from "next/link";
import { Container } from "../Container";
import { TitleSection } from "../TitleSection";
import Image from "next/image";
import { MOCK_POST_INSTAGRAM } from "@/src/mocks/postsInstagram";
import { useEffect, useState } from "react";

export function WidgetSection() {
  const [visiblePost, setVisiblePost] = useState<number>(4);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width >= 1024) {
        setVisiblePost(5);
      } else {
        setVisiblePost(4);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const posts = MOCK_POST_INSTAGRAM.slice(0, visiblePost);

  return (
    <section className="bg-[#ddd] pb-8">
      <Container>
        <div>
          <header className="text-center py-6">
            <TitleSection text="Siga-nos no Instagram" />
          </header>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-3">
            {posts.map((post) => {
              return (
                <article key={post.id} className="w-full">
                  <Link
                    href={"#"}
                    className="w-full h-45 flex rounded-xl overflow-hidden"
                  >
                    <Image
                      src={post.urlImage}
                      width={500}
                      height={500}
                      alt="imagem do instagram"
                      className="object-cover"
                    />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
