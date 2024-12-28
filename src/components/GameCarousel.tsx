import { useState, useEffect } from 'react';
import { useGetGames } from '../hooks/useGetGames';

export const GameCarousel = () => {
  const { data: games, error, isLoading } = useGetGames();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    if (games) {
      const extractedImages = games.map((game) => game.images[0]);
      setImages(extractedImages);
    }
  }, [games]);

  const slideWidth = 900; // Ancho de cada imagen

  const handleNext = () => {
    if (games) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (games) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  if (isLoading) return <div className='h-[500px] flex'>Cargando...</div>;
  if (error) return <div className='h-[500px]'>Error al cargar los datos</div>;

  return (
    <div className='overflow-hidden'>
      <div className="rounded-xl relative w-full max-w-[900px] mx-auto py-14">
        <div
          className="flex rounded-xl transition-transform duration-300"
          style={{
            transform: `translateX(-${currentIndex * slideWidth}px)`,
            width: `${images.length * slideWidth}px`,
          }}
        >
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-[900px] h-[500px] object-cover"
            />
          ))}
        </div>

        <button
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black text-white p-2 rounded"
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          Prev
        </button>
        <button
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black text-white p-2 rounded"
          onClick={handleNext}
          disabled={currentIndex === images.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};
