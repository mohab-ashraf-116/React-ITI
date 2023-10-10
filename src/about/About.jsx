import React from 'react'
import style from "./About.module.css"
import imgs from "../imgs/artist-image.png"

export default function About() {
  return (
    <>
<div className={`${style.bg} w-full`}>
    <section className={`${style.back}`}>
        <div className={`text-center text-white px-96 py-24 mb-14`}>
          <h1 className='text-4xl font-black text-yellow-500 mb-10'>About The Party</h1>
          <span className='block mb-5'>Halloween, the time of pumpkins, candies, ghosts, witches and much more, is annually celebrated on 31 October. That's the night before All Saints Day. Its origins date back thousands of years to the Celtic festival of Samhaim or The Feast of the Sun, a most significant holiday of the Celtic year.</span><br />
          <span className=''>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</span><br />
          <button className={`${style.btn} text-center bg-yellow-500 text-violet-950 mt-14 font-black text-2xl`}>Know More</button>
        
      <div className={`text-white px-20 py-24 grid grid-cols-1 gap-10`}>
         <div className='grid grid-cols-2 gap-5 bg-violet-950 bg-opacity-40 rounded-3xl'>
          <div>
              <img src={imgs} alt="" />
          </div>
          <div>
              <h1 className='text-2xl font-black text-white mb-4'>DJ AMR 7a7a </h1>
              <h2 className='text-lg font-bold text-white mb-5'>Mahrgan </h2>
              <span className='block mb-5'>Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore.</span><br />
              <div>
              <button className={`${style.threeBtn} text-center border-4 text-green-500 border-cyan-500 me-5`}><i className="fa-brands fa-facebook-f fa-lg"></i></button>
              <button className={`${style.threeBtn} text-center border-4 text-green-500 border-cyan-500 me-5`}><i class="fa-brands fa-twitter fa-lg"></i></button>
              <button className={`${style.threeBtn} text-center border-4 text-green-500 border-cyan-500`}><i class="fa-brands fa-linkedin fa-lg"></i></button>
              </div>
          </div>
        </div>
      </div>



      <div className='grid grid-cols-3 gap-15 bg-violet-950 bg-opacity-40 rounded-3xl'>
          <div>
              <img src={imgs} alt="" />
          </div>
          <div>
              <h1 className='text-2xl font-black text-white mb-4'>DJ 3bsallam</h1>
              <h2 className='text-lg font-bold text-white mb-5'>Mozmar </h2>
              <span className='block mb-5'>Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore.</span><br />
              <div>
              <button className={`${style.threeBtn} text-center border-4 text-green-500 border-cyan-500 me-5`}><i className="fa-brands fa-facebook-f fa-lg"></i></button>
              <button className={`${style.threeBtn} text-center border-4 text-green-500 border-cyan-500 me-5`}><i class="fa-brands fa-twitter fa-lg"></i></button>
              <button className={`${style.threeBtn} text-center border-4 text-green-500 border-cyan-500`}><i class="fa-brands fa-linkedin fa-lg"></i></button>
              </div>
          </div>
        </div>



        </div>
        
      <div className={`text-white px-20 py-24 grid grid-cols-2 gap-10`}>
        <div className='grid grid-cols-2 gap-5 bg-violet-950 bg-opacity-40 rounded-3xl'>
          <div>
              <img src={imgs} alt="" />
          </div>
          <div>
              <h1 className='text-2xl font-black text-white mb-4'>DJ AMR 7a7a </h1>
              <h2 className='text-lg font-bold text-white mb-5'>MM</h2>
              <span className='block mb-5'>Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore.</span><br />
              <div>
              <button className={`${style.threeBtn} text-center border-4 text-green-500 border-cyan-500 me-5`}><i className="fa-brands fa-facebook-f fa-lg"></i></button>
              <button className={`${style.threeBtn} text-center border-4 text-green-500 border-cyan-500 me-5`}><i class="fa-brands fa-twitter fa-lg"></i></button>
              <button className={`${style.threeBtn} text-center border-4 text-green-500 border-cyan-500`}><i class="fa-brands fa-linkedin fa-lg"></i></button>
              </div>
          </div>
        </div>

        <div className='grid grid-cols-2 gap-5 bg-violet-950 bg-opacity-40 rounded-3xl'>
          <div>
              <img src={imgs} alt="" />
          </div>
          <div>
              <h1 className='text-2xl font-black text-white mb-4'>DJ 3bsallam</h1>
              <h2 className='text-lg font-bold text-white mb-5'>MM</h2>
              <span className='block mb-5'>Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore.</span><br />
              <div>
              <button className={`${style.threeBtn} text-center border-4 text-green-500 border-cyan-500 me-5`}><i className="fa-brands fa-facebook-f fa-lg"></i></button>
              <button className={`${style.threeBtn} text-center border-4 text-green-500 border-cyan-500 me-5`}><i class="fa-brands fa-twitter fa-lg"></i></button>
              <button className={`${style.threeBtn} text-center border-4 text-green-500 border-cyan-500`}><i class="fa-brands fa-linkedin fa-lg"></i></button>
              </div>
          </div>
        </div>
      </div>
        
  
    </section>
</div>
</>
  )
}
