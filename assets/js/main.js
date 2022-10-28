/* user will type in their region. click the button.
take the value the entered. based on the value they
entered, respond with a random park from that array 
of national parks for that region) may need to randomize the parks by number??? */


//
document.querySelector('button').addEventListener('click', randomPark)

//This function allows us to take the region value the user enters and randomly pull from the array of national parks in order to display the result on the webpage
function randomPark(){

const nationalParkOptions = [
    {region:'West', parksInRegion: ['Denali National Park','Gates of the Arctic National Park','Glacier Bay National Park','Katmai National Park', 'Mount Rainier National Park', 'North Cascades National Park', 'Olympic National Park', 'Crater Lake National Park' ,'Kenai Fjords National Park', 'Kobuk Valley National Park','Lake Clark National Park', 'Wrangell-St. Elias National Park', 'Channel Islands National Park', 'Death Valley National Park', 'Joshua Tree National Park','Kings Canyon National Park','Lassen Volcanic National Park','Pinnacles National Park','Redwood National Park','Sequoia National Park','Yosemite National Park','Yellowstone National Park','Glacier National Park', 'Glacier National Park', 'Great Basin National Park','Arches National Park','Bryce Canyon National Park','Canyonlands National Park','Capitol Reef National Park','Zion National Park','Black Canyon of the Gunnison National Park','Great Sand Dunes National Park','Mesa Verde National Park', 'Rocky Mountain National Park', 'Grand Canyon National Park','Petrified Forest National Park','Saguaro National Park','White Sands National Park','Carlsbad Caverns National Park','Haleakala National Park','Hawaii Volcanoes National Park']},
    {region:'Midwest', parksInRegion: ['Theodore Roosevelt National Park','Badlands National Park','Wind Cave National Park','Voyageurs National Park','Gateway Arch National Park', 'Indiana Dunes National Park', 'Cuyahoga Valley National Park','Isle Royale National Park','Gateway Arch National Park']},
    {region:'South', parksInRegion: ['Big Bend National Park','Guadalupe Mountains National Park','Hot Springs National Park','Great Smoky Mountains National Park', 'Mammoth Cave National Park', 'Biscayne National Park','Dry Tortugas National Park','Everglades National Park','Congaree National Park','Shenandoah National Park','New River Gorge National Park']},
    {region:'Northeast', parksInRegion: ['Acadia National Park']}
]
//randomizes the selections based on region user types
const westNationalParkOptions = nationalParkOptions[0].parksInRegion[Math.floor(Math.random() * nationalParkOptions[0].parksInRegion.length)]
const midwestNationalParkOptions = nationalParkOptions[1].parksInRegion[Math.floor(Math.random() * nationalParkOptions[1].parksInRegion.length)]
const southNationalParkOptions = nationalParkOptions[2].parksInRegion[Math.floor(Math.random() * nationalParkOptions[2].parksInRegion.length)]
const northeastNationalParkOptions = nationalParkOptions[3].parksInRegion[Math.floor(Math.random() * nationalParkOptions[3].parksInRegion.length)]


//takes the users typed value and presents options and color corrdinates
 const parkRegion = document.querySelector('input').value.toLowerCase();
 if (parkRegion === 'west'){
    document.querySelector('h2').innerHTML = westNationalParkOptions
    document.querySelector('h2').style.color = 'RGB(253,160,40)'
 }else if(parkRegion === 'midwest'){
    document.querySelector('h2').innerHTML = midwestNationalParkOptions
    document.querySelector('h2').style.color = 'RGB(23,161,55)'
 }else if(parkRegion === 'south'){
    document.querySelector('h2').innerHTML = southNationalParkOptions
    document.querySelector('h2').style.color = 'RGB(19, 126, 207)'
}else if (parkRegion === 'northeast'){
    document.querySelector('h2').innerHTML = northeastNationalParkOptions
    document.querySelector('h2').style.color = 'RGB(240,36,43)'
 }else{
    document.querySelector('h2').innerHTML ='Please retype one of the options listed above'
    document.querySelector('h2').style.color = 'red'
 }

}
