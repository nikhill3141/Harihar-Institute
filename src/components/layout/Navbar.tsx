import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import { 
  Menu, 
  X, 
  Home, 
  BookOpen, 
  Info, 
  Users, 
  Trophy, 
  Image as ImageIcon, 
  Phone 
} from "lucide-react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/courses', label: 'Courses', icon: BookOpen },
    { path: '/about', label: 'About', icon: Info },
    { path: '/faculty', label: 'Faculty', icon: Users },
    { path: '/results', label: 'Results', icon: Trophy },
    { path: '/gallery', label: 'Gallery', icon: ImageIcon },
    { path: '/contact', label: 'Contact', icon: Phone },
  ]

  return (
    <nav className="fixed top-0 z-50 w-full bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-orange-600">Harihar Institute</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-2 text-sm font-medium transition-colors hover:text-orange-600 ${
                    location.pathname === item.path
                      ? "text-orange-600"
                      : "text-gray-600"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </Link>
              )
            })}
            <Button className="bg-orange-600 text-white hover:bg-orange-700">
              Enroll Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`fixed inset-y-0 right-0 w-64 transform bg-white shadow-lg transition-transform duration-300 ease-in-out md:hidden ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex h-16 items-center justify-between border-b px-4">
            {/* <span className="text-xl font-bold text-orange-600">Menu</span> */}
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-md p-2 text-gray-600 hover:bg-orange-50 hover:text-orange-600"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="flex flex-col space-y-4 px-4 py-6">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex w-full items-center gap-3 rounded-md px-4 py-3 text-base font-medium transition-colors ${
                    location.pathname === item.path
                      ? "bg-orange-50 text-orange-600"
                      : "text-gray-600 hover:bg-orange-50 hover:text-orange-600"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <Icon className="h-5 w-5" />
                  {item.label}
                </Link>
              )
            })}
            <Button className="w-full bg-orange-600 text-white hover:bg-orange-700">
              Enroll Now
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 