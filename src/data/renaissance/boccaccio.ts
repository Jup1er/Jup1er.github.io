import type { RenaissanceItem } from './types';

export const boccaccio: RenaissanceItem = {
    category: 'masters', 
    years: '1313 — 1375', 
    startYear: 1313,
    name: 'Giovanni Boccaccio', 
    role: 'Novelist / Humanist Scholar', 
    thumbnail: '/renaissance/boccaccio.jpg',
    connections: [{ id: 'decameron_book', label: 'The Decameron' }], 
    highlights: `
    <div class="text-[13px] md:text-[15.5px] leading-relaxed text-stone-700 font-light">
        <img src="/renaissance/boccaccio.jpg" alt="Boccaccio" class="float-right w-[45%] md:w-[35%] ml-4 md:ml-5 mb-3 rounded-md shadow-sm border border-stone-200 cursor-zoom-in zoomable-img transition-transform hover:scale-[1.02]" />
        <p>Broke from rigid allegorical medieval frameworks. Through his literary prose, he documented the human condition with unprecedented realism and psychological depth, capturing the resilience, wit, and flaws of ordinary people during the plague.</p>
        <div class="clear-both"></div>
    </div>
    ` 
};