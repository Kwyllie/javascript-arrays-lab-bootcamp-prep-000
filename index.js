const app = "I don't do much."
var kittens =["Milo", "Otis", "Garfield"]
function destructivelyAppendKitten (name){
  kittens.push(name)
  return kittens
}
function destructivelyPrependKitten(name){
  kittens.unshift(name)
  return kittens
}
function destructivelyRemoveLastKitten(){
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
  return kittens
}

function appendKitten(name){
  const arr2=kittens.concat(name)
  return arr2
}

function prependkItten(name){
  const arr2=[name,...kittens]
  return arr2
}