const getSum = (str1, str2) => {
  if (isNaN(str1) || isNaN(str2) || typeof str1 === "object" || typeof str2 === "object" || typeof str1 === "number" || typeof str2 === "number") { return false; }
  str1 = str1.trim() === "" ? 0 : parseFloat(str1);
  str2 = str2.trim() === "" ? 0 : parseFloat(str2);
  return `${str1 + str2}`;
};

const getQuantityPostsByAuthor = (listOfPosts, authorName) => {
  let posts = listOfPosts.filter(post => post.author === authorName).length;
  let comments = listOfPosts.reduce((quantityOfComments, post) => {
    return quantityOfComments + (post.comments === undefined ? 0 : post.comments.filter(comment => comment.author === authorName).length);
  }, 0);
  return `Post:${posts},comments:${comments}`;
};

const tickets=(people)=> {
  let bill25 = 0, bill50 = 0;
  for (let i = 0; i < people.length; i++) {
    switch (people[i]) {
      case 25: {
        bill25++;
        break;
      }
      case 50: {
        if (bill25 === 0) { return "NO"; }
        bill50++;
        bill25--;
        break;
      }
      case 100: {
        if (bill25 > 2) { bill25 -= 3; }
        else if (bill25 > 0 && bill50 > 0) {
          bill25--;
          bill50--;
        }
        else { return "NO"; }
        break;
      }
      default: { return "NO"; }
    }
  }
  return "YES";
};


module.exports = {getSum, getQuantityPostsByAuthor, tickets};
