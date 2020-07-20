import scaledSheetCreator from './lib/ScaledSheet';
import {
    scale,
    verticalScale,
    moderateScale,
} from './lib/extend-global/scaling-utils.extend-global';

export const ScaledSheet = scaledSheetCreator(
    scale,
    verticalScale,
    moderateScale
);
export * from './lib/extend-global/scaling-utils.extend-global';
