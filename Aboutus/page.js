import React from 'react'
import './Aboutus.css'
import Image from 'next/image'

export default function page() {
  return (
    <div>
      <div className='about-1'>
        <div className='about-1-2'><img style={{ width: '100%' }} src='/aboutus1.jpg' /></div>
        <div className='about-1-4'>
          <h3 style={{ marginLeft: '20px' }}>Our Mission</h3>
          <div className='about-1-3'>
            <p>To us, the concept of “flawless beauty” is nothing new as we have been skin conscious, mindful and responsible formulators since day one. The healthcare of the skin has been the primary concern since our inception. We create safe and efficacious formulae and only utilize ingredients that meet our exceedingly high quality which in turn bring out amazing outcomes, owing to the meticulous ingredient analysis followed by a finished product evaluation. We create products for a healthier skin and happier life as it is aptly said, “A beautiful skin requires commitment, not a miracle.”</p></div></div>

      </div>

      <div className='about-1'>
        <div className='about-1-4'>
          <h3 style={{ marginLeft: '20px' }}>Why to choose us?</h3>
          <div className='about-1-3'>
            <p>From the vision of a biotechnology entrepreneur, we are building a regal performance skincare company- a niche of innovative products with marine ingredients providing functional benefits to the skin, setting high benchmarks in everything we do
              <br></br>
              <br></br>

              Here at Oceglow, we are developing ideal products featuring cutting-edge formulae with active ingredients and exquisite packaging that elevate expectations of how a product should look, feel and perform. We plan to make quick inroads into the hearts of our clients by enabling them to explore all arenas of skincare treatments with top quality results, packaging and formulae which are always in trend.</p></div></div>
        <div className='about-1-2'><img style={{ width: '100%' }} src='/aboutus2.jpeg' /></div>

      </div>
      <br></br>
      <div className='about-1'>
        <div className='about-1-2'><img style={{ width: '100%', maxHeight: '100%' }} src='/aboutus3.webp' /></div>
        <div className='about-1-4'>

          <h3 style={{ marginLeft: '20px', marginTop: '40px' }}>How Do We Make It Happen</h3>
          <div className='about-1-3'>

            <p>At times, you leave your skin vulnerable owing to the overuse of harsh chemical laden products, exfoliants, Botox abuse, layered foundations and powders ultimately leading to a dilapidated skin texture. There is nothing wrong with an occasional beauty splurge here and there when it’s requisite but it is a vicious cycle, which needs to be ceased.
              <br></br>
              <br></br>

              We amalgamate superior ingredients with advanced technology to deliver the state of the art quality products at an effective concentration with a promise of delivering long-lasting products. We conscientiously research and evaluate our ingredients, which target all skin concerns with breakthrough ingredients- a plethora of which we pioneered in Oceglow, Oswal synergies Pvt Ltd. We choose on the basis of biocompatibility, so our products are formulated with the highest quality plant, earth and seabased ingredients, which are formulated without parabens, formaldehydes, phthalates, gluten, sulphates, petroleum, artificial dyes and are skin friendly and cruelty free. Our formulations are balanced and optimized to work with the physiological processes of the skin to make those types of indulgences less necessary. With the help of Oceglow, you will finally be able to give your skin a clean, natural and a much-needed break.</p></div>
              <button style={{ width:'30%',padding:'10px',background:'#944E63',color:'white',marginLeft:'30px'}}>Contact Us</button>

              </div>
      </div>

    </div>
  )
}
