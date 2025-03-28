import { Button } from "@/components/ui/button"
import { ArrowRight, Award, BookOpen, Users } from "lucide-react"

const About = () => {
  const stats = [
    { number: "15+", label: "Years of Excellence" },
    { number: "5000+", label: "Students Enrolled" },
    { number: "95%", label: "Success Rate" },
    { number: "50+", label: "Expert Faculty" },
  ]

  const features = [
    {
      icon: Award,
      title: "Proven Track Record",
      description: "Consistently producing top rankers in various competitive exams",
    },
    {
      icon: BookOpen,
      title: "Comprehensive Curriculum",
      description: "Well-structured study material covering all aspects of the syllabus",
    },
    {
      icon: Users,
      title: "Expert Faculty",
      description: "Experienced teachers with deep subject knowledge",
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
          <div className="max-w-2xl text-white font-serif text-center">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              About Harihar Institute
            </h1>
            <p className="mb-8 text-lg font-semibold text-gray-400">
              Empowering students with quality education and guidance 
            </p>
            <Button className="bg-red-500 text-white hover:bg-orange-50">
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="mb-2 text-3xl font-bold text-orange-600">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16 text-center">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <div
                  key={feature.title}
                  className="rounded-lg bg-gray-50 p-6 text-center"
                >
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
                    <Icon className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 text-center">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
                alt="Our Story"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="flex flex-col justify-center items-center">
              <h2 className="mb-4 text-3xl font-bold">Our Story</h2>
              <p className="mb-4 text-gray-600">
                Founded in 2008, Harihar Institute has been at the forefront of
                providing quality education to aspiring students. Our journey began
                with a vision to create an institution that would nurture talent and
                help students achieve their dreams.
              </p>
              <p className="mb-6 text-gray-600">
                Over the years, we have grown from a small coaching center to a
                renowned educational institution, thanks to our commitment to
                excellence and the trust of our students and their parents.
              </p>
              <Button className="w-fit bg-orange-600 text-white hover:bg-orange-700">
                Learn More About Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-white py-16 text-center">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="flex flex-col justify-center items-center">
              <h2 className="mb-4 text-3xl font-bold">Our Mission</h2>
              <p className="mb-4 text-gray-600">
                At Harihar Institute, our mission is to provide comprehensive
                education that goes beyond textbooks. We believe in creating an
                environment where students can learn, grow, and develop into
                confident individuals ready to face the challenges of tomorrow.
              </p>
              <p className="mb-6 text-gray-600">
                We strive to maintain high academic standards while ensuring that
                our students receive personalized attention and guidance throughout
                their learning journey.
              </p>
              <Button className="w-fit bg-orange-600 text-white hover:bg-orange-700">
                Join Our Mission
              </Button>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Our Mission"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About 