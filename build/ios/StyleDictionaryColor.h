
//
// StyleDictionaryColor.h
//

// Do not edit directly
// Generated on Mon, 12 Sep 2022 11:22:12 GMT


#import <UIKit/UIKit.h>

typedef NS_ENUM(NSInteger, StyleDictionaryColorName) {
ColorBaseBrandPrimary,
ColorBaseBrandSecondary,
ColorBaseSurface,
ColorBaseOnSurface,
ColorBaseOnSurfaceAlt,
ColorBaseNeutral,
ColorBaseSuccess,
ColorBaseInfo,
ColorBaseWarning,
ColorBaseDanger,
ColorChart1,
ColorChart2,
ColorChart3,
ColorChart4,
ColorChart5,
ColorChart6,
ColorChart7,
ColorChart8,
ColorChart9,
ColorChart10,
ColorChart11,
ColorChart12,
ColorGenderMale,
ColorGenderFemale,
ColorGenderNonBinary,
ColorBackgroundDefault,
ColorBackgroundNested,
ColorBackgroundHover,
ColorBackgroundPressed,
ColorBackgroundSelected,
ColorSurfaceDefaultDefault,
ColorSurfaceDefaultNested,
ColorSurfaceDefaultHover,
ColorSurfaceDefaultPressed,
ColorSurfaceDefaultSelected,
ColorSurfaceDefaultSelectedHover,
ColorSurfaceDefaultSelectedPressed,
ColorFontBase,
ColorFontSecondary,
ColorFontTertiary
};

@interface StyleDictionaryColor : NSObject
+ (NSArray *)values;
+ (UIColor *)color:(StyleDictionaryColorName)color;
@end
