import type { RenaissanceItem } from './types';

// 1. 导入所有分散的卡片
// 1️⃣ Historical Milestones
import { black_death } from './black_death';

// 2️⃣ Masters & Thinkers
import { dante } from './dante';
import { petrarch } from './petrarch';
import { davinci } from './davinci';
import { boccaccio } from './boccaccio';
import { raphael } from './raphael';

// 3️⃣ Literature
import { divine_comedy } from './divine_comedy';

// 4️⃣ Art

// 5️⃣ Philosophy

// 6️⃣ Science
import { astrology_early_science } from './astrology';

// 2. 组装成大字典并导出
export const itemData: Record<string, RenaissanceItem> = {
    // 1️⃣ Historical Milestones
    'black_death': black_death,

    // 2️⃣ Masters & Thinkers
    'dante': dante,
    'petrarch': petrarch,
    'davinci': davinci,
    'boccaccio': boccaccio,
    'raphael': raphael,

    // 3️⃣ Literature
    'divine_comedy': divine_comedy,

    // 4️⃣ Art

    // 5️⃣ Philosophy

    // 6️⃣ Science
    'astrology_early_science': astrology_early_science
};