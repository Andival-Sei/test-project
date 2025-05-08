const welcomeMessages = {
  russian: "Добро пожаловать",
  english: "Welcome",
  french: "Bienvenue",
  italian: "Benvenuto",
  spanish: "bienvenido",
  chinese: "歡迎",
  finnish: "Tervetuloa",
};

function countLanguages(obj, propsArr) {
  return propsArr.reduce(function (res, current) {
    if (obj[current]) {
      res += 1;
    }

    return res;
  }, 0);
}

console.log(countLanguages(welcomeMessages, ["english", "french", "mandarin"])); // 2
console.log(countLanguages(welcomeMessages, ["russian", "czech"])); // 1
