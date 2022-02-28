//
//  CalculatorModule.m
//  HomeAssigment
//
//  Created by Ylli Petrovci on 27.2.22.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>
#import <React/RCTViewManager.h>

@interface RCT_EXTERN_MODULE(IOSCalculatorModule, NSObject)

RCT_EXTERN_METHOD(open:(double *)firstNumber secondNumber:(double *)secondNumber callback:(RCTResponseSenderBlock *)successCallback)

@end
