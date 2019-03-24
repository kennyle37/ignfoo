{
  //return the best possible armor combination given a list
  function setBuilder(armorList, totalList, crown) {
    let bestArmorSet = [];
    let tmp = [];
    let maxArmor = 0;
    let maxCost = 0;
    let firstPiece, secondPiece, thirdPiece, fourthPiece, wildCardPiece, tmpArmorCost, tmpArmorValue;
  
    for (let i = 0; i < armorList[0].length; i++) {
      firstPiece = armorList[0][i];
  
      for (let j = 0; j < armorList[1].length; j++) {
        secondPiece = armorList[1][j];
  
        for (let k = 0; k < armorList[2].length; k++) {
          thirdPiece = armorList[2][k];
  
          for (let l = 0; l < armorList[3].length; l++) {
            fourthPiece = armorList[3][l];
  
            for (let m = 0; m < totalList.length; m++) {
              wildCardPiece = totalList[m];
              tmp = [];
              tmp.push(firstPiece, secondPiece, thirdPiece, fourthPiece, wildCardPiece);
              tmpArmorCost = armorListCost(tmp);
              tmpArmorValue = armorListValue(tmp);
  
              if (tmpArmorCost <= crown) {
                if (tmpArmorValue > maxArmor) {
                  maxArmor = tmpArmorValue;
                  maxCost = tmpArmorCost;
                  bestArmorSet = tmp.slice();
                }
              }
            }
          }
        }
      }
    }

    let res = [bestArmorSet, 'total armor:' + maxArmor, 'total cost:' + maxCost]
    return bestArmorSet.length === 0 ? 
      'Not enough crowns. Do more quests or play more Gwent' : res;
  }
  
  function totalListCalculator(list) {
    let armorList = [];
    let current;
  
    for (let i = 0; i < list.length; i++) {
      for (let j = 0; j < list[i].length; j++) {
        current = list[i][j];
        armorList.push(current);
      }
    }
  
    return armorList;
  }
  
  //take in a list of armor and return it's armorCount
  function armorListValue(list) {
    let count = 0;
    let current;
  
    for (let i = 0; i < list.length; i++) {
      current = list[i].value;
      count += current;
    }
    return count;
  }
  
  //take in a list of armor and return it's cost
  function armorListCost(list) {
    let count = 0;
    let current;
  
    for (let i = 0; i < list.length; i++) {
      current = list[i].cost;
      count += current;
    }
    return count;
  }
  
  let listOfArmor = [
    //boots
    [ 
      {
        name: 'Tate\'s Spiked Cleats',
        cost: 52,
        value: 20,
      },
      {
        name: 'Diamond Boots',
        cost: 64,
        value: 18,
      },
      {
        name: 'Steel Boots',
        cost: 52,
        value: 14,
      },
      {
        name: 'Leather Lunde Shoes',
        cost: 35,
        value: 7,
      },
      {
        name: 'Cloth Shoes',
        cost: 33,
        value: 5,
      },
    ],
    //chest
    [
      {
        name: 'Chestpiece of Vachon',
        cost: 64,
        value: 23,
      },
      {
        name: 'Armor De Jandro',
        cost: 67,
        value: 22,
      },
      {
        name: 'Cured Leather Chestpiece',
        cost: 59,
        value: 20,
      },
      {
        name: 'Jeweled Drake Tunic',
        cost: 55,
        value: 19,
      },
      {
        name: 'Dented Plate Armor',
        cost: 57,
        value: 19,
      },
      {
        name: 'Ginger\'s Gilded Armor',
        cost: 54,
        value: 18,
      },
      {
        name: 'Garcia Guard',
        cost: 50,
        value: 17,
      },
      {
        name: 'Kaer Morhen Armor',
        cost: 62,
        value: 11,
      },
      {
        name: 'Smith\'s Plated Chestguard',
        cost: 58,
        value: 10,
      },
    ],
    //helmet
    [
      {
        name: 'Keeton Mask',
        cost: 77,
        value: 24,
      },
      {
        name: 'Offner Protector',
        cost: 54,
        value: 15,
      },
      {
        name: 'Glass Bowl',
        cost: 44,
        value: 12,
      },
      {
        name: 'Ornate Helmet of Cagampan',
        cost: 60,
        value: 16,
      },
      {
        name: 'Leather Helmet',
        cost: 49,
        value: 13,
      },
      {
        name: 'Sligar\'s Noggin Protector',
        cost: 46,
        value: 12,
      },
      {
        name: 'Serpentine Cruz Headpiece',
        cost: 90,
        value: 23,
      },
      {
        name: 'Feline Visor',
        cost: 68,
        value: 16,
      }
    ],
    //leggings
    [
      {
        name: 'Tattered Shorts',
        cost: 42,
        value: 13,
      },
      {
        name: 'Mail Emares Leggings',
        cost: 53,
        value: 14,
      },
      {
        name: 'Tanned Leg Protection',
        cost: 59,
        value: 15,
      },
      {
        name: 'Famed Pon Leggings',
        cost: 87,
        value: 22,
      },
      {
        name: 'Hansen\'s Breeches',
        cost: 69,
        value: 17,
      },
      {
        name: 'Woven Leggings',
        cost: 47,
        value: 11,
      },
      {
        name: 'Ursine Trouser',
        cost: 78,
        value: 18,
      },
      {
        name: 'Silken Pants',
        cost: 45,
        value: 10,
      },
      {
        name: 'Manticore Braces',
        cost: 56,
        value: 12,
      },
      {
        name: 'Wolven Shinguards',
        cost: 75,
        value: 15,
      },
      {
        name: 'Griffin Pants',
        cost: 62,
        value: 11,
      }
    ]
  ];
  
  
  let totalList = totalListCalculator(listOfArmor);
  console.log(setBuilder(listOfArmor, totalList, 300)) //expect a list of 4 armor pieces
  }