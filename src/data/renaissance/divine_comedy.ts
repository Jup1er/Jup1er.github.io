import type { RenaissanceItem } from './types';

export const divine_comedy: RenaissanceItem = {
    category: 'literature', 
    years: 'Publication Date: c. 1321', 
    startYear: 1321, 
    name: 'Divine Comedy (Divina Commedia)', 
    role: 'Epic Poem / Vernacular Literature', 
    thumbnail: '/renaissance/divine.jpg',
    connections: [
        { id: 'dante', label: 'Dante Alighieri' },
        { id: 'astrology_early_science', label: 'Astrology & Astronomy' }
    ], 
    highlights: `
    <div class="text-[13px] md:text-[15.5px] leading-relaxed text-stone-700 font-light">
        <img src="/renaissance/divine.jpg" alt="Divine Comedy" class="float-right w-[45%] md:w-[35%] ml-4 md:ml-5 mb-3 rounded-md shadow-sm border border-stone-200 cursor-zoom-in zoomable-img transition-transform hover:scale-[1.02]" />
        <p>Abandoned traditional Latin constraints to create a towering masterpiece in the vernacular. It maps a deeply personal journey through Hell, Purgatory, and Paradise, perfectly synthesizing medieval theology with classical philosophy and early astrological cosmology.</p>
        <div class="clear-both"></div>
    </div>
    ` 
};