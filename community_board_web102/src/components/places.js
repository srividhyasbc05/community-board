import semma from './assets/semma.jpeg'
import dhamaka from './assets/dhamaka.jpeg'
import diwalitsq from './assets/diwalitsq.jpeg'
import bolobolo from './assets/bolobolo.jpeg'
import fontainhas from './assets/fontainhas.jpeg'
import fontys from './assets/fontys.jpeg'
import thechaispot from './assets/thechaispot.jpeg'
import patelbros from './assets/patelbros.jpeg'
import asiasociety from './assets/asiasociety.jpeg'
import littleindia from './assets/littleindia.jpeg'

const places = [
  {
    id: 1,
    type: "Restaurant",
    name: "Semma",
    src: semma,
    borough: "Manhattan",
    hours: "5:00 PM - 10:00 PM",
    address: "60 Greenwich Ave"
  },
  {
    id: 2,
    type: "Restaurant",
    name: "Dhamaka",
    src: dhamaka, 
    borough: "Manhattan",
    hours: "12:00 PM - 10:00 PM",
    address: "119 Delancey St"
  },
  {
    id: 3,
    type: "Cafe",
    name: "The Chai Spot",
    src: thechaispot, 
    borough: "Manhattan",
    hours: "8:00 AM - 8:00 PM",
    address: "1567 Lexington Ave"
  },
  {
    id: 4,
    type: "Restaurant",
    name: "Fonty's",
    src:fontys, 
    borough: "West Village",
    hours: "11:00 AM - 11:00 PM",
    address: "West Village"
  },
  {
    id: 5,
    type: "Restaurant",
    name: "Fontainhas",
    src: fontainhas, 
    borough: "Brooklyn",
    hours: "12:00 PM - 9:00 PM",
    address: "Brooklyn"
  },
  {
    id: 6,
    type: "Restaurant",
    name: "Bolo Bolo",
    src: bolobolo, 
    borough: "Manhattan",
    hours: "11:30 AM - 10:00 PM",
    address: "Manhattan"
  },
  {
    id: 7,
    type: "Grocery",
    name: "Patel Brothers",
    src: patelbros, 
    borough: "Jackson Heights",
    hours: "9:00 AM - 9:00 PM",
    address: "37-27 74th St"
  },
  {
    id: 8,
    type: "Neighborhood",
    name: "Little India",
    src: littleindia, 
    borough: "Queens",
    hours: "Open All Day",
    address: "Jackson Heights"
  },
  {
    id: 9,
    type: "Museum",
    name: "Asia Society",
    src: asiasociety, 
    borough: "Manhattan",
    hours: "11:00 AM - 6:00 PM",
    address: "725 Park Ave"
  },
  {
    id: 10,
    type: "Festival",
    name: "Diwali at Times Square",
    src: diwalitsq, 
    borough: "Manhattan",
    hours: "Annual Event",
    address: "Times Square"
  }
];

export default places;