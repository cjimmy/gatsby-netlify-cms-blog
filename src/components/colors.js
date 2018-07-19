/*
How I like to do colors. 
Allows me to specific Color('pink') and get a predefined
pink that I can then change throughout the app posthoc.
It also allows me to change the saturation, tint, or opacity within the function call
for example, Color('pink',0,10) is 10/255 brighter than Color('pink')
useful for gradients or optically compensating.
Feel free to delete all this.
*/	
const ColorMap = new Map([
	['orange', 'hsla(29, 100%, 62%,1)'], //'rgba(255,155,60,1)', //#FF9B3C
	['teal', 'hsla(177,54%,67%,1)'], //'rgba(111,179,190,1)', // #6FB3BE
	['red', 'hsla(360,100%,69%,1)'], //'rgba(255,97,98,1)',// #FF6162
	['tan', 'hsla(59,100%,89%,1)'],//'rgb(255, 254, 201)', // #FFFEC9
	['mint', 'hsla(167,100%,89%,1)'],//'rgb(201, 255, 243)', // #C9FFF3
	['pink', 'hsla(0,100%,93%,1)'],//'rgb(255, 218, 218)', // #FFDADA
	['yellow', 'hsla(44,100%,67%,1)'],//'rgb(255, 209, 87)',// #FFD157
	['lightblue', 'hsla(197,100%,87%,1)'],
	['blue', 'hsla(219,87%,66%,1)'],//'rgba(92,144,244,1)', // #5C90F4
	['lightpurple', 'hsla(253, 100%, 74%,1)'],//'rgb(150, 122, 255)', // #967aff
	['purple', 'hsla(258, 100%, 69%,1)'],//'rgb(145, 97, 255)', // #9161FF
	['darkpurple', 'hsla(272, 99%, 54%,1)'],//'rgb(144, 19, 254)', // #9013FE
])

const Color = (name, deltaSaturation=0, deltaTint=0, opacity=1) => {
	if(!name) return '#000';
	const base = ColorMap.get(name);
	if(opacity === 1 && deltaTint === 0) {return base;}
	let hsl = base.split(',');
	let newSaturation = parseInt(hsl[1],10) + deltaSaturation;
	newSaturation = (newSaturation > 100) ? 100 : newSaturation;
	let newLightness = parseInt(hsl[2],10) + deltaTint;
	newLightness = (newLightness > 100) ? 100 : newLightness;
	hsl[1] = (newSaturation + '%');
	hsl[2] = (newLightness + '%');
	hsl[3] = (opacity+')');
	return hsl.join();
}

export default Color
