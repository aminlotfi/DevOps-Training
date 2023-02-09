import Landing from "./views/Landing.js"
import TicketsList from "./views/TicketsList.js"
import BuyTicket from "./views/BuyTicket.js"
import Signup from "./views/Signup.js"
import Login from "./views/Login.js"
import Panel from "./views/Panel.js"

const navigateTo = async url => {
    history.pushState(null, null, url)
    await router()
}

const router = async () => {
    const routes = [
        { path: "/", view: Landing },
        { path: "/search-tickets", view: TicketsList },
        { path: "/buy-ticket", view: BuyTicket },
        { path: "/login", view: Login },
        { path: "/signup", view: Signup },
        { path: "/panel", view: Panel }
    ]

    const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        }
    })


    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch)

    if (!match) {
        match = {
            route: routes[0],
            isMatch: [location.pathname]
        }
    }

    let uniqueKey = 0
    const view = new match.route.view()
    const html = await view.getHtml(uniqueKey)
    const component = view.component || {}

    document.querySelector("#app").innerHTML = html
    await view.getJs({}, uniqueKey)
    for (const key of Object.keys(component)) {
        const elements = document.getElementsByTagName(key)
        const innerView = new (await component[key]()).default
        for (const element of elements) {
            uniqueKey++
            let props = element.getAttributeNames().reduce((result, attr) => {
                return {
                    ...result,
                    [attr]: element.getAttribute(attr)
                }
            }, {})
            element.innerHTML = await innerView.getHtml(uniqueKey)
            await innerView.getJs(props, uniqueKey)
        }
    }

}

window.navigateTo = navigateTo

window.addEventListener("popstate", router)
document.addEventListener("DOMContentLoaded", async () => {
    document.body.addEventListener("click", async (e) => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault()
            await navigateTo(e.target.href)
        }
    })
    router().then(() => {
        const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
        const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

        // Change the icons inside the button based on previous settings
        if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            themeToggleLightIcon.classList.remove('hidden');
        } else {
            themeToggleDarkIcon.classList.remove('hidden');
        }

        const themeToggleBtn = document.getElementById('theme-toggle');

        themeToggleBtn.addEventListener('click', function() {

            // toggle icons inside button
            themeToggleDarkIcon.classList.toggle('hidden');
            themeToggleLightIcon.classList.toggle('hidden');

            // if set via local storage previously
            if (localStorage.getItem('color-theme')) {
                if (localStorage.getItem('color-theme') === 'light') {
                    document.documentElement.classList.add('dark');
                    localStorage.setItem('color-theme', 'dark');
                } else {
                    document.documentElement.classList.remove('dark');
                    localStorage.setItem('color-theme', 'light');
                }

                // if NOT set via local storage previously
            } else {
                if (document.documentElement.classList.contains('dark')) {
                    document.documentElement.classList.remove('dark');
                    localStorage.setItem('color-theme', 'light');
                } else {
                    document.documentElement.classList.add('dark');
                    localStorage.setItem('color-theme', 'dark');
                }
            }

        });
    })
})