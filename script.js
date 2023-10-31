function findmoney(arr) {
    let money = prompt("goturduyunuz meblegi daxil edin:")
    let month = prompt("ay daxil edin:")
    let ayliqMebleg = 0;
    for (let i = month; i > 0; i--) {
        ayliqMebleg = Math.floor (money / i) ;
        money = money - ayliqMebleg;
        console.log(ayliqMebleg);




    }
}


findmoney()