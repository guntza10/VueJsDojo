export default {
    appendPet: (state, { pet, species }) => {
        console.log('enter mutation appendPet');
        console.log('enter mutation appendPet => species', species);
        console.log('enter mutation appendPet => pet', pet);
        state[species].push(pet);
    }
}