import { motion } from 'framer-motion'

function App() {
  return (
    <div className="min-h-screen bg-black text-green-400 font-mono p-6">
      <motion.h1 
        className="text-4xl font-bold mb-8 text-center text-cyan-400"
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
      >
        Welcome, Nomad. The Cloud Awaits...
      </motion.h1>
    </div>
  )
}

export default App
