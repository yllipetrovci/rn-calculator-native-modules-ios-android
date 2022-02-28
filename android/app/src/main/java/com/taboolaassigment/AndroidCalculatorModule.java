package com.taboolaassigment;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;
import java.util.Map;
import java.util.HashMap;

public class AndroidCalculatorModule extends ReactContextBaseJavaModule {
    AndroidCalculatorModule(ReactApplicationContext context) {
        super(context);
    }

    @Override
    public String getName(){
        return "AndroidCalculatorModule";
    }

    @ReactMethod
    private void open(double firstNumber, double secondNumber,Callback onSuccessCallback) {
        double result = firstNumber+secondNumber;

        onSuccessCallback.invoke(result);
    }
}
