import React,{useState} from 'react'
import {MdDarkMode, MdLightMode} from 'react-icons/md';
import Rad from '../public/img/rad.png';
import desing from '../public/img/design.png';
import code from '../public/img/code.png';
import consulting from '../public/img/consulting.png';
import web1 from '../public/img/web1.png'
import web2 from '../public/img/web2.png'
import web3 from '../public/img/web3.png'
import web4 from '../public/img/web4.png'
import web5 from '../public/img/web5.png'
import web6 from '../public/img/web6.png'
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import './index.css'
function App() {
  const [darkMode, setDarkMode] = useState(false);


  return (
    <div className={darkMode ? "dark bg-black" : ""}>
    <div className=' px-10'>
     
            <section className='min-h-screen'>
        <nav className='py-10 mb-12 flex justify-between'>
          <h1 className='text-xl font-burtons dark:text-teal-500'>Radim</h1>
          <ul className='flex items-center'>
            <li className='cursor-pointer text-2xl'  onClick={()=>setDarkMode(!darkMode)}>
                {darkMode ? <MdLightMode className='text-white'/>:<MdDarkMode/>}
              
                
            </li>
            <li><a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 ' href="#">Resume</a></li>
          </ul>
        </nav>
         



         <div className="text-center p-10 ">
          <h2 className='text-5xl text-teal-600 font-medium '>Yassine Radim</h2>
          <h3 className='text-2xl py-2'>developer front end .</h3>
          <p className='text-md py-5 text-gray-800 dark:text-lg dark:text-white '>
          Freelancer providing services for programming. Join me down below and let's get cracking!
          </p>
         </div>
       
     

          <div className='text-5xl  flex justify-center gap-16 py-3 text-gray-600'>

            <AiFillLinkedin className='hover:text-blue-700' />
            <AiFillGithub className='hover:text-lime-700'/>
            <AiFillTwitterCircle className='hover:text-blue-400'/>
          </div>

          
          <div className='relative mx-auto overflow-hidden bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 '>

            <img src={Rad}   alt='image'/>
          </div>


      </section>



         <section>

         <div>
            <h3 className="text-3xl py-5 outline-b outline-lime-500 dark:text-white ">Services I offer</h3>
            <p className="text-md py-2 leading-8  text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <img className='mx-auto' src={desing}  width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>



            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <img className='mx-auto' src={code} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Code your dream project
              </h3>
              <p className="py-2">
                Do you have an idea for your next great website? Let's make it a
                reality.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>


            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <img  className='mx-auto' src={consulting} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">Consulting</h3>
              <p className="py-2">
                Are you interested in feedback for your current project? I can
                give you tips and tricks to level it up.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
            </div>


         </section>
         <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portofolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 hover:shadow-2xl ">
              <img
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web1}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <img
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web2}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <img
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web3}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <img
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web4}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <img
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web5}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <img
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web6}
              />
            </div>
          </div>
        </section>


    </div>
    </div>
  )
}

export default App
