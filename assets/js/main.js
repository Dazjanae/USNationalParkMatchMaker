/* user will type in their region. click the button.
take the value the entered. based on the value they
entered, respond with a random park from that array 
of national parks for that region) may need to randomize the parks by number??? */


//
document.querySelector('button').addEventListener('click', randomPark)

//This function allows us to take the region value the user enters and randomly pull from the array of national parks in order to display the result on the webpage
function randomPark(){

const nationalParkOptions = [
    {region:'West', parksInRegion: ['Denali National Park','Gates of the Arctic National Park','Glacier Bay National Park','Katmai National Park']},
    {region:'Midwest', parksInRegion: ['Theodore Roosevelt National Park','Badlands National Park','Wind Cave National Park','Voyageurs National Park']},
    {region:'South', parksInRegion: ['Big Bend National Park','Guadalupe Mountains National Park','Gateway Arch National Park','Hot Springs National Park']},
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
