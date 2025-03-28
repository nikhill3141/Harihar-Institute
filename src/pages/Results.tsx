import { Button } from "@/components/ui/button"
import { ArrowRight, Star, Trophy } from "lucide-react"

const Results = () => {
  const results = [
    {
      year: "2023",
      exam: "JEE Advanced",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      achievements: [
        "5 students in Top 1000",
        "15 students in Top 5000",
        "30+ students in Top 10000",
        "95% success rate"
      ]
    },
    {
      year: "2023",
      exam: "NEET",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
      achievements: [
        "3 students in Top 1000",
        "12 students in Top 5000",
        "25+ students in Top 10000",
        "92% success rate"
      ]
    },
    {
      year: "2023",
      exam: "MHT-CET",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      achievements: [
        "8 students in Top 100",
        "20 students in Top 500",
        "40+ students in Top 1000",
        "98% success rate"
      ]
    }
  ]

  const toppers = [
    {
      name: "Rahul Sharma",
      exam: "JEE Advanced",
      rank: "AIR 156",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      college: "IIT Bombay"
    },
    {
      name: "Priya Patel",
      exam: "NEET",
      rank: "AIR 89",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      college: "AIIMS Delhi"
    },
    {
      name: "Amit Kumar",
      exam: "MHT-CET",
      rank: "State Rank 12",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      college: "COEP Pune"
    }
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
              Our Results
            </h1>
            <p className="mb-8 text-lg text-gray-400">
              Celebrating the success of our students who have achieved remarkable results in various competitive exams
            </p>
            <Button className="bg-red-500 text-white">
              View Success Stories <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Results Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {results.map((result) => (
              <div
                key={`${result.year}-${result.exam}`}
                className="overflow-hidden rounded-lg bg-white shadow-lg transition-transform hover:scale-105"
              >
                <div className="relative h-48">
                  <img
                    src={result.image}
                    alt={result.exam}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <div className="flex items-center gap-2 text-white">
                      <Trophy className="h-5 w-5 text-yellow-400" />
                      <span className="font-semibold">{result.year}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-4 text-xl font-semibold">{result.exam}</h3>
                  <ul className="space-y-2">
                    {result.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-600">
                        <Star className="h-4 w-4 text-orange-600" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Performers */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">Our Top Performers</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {toppers.map((topper) => (
              <div
                key={topper.name}
                className="overflow-hidden rounded-lg bg-gray-50 shadow-lg transition-transform hover:scale-105"
              >
                <div className="relative h-64">
                  <img
                    src={topper.image}
                    alt={topper.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold">{topper.name}</h3>
                  <p className="mb-1 text-orange-600">{topper.exam}</p>
                  <p className="mb-2 text-gray-600">Rank: {topper.rank}</p>
                  <p className="text-gray-600">{topper.college}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold">Success Stories</h2>
            <p className="mb-8 text-gray-600">
              Join the league of successful students who have achieved their dreams through our guidance and support.
            </p>
            <Button className="bg-orange-600 text-white hover:bg-orange-700">
              Read Success Stories
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Results 