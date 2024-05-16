import React from "react";
import vector from "../../img/homeVector.png";
import learnbg from "../../img/Vector.svg";
import learndot from "../../img/head.svg";
import shape from "../../img/banner_shape01.svg.svg";
import { ArrowRightIcon } from '@heroicons/react/24/solid'

function HomePage() {


    return(
    <div className="bg-gradient-to-r from-secondary via-slate-50 to-secondary">
        <span className="absolute z-0"><img src={shape} alt="shape"></img></span>
        <div className="relative container grid grid-cols-2 place-content-around gap-6 z-10">
            <div className="justify-items-start content-center inline-block align-middle" style={{height:""}}>
                <h1 className="text-4xl text-head mb-3">Never Stop <span className="text-white" style={{backgroundImage:`url(${learnbg})`, backgroundRepeat:'no-repeat', padding:'0px 9px 7px 9px', transform: `translate(50px,50px)`}}><strong>Learning</strong></span><span><img style={{height:'61px', display:'inline-block', transform:`translate(-15px,-49px)`}} src={learndot} alt=""></img></span><br />Life <strong>Never Stop</strong> Teaching</h1>
                <p className="text-p">Every teaching and learning journey is unique</p>
                <p className="text-p">We'll help you guide your way</p>
                <div className="inline-block my-4">
                    <button className="relative inline-block rounded-full bg-[#5751E1] text-white font-medium px-6 py-3 text-base z-10" style={{width:'202px', height:'50px' }}>Cari Beasiswa <ArrowRightIcon className="size-5 inline-block"/></button>
                    <span className="fixed block rounded-full bg-[#050071] z-0" style={{transform:`translate(5px,-45px)`, width:'202px', height:'50px'}}></span>
                </div>
            </div>
            <div>
                <img src={vector} alt="Gambar" style={{height:''}}></img>
            </div>
        </div>
    </div>
)};

export default HomePage;