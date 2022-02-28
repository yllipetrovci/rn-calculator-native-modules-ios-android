//
//  CalculatorModule.m
//  HomeAssigment
//
//  Created by Ylli Petrovci on 27.2.22.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>
#import <React/RCTViewManager.h>
#import <React/RCTLog.h>

@interface RCT_EXTERN_MODULE(IOSCalculatorModule, NSObject)

RCT_EXTERN_METHOD(calculateNumbers:(double *)firstNumber secondNumber:(double *)secondNumber
                  operatorValue:(NSString *)operatorValue callback:(RCTResponseSenderBlock *)successCallback)

@end
