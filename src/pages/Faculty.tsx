import { Button } from "@/components/ui/button"
import { ArrowRight, Star } from "lucide-react"

const Faculty = () => {
  const facultyMembers = [
    {
      name: "Dr. Rajesh Kumar",
      designation: "Physics Professor",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      experience: "15+ years",
      expertise: "JEE Advanced, NEET Physics",
      rating: 4.9,
    },
    {
      name: "Prof. Priya Sharma",
      designation: "Chemistry Expert",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80",
      experience: "12+ years",
      expertise: "Organic Chemistry, Physical Chemistry",
      rating: 4.8,
    },
    {
      name: "Dr. Amit Patel",
      designation: "Mathematics Professor",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      experience: "18+ years",
      expertise: "Calculus, Algebra",
      rating: 4.9,
    },
    {
      name: "Dr. Neha Gupta",
      designation: "Biology Professor",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      experience: "14+ years",
      expertise: "NEET Biology, Botany",
      rating: 4.7,
    },
    {
      name: "Prof. Sanjay Verma",
      designation: "Chemistry Professor",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      experience: "16+ years",
      expertise: "Inorganic Chemistry, NEET Chemistry",
      rating: 4.8,
    },
    {
      name: "Dr. Meera Singh",
      designation: "Physics Expert",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      experience: "13+ years",
      expertise: "JEE Physics, NEET Physics",
      rating: 4.9,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gray-900">
        <div className="absolute inset-0 ">
          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="College Campus"
            className="h-full w-full object-cover opacity-20"
          />
        </div>
        <div className="relative container mx-auto flex h-full items-center px-4">
          <div className="max-w-2xl text-white text-center">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Meet Our Expert Faculty
            </h1>
            <p className="mb-8 text-lg text-gray-400">
              Learn from the best minds in education with years of experience
            </p>
            <Button className="bg-red-500 text-white">
              View All Faculty <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {facultyMembers.map((member) => (
              <div
                key={member.name}
                className="overflow-hidden rounded-lg bg-white shadow-lg transition-transform hover:scale-105"
              >
                <div className="relative h-64">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <div className="flex items-center gap-1 text-white">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span>{member.rating}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-1 text-xl font-semibold">{member.name}</h3>
                  <p className="mb-2 text-orange-600">{member.designation}</p>
                  <div className="mb-4 space-y-1 text-sm text-gray-600">
                    <p>Experience: {member.experience}</p>
                    <p>Expertise: {member.expertise}</p>
                  </div>
                  <Button className="w-full bg-orange-600 text-white hover:bg-orange-700">
                    View Profile
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Faculty Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold">Join Our Faculty Team</h2>
            <p className="mb-8 text-gray-600">
              We are always looking for talented educators to join our team. If you
              have a passion for teaching and want to make a difference in students'
              lives, we'd love to hear from you.
            </p>
            <Button className="bg-orange-600 text-white hover:bg-orange-700">
              Apply Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Faculty 