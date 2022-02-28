//
//  CalculatorModule.swift
//  HomeAssigment
//
//  Created by Ylli Petrovci on 27.2.22.
//

import Foundation
import AVFoundation


@objc(IOSCalculatorModule)
class IOSCalculatorModule : NSObject {
  
  @objc func test( _ location: NSString){
    print(location)
  }
  
  @objc func calculateNumbers(_ firstNumber: Double, secondNumber: Double, operatorValue: NSString, callback successCallback: RCTResponseSenderBlock){
    
    let result = __generateResultWithRandomlyOperator(firstNumber, secondNumber, operatorValue as String);
        
    successCallback([(result as Double)])
  }
  
  func __generateResultWithRandomlyOperator(_ firstNumber: Double, _ secondNumber:Double, _ operatorValue: String) -> Double{
    
    switch operatorValue {
    case "+":
      
      return  firstNumber+secondNumber;
      
    case "-":
      return firstNumber-secondNumber;
      
    case "/":
      return firstNumber/secondNumber;
    case "*":
      return firstNumber*secondNumber;
    default:
      return -999;
    }
  }
}
