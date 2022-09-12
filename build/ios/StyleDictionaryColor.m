
//
// StyleDictionaryColor.m
//

// Do not edit directly
// Generated on Mon, 12 Sep 2022 11:22:12 GMT


#import "StyleDictionaryColor.h"

@implementation StyleDictionaryColor

+ (UIColor *)color:(StyleDictionaryColorName)colorEnum{
  return [[self values] objectAtIndex:colorEnum];
}

+ (NSArray *)values {
  static NSArray* colorArray;
  static dispatch_once_t onceToken;

  dispatch_once(&onceToken, ^{
    colorArray = @[
[UIColor colorWithRed:0.031f green:0.369f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.000f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.000f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.784f green:0.788f blue:0.796f alpha:1.000f],
[UIColor colorWithRed:0.141f green:0.816f blue:0.745f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.816f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.984f green:0.616f blue:0.161f alpha:1.000f],
[UIColor colorWithRed:0.867f green:0.141f blue:0.412f alpha:1.000f],
[UIColor colorWithRed:0.031f green:0.369f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.816f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.141f green:0.816f blue:0.745f alpha:1.000f],
[UIColor colorWithRed:0.984f green:0.616f blue:0.161f alpha:1.000f],
[UIColor colorWithRed:0.984f green:0.400f blue:0.302f alpha:1.000f],
[UIColor colorWithRed:0.867f green:0.141f blue:0.412f alpha:1.000f],
[UIColor colorWithRed:0.706f green:0.322f blue:0.796f alpha:1.000f],
[UIColor colorWithRed:0.020f green:0.204f blue:0.561f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.498f blue:0.612f alpha:1.000f],
[UIColor colorWithRed:0.051f green:0.529f blue:0.482f alpha:1.000f],
[UIColor colorWithRed:0.702f green:0.424f blue:0.071f alpha:1.000f],
[UIColor colorWithRed:0.651f green:0.208f blue:0.129f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.816f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.867f green:0.141f blue:0.412f alpha:1.000f],
[UIColor colorWithRed:0.706f green:0.322f blue:0.796f alpha:1.000f],
[UIColor colorWithRed:0.969f green:0.969f blue:0.969f alpha:1.000f],
[UIColor colorWithRed:0.949f green:0.949f blue:0.949f alpha:1.000f],
[UIColor colorWithRed:0.941f green:0.941f blue:0.941f alpha:1.000f],
[UIColor colorWithRed:0.910f green:0.910f blue:0.910f alpha:1.000f],
[UIColor colorWithRed:0.910f green:0.910f blue:0.910f alpha:1.000f],
[UIColor colorWithRed:0.969f green:0.969f blue:0.969f alpha:1.000f],
[UIColor colorWithRed:0.949f green:0.949f blue:0.949f alpha:1.000f],
[UIColor colorWithRed:0.941f green:0.941f blue:0.941f alpha:1.000f],
[UIColor colorWithRed:0.910f green:0.910f blue:0.910f alpha:1.000f],
[UIColor colorWithRed:0.910f green:0.910f blue:0.910f alpha:1.000f],
[UIColor colorWithRed:0.910f green:0.910f blue:0.910f alpha:1.000f],
[UIColor colorWithRed:0.910f green:0.910f blue:0.910f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.000f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.702f green:0.706f blue:0.718f alpha:1.000f]
    ];
  });

  return colorArray;
}

@end
