import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, GraduationCap, Users } from "lucide-react"
import { ImageSlider } from "@/components/ui/image-slider"
import { Link } from "react-router-dom"

const heroImages = [
  {
    url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    title: "Welcome to Harihar Institute",
    description: "Empowering minds, shaping futures. Join us on a journey of academic excellence."
  },
  {
    url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    title: "Expert Faculty",
    description: "Learn from experienced teachers who are passionate about education."
  },
  {
    url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    title: "Comprehensive Courses",
    description: "Well-structured curriculum designed for your success."
  }
]

const Home = () => {
  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <section className="relative h-[600px]">
        <ImageSlider images={heroImages} />
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">Why Choose Us?</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-orange-50 p-6 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
                <GraduationCap className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Expert Faculty</h3>
              <p className="text-gray-600">
                Learn from experienced teachers who are passionate about education.
              </p>
            </div>
            <div className="rounded-lg bg-orange-50 p-6 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
                <BookOpen className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Comprehensive Courses</h3>
              <p className="text-gray-600">
                Well-structured curriculum designed for your success.
              </p>
            </div>
            <div className="rounded-lg bg-orange-50 p-6 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
                <Users className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Personal Attention</h3>
              <p className="text-gray-600">
                Small batch sizes ensuring individual attention to every student.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Preview */}
      <section className="bg-orange-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">Our Courses</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="overflow-hidden rounded-lg bg-white shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="JEE Main"
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold">JEE Main,NEET,MHT-CET Fondation</h3>
                <p className="mb-4 text-gray-600">
                  Comprehensive preparation for competitive exams.Covers all basics and advanced topics.
                </p>
                <Link to="/courses"><Button className="w-full bg-orange-600 text-white hover:bg-orange-700">Explore More</Button></Link>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg bg-white shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Fondation batch"
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold">5 to 10 batches</h3>
                <p className="mb-4 text-gray-600">
                  Expert guidance for the students who are in 5th to 10th standard.Covers all basics and extra activities.like public speaking,sports,etc.
                </p>
                <Link to="/courses"><Button className="w-full bg-orange-600 text-white hover:bg-orange-700">Explore More</Button></Link>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg bg-white shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="5th to 10th batch"
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold">Public Speaking,Critical Thinking,and Logic Building</h3>
                <p className="mb-4 text-gray-600">
                  Specialized coaching for the public speaking,critical thinking,and logic building.
                </p>
                <Link to={'/courses'}> <Button className="w-full bg-orange-600 text-white hover:bg-orange-700">Explore More</Button></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">What Our Students Say</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-lg bg-orange-50 p-6">
              <div className="mb-4 flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Student"
                  className="mr-4 h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold">Priya Sharma</h4>
                  <p className="text-sm text-gray-600">JEE Main 2023</p>
                </div>
              </div>
              <p className="text-gray-600">
                "The faculty at Harihar Institute is exceptional. Their teaching methods and dedication helped me achieve my goals."
              </p>
            </div>
            <div className="rounded-lg bg-orange-50 p-6">
              <div className="mb-4 flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Student"
                  className="mr-4 h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold">Rahul Patel</h4>
                  <p className="text-sm text-gray-600">NEET 2023</p>
                </div>
              </div>
              <p className="text-gray-600">
                "The institute provides excellent study material and regular tests which helped me prepare better for NEET."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-orange-600 py-20">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="mb-4 text-3xl font-bold">Ready to Start Your Journey?</h2>
          <p className="mb-8 text-lg">
            Join Harihar Institute today and take the first step towards your success.
          </p>
          <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50">
            Enroll Now
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </div>
  )
}

export default Home 