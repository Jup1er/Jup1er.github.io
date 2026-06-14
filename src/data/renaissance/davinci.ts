import type { RenaissanceItem } from './types';

export const davinci: RenaissanceItem = {
    category: 'masters', 
    years: '1452 — 1519', 
    startYear: 1452,
    name: 'Leonardo da Vinci', 
    role: 'The Ultimate Polymath', 
    thumbnail: '/renaissance/leonardo.jpg',
    connections: [{ id: 'monalisa_art', label: 'Mona Lisa' }], 
    highlights: `
    <div class="text-[13px] md:text-[15.5px] leading-relaxed text-stone-700 font-light">
        <img src="/renaissance/leonardo.jpg" alt="Leonardo da Vinci" class="float-right w-[45%] md:w-[35%] ml-4 md:ml-5 mb-3 rounded-md shadow-sm border border-stone-200 cursor-zoom-in zoomable-img transition-transform hover:scale-[1.02]" />
        <p>The ultimate Renaissance Man, Leonardo erased the false boundary between fine arts and empirical science. Through relentless observation, anatomical dissection, and engineering design, he demonstrated that art was a deeply intellectual and scientific pursuit.</p>
        <div class="clear-both"></div>
    </div>
    `
};