//
//  NeedsViewController.swift
//  Fullfilling Needs
//
//  Created by Abbas Angouti on 11/7/15.
//  Copyright © 2015 Abbas Angouti. All rights reserved.
//

import UIKit
import MapKit
import CoreLocation

class NeedsViewController: UIViewController, MKMapViewDelegate, CLLocationManagerDelegate {
    
    let kABPersonAddressStreetKey = "kABPersonAddressStreetKey"
    let kABPersonAddressCityKey = "kABPersonAddressCityKey"
    let kABPersonAddressStateKey = "kABPersonAddressStateKey"
    let kABPersonAddressZIPKey = "kABPersonAddressZIPKey"
    let kABPersonAddressCountryCodeKey = "kABPersonAddressCountryCodeKey"
    
    let locationManager = CLLocationManager()
    var coords = CLLocationCoordinate2DMake(39.676968, -104.958638)
    
    @IBOutlet weak var mapView: MKMapView!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        locationManager.delegate = self
        locationManager.requestAlwaysAuthorization()
        
        let address = [kABPersonAddressStreetKey: "2180 S University Blvd",
            kABPersonAddressCityKey: "Denver",
            kABPersonAddressStateKey: "CO",
            kABPersonAddressZIPKey: "80210",
            kABPersonAddressCountryCodeKey: "US"]
        
        let place = MKPlacemark(coordinate: coords, addressDictionary: address)
        let mapItem1 = MKMapItem.mapItemForCurrentLocation()
        
        
        
        
        let geoCoder = CLGeocoder()
        
        geoCoder.geocodeAddressString("2180 S University Blvd, Denver, Co, 80210") { (placemarks, error) -> Void in
            if error != nil {
                print("Geocode failed with error: \(error!.localizedDescription)")
            }
            
            if placemarks!.count > 0 {
                let placemark = placemarks![0]
                let location = placemark.location!
                self.coords = location.coordinate
                
                print("\(self.coords.latitude) \(self.coords.longitude)")
                
                let mapItem2 = MKMapItem(placemark: place)
                mapItem2.name = "DU Church"
                
                let mapItems = [mapItem1, mapItem2]
                let options: [String: AnyObject] = [MKLaunchOptionsDirectionsModeKey: MKLaunchOptionsDirectionsModeDriving,
                    MKLaunchOptionsShowsTrafficKey: true]
                
                MKMapItem.openMapsWithItems(mapItems, launchOptions: options)
                
            }
        }
    }
    
    override func viewWillAppear(animated: Bool) {
        super.viewWillAppear(animated)
        self.setNavigationBarItem()
    }
    
    func locationManager(manager: CLLocationManager, didChangeAuthorizationStatus status: CLAuthorizationStatus) {
        if status == .AuthorizedAlways {
            mapView.showsUserLocation = true
            locationManager.desiredAccuracy = kCLLocationAccuracyBest
            locationManager.delegate = self
            locationManager.requestWhenInUseAuthorization()
            locationManager.startUpdatingLocation()
        }
    }
}

