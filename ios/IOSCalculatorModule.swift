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
  @objc func open(_ firstNumber: Double, secondNumber: Double, callback successCallback: RCTResponseSenderBlock){
    
    let result = firstNumber + secondNumber ;
    
    print("Two numbers firstNumber:"+String(format: "%.1f", result))
    
    successCallback([result])
  }
}
