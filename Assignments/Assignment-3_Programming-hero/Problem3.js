const string1 =  "Loving this weather today #sunny #vibes #weekend"


const countHashtags = (caption) => {
  if (typeof caption !== "string") {
    return "Invalid";
  }

  const words = caption.split(" ");

  let hashtagCount = 0;
  let longestTag = "";

  for (const word of words) {
    if (word.startsWith("#")) {
      const tag = word.slice(1);

      hashtagCount++;

      if (tag.length > longestTag.length) {
        longestTag = tag;
      }
    }
  }

  return {
    hashtagCount: hashtagCount,
    longestTag: longestTag,
  };
};
console.log(countHashtags(string1));
