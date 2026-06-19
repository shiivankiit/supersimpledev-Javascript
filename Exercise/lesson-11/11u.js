function removeEgg(foods) {
        // To remove the last 2 'egg', reverse the array first.
        const foodcopy=foods.slice();
        const reversedFoods = foodcopy.reverse();

        const result = [];
        let eggsRemoved = 0;

        for (let i = 0; i < reversedFoods.length; i++) {
          if (reversedFoods[i] === 'egg' && eggsRemoved < 2) {
            eggsRemoved++;
            continue;
          }

          result.push(reversedFoods[i]);
        }

        // At the end, remember to .reverse() back the result.
        return result.reverse();
      }

     const foods = ['egg', 'apple', 'egg', 'egg', 'ham'];
      console.log(removeEgg(foods));
      console.log(foods);
      
      
