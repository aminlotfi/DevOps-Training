import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.component = {
            Ticket: () => import("../components/Ticket.js")
        }
        this.setTitle("هواپیمایی شریف | پنل کاربری");
    }

    async getJs(props, uniqueKey) {
        const logout = document.getElementById('logout');

        logout.addEventListener('click', () => {
            window.navigateTo('/')
        })

        const fakeUrl = '/panel?src=TEH&dst=MZD&passenger=5&departing=2022-12-09&returning=2022-12-12'

        let params = fakeUrl.split('?')[1].split('&'),
            data = {}, tmp;
        for (let i = 0, l = params.length; i < l; i++) {
            tmp = params[i].split('=');
            data[tmp[0]] = tmp[1];
        }

        const mockData = [
            {
                startTime: Date.now() + Math.floor((3 + Math.random() * 5)*60*60*1000),
                timeLength: Math.floor((1 + Math.random())*60*60*1000),
                freeSeats: 4 + Math.round(Math.random() * 6),
                price: (600 + Math.round(Math.random() * 200)) * 1000,
                type: "economy",
                passengersInfo: ({
                    name: "شریف شریفی",
                    nationalCode: "0251234567",
                }).toLocaleString(),
                isPurchased: true,
                ...data,
            }, {
                startTime: Date.now() + Math.floor((3 + Math.random() * 5)*60*60*1000),
                timeLength: Math.floor((1 + Math.random())*60*60*1000),
                freeSeats: 4 + Math.round(Math.random() * 6),
                price: (600 + Math.round(Math.random() * 200)) * 1000,
                type: "business",
                isPurchased: true,
                passengersInfo: {
                    name: "شریف شریفی",
                    nationalCode: "0251234567",
                },
                ...data,
            }, {
                startTime: Date.now() + Math.floor((3 + Math.random() * 5)*60*60*1000),
                timeLength: Math.floor((1 + Math.random())*60*60*1000),
                freeSeats: 4 + Math.round(Math.random() * 6),
                price: (600 + Math.round(Math.random() * 200)) * 1000,
                type: "first-class",
                passengersInfo: {
                    name: "شریف شریفی",
                    nationalCode: "0251234567",
                },
                isPurchased: true,
                ...data,
            }
        ]

        document.querySelector('#my-tickets').innerHTML = mockData.map((item, i) => {
            return `<Ticket
                src="${item.src}"
                dst="${item.dst}"
                passenger="${item.passenger}"
                passengersInfo="${item.passengersInfo}"
                departing="${item.departing}"
                startTime="${item.startTime}"
                timeLength="${item.timeLength}"
                freeSeats="${item.freeSeats}"
                price="${item.price}"
                type="${item.type}"
                isPurchased="${item.isPurchased}"
            ></Ticket>`
        }).join("");
    }

    async getHtml() {
        return `
        <main class="mx-auto w-full max-w-[1200px] px-16 xl:px-8">
            <div class="flex flex-col xl:flex-row items-start justify-start mt-24">
                <div class="card-box flex flex-col items-start justify-start p-8 xl:max-w-[280px] border w-full">
                    <div class="flex items-center justify-start text-[14px] text-title border-b-[1px] w-full p-8 pt-0 cursor-pointer">
                        <img src="static/img/profile.svg" alt="profile" class="w-[20px] h-[20px] ml-8">
                        <span>حساب کاربری</span>
                    </div>
                    <div id="logout" class="flex items-center justify-start text-[14px] text-title w-full p-8 pb-0 text-[#dc3545] cursor-pointer">
                        <img src="static/img/logout.svg" alt="profile" class="w-[20px] h-[20px] ml-8">
                        <span>خروج از حساب کاربری</span>
                    </div>
                </div>
                <div class="flex flex-col xl:mr-16 w-full">
                    <div class="card-box flex items-center justify-between w-full p-16 mt-16 xl:mt-0">
                        <div class="flex items-center justify-start">
                            <img src="static/img/avatar.svg" alt="Avatar">
                            <div class="text-title text-[16px] mr-16">شریف شریفی</div>
                        </div>
                        <button class="py-2 px-32 rounded bg-primary-light hover:bg-primary-dark text-black">ویرایش اطلاعات</button>
                    </div>
                    <div class="card-box flex flex-col items-start justify-start p-16 mt-16">
                        <h2 class="text-title text-[19px]">بلیت‌های من</h2>
                        <div id="my-tickets" class="mt-16 w-full"></div>
                    </div>
                </div>
            </div>
        </main>
        `;
    }
}