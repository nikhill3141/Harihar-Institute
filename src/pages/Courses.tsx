import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ArrowRight, BookOpen, Clock, Star, Users } from "lucide-react"
import { IoLogoWhatsapp, IoMdCall } from "react-icons/io";

const Courses = () => {
  const courses = [
    
    {
      title: "5th",
      description: "Expert guidance for all the topics in 5th standard within the syllabus ",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
      duration: "1Years",
      students: "15+",
      rating: 4.8,
      price: "₹6,000/year",
      features: [
        "personlized coaching",
        "Good Hand Writing practice",
        "Expert faculty guidance",
        "Study material",
        "Performance analysis",
        "Logic building",
        "Motivational sessions and seminars"
      ]
    },
    {
      title: "6th",
      description: "Expert guidance for all the topics in 6th standard within the syllabus ",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
      duration: "1Years",
      students: "15+",
      rating: 4.8,
      price: "₹6,000/year",
      features: [
        "personlized coaching",   
        "Good Hand Writing practice",
        "Expert faculty guidance",
        "Study material",
        "Performance analysis",
        "Logic building",
        "Motivational sessions and seminars"
      ]
    },
    {
      title: "7th",
      description: "Targeted preparation for all 7th standard topics within the syllabus",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      duration: "1 Year",
      students: "20+",
      rating: 4.7,
      price: "₹9,000/year",
      features: [
        "personlized coaching",
        "test series",
        "Good Hand Writing practice",
        "Expert faculty guidance",
        "Study material",
        "Performance analysis",
        "Logic building",
        "Motivational sessions and seminars"
      ]
    },
    {
      title: "8th",
      description: "Targeted preparation for all 8th standard topics within the syllabus",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      duration: "1 Year",
      students: "18+",
      rating: 4.7,
      price: "₹12,000/year",
      features: [
        "personlized coaching",
        "test series",
        "Good Hand Writing practice",
        "Expert faculty guidance",
        "Study material",
        "Performance analysis",
        "Logic building",
        "Motivational sessions and seminars"
      ]
    },
    {
      title: "9th",
      description: "Targeted preparation for all 9th standard topics within the syllabus",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      duration: "1 Year",
      students: "16+",
      rating: 4.7,
      price: "₹13,000/year",
      features: [
        "personlized coaching",
        "test series",
        "Good Hand Writing practice",
        "Expert faculty guidance",
        "Study material",
        "Performance analysis",
        "Logic building",
        "Motivational sessions and seminars"
      ]
    },
    {
      title: "10th",
      description: "Targeted preparation for all 10th standard topics within  the state board syllabus",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      duration: "1 Year",
      students: "16+",
      rating: 4.7,
      price: "₹13,000/year",
      features: [
        "personlized coaching",
        "Board exam preparation",
        "test series",  
        "Expert faculty guidance",
        "Study material",
        "Performance analysis",
        "Logic building",
        "Motivational sessions and seminars"
      ]
    },
    {
      title: "NEET,JEE Mains,MHT-CET Foundation",
      description: "Comprehensive preparation for NEET,JEE Mains,MHT-CET Foundation and basic to advanced topics in simple and creative way",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      duration: "1 Years",
      students: "10+",
      rating: 4.9,
      price: "₹10,000/year",
      features: [
        "Comprehensive study material",
        "Regular mock tests",
        "Personalized guidance",
        "Doubt clearing sessions",
        "Performance tracking"
      ]
    },
    {
      title: "Public Speaking and creatical thinking",
      description: "Comprehensive preparation for Public Speaking and creatical thinking for the leadership skills",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      duration: "3 Months",
      students: "10+",
      rating: 4.9,
      price: "₹5,000/year",
      features: [
        "Comprehensive study material",
        "Regular mock tests",
        "Personalized guidance",
        "Doubt clearing sessions",
        "Performance tracking"
      ]
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
          <div className="grid gap-8 p-5 md:grid-cols-2 lg:grid-cols-3">
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
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button>Enroll Now</Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Contact Us for Enrollment</DialogTitle>
                        </DialogHeader>
                        <DialogDescription className="text-center text-gray-600">
                          Please drop the query on whatsapp or call us on the number given below
                        </DialogDescription>
                        <div className="flex items-center justify-center gap-2">
                          <a href="https://wa.me/919270165356" > <Button className="bg-green-500 text-white text-center hover:bg-green-600"><IoLogoWhatsapp className="size-5" /> whatsapp</Button></a>
                          <a href="tel:+919270165356" className=""><Button className="bg-blue-500 text-white text-center hover:bg-blue-600"><IoMdCall className="size-5" /> call us</Button></a>
                        </div>
                      </DialogContent>
                    </Dialog>

            
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