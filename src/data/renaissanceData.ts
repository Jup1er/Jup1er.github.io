// src/data/renaissanceData.ts

export interface Connection {
    id: string;
    label: string;
}

export interface RenaissanceItem {
    category: string;
    years: string;
    startYear: number; // 🌟 新增：用于绝对精准定位的数字年份
    name: string;
    role: string;
    connections: Connection[];
    highlights: string;
    artwork?: string;
    museum?: string;
}

export const itemData: Record<string, RenaissanceItem> = {
    'dante': { 
        category: 'masters', 
        years: '1265 — 1321', 
        startYear: 1290, // 限制在时间轴可视范围内（1300开始）
        name: 'Dante Alighieri', 
        role: 'Poet / Philosopher / Theologian', 
        connections: [{ id: 'divine_comedy', label: 'Divine Comedy' }], 
        highlights: '<p>• A prophetic pioneer of the Renaissance...</p>' 
    },
    'divine_comedy': { 
        category: 'literature', 
        years: '1308 — 1321', 
        startYear: 1308, 
        name: 'Divine Comedy (Divina Commedia)', 
        role: 'Epic Poem / Vernacular Literature', 
        connections: [{ id: 'dante', label: 'Dante Alighieri' }], 
        highlights: '<p>• Abandoned traditional Latin constraints...</p>' 
    },
    'petrarch': { 
        category: 'masters', 
        years: '1304 — 1374', 
        startYear: 1304,
        name: 'Francesco Petrarca', 
        role: 'The Father of Humanism', 
        connections: [{ id: 'humanism_philo', label: 'Emergence of Humanism' }], 
        highlights: '<p>• Championed the essential recovery...</p>' 
    },
    'humanism_philo': { 
        category: 'philosophy', 
        years: '14th — 15th Century', 
        startYear: 1350, 
        name: 'The Emergence of Humanism', 
        role: 'Philosophical Paradigm Shift', 
        connections: [{ id: 'petrarch', label: 'Francesco Petrarca' }], 
        highlights: '<p>• The elemental atmosphere of the era...</p>' 
    },
    'boccaccio': { 
        category: 'masters', 
        years: '1313 — 1375', 
        startYear: 1313,
        name: 'Giovanni Boccaccio', 
        role: 'Novelist / Humanist Scholar', 
        connections: [{ id: 'decameron_book', label: 'The Decameron' }], 
        highlights: '<p>• Broke from rigid allegorical medieval frameworks...</p>' 
    },
    'decameron_book': { 
        category: 'literature', 
        years: 'c. 1353', 
        startYear: 1353, 
        name: 'The Decameron', 
        role: 'Prose Masterwork / Library Artifact', 
        connections: [{ id: 'boccaccio', label: 'Giovanni Boccaccio' }], 
        highlights: '<p>• A milestone text tracking human resilience...</p>' 
    },
    'giotto_art': { 
        category: 'art', 
        years: '1267 — 1337', 
        startYear: 1290,
        name: 'Giotto Wall Paintings', 
        role: 'Fresco Cycle', 
        connections: [], 
        highlights: '<p>• Shifted fine arts from rigid medieval symbolism...</p>' 
    },
    'davinci': { 
        category: 'masters', 
        years: '1452 — 1519', 
        startYear: 1452,
        name: 'Leonardo da Vinci', 
        role: 'The Ultimate Polymath', 
        connections: [{ id: 'monalisa_art', label: 'Mona Lisa' }], 
        highlights: '<p>• Erased the false boundary between fine arts...</p>' 
    },
    'monalisa_art': { 
        category: 'art', 
        years: 'c. 1503 — 1519', 
        startYear: 1503,
        name: 'Mona Lisa (La Gioconda)', 
        role: 'Oil on Poplar Panel', 
        artwork: '/renaissance/mona_lisa.jpg', 
        museum: 'Musée du Louvre, Paris', 
        connections: [{ id: 'davinci', label: 'Leonardo da Vinci' }], 
        highlights: '<p>• Built with dozens of microscopic glaze layers...</p>' 
    },
    'don_quixote': { 
        category: 'literature', 
        years: '1605 — 1615', 
        startYear: 1605, 
        name: 'Don Quixote', 
        role: 'The First Modern Novel', 
        connections: [], 
        highlights: '<p>• Deconstructs medieval romantic chivalry...</p>' 
    },
    'city_sun': { 
        category: 'philosophy', 
        years: '1602', 
        startYear: 1602, 
        name: 'The City of the Sun', 
        role: 'Utopian Political Treatise', 
        connections: [], 
        highlights: '<p>• An early communist utopian design...</p>' 
    },
    'copernicus_science': { 
        category: 'science', 
        years: '1543', 
        startYear: 1543, 
        name: 'Heliocentrism', 
        role: 'De revolutionibus orbium coelestium', 
        connections: [{ id: 'bruno_science', label: 'Infinite Universe' }], 
        highlights: '<p>• Challenged the absolute geocentric model...</p>' 
    },
    'bruno_science': { 
        category: 'science', 
        years: '1548 — 1600', 
        startYear: 1548,
        name: 'Infinite Universe', 
        role: 'Cosmological Thesis', 
        connections: [{ id: 'copernicus_science', label: 'Heliocentrism' }, { id: 'galileo', label: 'Galileo Galilei' }], 
        highlights: '<p>• Defended heliocentrism and proposed an infinite universe...</p>' 
    },
    'galileo': { 
        category: 'masters', 
        years: '1564 — 1642', 
        startYear: 1564,
        name: 'Galileo Galilei', 
        role: 'Father of Modern Science', 
        connections: [{ id: 'bruno_science', label: 'Infinite Universe' }], 
        highlights: '<p>• Turned the telescope skyward to prove celestial bodies...</p>' 
    },
    'descartes_philo': { 
        category: 'philosophy', 
        years: '1637', 
        startYear: 1637, 
        name: 'Cogito Ergo Sum', 
        role: 'Rationalist Epistemology', 
        connections: [], 
        highlights: '<p>• Established radical skepticism as the foundation of reason...</p>' 
    }
};