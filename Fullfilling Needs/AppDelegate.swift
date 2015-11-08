//
//  AppDelegate.swift
//  Fullfilling Needs
//
//  Created by Abbas Angouti on 11/7/15.
//  Copyright © 2015 Abbas Angouti. All rights reserved.
//

import UIKit
import Parse

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate {

    var window: UIWindow?

    private func createMenuView() {
        
        // create viewController code...
        let storyboard = UIStoryboard(name: "Main", bundle: nil)
        
        let needsViewController = storyboard.instantiateViewControllerWithIdentifier("NeedsViewController") as! NeedsViewController
        let leftViewController = storyboard.instantiateViewControllerWithIdentifier("LeftViewController") as! LeftViewController
        let rightViewController = storyboard.instantiateViewControllerWithIdentifier("RightViewController") as! RightViewController
        
        let nvc: UINavigationController = UINavigationController(rootViewController: needsViewController)
        
        UINavigationBar.appearance().tintColor = UIColor(hex: "689F38")
        
        leftViewController.needsViewController = nvc
        
        let slideMenuController = SlideMenuController(mainViewController:nvc, leftMenuViewController: leftViewController, rightMenuViewController: rightViewController)
        
        self.window?.backgroundColor = UIColor(red: 236.0, green: 238.0, blue: 241.0, alpha: 1.0)
        self.window?.rootViewController = slideMenuController
        self.window?.makeKeyAndVisible()
    }
    

    func application(application: UIApplication, didFinishLaunchingWithOptions launchOptions: [NSObject: AnyObject]?) -> Bool {

        Parse.setApplicationId("XvlGpY8xdIy7rN1n7U9LtvmJlMab93gsoiujniRh", clientKey: "qBlRXel3QA8fjU9mTKNnU4BJE2gJpPVAgGLJz5Iy")
        
        // Register for Push Notitications
        if application.applicationState != UIApplicationState.Background {
            // Track an app open here if we launch with a push, unless
            // "content_available" was used to trigger a background push (introduced in iOS 7).
            // In that case, we skip tracking here to avoid double counting the app-open.
            
            let preBackgroundPush = !application.respondsToSelector("backgroundRefreshStatus")
            let oldPushHandlerOnly = !self.respondsToSelector("application:didReceiveRemoteNotification:fetchCompletionHandler:")
            var pushPayload = false
            if let options = launchOptions {
                pushPayload = options[UIApplicationLaunchOptionsRemoteNotificationKey] != nil
            }
            if (preBackgroundPush || oldPushHandlerOnly || pushPayload) {
                PFAnalytics.trackAppOpenedWithLaunchOptions(launchOptions)
            }
        }
        if application.respondsToSelector("registerUserNotificationSettings:") {
            let settings = UIUserNotificationSettings(forTypes: [.Alert, .Badge, .Sound], categories: nil)
            application.registerUserNotificationSettings(settings)
            application.registerForRemoteNotifications()
        } else { // old iOS versions
//            application.registerForRemoteNotificationTypes([.Alert, .Badge, .Sound])
//            application.registerForRemoteNotifications()
        }
        
        self.createMenuView()
        
        return true
    }
    

    func application(application: UIApplication, didRegisterForRemoteNotificationsWithDeviceToken deviceToken: NSData) {
        let installation = PFInstallation.currentInstallation()
        installation.setDeviceTokenFromData(deviceToken)
        installation.saveInBackground()
    }
    
    
    func application(application: UIApplication, didFailToRegisterForRemoteNotificationsWithError error: NSError) {
        if error.code == 3010 {
            print("Push notifications are not supported in the iOS Simulator.")
        } else {
            print("application:didFailToRegisterForRemoteNotificationsWithError: \(error)")
        }
    }
    
    
    func application(application: UIApplication, didReceiveRemoteNotification userInfo: [NSObject : AnyObject]) {
        PFPush.handlePush(userInfo)
        if application.applicationState  == UIApplicationState.Inactive {
            PFAnalytics.trackAppOpenedWithRemoteNotificationPayload(userInfo)
        }
    }

    
    func application(application: UIApplication, didReceiveRemoteNotification userInfo: [NSObject : AnyObject], fetchCompletionHandler completionHandler: (UIBackgroundFetchResult) -> Void) {
        print("got the notification and user info is: \(userInfo)")
        completionHandler(UIBackgroundFetchResult.NewData)
    }
    
}

