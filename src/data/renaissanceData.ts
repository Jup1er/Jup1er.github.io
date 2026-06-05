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
    thumbnail?: string; // 🌟 新增：卡片左侧的小正方形头像/缩略图路径
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
        connections: [], 
        highlights: '<p>• Fundamentally altered European demography and shook the absolute authority of the Church, accelerating secular and humanist thought.</p>' 
    },
    'gutenberg_press': { 
        category: 'milestone', 
        years: '1440', 
        startYear: 1440, 
        name: 'Gutenberg Printing Press', 
        role: 'Technological Infrastructure', 
        connections: [], 
        highlights: '<p>• The advent of movable type printing democratized knowledge, rapidly spreading Renaissance ideas and classical texts across Europe.</p>' 
    },
    'constantinople': { 
        category: 'milestone', 
        years: '1453', 
        startYear: 1453, 
        name: 'Fall of Constantinople', 
        role: 'Geopolitical Shift', 
        connections: [], 
        highlights: '<p>• Pushed Greek scholars to flee to Italy, bringing ancient texts that fueled the High Renaissance.</p>' 
    },

    // 2️⃣ Masters & Thinkers
    'dante': { 
        category: 'masters', 
        years: '1265 — 1321', 
        startYear: 1290, 
        name: 'Dante Alighieri', 
        role: 'Poet / Philosopher / Theologian', 
        thumbnail: '/renaissance/dante.jpg', 
        connections: [{ id: 'divine_comedy', label: 'Divine Comedy' }], 
        highlights: '<p>• A prophetic pioneer of the Renaissance...</p>' 
    },
    'petrarch': { 
        category: 'masters', 
        years: '1304 — 1374', 
        startYear: 1304,
        name: 'Francesco Petrarca', 
        role: 'The Father of Humanism', 
        thumbnail: '/renaissance/petrarch.jpg',
        connections: [{ id: 'humanism_philo', label: 'Emergence of Humanism' }], 
        highlights: '<p>• Championed the essential recovery...</p>' 
    },
    'boccaccio': { 
        category: 'masters', 
        years: '1313 — 1375', 
        startYear: 1313,
        name: 'Giovanni Boccaccio', 
        role: 'Novelist / Humanist Scholar', 
        thumbnail: '/renaissance/boccaccio.jpg',
        connections: [{ id: 'decameron_book', label: 'The Decameron' }], 
        highlights: '<p>• Broke from rigid allegorical medieval frameworks...</p>' 
    },
    'davinci': { 
        category: 'masters', 
        years: '1452 — 1519', 
        startYear: 1452,
        name: 'Leonardo da Vinci', 
        role: 'The Ultimate Polymath', 
        thumbnail: '/renaissance/leonardo.jpg',
        connections: [{ id: 'monalisa_art', label: 'Mona Lisa' }], 
        highlights: '<p>• Erased the false boundary between fine arts...</p>' 
    },
    'galileo': { 
        category: 'masters', 
        years: '1564 — 1642', 
        startYear: 1564,
        name: 'Galileo Galilei', 
        role: 'Father of Modern Science', 
        thumbnail: '/renaissance/galileo.jpg',
        connections:  [], 
        highlights: '<p>• Turned the telescope skyward to prove celestial bodies...</p>' 
    },

    // 3️⃣ Literature
    'divine_comedy': { 
        category: 'literature', 
        years: 'Publication Date: c. 1321', 
        startYear: 1321, 
        name: 'Divine Comedy (Divina Commedia)', 
        role: 'Epic Poem / Vernacular Literature', 
        thumbnail: '/renaissance/divine.jpg',
        connections: [{ id: 'dante', label: 'Dante Alighieri' }], 
        highlights: '<p>• Abandoned traditional Latin constraints...</p>' 
    },
    'decameron_book': { 
        category: 'literature', 
        years: 'c. 1353', 
        startYear: 1353, 
        name: 'The Decameron', 
        role: 'Prose Masterwork / Library Artifact', 
        thumbnail: '/renaissance/decameron.jpg',
        connections: [{ id: 'boccaccio', label: 'Giovanni Boccaccio' }], 
        highlights: '<p>• A milestone text tracking human resilience...</p>' 
    },
    'don_quixote': { 
        category: 'literature', 
        years: '1605 — 1615', 
        startYear: 1605, 
        name: 'Don Quixote', 
        role: 'The First Modern Novel', 
        thumbnail: '/renaissance/don_quixote.jpg',
        connections: [], 
        highlights: '<p>• Deconstructs medieval romantic chivalry...</p>' 
    },

    // 4️⃣ Art
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
        highlights: '<p>• Built with dozens of microscopic glaze layers...</p>' 
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
        highlights: '<p>• An early communist utopian design...</p>' 
    },
    'descartes_philo': { 
        category: 'philosophy', 
        years: '1637', 
        startYear: 1637, 
        name: 'Cogito Ergo Sum', 
        role: 'Rationalist Epistemology', 
        thumbnail: '/renaissance/cogito.jpg',
        connections: [], 
        highlights: '<p>• Established radical skepticism as the foundation of reason...</p>' 
    },

    // 6️⃣ Science
    'copernicus_science': { 
        category: 'science', 
        years: '1543', 
        startYear: 1543, 
        name: 'Heliocentrism', 
        role: 'De revolutionibus orbium coelestium', 
        thumbnail: '/renaissance/copernicus_science.jpg',
        connections: [], 
        highlights: '<p>• Challenged the absolute geocentric model...</p>' 
    }
};