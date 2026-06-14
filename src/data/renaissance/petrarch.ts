import type { RenaissanceItem } from './types';

export const petrarch: RenaissanceItem = {
    category: 'masters', 
    years: '1304 — 1374', 
    startYear: 1304,
    name: 'Francesco Petrarca', 
    role: 'The Father of Humanism', 
    thumbnail: '/renaissance/petrarch.jpg',
    connections: [], 
    highlights: `
    <div class="text-[13px] md:text-[15.5px] leading-relaxed text-stone-700 font-light">
        <img src="/renaissance/petrarch.jpg" alt="Petrarch" class="float-right w-[45%] md:w-[35%] ml-4 md:ml-5 mb-3 rounded-md shadow-sm border border-stone-200 cursor-zoom-in zoomable-img transition-transform hover:scale-[1.02]" />
        <p>Championed the essential recovery of classical antiquity. As the "Father of Humanism," he scoured European monasteries for lost Latin manuscripts and fiercely advocated that the study of human thought and classical letters was not opposed to faith, but essential to human flourishing.</p>
        <div class="clear-both"></div>
    </div>
    `
};