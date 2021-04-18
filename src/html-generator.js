const ejs = require("ejs");
const prettier = require("prettier");
const fs = require("fs/promises");

const restaurants = require("./restaurants.json");

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


exports.render = (outputDir) => {
    return render("template/index.ejs", {
        title: "",
        header: { backButton: false, location: "Paris, Belleville" },
        main: {
            type: "home",
            restaurants
        },
        footer: {}
    })
        .then((html) => {
            fs.writeFile(outputDir + "/index.html", html);
        })
        .then(() =>
            Promise.all(
                restaurants.map((restaurant) => {
                    return render("template/index.ejs", {
                        title: restaurant.name,
                        header: { backButton: true },
                        main: {
                            type: "menu",
                            restaurant
                        },
                        footer: {}
                    }).then((html) => {
                        fs.writeFile(outputDir + "/" + restaurant.url, html);
                    });
                })
            )
        )
        .then(() => console.log("HTML generation success"));
}
