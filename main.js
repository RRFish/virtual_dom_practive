import createElement from "./createElement.js";
import render from "./render.js";
import mount from "./mount.js";
import diff from "./diff.js";

const createVapp = (count) => 
    createElement("div", {
        attrs: {
            id: "app",
            dataCount: count,
        },
        children: [
            createElement("input"),
            String(`Current count: ${count}`),
            ...Array.from({length: count}, () => 
				createElement("img", {
					attrs: {
						src: "https://moto.honda-taiwan.com.tw/Uploads/files/118658_2018_CB300R.png",
						width: 50,
						
					},
				}),
			),
        ],
    });

let count = 0;
let vApp = createVapp(count);
const $app = render(vApp);
let $rootEl = mount($app, document.getElementById("app"));

setInterval(() => {
	count = Math.floor(Math.random() * 10);
	const vNewApp = createVapp(count)
	const patch = diff(vApp, vNewApp);
	$rootEl = patch($rootEl)
	vApp = vNewApp
}, 1000)
