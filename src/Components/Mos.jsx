import { motion, useScroll, useTransform } from 'framer-motion'
import { div } from 'framer-motion/client'
import React, { useEffect, useRef } from 'react'
import Footer from './Footer'


function Mos() {
    const container=useRef()
    const texts=useRef([])
    const {scrollYProgress}=useScroll({
        target:container,
        offset:['start end','end end']
    })


    useEffect(()=>{
        scrollYProgress.on('change',e=>{
            texts.current.forEach((text,i)=>{
                text.setAttribute('startOffset',-40+(i*40)+(e * 40)+"%")
            })
        })
    },[])
  return (
    <div className="">
    <div ref={container}>
                  <svg className="w-full mb-40" viewBox="0 0 250 90">
                <path fill="none" id="curve" d="m0,88.5c61.37,0,61.5-68,126.5-68,58,0,51,68,123,68"/>
                <text className="text-[8px] font-thin " style={{fill: "#015de4", fontFamily:'ava' }}>

                    {
                        [...Array(3)].map((_,i)=>{
                            return <textPath key={i} ref={ref=>texts.current[i]=ref} href='#curve' startOffset={i*40+'%'}>
                           thick, creamy - feel laban
                        </textPath>
                        })
                    }
                </text>
            </svg>
            <div className="flex flex-col w-full justify-center items-center">
                <p data-aos="fade-up"  className='text-3xl sm:text-5xl text-center font-ed sm:mt-[-500px] mt-[-150px]' style={{color:'#015de4', fontFamily:'ava'}}>we bring  <br /> more than desserts!</p>
                <p className='text-sm text-center font-ita text-swblue pt-[50px]'></p>
                            <motion.img src="f-laban.png"
             className='h-[10vh] opacity-[0.5]  p-2' alt=""
             />
            </div>
            <Footer/>
    </div>
    </div>
  )
}

export default Mos


  