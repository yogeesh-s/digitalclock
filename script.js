let timer = () => {
    let date = new Date()
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    temp = hr;
    (temp<12)?document.querySelector('.ampm').innerHTML = "AM":document.querySelector('.ampm').innerHTML = "PM";
    hr = convert12(hr);
    min = checkZero(min);
    sec = checkZero(sec);
    document.querySelector('.hour').innerHTML = hr;
    document.querySelector('.minute').innerHTML = min;
    document.querySelector('.second').innerHTML = sec;
}

checkZero = (x) => {
    if(x<10){
        return '0'+ x;
    }else{
        return x;
    }
}

convert12 = (x) => {
    if(x==0){
        return 12;
    }
    else if(x<10){
        return '0'+ x;
    }
    else if(x<=12){
        return x;
    }
    else{
        return convert12(x-12);
    }
}

setInterval(timer,1000);