

export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Fernando'
};

const passenger2: Passenger = {
    name: 'Melissa',
    children: ['Natalia', 'ELizabeth']
};


const printChildren = (passenger: Passenger) => {
    const howManyChildren = passenger.children?.length || 0;

    console.log(passenger.name, howManyChildren);
}

const returnChildrenNumber = (passenger: Passenger) => {

    if (!passenger.children) return 0;
    
    const howManyChildren = passenger.children!.length;

    console.log(passenger.name, howManyChildren);

    return howManyChildren;
}

// printChildren(passenger1);
returnChildrenNumber(passenger1);