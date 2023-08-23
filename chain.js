// *data access
const data = [{id: 1, name : 'abdullah', address: 'Dhanmondi, Dhaka'}];

console.log(data[0].address);

const products = {
    count: 5000,
    data: [
        { id: 1, name: 'lenovo laptop', price: 65000},
        { id: 2, name: 'asus laptop', price: 45000},
        { id: 3, name: 'mackbook', price: 145000},
        { id: 4, name: 'hp lapto', price: 55000}
    ]
}
// ** Third Product name: output(macbook)
console.log(products.data[2].name);


const user = {
    id: 5001,
    name: 'Shoriful Raj',
    address: {
        street: {
            first: '54/1 uttor side',
            second: 'poribag er goli',
            thirs: 'no dorai'
        },
        city: 'Dhaka'
    }

};

// ! locating the second address

const secondAdress = user.address.street.second;
console.log(secondAdress);

// !Optional chaning is important
