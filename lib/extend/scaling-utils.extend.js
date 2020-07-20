import {
    SIZE_MATTERS_BASE_WIDTH,
    SIZE_MATTERS_BASE_HEIGHT,
} from 'react-native-dotenv';

import { guidelineConfig } from '../extend-global/scaling-utils.extend-global';

guidelineConfig.guidelineBaseWidth = SIZE_MATTERS_BASE_WIDTH || 350;
guidelineConfig.guidelineBaseHeight = SIZE_MATTERS_BASE_HEIGHT || 680;

export * from '../extend-global/scaling-utils.extend-global';
