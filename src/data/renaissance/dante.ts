import type { RenaissanceItem } from './types';

export const dante: RenaissanceItem = {
    category: 'masters', 
    years: '1265 — 1321', 
    startYear: 1290, 
    name: 'Dante Alighieri', 
    role: 'Poet / Philosopher / Theologian', 
    thumbnail: '/renaissance/dante.jpg', 
    connections: [
        { id: 'divine_comedy', label: 'Divine Comedy' },
        { id: 'astrology_early_science', label: 'Astrology & Astronomy' }
    ], 
    highlights: `
    <div class="text-[13px] md:text-[15.5px] leading-relaxed text-stone-700 font-light">
        <img src="/renaissance/dante.jpg" alt="Dante Alighieri" class="float-right w-[45%] md:w-[35%] ml-4 md:ml-5 mb-3 rounded-md shadow-sm border border-stone-200 cursor-zoom-in zoomable-img transition-transform hover:scale-[1.02]" />
        <p>A prophetic pioneer of the Renaissance. By writing his monumental epic in the Tuscan vernacular rather than traditional Latin, he elevated the status of local language. His work elegantly bridged the medieval theological worldview with the emerging humanist focus on individual journey and morality.</p>
        <div class="clear-both"></div>
    </div>
    ` 
};