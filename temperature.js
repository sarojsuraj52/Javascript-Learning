let temperature;
let convertTemp = (num, conversionUnit)=>{
     temperature = conversionUnit === 'K' ? 273 + num +'K': conversionUnit === 'C'? num - 273 +'C':console.log('Inalid Conversion Unit')
};

convertTemp(100,'K');

if(temperature != undefined){
    console.log(temperature)
}
