import AbstractView from "../views/AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
    }

    async getJs(props, uniqueKey) {
        const tripType = document.querySelector("select");
        const src = document.querySelector("#src")
        const dst = document.querySelector("#dst")
        const switchBtn = document.querySelector("#switch")
        const departureDate = document.querySelector("#departureDate")
        const returnDate = document.querySelector("#returnDate")
        const returnDateBox = document.querySelector(".returnDateBox")
        const passengers = document.querySelector('#passengers')
        const increasePassengers = document.querySelector('.increasePassengers')
        const decreasePassengers = document.querySelector('.decreasePassengers')
        const searchBtn = document.querySelector('#searchBtn')


        if (props['data-info']) {
            const data = JSON.parse(props['data-info'])
            src.value = data.src
            dst.value = data.dst
            if (data.returning) {
                tripType.value = 'return'
                returnDate.value = data.returning
                returnDate.disabled = false;
                returnDateBox.classList.remove('opacity-40')
            } else {
                tripType.value = 'oneWay'
                returnDate.disabled = true;
                returnDateBox.classList.add('opacity-40')
            }
            departureDate.value = data.departing
            passengers.value = data.passenger
        }

        searchBtn.addEventListener('click', () => {
            let url = '/search-tickets?'
            url += `src=${src.value}&dst=${dst.value}&passenger=${passengers.value}&departing=${departureDate.value}`
            if (tripType.value === "return") {
                url += `&returning=${returnDate.value}`
            }
            window.navigateTo(url)
        })

        tripType.addEventListener('change', () => {
            if (tripType.value === "oneWay") {
                returnDate.disabled = true;
                returnDateBox.classList.add('opacity-40')
            } else {
                returnDate.disabled = false;
                returnDateBox.classList.remove('opacity-40')
            }
        })

        switchBtn.addEventListener('click', () => {
            [src.value, dst.value] = [dst.value, src.value]
        })

        increasePassengers.addEventListener('click', () => {
            passengers.value = parseInt(passengers.value) + 1
        })

        decreasePassengers.addEventListener('click', () => {
            if (parseInt(passengers.value) > 1) {
                passengers.value = parseInt(passengers.value) - 1
            }
        })
    }

    async getHtml(uniqueKey) {
        return `
            <div class="flex flex-col items-start justify-start">
                <div class="flex items-center justify-start w-full mb-8">
                    <select class="bg-transparent text-title text-[14px] outline-none border px-8 py-[2px] rounded-full">
                        <option value="oneWay">یک طرفه</option>
                        <option value="return">رفت و برگشت</option>
                    </select>
                </div>
                <div class="flex flex-col lg:flex-row items-start lg:items-stretch justify-start w-full">
                    <div class="flex items-center justify-start border border-[1.5px] rounded-5 w-full mt-8 lg:mt-0 relative">
                        <div class="flex flex-col items-start justify-start w-1/2 p-8">
                            <label class="text-[12px] text-title" for="src">مبدا</label>
                            <input class="w-full bg-transparent text-title py-[4px] text-[14px] outline-none" type="text" id="src" list="srcList" placeholder="انتخاب کنید...">
                            <datalist id="srcList">
                                <option value="TEH">تهران</option>
                                <option value="MZD">مازندران</option> 
                                <option value="BND">بندر عباس</option> 
                                <option value="BDH">بندر لنگه</option> 
                            </datalist>
                        </div>
                        <img id="switch" class="w-[32px] h-[32px] absolute right-1/2 top-1/2 translate-x-[50%] translate-y-[-50%] bg-white dark:bg-gray-300 rounded-full cursor-pointer" src="static/img/switch-arrow.svg" alt="switch arrow">
                        <div class="flex flex-col items-start justify-start w-1/2 border-r-[1.5px] p-8 pr-24">
                            <label class="text-[12px] text-title" for="dst">مقصد</label>
                            <input class="w-full bg-transparent text-title py-[4px] text-[14px] outline-none" type="text" id="dst" list="dstList" placeholder="انتخاب کنید...">
                            <datalist id="dstList">
                                <option value="TEH">تهران</option>
                                <option value="MZD">مازندران</option> 
                            </datalist>
                        </div>
                    </div>
                    <div class="flex items-center justify-start border border-[1.5px] rounded-5 w-full lg:mr-8 mt-8 lg:mt-0">
                        <div class="flex flex-col items-start justify-start w-1/2 p-8">
                            <label class="text-[12px] text-title" for="departureDate">تاریخ رفت</label>
                            <input class="w-full bg-transparent text-title py-[4px] text-[14px] outline-none" type="date" id="departureDate" placeholder="انتخاب کنید...">
                        </div>
                        <div class="returnDateBox flex flex-col items-start justify-start w-1/2 border-r-[1.5px] p-8 opacity-40">
                            <label class="text-[12px] text-title" for="returnDate">تاریخ برگشت</label>
                            <input class="w-full bg-transparent text-title py-[4px] text-[14px] outline-none" type="date" id="returnDate" placeholder="انتخاب کنید..." disabled>
                        </div>
                    </div>
                    <div class="flex items-center justify-start border border-[1.5px] rounded-5 w-full lg:w-2/3 lg:mr-8 mt-8 lg:mt-0">
                        <div class="flex flex-col items-start justify-start p-8 w-full">
                            <label class="text-[12px] text-title" for="departing">مسافران</label>
                            <div class="flex items-center justify-center w-full mt-[4px]">
                                    <button class="increasePassengers text-[14px] text-white bg-[#0077DB] rounded-5 w-[34px] h-[24px]">+</button>
                                     <input class="w-full bg-transparent text-title px-8 text-[14px] outline-none text-center" type="number" id="passengers" value="1">
                                    <button class="decreasePassengers text-[14px] text-white bg-[#0077DB] rounded-5 w-[34px] h-[24px]">-</button>
                                </div>
                        </div>
                    </div>
                    <button id="searchBtn" class="py-2 px-32 rounded bg-primary-light hover:bg-primary-dark text-black lg:mr-8 mt-8 lg:mt-0 w-full lg:w-1/3">جستجو</button>
                </div>
            </div>
        `;
    }
}