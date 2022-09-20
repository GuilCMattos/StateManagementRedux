
// Action Creator
export function alterNumberMin(newNumber) { 
    return {
        type: 'NUM_MIN_ALTERADO',
        payload: newNumber
    }
}

// Action Creator
export function alterNumberMax(newNumber) { 
    return {
        type: 'NUM_MAX_ALTERADO',
        payload: newNumber
    }
}

