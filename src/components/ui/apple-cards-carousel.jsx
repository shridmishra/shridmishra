"use client";
import React, { useEffect, useRef, useState, createContext, useContext } from "react";
import { IconArrowNarrowLeft, IconArrowNarrowRight, IconX } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useOutsideClick } from "@/hooks/use-outside-click";

// Context and BlurImage components remain unchanged
export const CarouselContext = createContext({
  onCardClose: () => {},
  currentIndex: 0,
});

export const BlurImage = ({
  height,
  width,
  src,
  className,
  alt,
  ...rest
}) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <Image
      className={cn("transition duration-300", isLoading ? "blur-sm" : "blur-0", className)}
      onLoad={() => setLoading(false)}
      src={src}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      blurDataURL={typeof src === "string" ? src : undefined}
      alt={alt ? alt : "Background of a beautiful view"}
      {...rest}
    />
  );
};

export const Card = ({
  card,
  index,
  layout = false
}) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);
  const { onCardClose, currentIndex } = useContext(CarouselContext);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobileView(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        handleClose();
      }
    }

    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useOutsideClick(containerRef, () => handleClose());

  const handleClose = () => {
    setOpen(false);
    onCardClose(index);
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 h-screen z-50 overflow-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-black/80 backdrop-blur-lg h-full w-full fixed inset-0"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              ref={containerRef}
              layoutId={layout ? `card-${card.title}` : undefined}
              className="w-[90%] max-w-xl mx-auto bg-white dark:bg-neutral-900 h-fit z-[60] my-4 md:my-10 p-4 md:p-10 rounded-2xl md:rounded-3xl font-poppins relative"
            >
              <button
                className="sticky top-2 md:top-4 h-8 w-8 right-4 md:right-5 ml-auto bg-black dark:bg-white rounded-full flex items-center justify-center"
                onClick={handleClose}
              >
                <IconX className="h-5 w-5 md:h-6 md:w-6 text-neutral-100 dark:text-neutral-900" />
              </button>
              <motion.p
                layoutId={layout ? `title-${card.title}` : undefined}
                className="text-xl md:text-5xl font-semibold text-neutral-700 mt-3 md:mt-4 dark:text-white"
              >
                {card.title}
              </motion.p>
              <motion.p
                layoutId={layout ? `category-${card.category}` : undefined}
                className="text-sm md:text-base font-medium text-black dark:text-white mt-2"
              >
                {card.category}
              </motion.p>
              <div className="py-6 md:py-10">{card.content}</div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <a
        href={card.link || "#"}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-2xl md:rounded-3xl bg-gray-100 dark:bg-neutral-900 h-64 md:h-[380px] lg:h-[380px] w-full overflow-hidden flex flex-col items-start justify-start relative z-10 transition-transform duration-300 transform hover:scale-105"
      >
        <div className="absolute h-full top-0 inset-x-0 bg-gradient-to-b from-black/50 via-transparent to-transparent z-30 pointer-events-none" />
        <div className="relative z-40 p-4 md:p-6 lg:p-8">
          <motion.p
            layoutId={layout ? `title-${card.title}` : undefined}
            className="text-white text-xl md:text-2xl lg:text-3xl font-semibold max-w-xs text-left [text-wrap:balance] font-poppins mt-1 md:mt-2 shadow-lg"
            style={{ textShadow: "2px 2px 10px rgba(0, 0, 0, 0.7)" }}
          >
            {card.title}
          </motion.p>
          <motion.p
            layoutId={layout ? `category-${card.category}` : undefined}
            className="text-white text-sm md:text-base lg:text-lg font-medium font-poppins text-left mt-2 md:mt-3"
          >
            {card.category}
          </motion.p>
        </div>
        <BlurImage
          src={card.src}
          alt={card.title}
          fill
          className="object-cover absolute z-10 inset-0"
        />
      </a>
    </>
  );
};

export const Carousel = ({
  items,
  initialScroll = 0
}) => {
  const carouselRef = React.useRef(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobileView(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      if (isMobileView) {
        const newIndex = Math.max(0, currentIndex - 1);
        setCurrentIndex(newIndex);
        const cardWidth = carouselRef.current.offsetWidth;
        const scrollPosition = cardWidth * newIndex;
        carouselRef.current.scrollTo({
          left: scrollPosition,
          behavior: "smooth"
        });
      } else {
        carouselRef.current.scrollBy({ left: -carouselRef.current.offsetWidth, behavior: "smooth" });
      }
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      if (isMobileView) {
        const newIndex = Math.min(items.length - 1, currentIndex + 1);
        setCurrentIndex(newIndex);
        const cardWidth = carouselRef.current.offsetWidth;
        const scrollPosition = cardWidth * newIndex;
        carouselRef.current.scrollTo({
          left: scrollPosition,
          behavior: "smooth"
        });
      } else {
        carouselRef.current.scrollBy({ left: carouselRef.current.offsetWidth, behavior: "smooth" });
      }
    }
  };

  const handleCardClose = (index) => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.offsetWidth;
      const scrollPosition = cardWidth * (isMobileView ? index : Math.floor(index / 2) * 2);
      
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  return (
    <CarouselContext.Provider value={{ onCardClose: handleCardClose, currentIndex }}>
      <div className="relative w-full max-w-[1440px] mx-auto">
        <div
          className="flex w-full overflow-x-scroll overscroll-x-auto py-6 md:py-10 scroll-smooth [scrollbar-width:none] md:px-4 lg:px-8"
          ref={carouselRef}
          onScroll={checkScrollability}
          style={{
            scrollSnapType: isMobileView ? 'x mandatory' : 'none'
          }}
        >
          <div
            className={cn(
              "flex flex-row justify-start",
              isMobileView ? "px-4" : "gap-6 md:gap-8 lg:gap-10  lg:mx-0",
              "w-full"
            )}
          >
            {items.map((item, index) => (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: 0.2 * index,
                    ease: "easeOut",
                    once: true,
                  },
                }}
                key={"card" + index}
                className={cn(
                  "transition-transform duration-300 transform hover:scale-105",
                  isMobileView 
                    ? "w-full min-w-full  pl-4" 
                    : "w-[calc(50%-1.5rem)] md:w-[calc(50%-2rem)] lg:w-[calc(50%-2.5rem)] min-w-[calc(50%-1.5rem)] md:min-w-[calc(50%-2rem)] lg:min-w-[calc(50%-2.5rem)]",
                  "rounded-2xl md:rounded-3xl"
                )}
                style={{
                  scrollSnapAlign: isMobileView ? 'start' : 'none'
                }}
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="grid grid-cols-2 gap-3 md:gap-4 mt-4 px-4 md:px-8">
          <button
            className={cn(
              "h-12 md:h-16 bg-gray-700 rounded-lg md:rounded-xl flex items-center justify-center gap-2 md:gap-4",
              "hover:bg-gray-800 transition-colors duration-300",
              "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-gray-800"
            )}
            onClick={scrollLeft}
            disabled={!canScrollLeft}
          >
            <IconArrowNarrowLeft className="h-6 w-6 md:h-8 md:w-8 text-white" />
          </button>
          <button
            className={cn(
              "h-12 md:h-16 bg-gray-700 rounded-lg md:rounded-xl flex items-center justify-center gap-2 md:gap-4",
              "hover:bg-gray-800 transition-colors duration-300",
              "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-gray-600"
            )}
            onClick={scrollRight}
            disabled={!canScrollRight}
          >
            <IconArrowNarrowRight className="h-6 w-6 md:h-8 md:w-8 text-white" />
          </button>
        </div>
      </div>
    </CarouselContext.Provider>
  );
};