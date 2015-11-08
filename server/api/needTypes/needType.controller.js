/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /things              ->  index
 * POST    /things              ->  create
 * GET     /things/:id          ->  show
 * PUT     /things/:id          ->  update
 * DELETE  /things/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');

// Get list of things
exports.index = function(req, res) {
  var needTypes = ["Art - Artist, Art - Crafts Novice", "Art - Decorating", "Art - Graphic Design", "Art - Layout", "Art - Multimedia", "Art - Photography", "Construction - A/C", "Construction - Architect", "Construction - Cabinets", "Construction - Carpenter", "Construction - Carpet", "Construction - Concrete", "Construction - Drafting", "Construction - Drywall", "Construction - Electrical", "Construction - Finishing", "Construction - Gen Contractor", "Construction - Heating", "Construction - Interior Design", "Construction - Masonry", "Construction - Painting", "Construction - Papering", "Construction - Plumbing", "Construction - Roofing", "Construction - Telephones", "Construction - Tile", "Drama - Acting", "Drama - Clown", "Drama - Dance", "Drama - Mime", "Drama - Poet", "Drama - Writer", "General - Bookstore", "Drumming", "General - Cashier", "General - Child Care", "General - Customer Service", "General - Food Service", "General - Tape Duplication", "General - Transportation", "General - Weddings", "Lead - Couples", "Lead - Elementary", "Lead - Junior High", "Lead - Men's Group", "Lead - Preschool", "Lead - Senior High", "Lead - Singles (18 - 29)", "Lead - Singles (30+)", "Lead - Tutoring", "Lead - Women's Group", "Maintenance - Building", "Maintenance - Cleaning", "Maintenance - Gardening", "Maintenance - Grounds", "Mechanics - Auto Mechanic", "Mechanics - Computer Repair", "Mechanics - Copier Repair", "Mechanics - Diesel Mechanic", "Mechanics - Lawn Mower", "Mechanics - Machinist", "Mechanics - Small Engine", "Mechanics - Telephones", "Mechanics - Vacuum Cleaner", "Missions - Evangelism", "Missions - Missionary", "Music - Arranger", "Music - Bassist", "Music - Chart Songs", "Music - Choir", "Music - Choir Director", "Music - Composer", "Music - Drummer", "Music - Guitarist", "Music - Keyboardist", "Music - Other Instrument", "Music - Piano Tuner", "Music - Soloist", "Office - Data Entry", "Office - Filing", "Office - Library", "Office - Mail Room", "Office - Office Manager", "Office - Receptionist", "Office - Shorthand", "Office - Transcription", "Office - Typing (40+ wpm)", "Office - Word Processing", "Pro - Accounting", "Pro - Advertising", "Pro - Bookkeeping", "Pro - Career Counseling", "Pro - Carpet Cleaning", "Pro - Chiropractic", "Pro - Computer Programming", "Pro - Counseling", "Pro - Day Care Director", "Pro - Dental", "Pro - Engineer", "Pro - Financial", "Pro - Journalist / Writer", "Pro - Landscaping", "Pro - Law Enforcement", "Pro - Legal", "Pro - Lifeguard", "Pro - Medical", "Pro - Mental Health", "Pro - Nursing", "Pro - Paramedic / EMT", "Pro - Personnel Manager", "Pro - Public Relations", "Pro - Radio", "Pro - Social Work", "Pro - Systems Analyst", "Pro - Taxes", "Pro - Television", "Pro - Unemployment", "Pro - Window Washing", "Production - Lighting", "Production - Producer", "Production - Set Design", "Production - Sound", "Production - Stage Hand", "Production - Studio Recording", "Production - Video", "Service - Needy", "Sports - Badmitton", "Speaking", "Singing", "Sports - Baseball", "Sports - Basketball", "Sports - Bowling", "Sports - Coach", "Sports - Football", "Sports - General Athlete", "Sports - Golf", "Sports - Official", "Sports - Soccer", "Sports - Softball", "Sports - Tennis", "Work With - Alzheimer's", "Underwater Basketweaving", "Teaching", "Work With - Handicapped", "Work With - Hearing (Signing)", "Work With - Hospital Visits", "Work With - Incarcerated", "Work With - Learning", "Work With - Nursing Homes", "Work With - Shut-Ins"]
  return res.status(200).json(needTypes);
};

function handleError(res, err) {
  return res.status(500).send(err);
}
