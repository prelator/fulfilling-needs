//
//  LeftViewController.swift
//  SlideMenuControllerSwift
//
//  Created by Abbas Angouti on 11/7/15.
//  Copyright © 2015 Abbas Angouti. All rights reserved.
//

import UIKit

enum LeftMenu: Int {
    case Needs = 0
    case Groups
    case Church
    case Community
    case Abilities
    case Login
}

protocol LeftMenuProtocol : class {
    func changeViewController(menu: LeftMenu)
}

class LeftViewController : UIViewController, LeftMenuProtocol {
    
    @IBOutlet weak var tableView: UITableView!
    
    var menus = ["MY NEEDS", "MY GROUPS", "MY CHURCH", "MY COMMUNITY", "MY ABILITIES", "LOG IN"]
    var needsViewController: UIViewController!
    var swiftViewController: UIViewController!
    var requestViewController: UIViewController!
    var loginViewController: UIViewController!
    var nonMenuViewController: UIViewController!
    var imageHeaderView: ImageHeaderView!
    
    required init?(coder aDecoder: NSCoder) {
        super.init(coder: aDecoder)
    }
   
    override func viewDidLoad() {
        super.viewDidLoad()
        self.tableView.separatorColor = UIColor(red: 224/255, green: 224/255, blue: 224/255, alpha: 1.0)
        
        let storyboard = UIStoryboard(name: "Main", bundle: nil)
        let swiftViewController = storyboard.instantiateViewControllerWithIdentifier("SwiftViewController") as! SwiftViewController
        self.swiftViewController = UINavigationController(rootViewController: swiftViewController)
        
        let requestViewController = storyboard.instantiateViewControllerWithIdentifier("RequestViewController") as! RequestViewController
        self.requestViewController = UINavigationController(rootViewController: requestViewController)
        
        let loginViewController = storyboard.instantiateViewControllerWithIdentifier("LoginViewController") as! LoginViewController
        self.loginViewController = UINavigationController(rootViewController: loginViewController)
        
        let nonMenuController = storyboard.instantiateViewControllerWithIdentifier("NonMenuController") as! NonMenuController
        nonMenuController.delegate = self
        self.nonMenuViewController = UINavigationController(rootViewController: nonMenuController)
        
        self.tableView.registerCellClass(BaseTableViewCell.self)
        
        self.imageHeaderView = ImageHeaderView.loadNib()
        self.view.addSubview(self.imageHeaderView)
    }
    
    override func viewDidAppear(animated: Bool) {
        super.viewDidAppear(animated)
    }
    
    override func viewDidLayoutSubviews() {
        super.viewDidLayoutSubviews()
        self.imageHeaderView.frame = CGRect(x: 0, y: 0, width: self.view.frame.width, height: 160)
        self.view.layoutIfNeeded()
    }
    
    func changeViewController(menu: LeftMenu) {
        switch menu {
        case .Needs:
            self.slideMenuController()?.changeMainViewController(self.needsViewController, close: true)
        case .Groups:
            self.slideMenuController()?.changeMainViewController(self.swiftViewController, close: true)
        case .Church:
            self.slideMenuController()?.changeMainViewController(self.requestViewController, close: true)
        case .Login:
            self.slideMenuController()?.changeMainViewController(self.loginViewController, close: true)
        case .Community:
            self.slideMenuController()?.changeMainViewController(self.nonMenuViewController, close: true)
        case .Abilities:
            self.slideMenuController()?.changeMainViewController(self.nonMenuViewController, close: true)
        }
    }
}

extension LeftViewController : UITableViewDelegate {
    func tableView(tableView: UITableView, heightForRowAtIndexPath indexPath: NSIndexPath) -> CGFloat {
        if let menu = LeftMenu(rawValue: indexPath.item) {
            switch menu {
            case .Needs, .Groups, .Church, .Login, .Community, .Abilities:
                let cell = BaseTableViewCell(style: UITableViewCellStyle.Subtitle, reuseIdentifier: BaseTableViewCell.identifier)
                return cell.height()
            }
        }
        return 0
    }
}

extension LeftViewController : UITableViewDataSource {
    
    func tableView(tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return menus.count
    }
    

    func tableView(tableView: UITableView, cellForRowAtIndexPath indexPath: NSIndexPath) -> UITableViewCell {
        
        if let menu = LeftMenu(rawValue: indexPath.item) {
            switch menu {
            case .Needs, .Groups, .Church, .Login, .Community, .Abilities:
                let cell = BaseTableViewCell(style: UITableViewCellStyle.Subtitle, reuseIdentifier: BaseTableViewCell.identifier)
                cell.setData(menus[indexPath.row])
                return cell
            }
        }
        return UITableViewCell()
    }
    
    func tableView(tableView: UITableView, didSelectRowAtIndexPath indexPath: NSIndexPath) {
        if let menu = LeftMenu(rawValue: indexPath.item) {
            self.changeViewController(menu)
        }
    }
    
}

extension LeftViewController: UIScrollViewDelegate {
    
    
    func scrollViewDidScroll(scrollView: UIScrollView) {
        if self.tableView == scrollView {
            
        }
    }
}
