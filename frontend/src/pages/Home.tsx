import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'

// Modern, responsive home hero with a glassy card
const Home: React.FC = () => {
    const navigate = useNavigate()
    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-teal-400 via-indigo-500 to-purple-600 flex items-center justify-center p-6">
            {/* decorative subtle blobs background */}
            <span
                aria-hidden
                className="pointer-events-none absolute -top-20 -left-20 w-72 h-72 rounded-full mix-blend-multiply bg-white/20 blur-3xl filter"
            />
            <span
                aria-hidden
                className="pointer-events-none absolute -bottom-20 -right-20 w-96 h-96 rounded-full mix-blend-multiply bg-white/20 blur-3xl filter"
            />

            <div className="relative w-full max-w-4xl">
                <div className="bg-white/90 dark:bg-white/80 rounded-3xl shadow-2xl p-8 md:p-12 backdrop-blur-sm border border-white/30">
                    <div className="flex flex-col md:flex-row items-center md:items-start md:gap-8">
                        <div className="flex-1 text-center md:text-left">
                            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">Brainly</h1>
                            <p className="mt-4 text-lg text-gray-700">
                                Learn together. Share knowledge. Discover insights with a modern, fresh experience.
                            </p>
                            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center">
                                <Button variant='primary' size='lg' text='Sign Up' onClick={() => navigate('/signup')} />
                                <span className="hidden md:block w-px h-10 bg-gray-200" aria-hidden="true"></span>
                                <Button variant='secondary' size='lg' text='Sign In' onClick={() => navigate('/signin')} />
                            </div>
                        </div>
                        <div className="flex-1 hidden md:flex items-center justify-center pt-4 md:pt-0">
                            {/* Inline lightweight illustration for modern feel */}
                            <svg width="320" height="260" viewBox="0 0 320 260" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Abstract illustration">
                                <defs>
                                    <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
                                        <stop stopColor="#7C3AED" offset="0"/>
                                        <stop stopColor="#06B6D4" offset="1"/>
                                    </linearGradient>
                                </defs>
                                <rect width="320" height="260" rx="26" fill="url(#grad)" opacity="0.15" />
                                <circle cx="60" cy="60" r="28" fill="#7C3AED" opacity="0.6"/>
                                <circle cx="120" cy="110" r="20" fill="#06B6D4" opacity="0.7"/>
                                <path d="M180 60 C210 20, 260 20, 300 60" stroke="#ffffff" strokeWidth="6" strokeLinecap="round" opacity="0.9"/>
                                <path d="M180 120 C210 80, 240 80, 300 120" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" opacity="0.9"/>
                              </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
