export default function getRandomHero(arr) {
  let rand = Math.floor(Math.random() * arr.length)
  return arr[rand]
}
