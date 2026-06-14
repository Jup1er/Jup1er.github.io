import type { RenaissanceItem } from './types';

export const raphael: RenaissanceItem = {
    category: 'masters', 
    years: '1483 — 1520', 
    startYear: 1483,
    name: 'Raffaello Sanzio',
    role: 'Italian painter and architect of the High Renaissance', 
    thumbnail: '/renaissance/raphael.jpg',
    connections: [], 
    highlights: `
    <div class="text-[13px] md:text-[15.5px] leading-relaxed text-stone-700 font-light">
        <img src="/renaissance/raphael.jpg" alt="Raffaello Sanzio" class="float-right w-[45%] md:w-[35%] ml-4 md:ml-5 mb-3 rounded-md shadow-sm border border-stone-200 cursor-zoom-in zoomable-img transition-transform hover:scale-[1.02]" />
        <p>Raphael is considered one of the greatest artists of the era, along with Michelangelo and Leonardo da Vinci.</p>
        <div class="clear-both"></div>
    </div>
    ` 
};