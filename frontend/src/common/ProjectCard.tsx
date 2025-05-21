import React from 'react';

type ProjectCardProps = {
  image: string;
  category: string;
  title: string;
  link?: string;
};

const ProjectCard = ({ image, category, title, link }: ProjectCardProps) => (
  <a href={link || '#'} className="group block rounded-xl border border-gray-200 bg-white hover:border-indigo-700 transition overflow-hidden">
    <div className="aspect-[4/3] w-full overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
    </div>
    <div className="p-4">
      <span className="text-xs text-gray-400 font-semibold uppercase">{category}</span>
      <h3 className="text-base font-bold text-gray-900 group-hover:text-indigo-700 mt-1 line-clamp-2 transition-colors">{title}</h3>
    </div>
  </a>
);

export default ProjectCard; 