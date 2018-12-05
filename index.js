define(function() {
const id = ["004","008","010","012","024","031","032","036","040","044","050","051","056","064","068","070","072","076","084","090","096","100","104","108","112","116","120","124","140","144","148","152","156","158","170","178","180","188","191","192","196","203","204","208","214","218","222","226","231","232","233","238","242","246","250","260","262","266","268","270","275","276","288","300","304","320","324","328","332","340","348","352","356","360","364","368","372","376","380","384","388","392","398","400","404","408","410","414","417","418","422","426","428","430","434","440","442","450","454","458","466","478","484","496","498","499","504","508","512","516","524","528","540","548","554","558","562","566","586","591","598","600","604","608","616","620","624","626","630","634","642","643","646","682","686","688","694","703","704","705","706","710","716","724","728","729","732","740","748","752","756","760","762","764","768","780","784","788","792","795","800","804","807","818","826","834","840","854","858","860","862","887","894"];
const state = ["Afghanistan","Albania","Antarctica","Algeria","Angola","Azerbaijan","Argentina","Australia","Austria","Bahamas","Bangladesh","Armenia","Belgium","Bhutan","Bolivia","Bosnia and Herzegovina","Botswana","Brazil","Belize","Solomon Islands","Brunei Darussalam","Bulgaria","Myanmar","Burundi","Belarus","Cambodia","Cameroon","Canada","Central African Republic","Sri Lanka","Chad","Chile","China","Taiwan","Colombia","Republic of the Congo","Democratic Republic of the Congo","Costa Rica","Croatia","Cuba","Cyprus","Czech Republic","Benin","Denmark","Dominican Republic","Ecuador","El Salvador","Equatorial Guinea","Ethiopia","Eritrea","Estonia","Falkland Islands","Fiji","Finland","France","French Southern and Antarctic Lands","Djibouti","Gabon","Georgia","The Gambia","Palestine","Germany","Ghana","Greece","Greenland","Guatemala","Guinea","Guyana","Haiti","Honduras","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy","Côte d'Ivoire","Jamaica","Japan","Kazakhstan","Jordan","Kenya","Dem. Rep. Korea","Republic of Korea","Kuwait","Kyrgyzstan","Lao PDR","Lebanon","Lesotho","Latvia","Liberia","Libya","Lithuania","Luxembourg","Madagascar","Malawi","Malaysia","Mali","Mauritania","Mexico","Mongolia","Moldova","Montenegro","Morocco","Mozambique","Oman","Namibia","Nepal","Netherlands","New Caledonia","Vanuatu","New Zealand","Nicaragua","Niger","Nigeria","Pakistan","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Guinea-Bissau","Timor-Leste","Puerto Rico","Qatar","Romania","Russian Federation","Rwanda","Saudi Arabia","Senegal","Serbia","Sierra Leone","Slovakia","Vietnam","Slovenia","Somalia","South Africa","Zimbabwe","Spain","South Sudan"
"Sudan","Western Sahara","Suriname","eSwatini","Sweden","Switzerland","Syria","Tajikistan","Thailand","Togo","Trinidad and Tobago","United Arab Emirates","Tunisia","Turkey","Turkmenistan","Uganda","Ukraine","Macedonia","Egypt","United Kingdom",Tanzania","United States","Burkina Faso","Uruguay","Uzbekistan","Venezuela","Yemen","Zambia"];
const rate = [10,20,30,40,50,60,10,20,30,40,50,60,10,10,20,30,40,50,60,10,20,30,40,50,60,10,20,30,40,50,60,10,20,30,40,50,60,10,20,30,40,50,60,10,20,30,40,50,60,10,20,30,40,50,60,10,20,30,40,50,60,10,10,20,30,40,50,60,10,20,30,40,50,60,10,20,30,40,50,60,10,20,30,40,50,60,10,20,30,40,50,60,10,20,30,40,50,60,10,20,30,40,50,60,10,20,30,40,50,60,10,10,20,30,40,50,60,10,20,30,40,50,60,10,20,30,40,50,60,10,20,30,40,50,60,10,20,30,40,50,60,10,20,30,40,50,60,10,20,30,40,50,60,10,20,30,40,50,60,10,10,20,30,40,50,60,10,20,30,40,50,60,10];
const n = id.length;
  const data = new Array(n);
  for (let i = 0; i < n; ++i) data[i] = {id: id[i], state: state[+id[i].slice(0, 2)], rate: rate[i]};
  data.columns = ["id", "state", "rate"];
  return data;
});
