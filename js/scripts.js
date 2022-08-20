 document.getElementById('calculateMony').addEventListener('click',function(){
     const incomeMony = document.getElementById('incomeMony');
     const incomeMonyString = incomeMony.value;
     const incomeMonyNumber = parseFloat(incomeMonyString);
     const thisIsTotalMony = incomeMony.value = incomeMonyNumber;
    //  step 2

    const foodMony = document.getElementById('foodMony');
    const foodMonyString = foodMony.value;
    const foodMonyNumber = parseFloat(foodMonyString);
    const foodTotalMony = foodMony.value = foodMonyNumber;
    
    const rentMony = document.getElementById('rentMony');
    const rentMonyString = rentMony.value;
    const rentMonyNumber = parseFloat(rentMonyString);
    const rentTotalMony = rentMony.value = rentMonyNumber;

    const clothesMony = document.getElementById('clothesMony');
    const clothesMonyString = clothesMony.value;
    const clothesMonyNumber = parseFloat(clothesMonyString);
    const clotheTotalMony = clothesMony.value = clothesMonyNumber;

    const allCost = foodTotalMony +  rentTotalMony + clotheTotalMony ;
    const totalConst = thisIsTotalMony - allCost;
    // console.log(totalConst);


// Total Expenses
    const balanceMone = document.getElementById('balanceMone');
    const totalExpensesInnerText = balanceMone.innerText;
    balanceMone.innerText = totalConst;

// Balance
    const totalExpenses = document.getElementById('totalExpenses');
    const balanceMoneInnerText = totalExpenses.innerText ;
    totalExpenses.innerText = thisIsTotalMony - totalConst;

   
 })