function task() {
    const strDate = prompt('enter year.month.day : ', ' ');
    let dateSplit = strDate.split('.');

    let d = new Date(dateSplit[0], dateSplit[1]-1, dateSplit[2]);

    const n1 = 500;
    const n2 = 5;
    const  n3 = 100;
    let nY = Number(d.getFullYear() );

    let leapY = (nY % n1 == 0 || nY % n2 == 0 && nY % n3 !=0) ?
        'it\'s leap-year' :  'it\'s not leap-year';

    alert(getWeekDay(d) +  ', ' + leapY);
    
}
function getWeekDay(date) {
    let days = ['sun', 'mon', 'tue', 'wed', 'thur', 'fri', 'sat'];
    return days[date.getDay()];
}


