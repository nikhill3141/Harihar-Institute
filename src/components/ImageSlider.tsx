import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface ImageSliderProps {
  images: {
    url: string
    title: string
    description: string
  }[]
}

const ImageSlider = ({ images }: ImageSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [images.length])

  return (
    <div className="relative h-full w-full overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 h-full w-full transform transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={image.url}
            alt={image.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40">
            <div className="container mx-auto flex h-full items-center px-4">
              <div className="max-w-2xl text-white">
                <h1 className="mb-4 text-4xl font-bold md:text-5xl">
                  {image.title}
                </h1>
                <p className="mb-8 text-lg text-gray-200">
                  {image.description}
                </p>
                <button className="rounded-full bg-orange-600 px-8 py-3 text-white transition-colors hover:bg-orange-700">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 rounded-full transition-colors ${
              index === currentIndex ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default ImageSlider 