function flower(num){
  if (num == 1){
    return "flowers in North Garden";
  }
  else if (num == 2){
    return "flowers in South Garden";
  }
  else if (num == 3){
    return "flowers in West Garden";
  }
  else {
    return "No flowers in East Garden, only grasses!";
  }
}

console.log(flower(1));
