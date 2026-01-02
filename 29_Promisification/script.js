function promisify(fn) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      fn(...args, (err, result) => {
        if (err) return reject(err);
        return resolve(result);
      });
    });
  };
}

function loadScript(src, callback) {
  const script = document.createElement("script");

  script.src = src;

  script.onload = () => callback(null, script);
  script.onerror = (err) => callback(err);
  document.head.appendChild(script);
}

// Old school approch

loadScript("test.js", (err, script) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Script Successfully Loaded");
  }
});

// Modern Approch

const loadScriptNew = promisify(loadScript);
// console.log(loadScriptNew("test.js"))
loadScriptNew("test.js")
  .then(() => {
    console.log("Loaded");
  })
  .catch((err) => {
    console.log(err);
  });

(async () => {
  try {
    const result = await loadScriptNew("test.js");
    console.log("Done Loaded");
  } catch (err) {
    console.log("Error Found");
  }
})();
