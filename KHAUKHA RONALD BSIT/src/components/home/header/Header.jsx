import React from 'react'

import "./header.css"
import trainIllustration from "./she.jpg"

export default function Header() {
  return (
    <header className="row">
      <section className="col-md-6 text-bg-primary introduction">
        <h2 className="fs-2 text-start">The East African Book Haven</h2>
        <h1 className="slogan">Welcome to The East African Book Haven - Your Gateway to the East African Literary World!</h1>
        <p className="mb-2 opening">
        Unleash your imagination and embark on a captivating journey through the heart of East African literature. At The East African Book Haven, we celebrate the rich tapestry of stories, ideas, and cultures that define our region.
        </p>
        <p className="text-bg-danger fs-6 p-3 disclaimer"> 🌟 Immerse Yourself in a World of Captivating Stories 🌟

Discover a treasure trove of enthralling novels, thought-provoking non-fiction, and enchanting poetry, all carefully curated to provide you with an unparalleled reading experience. Our ever-growing collection features works from both established and emerging authors, ensuring that there's always something new and exciting to explore.</p>
        <p className="text-bg-danger fs-6 p-3 disclaimer">🌟 Connect with Like-Minded Readers and Authors 🌟

Join our thriving community of book lovers and engage in stimulating discussions with fellow readers and authors. Share your thoughts, recommendations, and reviews, and forge lasting connections with others who share your passion for East African literature.</p>
      </section>
      <div className="col-md-6 image-area">
        <img className="header-img" src={trainIllustration} alt="An illustration of a toy train." />
      </div>
    </header>    
  )
}
