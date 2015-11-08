//
//  StringExtension.swift
//  SlideMenuControllerSwift
//
//  Created by Abbas Angouti on 1/22/15.
//  Copyright (c) 2015 Abbas Angouti. All rights reserved.
//

import Foundation

extension String {
    static func className(aClass: AnyClass) -> String {
        return NSStringFromClass(aClass).componentsSeparatedByString(".").last!
    }
    
    func substring(from: Int) -> String {
        return self.substringFromIndex(self.startIndex.advancedBy(from))
    }
    
    var length: Int {
        return self.characters.count
    }
}