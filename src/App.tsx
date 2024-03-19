import type { Component } from 'solid-js';
// utility import
import logo from './logo.svg';
import styles from './App.module.css';

//Assers import
import profile from './assets/prfl.jpg';
import instagram from './assets/instagram.svg';
import telegrm from './assets/telegrm.svg';
import twitter from './assets/twttr.svg';
import facebook from './assets/fb.svg';
import linkedin from './assets/lnkdn.svg';
import threads from './assets/threads.svg';
import phone from './assets/phone.svg';
import gmail from './assets/email.svg';
import tiktok from './assets/tktk.svg';
import share from './assets/share1.svg';
import contact from './assets/contact.svg';
import whatsapp from './assets/whatsapp.svg';

const App: Component = () => {
  return (
   <div className={styles.mainBoard}>
     <div className="cWrapper max-w-sm mx-auto overflow-hidden">
       <div className="px-6 py-4 flex flex-col items-center">
           <div className="p-2 z-10 absolute overflow-hidden">
             <img className="m-auto w-36 h-auto aspect-square ioutline ioutline-4 ioutline-offset-2 ioutline-white rounded-full" src={profile} alt="user profile picture"/>
           </div>
       </div>
     <div className="Card px-6 py-4 flex flex-col justify-center items-center mt-14 rounded-xl border-2 border-solid border-white border-opacity-30 shadow-white/70 shadow-2xl ibackdrop-blur-2xl bg-[#F1E3F4]">
         <div className="m-0 pt-20 px-4">
           <h1 className="pt-2 mb-4 w-full text-2xl text-gray-900 font-bold">Brian A. Mango</h1>
         </div>
         <p className="text-gray-700  text-center italic">Chief Executive Officer of Tapin Digital Technology Company.
         </p>
         <div className="w-full mt-10 mb-16 px-6 flex flex-wrap justify-center gap-2">
           <a className="mx-auto w-full px-12 py-2   iborder-solid iborder-2 iborder-white border-opacity-20 rounded-xl bg-[#E2D3EA] ibg-white/20" href="tel:0711664134" target="blank">
             <img className="inline-block mr-2 h-6 w-6" src={phone}/>
             <p className="inline-block text-md text-gray-900" >Phone Number</p>
           </a>
           <a className="mx-auto w-full px-12 py-2   iborder-solid iborder-2 iborder-white border-opacity-20 rounded-xl bg-[#E2D3EA] ibg-white/20" href="mailto:Brianmengo619@gmail.com" target="blank">
             <img className="inline-block mr-2 h-6 w-6" src={gmail}/>
             <p className="inline-block text-md text-gray-900">Office Email</p>
           </a>
           <a className="mx-auto w-full px-12 py-2   iborder-solid iborder-2 iborder-white border-opacity-20 rounded-xl bg-[#E2D3EA] ibg-white/20"  href="https://wa.me/255742357821?text=Hello Brian" target="blank">
             <img className="inline-block mr-2 h-6 w-6" src={whatsapp}/>
             <p className="inline-block text-lg text-gray-900">whatsapp</p>
           </a>
           <div className="mx-auto w-full px-12 py-2   iborder-solid iborder-2 iborder-white border-opacity-20 rounded-xl bg-[#E2D3EA] ibg-white/20">
             <img className="inline-block mr-2 h-6 w-6" src={instagram}/>
             <a className="inline-block text-lg text-gray-900" href="https://instagram.com/tapin_digital?igshid=MzNlNGNkZWQ4Mg==" target="blank">Instagram</a>
           </div>
           <div className="mx-auto w-full px-12 py-2   iborder-solid iborder-2 iborder-white border-opacity-20 rounded-xl bg-[#E2D3EA] ibg-white/20">
             <img className="inline-block mr-2 h-6 w-6" src={threads}/>
             <a className="inline-block text-md text-gray-900" href="https://www.threads.net/@tapin_digital" target="blank">Threads</a>
           </div>
           <div className="mx-auto w-full px-12 py-2   iborder-solid iborder-2 iborder-white border-opacity-20 rounded-xl bg-[#E2D3EA] ibg-white/20">
             <img className="inline-block mr-2 h-6 w-6" src={facebook}/>
             <a className="inline-block text-md text-gray-900" href="https://www.facebook.com/pixelsperfect1?mibextid=ZbWKwL" target="blank">Face Book</a>
           </div>
           <div className="mx-auto w-full px-12 py-2   iborder-solid iborder-2 iborder-white border-opacity-20 rounded-xl bg-[#E2D3EA] ibg-white/20">
             <img className="inline-block mr-2 h-6 w-6" src={tiktok}/>
             <a className="inline-block text-md text-gray-900" href="https://www.tiktok.com/@tapin_digital?_t=8ggp6X9zVCP&_r=1" target="blank">Tiktok</a>
           </div>
           <a className="mx-auto w-full px-12 py-2 border-opacity-20 rounded-xl bg-[#E2D3EA]" href="https://x.com/BrianMengo3?s=09" target="blank">
             <img className="inline-block mr-2 h-6 w-6" src={twitter}/>
             <p className="inline-block text-md text-gray-900">Twitter</p>
           </a>
           <div className="mx-auto mt-6 w-full border-opacity-20 ">
             <a className="inline-block mr-6 px-6 py-2 rounded-xl bg-[#E2D3EA]" href="https://" target="blank">
             <img className="inline-block mr-2 h-6 w-6" src={share}/>
             <p className="inline-block text-md text-gray-900">Share</p>
             </a>
             <a className="inline-block ml-6 px-6 py-2 rounded-xl bg-[#E2D3EA]" href="https://" target="blank">
             <img className="inline-block mr-2 h-6 w-6" src={contact}/>
             <p className="inline-block text-md text-gray-900">Save</p>
             </a>
           </div>
         </div>
       </div>
     </div>
   </div>
  
   );
};

export default App;
