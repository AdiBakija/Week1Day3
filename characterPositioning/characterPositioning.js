function uniqueLetters(words)
{
  var noSpaces3 = words.split(" ").join("");
  var uniqueL = [noSpaces3[0]];

  for (var l = 0; l < noSpaces3.length; l++)
  {
    var exists = false;
    for (var m = 0; m < uniqueL.length; m++)
    {
      if (uniqueL[m] === noSpaces3[l])
      {
        exists = true;
      }
    }
    if (!exists)
    {
      uniqueL.push(noSpaces3[l]);
    }

  }

  return uniqueL

}



function countChar(words)
{
  var noSpaces1 = words.split(" ").join("");
  var noSpaces2 = noSpaces1;

  var  charOutput = [];
  for(var j = 0; j < uniqueLetters(words).length; j++)
  {
    var charIndices = [];
    var count = 0;

    for(var k = 0; k < words.length; k++)
    {
      if(words[k] === uniqueLetters(words)[j])
      {
        charIndices.push(k);
      }
    }
    charOutput.push(charIndices);
  }
  return charOutput;
}



function zip(keys, values) {
  var output = {};
  for(var n = 0; n < keys.length; n++) {
    output[keys[n]] = values [n];
  }
  return output;
}

function countingCharacters(words) {
  var unique = uniqueLetters(words);
  var countCh = countChar(words);
  var zipper = zip(unique, countCh);
  return zipper;
}

console.log(countingCharacters("lighthouse in the house"));