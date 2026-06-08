// src/data/renaissanceData.ts

export interface Connection {
    id: string;
    label: string;
}

export interface RenaissanceItem {
    category: string;
    years: string;
    startYear: number;
    name: string;
    role: string;
    thumbnail?: string; 
    connections: Connection[];
    highlights: string;
    artwork?: string;
    museum?: string;
}

export const itemData: Record<string, RenaissanceItem> = {

    // 1️⃣ Historical Milestones
    'black_death': { 
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
    },
    'gutenberg_press': { 
        category: 'milestone', 
        years: '1440', 
        startYear: 1440, 
        name: 'Gutenberg Printing Press', 
        role: 'Technological Infrastructure', 
        thumbnail: '/renaissance/gutenberg.jpg',
        connections: [], 
        highlights: `
        <div class="text-[13px] md:text-[15.5px] leading-relaxed text-stone-700 font-light">
            <img src="/renaissance/gutenberg.jpg" alt="Gutenberg Press" class="float-right w-[45%] md:w-[35%] ml-4 md:ml-5 mb-3 rounded-md shadow-sm border border-stone-200 cursor-zoom-in zoomable-img transition-transform hover:scale-[1.02]" />
            <p>The advent of movable type printing democratized knowledge, permanently breaking the Church's monopoly on manuscript production. It acted as the technological engine of the era, rapidly spreading Renaissance humanist ideas, classical texts, and scientific discoveries across Europe.</p>
            <div class="clear-both"></div>
        </div>
        ` 
    },
    'constantinople': { 
        category: 'milestone', 
        years: '1453', 
        startYear: 1453, 
        name: 'Fall of Constantinople', 
        role: 'Geopolitical Shift', 
        thumbnail: '/renaissance/constantinople.jpg',
        connections: [], 
        highlights: `
        <div class="text-[13px] md:text-[15.5px] leading-relaxed text-stone-700 font-light">
            <img src="/renaissance/constantinople.jpg" alt="Fall of Constantinople" class="float-right w-[45%] md:w-[35%] ml-4 md:ml-5 mb-3 rounded-md shadow-sm border border-stone-200 cursor-zoom-in zoomable-img transition-transform hover:scale-[1.02]" />
            <p>The fall of the Byzantine capital pushed Greek scholars to flee westward to Italy. They brought with them preserved ancient Greek and Roman manuscripts—including works of Plato and Ptolemy—that deeply fueled the intellectual fire of the High Renaissance.</p>
            <div class="clear-both"></div>
        </div>
        ` 
    },

    // 2️⃣ Masters & Thinkers
    'dante': { 
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
    },
    'petrarch': { 
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
    },
    'boccaccio': { 
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
    },
    'davinci': { 
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
    },
    'galileo': { 
        category: 'masters', 
        years: '1564 — 1642', 
        startYear: 1564,
        name: 'Galileo Galilei', 
        role: 'Father of Modern Science', 
        thumbnail: '/renaissance/galileo.jpg',
        connections:  [{ id: 'copernicus_science', label: 'Heliocentrism' }], 
        highlights: `
        <div class="text-[13px] md:text-[15.5px] leading-relaxed text-stone-700 font-light">
            <img src="/renaissance/galileo.jpg" alt="Galileo Galilei" class="float-right w-[45%] md:w-[35%] ml-4 md:ml-5 mb-3 rounded-md shadow-sm border border-stone-200 cursor-zoom-in zoomable-img transition-transform hover:scale-[1.02]" />
            <p>Turned the telescope skyward to provide empirical proof for the Copernican heliocentric model. His insistence on mathematical laws and observable data over established philosophical dogma laid the absolute groundwork for the Scientific Revolution.</p>
            <div class="clear-both"></div>
        </div>
        ` 
    },

    // 3️⃣ Literature
    'divine_comedy': { 
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
    },
    'decameron_book': { 
        category: 'literature', 
        years: 'c. 1353', 
        startYear: 1353, 
        name: 'The Decameron', 
        role: 'Prose Masterwork / Library Artifact', 
        thumbnail: '/renaissance/decameron.jpg',
        connections: [{ id: 'boccaccio', label: 'Giovanni Boccaccio' }], 
        highlights: `
        <div class="text-[13px] md:text-[15.5px] leading-relaxed text-stone-700 font-light">
            <img src="/renaissance/decameron.jpg" alt="The Decameron" class="float-right w-[45%] md:w-[35%] ml-4 md:ml-5 mb-3 rounded-md shadow-sm border border-stone-200 cursor-zoom-in zoomable-img transition-transform hover:scale-[1.02]" />
            <p>A milestone text tracking human resilience. Composed of 100 tales told by young nobles fleeing the Black Death, it dramatically shifted literary focus from divine salvation to the earthly triumphs, tragedies, and humor of everyday human life.</p>
            <div class="clear-both"></div>
        </div>
        ` 
    },
    'don_quixote': { 
        category: 'literature', 
        years: '1605 — 1615', 
        startYear: 1605, 
        name: 'Don Quixote', 
        role: 'The First Modern Novel', 
        thumbnail: '/renaissance/don_quixote.jpg',
        connections: [], 
        highlights: `
        <div class="text-[13px] md:text-[15.5px] leading-relaxed text-stone-700 font-light">
            <img src="/renaissance/don_quixote.jpg" alt="Don Quixote" class="float-right w-[45%] md:w-[35%] ml-4 md:ml-5 mb-3 rounded-md shadow-sm border border-stone-200 cursor-zoom-in zoomable-img transition-transform hover:scale-[1.02]" />
            <p>Deconstructs medieval romantic chivalry. Widely considered the first modern novel, it uses brilliant satire and psychological complexity to explore the clash between lofty idealism and grounded reality in a rapidly changing world.</p>
            <div class="clear-both"></div>
        </div>
        ` 
    },

    // 4️⃣ Art
    // 🎨 注意：Art 类的图片通过 artwork 属性在顶部大图区域显示，highlights 里不需要再放 float 图片了
    'monalisa_art': { 
        category: 'art', 
        years: 'c. 1503 — 1519', 
        startYear: 1503,
        name: 'Mona Lisa (La Gioconda)', 
        role: 'Oil on Poplar Panel', 
        artwork: '/renaissance/mona_lisa.jpg', 
        thumbnail: '/renaissance/mona.jpg',
        museum: 'Musée du Louvre, Paris', 
        connections: [{ id: 'davinci', label: 'Leonardo da Vinci' }], 
        highlights: `
        <div class="text-[13px] md:text-[15.5px] leading-relaxed text-stone-700 font-light">
            <p>Built with dozens of microscopic glaze layers through the technique of <em>sfumato</em>, achieving an unprecedented atmospheric depth and psychological realism. The subject's ambiguous expression breaks from rigid, profile-based portraiture, capturing the very essence of a living, breathing soul rather than just a physical likeness.</p>
        </div>
        ` 
    },

    // 5️⃣ Philosophy
    'city_sun': { 
        category: 'philosophy', 
        years: '1602', 
        startYear: 1602, 
        name: 'The City of the Sun', 
        role: 'Utopian Political Treatise', 
        thumbnail: '/renaissance/city_sun.jpg',
        connections: [], 
        highlights: `
        <div class="text-[13px] md:text-[15.5px] leading-relaxed text-stone-700 font-light">
            <img src="/renaissance/city_sun.jpg" alt="The City of the Sun" class="float-right w-[45%] md:w-[35%] ml-4 md:ml-5 mb-3 rounded-md shadow-sm border border-stone-200 cursor-zoom-in zoomable-img transition-transform hover:scale-[1.02]" />
            <p>An early utopian design envisioning a society governed entirely by reason, science, and communal property. It reflects the late Renaissance's growing radical belief that human intellect could fundamentally restructure and perfect the political order.</p>
            <div class="clear-both"></div>
        </div>
        ` 
    },
    'descartes_philo': { 
        category: 'philosophy', 
        years: '1637', 
        startYear: 1637, 
        name: 'Cogito Ergo Sum', 
        role: 'Rationalist Epistemology', 
        thumbnail: '/renaissance/cogito.jpg',
        connections: [], 
        highlights: `
        <div class="text-[13px] md:text-[15.5px] leading-relaxed text-stone-700 font-light">
            <img src="/renaissance/cogito.jpg" alt="Cogito Ergo Sum" class="float-right w-[45%] md:w-[35%] ml-4 md:ml-5 mb-3 rounded-md shadow-sm border border-stone-200 cursor-zoom-in zoomable-img transition-transform hover:scale-[1.02]" />
            <p>Established radical skepticism as the foundation of modern reason. By systematically tearing down all assumed knowledge to reach the undeniable truth of his own existence ("I think, therefore I am"), Descartes revolutionized epistemology and the modern scientific method.</p>
            <div class="clear-both"></div>
        </div>
        ` 
    },

    // 6️⃣ Science
    'copernicus_science': { 
        category: 'science', 
        years: '1543', 
        startYear: 1543, 
        name: 'Heliocentrism', 
        role: 'De revolutionibus orbium coelestium', 
        thumbnail: '/renaissance/copernicus_science.jpg',
        connections: [{ id: 'galileo', label: 'Galileo Galilei' }], 
        highlights: `
        <div class="text-[13px] md:text-[15.5px] leading-relaxed text-stone-700 font-light">
            <img src="/renaissance/copernicus_science.jpg" alt="Heliocentrism" class="float-right w-[45%] md:w-[35%] ml-4 md:ml-5 mb-3 rounded-md shadow-sm border border-stone-200 cursor-zoom-in zoomable-img transition-transform hover:scale-[1.02]" />
            <p>Fundamentally challenged the absolute geocentric model. By mathematically positioning the Sun at the center of the universe, Copernicus sparked a paradigm shift that eventually dismantled the medieval cosmic hierarchy and permanently redefined humanity's place in the cosmos.</p>
            <div class="clear-both"></div>
        </div>
        ` 
    },
    'astrology_early_science': { 
        category: 'science', 
        years: 'Early 14th Century', 
        startYear: 1300,
        name: 'Astrology & Astronomy', 
        role: 'Mathematical Cosmology', 
        thumbnail: '/renaissance/astrology.jpg',
        connections: [
            { id: 'dante', label: 'Dante Alighieri' },
            { id: 'divine_comedy', label: 'Divine Comedy' }
        ], 
        highlights: `
        <div class="space-y-6 md:space-y-8">
            <div class="text-[13px] md:text-[15.5px] leading-relaxed text-stone-700 font-light">
                <img src="/renaissance/astrology.jpg" alt="Astrology Map" class="float-right w-[50%] md:w-[40%] ml-4 md:ml-6 mb-3 rounded-md shadow-md border border-stone-200 cursor-zoom-in zoomable-img transition-transform hover:scale-[1.02]" />
                <p class="mb-3">During the Middle Ages, astrology was primarily a practical tool for medicine and weather forecasting. Its explosive resurgence during the Renaissance, however, was triggered by the rediscovery of <strong>Neoplatonic</strong> and <strong>Hermetic</strong> texts in the 1460s.</p>
                <p>By integrating the ancient Greek concept of "macrocosm and microcosm," it transitioned from rigid fatalism into an early, humanist-tinged form of psychology: the stars do not compel human action, but rather provide a cosmic "undertone" and energetic influence.</p>
                <div class="clear-both"></div> 
            </div>

            <div>
                <h4 class="text-[10px] md:text-[11px] font-mono uppercase tracking-widest text-stone-400 mb-4 font-bold border-b border-stone-200 pb-1.5">Chronology</h4>
                <div class="border-l-[1.5px] border-dotted border-stone-400/50 ml-2 py-1 relative">
                    
                    <div class="relative pl-6 md:pl-7 mb-6">
                        <div class="absolute w-2 h-2 rounded-full border border-stone-500 bg-[#F4F1EA] -left-[4.5px] top-1"></div>
                        <div class="text-[10px] md:text-[11px] font-mono text-stone-500 mb-0.5">1460</div>
                        <div class="text-[12px] md:text-[14px] font-bold text-stone-800 mb-1">Arrival of Key Manuscripts</div>
                        <div class="text-[11px] md:text-[13px] text-stone-600 leading-relaxed font-light">Supported by the Medici family, Marsilio Ficino acquired and began translating the <em>Corpus Hermeticum</em>, ancient Greek mystical manuscripts rescued from Byzantium.</div>
                    </div>

                    <div class="relative pl-6 md:pl-7 mb-6">
                        <div class="absolute w-2 h-2 rounded-full border border-stone-500 bg-[#F4F1EA] -left-[4.5px] top-1"></div>
                        <div class="text-[10px] md:text-[11px] font-mono text-stone-500 mb-0.5">1489</div>
                        <div class="text-[12px] md:text-[14px] font-bold text-stone-800 mb-1">The Doctrine of Celestial Magic</div>
                        <div class="text-[11px] md:text-[13px] text-stone-600 leading-relaxed font-light">Ficino published <em>De vita libri tres</em> (Three Books on Life), elevating astrology from mere fortune-telling to a spiritual practice and celestial magic, igniting a craze among the intellectual elite.</div>
                    </div>

                    <div class="relative pl-6 md:pl-7">
                        <div class="absolute w-2 h-2 rounded-full border border-stone-500 bg-[#F4F1EA] -left-[4.5px] top-1"></div>
                        <div class="text-[10px] md:text-[11px] font-mono text-stone-500 mb-0.5">16th Century</div>
                        <div class="text-[12px] md:text-[14px] font-bold text-stone-800 mb-1">Papal and Royal Fervor</div>
                        <div class="text-[11px] md:text-[13px] text-stone-600 leading-relaxed font-light">Astrology reached its zenith. Pope Paul III consulted astrologers before meeting ambassadors, and Queen Catherine de' Medici invited the famous astrologer Nostradamus to the French court.</div>
                    </div>

                </div>
            </div>

            <div>
                <h4 class="text-[10px] md:text-[11px] font-mono uppercase tracking-widest text-stone-400 mb-4 font-bold border-b border-stone-200 pb-1.5">Cross-Disciplinary Impact</h4>
                <div class="space-y-3">
                    <div class="bg-[#FAF8F5] border border-stone-200/80 p-3 md:p-4 rounded shadow-sm">
                        <div class="text-[12px] md:text-[14px] font-bold text-stone-800 mb-1.5 flex items-center gap-2">
                            <span class="text-stone-400">❖</span> Precursor to Psychology
                        </div>
                        <div class="text-[11px] md:text-[13px] text-stone-600 leading-relaxed font-light">Intellectuals deeply analyzed their natal charts. Scholars believed brilliant creators were governed by Saturn, which, while inducing "melancholy," also bestowed extraordinary genius.</div>
                    </div>
                    <div class="bg-[#FAF8F5] border border-stone-200/80 p-3 md:p-4 rounded shadow-sm">
                        <div class="text-[12px] md:text-[14px] font-bold text-stone-800 mb-1.5 flex items-center gap-2">
                            <span class="text-stone-400">❖</span> Astrological Medicine
                        </div>
                        <div class="text-[11px] md:text-[13px] text-stone-600 leading-relaxed font-light">Different zodiac signs were thought to govern specific body parts. Physicians were required to consult the moon's position and the patient's birth chart before diagnosing or prescribing treatment.</div>
                    </div>
                    <div class="bg-[#FAF8F5] border border-stone-200/80 p-3 md:p-4 rounded shadow-sm">
                        <div class="text-[12px] md:text-[14px] font-bold text-stone-800 mb-1.5 flex items-center gap-2">
                            <span class="text-stone-400">❖</span> Visual Arts
                        </div>
                        <div class="text-[11px] md:text-[13px] text-stone-600 leading-relaxed font-light">Massive astrological frescoes adorned the Medici villas. Nobles believed that gazing at art depicting beneficial planets allowed them to absorb positive celestial energies.</div>
                    </div>
                </div>
            </div>
        </div>
        `
    }
};