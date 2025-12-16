import React from 'react';
import { FileQuestion, EyeOff, BarChart2, AlertTriangle } from 'lucide-react';
import { ThreeDAsset } from './ui/ThreeDAsset';

const Problems: React.FC = () => {
  return (
    <section className="bg-black py-24 px-4 relative">
       {/* Background Grid Pattern */}
       <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-16 uppercase leading-tight text-white">
          Shu 4 muammo biznesingizni <br />
          <span className="text-red-500 line-through decoration-yellow-400 decoration-4">to‘xtatib</span> turishi mumkin
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {[
            { icon: FileQuestion, title: "Kontent Yo'q", desc: "Mijozlar siz haqingizda ma'lumot topa olmayapti." },
            { icon: EyeOff, title: "Brend Yo'q", desc: "Raqobatchilardan ajralib turadigan sifatli qadoq yo'q." },
            { icon: AlertTriangle, title: "Reklama Noto'g'ri", desc: "Byudjet havoga uchmoqda, target noto'g'ri." },
            { icon: BarChart2, title: "Sotuv Past", desc: "Lidlar bor, lekin ular xaridorga aylanmayapti." },
          ].map((item, index) => (
            <div key={index} className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl hover:bg-neutral-800 transition-colors flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-yellow-400/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-yellow-400/20 transition-colors">
                <item.icon className="text-yellow-400 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold uppercase text-white mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* 3D Warning Triangle */}
        <div className="flex justify-center">
            <div className="relative w-64 h-64 flex items-center justify-center">
                {/* Simulated 3D Triangle using CSS borders and shadows */}
                <div className="absolute w-0 h-0 border-l-[100px] border-l-transparent border-r-[100px] border-r-transparent border-b-[180px] border-b-yellow-400 blur-sm opacity-20"></div>
                <div className="relative z-10 animate-bounce-slow">
                     <AlertTriangle className="w-40 h-40 text-yellow-400 fill-yellow-400/20 drop-shadow-[0_0_30px_rgba(255,215,0,0.6)]" strokeWidth={1.5} />
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Problems;