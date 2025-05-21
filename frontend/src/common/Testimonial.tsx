import React from 'react';

type TestimonialProps = {
  text: string;
  name: string;
  title: string;
  avatar: string;
  active?: boolean;
  dots?: number;
  current?: number;
};

const Testimonial = ({ text, name, title, avatar, dots = 4, current = 1 }: TestimonialProps) => (
  <div className="bg-[#fdf6f6] rounded-xl p-8 flex flex-col items-center text-center gap-4">
    <span className="text-xs text-gray-400 tracking-widest font-semibold">- TESTIMONIAL</span>
    <h2 className="text-2xl font-bold text-gray-900 mb-2">What client's say?</h2>
    <p className="text-gray-500 text-base max-w-2xl mx-auto mb-4">{text}</p>
    <div className="flex items-center gap-2 mb-2">
      <img src={avatar} alt={name} className="w-8 h-8 rounded-full object-cover border-2 border-white shadow" />
      <div className="flex flex-col items-start">
        <span className="text-sm font-bold text-gray-900">{name}</span>
        <span className="text-xs text-gray-400">{title}</span>
      </div>
    </div>
    {/* Dots */}
    <div className="flex gap-2 justify-center mt-2">
      {Array.from({ length: dots }).map((_, i) => (
        <span key={i} className={`w-2 h-2 rounded-full ${i === current ? 'bg-indigo-700' : 'bg-gray-300'} inline-block`} />
      ))}
    </div>
  </div>
);

export default Testimonial; 