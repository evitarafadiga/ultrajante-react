const useRandom = () => {
    let alreadyPassed = [];
  
    const randomValueFromArray = (myArray) => {
      if (alreadyPassed.length === 0) {
        for (let i = 0; i < myArray.length; i++) alreadyPassed.push(i);
      }
      let randomValueIndex = Math.floor(Math.random() * alreadyPassed.length);
      let indexOfItemInMyArray = alreadyPassed[randomValueIndex];
  
      alreadyPassed.splice(randomValueIndex, 1);
  
      return myArray[indexOfItemInMyArray];
    };
    return {
      randomValueFromArray,
    };
  };
  
  export default useRandom;