import type { RenaissanceItem } from './types';

export const astrology_early_science: RenaissanceItem = {
    category: 'science', 
    years: '14th — Mid-17th Century',
    startYear: 1300,
    name: 'Astrology & Astronomy', 
    role: 'Mathematical Cosmology', 
    thumbnail: '/renaissance/astrology.jpg',
    connections: [
        { id: 'dante', label: 'Dante Alighieri' },
        { id: 'divine_comedy', label: 'Divine Comedy' }
    ], 
    highlights: `
    <div class="space-y-7 md:space-y-9">
        <!-- 1. Introduction -->
        <div class="text-[13px] md:text-[15px] leading-relaxed text-stone-700 font-light">
            <img src="/renaissance/astrology.jpg" alt="Astrology Map" class="float-right w-[48%] md:w-[38%] ml-4 md:ml-6 mb-2 rounded-md shadow-md border border-stone-200 cursor-zoom-in zoomable-img transition-transform hover:scale-[1.02]" />
            
            <p class="mb-3">During the Middle Ages, astrology functioned primarily as a pragmatic tool for medicine and agriculture. However, triggered by the rediscovery of Neoplatonic and Hermetic texts in the 15th century, it experienced an explosive intellectual resurgence.</p>
            <p>By integrating the ancient Greek concept of 'macrocosm and microcosm,' Renaissance thinkers transformed astrology from a system of rigid fatalism into a dynamic, humanist philosophy. The stars provided a cosmic framework for individuals to explore their psychological depths and exert human agency within the natural world instead of dictating human destiny.</p>
            <div class="clear-both"></div> 
        </div>

        <!-- 2. Chronology -->
        <div>
            <h4 class="text-[10px] md:text-[11.5px] font-mono uppercase tracking-widest text-stone-400 mb-4 font-bold border-b border-stone-200 pb-1.5">Chronology</h4>
            <div class="border-l-2 border-dotted border-stone-400/50 ml-2 py-1 relative">
                
                <div class="relative pl-5 md:pl-6 mb-5.5">
                    <div class="absolute w-2 h-2 rounded-full border border-stone-500 bg-[#F4F1EA] -left-[5px] top-1.5"></div>
                    <div class="text-[10px] md:text-[11.5px] font-mono text-stone-500 mb-0.5">Early 14th Century</div>
                    <div class="text-[13px] md:text-[15px] font-bold text-stone-800 mb-1">Academic Foundation & The Cosmic Order</div>
                    <div class="text-[12.5px] md:text-[14px] text-stone-600 leading-relaxed font-light">Astrology was taught as a rigorous academic discipline alongside medicine and mathematics in Italian universities like Padua. Thinkers like Dante wove it into literature, establishing an early cosmic worldview of divine-stellar-human interconnectedness.</div>
                </div>

                <div class="relative pl-5 md:pl-6 mb-5.5">
                    <div class="absolute w-2 h-2 rounded-full border border-stone-500 bg-[#F4F1EA] -left-[5px] top-1.5"></div>
                    <div class="text-[10px] md:text-[11.5px] font-mono text-stone-500 mb-0.5">1460</div>
                    <div class="text-[13px] md:text-[15px] font-bold text-stone-800 mb-1">Arrival of Key Manuscripts</div>
                    <div class="text-[12.5px] md:text-[14px] text-stone-600 leading-relaxed font-light">Supported by the Medici family, Marsilio Ficino acquired and began translating the <em>Corpus Hermeticum</em>, ancient Greek mystical manuscripts rescued from Byzantium.</div>
                </div>

                <div class="relative pl-5 md:pl-6 mb-5.5">
                    <div class="absolute w-2 h-2 rounded-full border border-stone-500 bg-[#F4F1EA] -left-[5px] top-1.5"></div>
                    <div class="text-[10px] md:text-[11.5px] font-mono text-stone-500 mb-0.5">1489</div>
                    <div class="text-[13px] md:text-[15px] font-bold text-stone-800 mb-1">The Doctrine of Celestial Magic</div>
                    <div class="text-[12.5px] md:text-[14px] text-stone-600 leading-relaxed font-light">Ficino published <em>De vita libri tres</em> (Three Books on Life), elevating astrology from mere fortune-telling to a spiritual practice and celestial magic, igniting a craze among the intellectual elite.</div>
                </div>

                <div class="relative pl-5 md:pl-6 mb-5.5">
                    <div class="absolute w-2 h-2 rounded-full border border-stone-500 bg-[#F4F1EA] -left-[5px] top-1.5"></div>
                    <div class="text-[10px] md:text-[11.5px] font-mono text-stone-500 mb-0.5">16th Century</div>
                    <div class="text-[13px] md:text-[15px] font-bold text-stone-800 mb-1">Papal and Royal Fervor</div>
                    <div class="text-[12.5px] md:text-[14px] text-stone-600 leading-relaxed font-light">Astrology reached its zenith. Pope Paul III consulted astrologers before meeting ambassadors, and Queen Catherine de' Medici invited the famous astrologer Nostradamus to the French court.</div>
                </div>

                <div class="relative pl-5 md:pl-6">
                    <div class="absolute w-2 h-2 rounded-full border border-stone-500 bg-[#F4F1EA] -left-[5px] top-1.5"></div>
                    <div class="text-[10px] md:text-[11.5px] font-mono text-stone-500 mb-0.5">Mid-17th Century</div>
                    <div class="text-[13px] md:text-[15px] font-bold text-stone-800 mb-1">The Epistemic Split</div>
                    <div class="text-[12.5px] md:text-[14px] text-stone-600 leading-relaxed font-light">With the rise of the Scientific Revolution, Newtonian mechanics, and rationalism, the precise mathematical calculation of celestial bodies (Astronomy) permanently divorced from the interpretation of their human meaning (Astrology).</div>
                </div>

            </div>
        </div>

        <!-- 3. Cross-Disciplinary Impact -->
        <div>
            <h4 class="text-[10px] md:text-[11.5px] font-mono uppercase tracking-widest text-stone-400 mb-4 font-bold border-b border-stone-200 pb-1.5">Cross-Disciplinary Impact</h4>
            <div class="space-y-3.5">
                
                <!-- ❖ Precursor to Psychology -->
                <div class="bg-[#FAF8F5] border border-stone-200/80 p-3.5 md:p-4.5 rounded shadow-sm">
                    <div class="text-[13px] md:text-[15px] font-bold text-stone-800 mb-2 flex items-center gap-2">
                        <span class="text-stone-400">❖</span> Precursor to Psychology & Human Agency
                    </div>
                    <div class="text-[12.5px] md:text-[14px] text-stone-600 leading-relaxed font-light">
                        Intellectuals, artists, and politicians turned to their <strong>natal charts as tools for self-discovery</strong>. Scholars believed that brilliant creators were often governed by <strong>Saturn</strong>, which, while inducing "melancholy," also bestowed <strong>extraordinary genius</strong>. This marked a profound <strong>humanist shift</strong>: individuals began to <strong>actively decode their own personalities, earthly potentials, and existential meaning</strong>, rather than viewing themselves merely as passive subjects awaiting the afterlife.
                    </div>
                </div>

                <!-- ❖ Astrological Medicine -->
                <div class="bg-[#FAF8F5] border border-stone-200/80 p-3.5 md:p-4.5 rounded shadow-sm">
                    <div class="text-[13px] md:text-[15px] font-bold text-stone-800 mb-2 flex items-center gap-2">
                        <span class="text-stone-400">❖</span> Astrological Medicine
                    </div>
                    <div class="text-[12.5px] md:text-[14px] text-stone-600 leading-relaxed font-light space-y-2">
                        <p>The human body was understood as a <strong>"microcosm"</strong> intimately bound to the celestial <strong>"macrocosm,"</strong> with distinct zodiac signs governing specific anatomical organs. Medical practice was deeply intertwined with cosmology:</p>
                        <ul class="list-none pl-2 md:pl-3 space-y-1 text-stone-500">
                            <li>• <strong class="text-stone-700">Diagnostic Obligation:</strong> Physicians were required to rigorously consult the <strong>moon's position</strong> and a patient's <strong>natal chart</strong> before making diagnoses.</li>
                            <li>• <strong class="text-stone-700">Clinical Execution:</strong> These calculations were mandatory before prescribing treatments, or performing invasive procedures like <strong>surgeries and bloodletting</strong>.</li>
                        </ul>
                    </div>
                </div>

                <!-- ❖ Visual Arts as Talismans -->
                <div class="bg-[#FAF8F5] border border-stone-200/80 p-3.5 md:p-4.5 rounded shadow-sm">
                    <div class="text-[13px] md:text-[15px] font-bold text-stone-800 mb-2 flex items-center gap-2">
                        <span class="text-stone-400">❖</span> Visual Arts as Talismans
                    </div>
                    <div class="text-[12.5px] md:text-[14px] text-stone-600 leading-relaxed font-light space-y-2">
                        <p>Astrological symbolism permeated Renaissance visual culture well beyond mere decoration.</p>
                        <ul class="list-none pl-2 md:pl-3 space-y-1 text-stone-500">
                            <li>• <strong class="text-stone-700">Spatial Encoding:</strong> From the massive frescoes of the <strong>Palazzo Schifanoia in Ferrara</strong> to the mythological masterpieces of <strong>Botticelli and Parmigianino</strong>, artworks were often designed with hidden cosmic codes.</li>
                            <li>• <strong class="text-stone-700">Celestial Absorption:</strong> Nobles and patrons believed that by visually engaging with these representations of benevolent planets (such as <strong>Venus or Jupiter</strong>), they could actively absorb positive celestial energies.</li>
                        </ul>
                    </div>
                </div>

                <!-- ❖ The Bridge to Modern Science -->
                <div class="bg-[#FAF8F5] border border-stone-200/80 p-3.5 md:p-4.5 rounded shadow-sm">
                    <div class="text-[13px] md:text-[15px] font-bold text-stone-800 mb-2.5 flex items-center gap-2">
                        <span class="text-stone-400">❖</span> The Bridge to Modern Science
                    </div>
                    <div class="text-[12.5px] md:text-[14px] text-stone-600 leading-relaxed font-light space-y-2.5">
                        <p>Astrology (<em>astrologia</em>) and astronomy (<em>astronomia</em>) were initially synonymous, demanding rigorous mathematical and geometric expertise. The drive to cast perfectly accurate horoscopes inadvertently fueled the Scientific Revolution.</p>
                        <ul class="list-none pl-2 md:pl-3 space-y-1 text-stone-500">
                            <li>• <strong class="text-stone-700">Nicolaus Copernicus:</strong> His <strong>heliocentric model</strong> was partly motivated by the need for more precise astrological calendars.</li>
                            <li>• <strong class="text-stone-700">Tycho Brahe & Johannes Kepler:</strong> While pioneers like Tycho Brahe and Johannes Kepler served as highly paid <strong>court astrologers</strong>.</li>
                        </ul>
                        <p class="pt-1">It was only in the mid-17th century, alongside the rise of Newtonian mechanics and rationalism, that the calculation of celestial bodies permanently divorced from the interpretation of their meaning.</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
    ` 
};