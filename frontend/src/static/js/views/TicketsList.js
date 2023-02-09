import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.component = {
            Ticket: () => import("../components/Ticket.js"),
            SearchTickets: () => import("../components/SearchTickets.js")
        }
        this.setTitle("هواپیمایی شریف | لیست بلیط‌ها");
    }

    async getJs() {
        let url = document.location.href,
            params = url.split('?')[1].split('&'),
            data = {}, tmp;
        for (let i = 0, l = params.length; i < l; i++) {
            tmp = params[i].split('=');
            data[tmp[0]] = tmp[1];
        }

        document.getElementsByTagName('SearchTickets')[0].setAttribute('data-info', JSON.stringify(data))

        const mockData = [
            {
                startTime: Date.now() + Math.floor((3 + Math.random() * 5)*60*60*1000),
                timeLength: Math.floor((1 + Math.random())*60*60*1000),
                freeSeats: 4 + Math.round(Math.random() * 6),
                price: (600 + Math.round(Math.random() * 200)) * 1000,
                type: "economy",
                ...data,
            }, {
                startTime: Date.now() + Math.floor((3 + Math.random() * 5)*60*60*1000),
                timeLength: Math.floor((1 + Math.random())*60*60*1000),
                freeSeats: 4 + Math.round(Math.random() * 6),
                price: (600 + Math.round(Math.random() * 200)) * 1000,
                type: "business",
                ...data,
            }, {
                startTime: Date.now() + Math.floor((3 + Math.random() * 5)*60*60*1000),
                timeLength: Math.floor((1 + Math.random())*60*60*1000),
                freeSeats: 4 + Math.round(Math.random() * 6),
                price: (600 + Math.round(Math.random() * 200)) * 1000,
                type: "first-class",
                ...data,
            }
        ]

        document.querySelector('#data').innerHTML = mockData.map((item, i) => {
            return `<Ticket
                src="${item.src}"
                dst="${item.dst}"
                passenger="${item.passenger}"
                departing="${item.departing}"
                startTime="${item.startTime}"
                timeLength="${item.timeLength}"
                freeSeats="${item.freeSeats}"
                price="${item.price}"
                type="${item.type}"
            ></Ticket>`
        }).join("");


        let header = document.querySelector(`#search-tickets-header`);
        let headerStatic = document.querySelector(`#search-tickets-header-static`);
        let headerEdit = document.querySelector(`#search-tickets-header-edit`);
        let headerStaticSubmit = document.querySelector(`#search-tickets-header-static-submit`);
        
        headerStaticSubmit.addEventListener("click", () => {
            headerStatic.classList.add("hidden");
            headerEdit.classList.remove("hidden");
        });
        

        const [
        src,
        dst,
        departing,
        passengers,
        ] = [
            header.getElementsByClassName("src")[0],
            header.getElementsByClassName("dst")[0],
            header.getElementsByClassName("departing")[0],
            header.getElementsByClassName("passenger")[0],
        ];

        const locationMap = {
        TEH: "تهران",
        MZD: "مازندران",
        BND: "بندر عباس",
        BDH: "بندر لنگه",
        };

        src.innerHTML = locationMap[data["src"]];
        dst.innerHTML = locationMap[data["dst"]];
        departing.innerHTML = data["departing"];
        passengers.innerHTML = data["passenger"];
    }

    async getHtml() {
        return `
        <div
            class="w-full py-10"
            id="search-tickets-header"
        >
            <div class="flex w-full items-center justify-center w-bold whitespace-nowrap text-title text-[12px] md:text-[15px]" id="search-tickets-header-static"> 
                <svg
                    viewBox="0 0 24 24"
                    width="1.5rem"
                    height="1.5rem"
                    fill="currentColor"
                    class="shrink-0 text-[#777] ml-2 -rotate-90"
                >
                    <path
                    d="M14.444 22.125H9.556c-.56 0-1.092-.26-1.421-.695a1.622 1.622 0 0 1-.277-1.429 1.731 1.731 0 0 1 1.074-1.148l1.218-.451-.166-3.722-6.046 2.233a.662.662 0 0 1-.076.022c-.551.143-1.06.06-1.433-.23-.357-.278-.554-.72-.554-1.243 0-.983.523-1.851 1.365-2.32l2-1.114v-.668c0-.93.788-1.687 1.757-1.687.666-.024 1.16.04 1.434.187.097.051.194.127.29.228l1.03-.575-.207-4.505c-.031-.842.024-1.788.674-2.462.429-.445 1.028-.671 1.782-.671.778 0 1.39.225 1.817.67.704.73.663 1.811.64 2.457l-.209 4.511 1.031.574c.096-.1.191-.175.287-.227.277-.148.771-.213 1.463-.186.944 0 1.732.756 1.732 1.686v.668l2 1.115c.841.469 1.364 1.336 1.364 2.263 0 .58-.197 1.021-.553 1.299-.372.29-.882.373-1.434.23a.67.67 0 0 1-.076-.022l-6.045-2.232-.167 3.721 1.218.451c.527.194.928.624 1.075 1.148a1.625 1.625 0 0 1-.277 1.43 1.79 1.79 0 0 1-1.422.694Z"
                    ></path>
                </svg>
                <h1 class="ml-4 text-4 font-medium">
                    بلیط هواپیما <span class="src font-bold"></span> به <span class="dst font-bold"></span>
                </h1>
                <svg
                    viewBox="0 0 24 24"
                    width="1.5rem"
                    height="1.5rem"
                    fill="currentColor"
                    class="text-[#777] mx-2"
                >
                    <path
                    d="M15.75 3a.75.75 0 0 1 .75.75v.75h2.25c1.196 0 2.178.939 2.246 2.118L21 6.75v12a2.253 2.253 0 0 1-2.118 2.246L18.75 21H5.25a2.253 2.253 0 0 1-2.246-2.118L3 18.75v-12c0-1.196.939-2.178 2.118-2.246L5.25 4.5H7.5v-.75a.75.75 0 1 1 1.5 0v.75h6v-.75a.75.75 0 0 1 .75-.75Zm-3 12a.75.75 0 0 0-.745.662L12 15.75v.75a.75.75 0 0 0 1.495.088l.005-.088v-.75a.75.75 0 0 0-.75-.75Zm-3 0a.75.75 0 0 0-.745.662L9 15.75v.75a.75.75 0 0 0 1.495.088l.005-.088v-.75a.75.75 0 0 0-.75-.75Zm-3 0a.75.75 0 0 0-.745.662L6 15.75v.75a.75.75 0 0 0 1.495.088L7.5 16.5v-.75a.75.75 0 0 0-.75-.75Zm9-3.75a.75.75 0 0 0-.745.662L15 12v.75a.75.75 0 0 0 1.495.088l.005-.088V12a.75.75 0 0 0-.75-.75Zm-3 0a.75.75 0 0 0-.745.662L12 12v.75a.75.75 0 0 0 1.495.088l.005-.088V12a.75.75 0 0 0-.75-.75Zm-3 0a.75.75 0 0 0-.745.662L9 12v.75a.75.75 0 0 0 1.495.088l.005-.088V12a.75.75 0 0 0-.75-.75Zm-3 0a.75.75 0 0 0-.745.662L6 12v.75a.75.75 0 0 0 1.495.088l.005-.088V12a.75.75 0 0 0-.75-.75Zm12-5.25H16.5v.75a.75.75 0 1 1-1.5 0V6H9v.75a.75.75 0 1 1-1.5 0V6H5.25a.75.75 0 0 0-.745.663L4.5 6.75v1.5h15v-1.5a.75.75 0 0 0-.75-.75Z"
                    ></path>
                </svg>
                <span>رفت: <span class="departing"></span></span>
                <span class="text-3 mx-6"><span class="passenger"></span> مسافر</span>
                <button
                    class="p-2 rounded-full bg-primary-light hover:bg-primary-dark text-black"
                    id="search-tickets-header-static-submit"
                >
                    <svg
                    viewBox="0 0 24 24"
                    width="1.25rem"
                    height="1.25rem"
                    fill="currentColor"
                    >
                    <path
                        d="M14.25 3A6.758 6.758 0 0 1 21 9.75a6.758 6.758 0 0 1-6.75 6.75 6.713 6.713 0 0 1-3.933-1.267l-5.445 5.445a1.095 1.095 0 0 1-1.55 0 1.098 1.098 0 0 1 0-1.551l5.444-5.445A6.713 6.713 0 0 1 7.5 9.75 6.758 6.758 0 0 1 14.25 3Zm-.005 2.259A4.5 4.5 0 0 0 9.75 9.754a4.5 4.5 0 0 0 4.495 4.496 4.5 4.5 0 0 0 4.496-4.495 4.5 4.5 0 0 0-4.496-4.496Z"
                        fill-rule="evenodd"
                    ></path>
                    </svg>
                </button>
            </div>
            <div class="w-full hidden" id="search-tickets-header-edit">
                <div class="mx-auto w-full max-w-[1200px] px-8">
                    <section class="card-box p-16 w-full">
                        <SearchTickets></SearchTickets>
                    </section>
                </div>
            </div>
        </div>
        <main class="mx-auto w-full max-w-[1200px] px-8">
            <h1 class="text-title text-[32px] mb-10 mr-2">صفحه‌ی لیست بلیط‌ها</h1>
            <div id="data" class="mb-20"></div>
        </main>
        `;
    }
}