// Tax Desh
// 3000 usd --> free
// 6000 usd --> 5%
// 10000 usd --> 15%
// 20000 usd --> 25%
// above that --> 30%
// minimum tax --> 50 usd


const render = (income) => {
    const maxPercent = 30;
    const minimumTax = 50;

    const slabs = [
        {income: 3000, taxPercentage: 0},
        {income: 6000, taxPercentage: 5},
        {income: 10000, taxPercentage: 15},
        {income: 20000, taxPercentage: 25},
        // income above 20000 usd tax will be 30 percentage 
    ];

    if(income <= slabs[0].income){return 0}
    let taxCount = 0;
    
    if(income <= 4000){return minimumTax};

    if(income <= slabs[1].income){ return (income - 4000) / 100 * 5 + minimumTax}
    if(income > slabs[1].income){ taxCount = (slabs[1].income - slabs[0].income) / 100 * 5 };

    if(income <= slabs[2].income){return 15 / 100 * (income - slabs[1].income) + taxCount}
    if(income > slabs[2].income){ taxCount +=  15 / 100 * (slabs[2].income - slabs[1].income)};
    
    if(income <= slabs[3].income){return (income - slabs[2].income) / 100 * 25 + taxCount}
    else if(income > slabs[3].income){ taxCount += (slabs[3].income - slabs[2].income) / 100 * 25};

    if(income > slabs[3].income){ return (income - slabs[3].income) / 100 * maxPercent + taxCount}
    
    return taxCount;
}
