export default {
    // addPet: (context, pet) => {
    //     context.commit('appendPet', pet);
    // },
    // spread context
    addPet: ({ commit }, payload) => {
        console.log('enter action addPet');
        console.log('enter action addPet => payload', payload);
        commit('appendPet', payload);
    }
}