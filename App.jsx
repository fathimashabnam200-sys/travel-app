
import React, {useState} from 'react';
import logo from '../assets/logo.png';
import hero from '../assets/hero.jpg';
export default function App(){
  const [lang,setLang]=useState('en');
  const t=(en,fr)=>lang==='en'?en:fr;
  return (<div><header style={{background:'#fff',padding:12,display:'flex',justifyContent:'space-between'}}><div style={{display:'flex',alignItems:'center',gap:12}}><img src={logo} style={{width:64}} alt='logo'/><div><h1>Travel Mass (Pvt) Ltd</h1><div style={{color:'#6B7280'}}>Discover Sri Lanka</div></div></div><div><button onClick={()=>setLang(l=>l==='en'?'fr':'en')}>{lang==='en'?'FR':'EN'}</button></div></header><main><section><img src={hero} style={{width:'100%',height:320,objectFit:'cover'}} alt='hero'/><h2>{t('Explore Sri Lanka with curated tours','Découvrez le Sri Lanka')}</h2></section></main><footer style={{padding:12,textAlign:'center'}}>© 2025 Travel Mass (Pvt) Ltd</footer></div>);
}
