const ejs = require("ejs");
const prettier = require("prettier");
const fs = require("fs/promises");

const restaurants = require("./restaurants.json");

let header = { backButton: false, location: "Paris, Belleville" };

function render(file, data) {
    return new Promise((resolve, reject) => {
        ejs.renderFile(file, data, {}, function (err, html) {
            if (err) {
                reject(err);
            }

            resolve(prettier.format(html, { tabWidth: 4, parser: "html" }));
        });
    });
}

render("template/index.ejs", {
    title: "",
    header,
    main: {
        type: "home",
        restaurants
    },
    footer: {}
})
    .then((html) => fs.writeFile("../index.html", html))
    .then(() => console.log("Success"))
    .catch((err) => {
        throw new Error(err);
    });
