function rot13(str) {
    //Create object to use inside the function.
    const caesarLookup = {
      "A": "N",
      "B": "O",
      "C": "P",
      "D": "Q",
      "E": "R",
      "F": "S",
      "G": "T",
      "H": "U",
      "I": "V",
      "J": "W",
      "K": "X",
      "L": "Y",
      "M": "Z",
      "N": "A",
      "O": "B",
      "P": "C",
      "Q": "D",
      "R": "E",
      "S": "F",
      "T": "G",
      "U": "H",
      "V": "I",
      "W": "J",
      "X": "K",
      "Y": "L",
      "Z": "M",
    };
      // Split string into an array
      const codedArray = str.split("");
      const decodedArray = codedArray.map(char =>
      caesarLookup[char] || char);
      // Use the map function to convert characters into their Caesar cypher equivalents. The or statement specifies that characters not found in the lookup object remain the same.
      const decodedString = decodedArray.join("");
      return decodedString;
      //Convert decoded array into a string and return it.
    }