import type { RenaissanceItem } from './types';

export const black_death: RenaissanceItem = {
    category: 'milestone', 
    years: '1347 — 1351', 
    startYear: 1347, 
    name: 'The Black Death', 
    role: 'Global Pandemic', 
    thumbnail: '/renaissance/black_death.jpg',
    connections: [], 
    highlights: `
    <div class="text-[13px] md:text-[15.5px] leading-relaxed text-stone-700 font-light">
        <img src="/renaissance/black_death.jpg" alt="The Black Death" class="float-right w-[45%] md:w-[35%] ml-4 md:ml-5 mb-3 rounded-md shadow-sm border border-stone-200 cursor-zoom-in zoomable-img transition-transform hover:scale-[1.02]" />
        <p>The pandemic fundamentally altered European demography and shook the absolute authority of the Church. The resulting labor shortage accelerated socioeconomic mobility, while the profound psychological trauma spurred both secular and humanist thought, shifting societal focus from the afterlife to the present human condition.</p>
        <div class="clear-both"></div>
    </div>
    ` 
};