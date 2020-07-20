import * as RN from "react-native";
import { StringifiedStyles, NamedStyles } from '.';

declare module "react-native-size-matters/extend" {
    export function scale(size: number): number;
    export function verticalScale(size: number): number;
    export function moderateScale(size: number, factor?: number): number;
    export function s(size: number): number;
    export function vs(size: number): number;
    export function ms(size: number, factor?: number): number;
    export const guidelineConfig: {
        guidelineBaseWidth: number;
        guidelineBaseHeight: number;
    };
    export namespace ScaledSheet {
        export function create<T extends NamedStyles<T> | NamedStyles<any>>(stylesObject: T): { 
            [P in keyof T]: RN.RegisteredStyle<T[P] & Record<Extract<keyof T[P], keyof StringifiedStyles>, number>> 
        };
    }
}