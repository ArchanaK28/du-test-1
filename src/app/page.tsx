import Header from './components/Header'
import PostpaidPlans from './components/PostpaidPlans'
import Benefits from './components/Benefits'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <PostpaidPlans />
      <Benefits />
      <Footer />
    </main>
  )
}