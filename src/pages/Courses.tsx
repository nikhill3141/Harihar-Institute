import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, Clock, GraduationCap, Star, Users } from "lucide-react"

const Courses = () => {
  const courses = [
    {
      title: "JEE Main & Advanced",
      description: "Comprehensive preparation for JEE Main and Advanced with expert faculty and proven track record.",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      duration: "2 Years",
      students: "500+",
      rating: 4.9,
      price: "₹45,000/year",
      features: [
        "Comprehensive study material",
        "Regular mock tests",
        "Personalized guidance",
        "Doubt clearing sessions",
        "Performance tracking"
      ]
    },
    {
      title: "NEET",
      description: "Expert guidance for NEET preparation with focus on Biology, Chemistry, and Physics.",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
      duration: "2 Years",
      students: "400+",
      rating: 4.8,
      price: "₹40,000/year",
      features: [
        "Specialized Biology coaching",
        "Regular practice tests",
        "Expert faculty guidance",
        "Study material",
        "Performance analysis"
      ]
    },
    {
      title: "MHT-CET",
      description: "Targeted preparation for MHT-CET with state-specific syllabus coverage.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      duration: "1 Year",
      students: "300+",
      rating: 4.7,
      price: "₹35,000/year",
      features: [
        "State-specific syllabus",
        "Regular assessments",
        "Expert guidance",
        "Study resources",
        "Progress tracking"
      ]
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
              Our Courses
            </h1>
            <p className="mb-8 text-lg text-gray-400">
              Choose from our wide range of courses designed to help you achieve your academic goals
            </p>
            <Button className="bg-red-500 text-white">
              Explore Courses <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <div
                key={course.title}
                className="overflow-hidden rounded-lg bg-white shadow-lg transition-transform hover:scale-105"
              >
                <div className="relative h-48">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <div className="flex items-center gap-1 text-white">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span>{course.rating}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold">{course.title}</h3>
                  <p className="mb-4 text-gray-600">{course.description}</p>
                  
                  <div className="mb-4 flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>{course.students} students</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="mb-2 font-medium">Course Features:</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      {course.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <BookOpen className="h-4 w-4 text-orange-600" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-green-600">{course.price}</span>
                    <Button className="bg-orange-600 text-white hover:bg-orange-700">
                      Enroll Now
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold">Why Choose Our Courses?</h2>
            <p className="mb-8 text-gray-600">
              We provide comprehensive preparation with expert faculty, proven track record,
              and personalized attention to help you achieve your goals.
            </p>
            <Button className="bg-orange-600 text-white hover:bg-orange-700">
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Courses 