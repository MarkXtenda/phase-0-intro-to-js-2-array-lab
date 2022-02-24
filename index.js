const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    return cats.push(name)
}

function destructivelyPrependCat(name) {
    return cats.unshift(name)
}

function destructivelyRemoveLastCat() {
    return cats.pop()
}

function destructivelyRemoveFirstCat() {
    return cats.shift()
}

function appendCat(name) {
    const catCopy = [...cats];
    catCopy.push(name)
    return catCopy
}

function prependCat(name) {
    const catCopy = [...cats];
    catCopy.unshift(name)
    return catCopy
}

function removeLastCat() {
    const catCopy = [...cats];
    catCopy.pop()
    return catCopy
}

function removeFirstCat() {
    const catCopy = [...cats];
    catCopy.shift()
    return catCopy
}