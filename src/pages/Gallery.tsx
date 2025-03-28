import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Search } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const Gallery = () => {
  const categories = [
    "All Events",
    "Academic Events",
    "Cultural Events",
    "Sports Events",
    "Achievement Ceremonies",
  ]

  const galleryItems = [
    {
      id: 1,
      title: "Annual Day Celebration",
      category: "Cultural Events",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      date: "March 15, 2024",
    },
    {
      id: 2,
      title: "Science Exhibition",
      category: "Academic Events",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
      date: "February 28, 2024",
    },
    {
      id: 3,
      title: "Sports Day",
      category: "Sports Events",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      date: "January 20, 2024",
    },
    {
      id: 4,
      title: "Award Ceremony",
      category: "Achievement Ceremonies",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      date: "December 10, 2023",
    },
    {
      id: 5,
      title: "Science Fair",
      category: "Academic Events",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
      date: "November 25, 2023",
    },
    {
      id: 6,
      title: "Cultural Festival",
      category: "Cultural Events",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      date: "October 15, 2023",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gray-900">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="College Campus"
            className="h-full w-full object-cover opacity-20"
          />
        </div>
        <div className="relative container mx-auto flex h-full items-center px-4">
          <div className="max-w-2xl text-white text-center">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Our Gallery
            </h1>
            <p className="mb-8 text-lg text-gray-400">
              Explore moments captured during various events and activities at Harihar Institute
            </p>
            <Button className="bg-red-500 text-white">
              View Gallery <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search gallery..."
                className="w-full rounded-md border border-gray-300 px-4 py-2 pl-10 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
              />
            </div>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="group overflow-hidden rounded-lg bg-white shadow-lg transition-transform hover:scale-105"
              >
                <div className="relative h-64">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm">{item.date}</span>
                      </div>
                      <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
                      <p className="text-sm text-orange-200">{item.category}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Load More Button */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <Button className="bg-orange-600 text-white hover:bg-orange-700">
              Load More Photos
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Gallery 