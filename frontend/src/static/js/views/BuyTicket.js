import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("هواپیمایی شریف | خرید بلیط");
    }

    async getJs() {
        const origin = document.querySelector("#origin");
        const destination = document.querySelector("#destination");
        const flyTime = document.querySelector('#fly_time');
        const arrivalTime = document.querySelector('#arrival_time');
        const duration = document.querySelector('#duration');
        const airlineLogo1 = document.querySelector('#airlineLogo1');
        const airlineName1 = document.querySelector('#airlineName1');
        const cost4adults = document.querySelector('#cost4adults');
        const cost4kids = document.querySelector('#cost4kids');
        const cost4newborns = document.querySelector('#cost4newborns');
        const cost4all = document.querySelector('#cost4all');
        const cost4adultsLabel = document.querySelector('#cost4adultsLabel');
        const cost4kidsLabel = document.querySelector('#cost4kidsLabel');
        const cost4newbornsLabel = document.querySelector('#cost4newbornsLabel');
        const flyDate = document.querySelector('#flyDate');
        const tableOfPassengers = document.querySelector('#tableOfPassengers');
        const buyBtn = document.querySelector('#buyBtn');

        buyBtn.addEventListener('click', () => {
            window.navigateTo('/panel');
        })



        const temp = `<tr class="py-8"><td id="??" class="py-8">
        <div name="a_passenger_form">
            <div name="kind">
                <span id="ageRange" class="border-2 rounded-3xl py-2 px-4 text-sm text-title ml-8">نوزاد</span>
                <input type="radio" name="9" id="idcard" class="accent-blue-500" checked>
                <label for="idcard" class="peer-checked/draft:text-sky-500">کارت ملّی</label>
                <input type="radio" name="9" id="passport"\ class="accent-blue-500">
                <label for="passport">گذرنامه</label>
            </div>
            <form class="">
            
                <table class="w-full"><tr>
                <td class="w-max">
                <label for="firstNameEng">نام انگلیسی</label>
                </td><td class="w-full pr-2 ml-0">
                <input name="firstNameEng" id="firstName" type="text" 
                    class="w-full mx-0 bg-transparent b-1.5 py-8 px-4 border-light focus:outline-none focus:border-dark focus:border-3 rounded-lg border-2 mb-8"
                    placeholder="نام انگلیسی"/>
                </td></tr>

                <tr><td>
                <label for="lastNameEng" class="whitespace-nowrap">نام خانوادگی انگلیسی</label>
                </td><td class="pr-2 ml-0">
                <input name="lastNameEng" id="firstName" type="text" 
                    class="w-full mb-1.5 bg-transparent py-8 px-4 mx-0 border-light focus:outline-none focus:border-dark focus:border-3 rounded-lg border-2"
                    placeholder="نام خانوادگی انگلیسی"/>
                </td></tr>

                <tr><td>
                <label for"sex">جنسیت</label>
                </td><td class="pr-2 ml-0">
                <select name="sex" id="sex" class="w-full mx-0 bg-transparent mb-1.5 py-8 px-4 border-light focus:outline-none focus:border-dark focus:border-3 rounded-lg border-2">
                    <option value="male">آقا</option>
                    <option value="female">خانم</option>
                </select>
                </td></tr>

                
                <tr><td id="cont">

                </td>
                </tr>
                </table>
            </form>
        </div>
        </td></tr>`;
        const tempN = `
                
                
                <label for="nationalId">کد ملّی</label>
                </td><td class="pr-2 ml-0">
                <input name="nationalId" type="number" id="nationalId" 
                    class="w-full mx-0 bg-transparent mb-1.5 py-8 px-4 border-light focus:outline-none focus:border-dark focus:border-3 rounded-lg border-2"
                    placeholder="کد ملّی"/>
                </td></tr>
                
                <tr><td>
                <label for="firstName">نام</label>
                </td><td class="pr-2 ml-0">
                <input name="firstName" id="firstName" type="text"
                    class="w-full mx-0 bg-transparent mb-1.5 py-8 px-4 border-light focus:outline-none focus:border-dark focus:border-3 rounded-lg border-2"
                    placeholder="نام"/>
                </td></tr>

                <tr><td>
                <label for="lastName">نام خانوادگی</label>
                </td><td class="pr-2 ml-0">
                <input name="lastName" id="firstName" type="text"
                    class="w-full mx-0 bg-transparent mb-1.5 py-8 px-4 border-light focus:outline-none focus:border-dark focus:border-3 rounded-lg border-2"
                    placeholder="نام خانوادگی"/>
                </td></tr>

                <tr><td class="">
                    <label for"birthday">زادروز</label>
                </td><td class="pr-2 ml-0">
                    <table id="birthday" class="w-full mx-0 bg-transparent px-0">
                        <tr><td class="w-max mx-0">
                            <select name="birthdayDay" id="birthDay" class="w-full mx-0 bg-transparent py-8 px-2 border-light focus:outline-none focus:border-dark focus:border-3 focus:border-l-0 rounded-r-lg border-2 border-l-0"
                                placeholder="روز">
                                <option value="1">۱</option>
                                <option value="2">۲</option>
                                <option value="3">۳</option>
                                <option value="4">۴</option>
                                <option value="5">۵</option>
                                <option value="6">۶</option>
                                <option value="7">۷</option>
                                <option value="8">۸</option>
                                <option value="9">۹</option>
                                <option value="10">۱۰</option>
                                <option value="11">۱۱</option>
                                <option value="12">۱۲</option>
                                <option value="13">۱۳</option>
                                <option value="14">۱۴</option>
                                <option value="15">۱۵</option>
                                <option value="16">۱۶</option>
                                <option value="17">۱۷</option>
                                <option value="18">۱۸</option>
                                <option value="19">۱۹</option>
                                <option value="20">۲۰</option>
                                <option value="21">۲۱</option>
                                <option value="22">۲۲</option>
                                <option value="23">۲۳</option>
                                <option value="24">۲۴</option>
                                <option value="25">۲۵</option>
                                <option value="26">۲۶</option>
                                <option value="27">۲۷</option>
                                <option value="28">۲۸</option>
                                <option value="29">۲۹</option>
                                <option value="30">۳۰</option>
                                <option value="31">۳۱</option>
                            </select>
                        </td><td class="w-max mx-0">
                            <select name="birthdayMonth" id="birthMonth" class="w-full mx-0 bg-transparent py-8 px-2 border-light focus:outline-none focus:border-dark border-y-2"
                                placeholder="روز">
                                <option value="1">فروردین</option>
                                <option value="2">اردیبهشت</option>
                                <option value="3">خرداد</option>
                                <option value="4">تیر</option>
                                <option value="5">مرداد</option>
                                <option value="6">شهریور</option>
                                <option value="7">مهر</option>
                                <option value="8">آبان</option>
                                <option value="9">آذر</option>
                                <option value="10">دی</option>
                                <option value="11">بهمن</option>
                                <option value="12">اسفند</option>
                            </select>
                        </td><td class="w-max mx-0">
                            <select name="birthdayYear" id="birthYear" class="w-full mx-0 bg-transparent py-8 px-2 border-light focus:outline-none focus:border-dark focus:border-3 focus:border-r-0 rounded-l-lg border-2 border-r-0">
                                <option value="90">۱۳۹۰</option>
                                <option value="89">۱۳۸۹</option>
                                <option value="88">۱۳۸۸</option>
                                <option value="87">۱۳۸۷</option>
                                <option value="86">۱۳۸۶</option>
                                <option value="85">۱۳۸۵</option>
                                <option value="84">۱۳۸۴</option>
                                <option value="83">۱۳۸۳</option>
                                <option value="82">۱۳۸۲</option>
                                <option value="81">۱۳۸۱</option>
                                <option value="80">۱۳۸۰</option>
                                <option value="79">۱۳۷۹</option>
                                <option value="78">۱۳۷۸</option>
                            </select>
                        </td>
                        </tr>
                    </table>
                `;
        const tempP = `
                <label for="passportId">شماره‌ی گذرنامه</label>
                </td><td class="pr-2 ml-0">
                <input name="passportId" type="number" id="passportId" 
                    class="w-full mx-0 bg-transparent mb-1.5 py-8 px-4 border-light focus:outline-none focus:border-dark focus:border-3 rounded-lg border-2"
                    placeholder="شماره‌ی گذرنامه"/>
                </td></tr>
                
                <tr><td>
                <label for="bornCountry">کشور محل تولّد</label>
                </td><td class="pr-2 ml-0">
                <select id="bornCountry" class="w-full mx-0 bg-transparent py-8 px-2 border-light focus:outline-none focus:border-dark focus:border-3 rounded-lg border-2">
                    <option value="IR">ایران</option>
                    <option value="SA">عربستان</option>
                    <option value="QTR">قطر</option>
                    <option value="TUR">ترکیه</option>
                    <option value="US">ایالات متحده</option>
                    <option value="UAI">امارات متحده</option>
                    <option value="UK">انگلستان</option>
                    <option value="RU">روسیه</option>
                </select>
                </td></tr>

                <tr><td>
                <label for="passportCountry" class="w-max">کشور صادرکننده‌ي گذرنامه</label>
                </td><td class="pr-2 ml-0">
                <select id="passportCountry" class="w-full mx-0 bg-transparent py-8 px-2 border-light focus:outline-none focus:border-dark focus:border-3 rounded-lg border-2">
                    <option value="IR">ایران</option>
                    <option value="SA">عربستان</option>
                    <option value="QTR">قطر</option>
                    <option value="TUR">ترکیه</option>
                    <option value="US">ایالات متحده</option>
                    <option value="UAI">امارات متحده</option>
                    <option value="UK">انگلستان</option>
                    <option value="RU">روسیه</option>
                </select>
                </td></tr>

                <tr><td>
                <label for="lastName">نام خانوادگی</label>
                </td><td class="pr-2 ml-0">
                <input name="lastName" id="firstName" type="text"
                    class="w-full mx-0 bg-transparent mb-1.5 py-8 px-4 border-light focus:outline-none focus:border-dark focus:border-3 rounded-lg border-2"
                    placeholder="نام خانوادگی"/>
                </td></tr>

                <tr><td class="">
                    <label for"birthday">زادروز</label>
                </td><td class="pr-2 ml-0">
                    <table id="birthday" class="w-full mx-0 bg-transparent px-0">
                        <tr><td class="w-max mx-0">
                            <select name="birthdayDay" id="birthDay" class="w-full mx-0 bg-transparent py-8 px-2 border-light focus:outline-none focus:border-dark focus:border-3 focus:border-l-0 rounded-r-lg border-2 border-l-0"
                                placeholder="روز">
                                <option value="1">۱</option>
                                <option value="2">۲</option>
                                <option value="3">۳</option>
                                <option value="4">۴</option>
                                <option value="5">۵</option>
                                <option value="6">۶</option>
                                <option value="7">۷</option>
                                <option value="8">۸</option>
                                <option value="9">۹</option>
                                <option value="10">۱۰</option>
                                <option value="11">۱۱</option>
                                <option value="12">۱۲</option>
                                <option value="13">۱۳</option>
                                <option value="14">۱۴</option>
                                <option value="15">۱۵</option>
                                <option value="16">۱۶</option>
                                <option value="17">۱۷</option>
                                <option value="18">۱۸</option>
                                <option value="19">۱۹</option>
                                <option value="20">۲۰</option>
                                <option value="21">۲۱</option>
                                <option value="22">۲۲</option>
                                <option value="23">۲۳</option>
                                <option value="24">۲۴</option>
                                <option value="25">۲۵</option>
                                <option value="26">۲۶</option>
                                <option value="27">۲۷</option>
                                <option value="28">۲۸</option>
                                <option value="29">۲۹</option>
                                <option value="30">۳۰</option>
                                <option value="31">۳۱</option>
                            </select>
                        </td><td class="w-max mx-0">
                            <select name="birthdayMonth" id="birthMonth" class="w-full mx-0 bg-transparent py-8 px-2 border-light focus:outline-none focus:border-dark border-y-2"
                                placeholder="روز">
                                <option value="1">فروردین</option>
                                <option value="2">اردیبهشت</option>
                                <option value="3">خرداد</option>
                                <option value="4">تیر</option>
                                <option value="5">مرداد</option>
                                <option value="6">شهریور</option>
                                <option value="7">مهر</option>
                                <option value="8">آبان</option>
                                <option value="9">آذر</option>
                                <option value="10">دی</option>
                                <option value="11">بهمن</option>
                                <option value="12">اسفند</option>
                            </select>
                        </td><td class="w-max mx-0">
                            <select name="birthdayYear" id="birthYear" class="w-full mx-0 bg-transparent py-8 px-2 border-light focus:outline-none focus:border-dark focus:border-3 focus:border-r-0 rounded-l-lg border-2 border-r-0">
                                <option value="90">۱۳۹۰</option>
                                <option value="89">۱۳۸۹</option>
                                <option value="88">۱۳۸۸</option>
                                <option value="87">۱۳۸۷</option>
                                <option value="86">۱۳۸۶</option>
                                <option value="85">۱۳۸۵</option>
                                <option value="84">۱۳۸۴</option>
                                <option value="83">۱۳۸۳</option>
                                <option value="82">۱۳۸۲</option>
                                <option value="81">۱۳۸۱</option>
                                <option value="80">۱۳۸۰</option>
                                <option value="79">۱۳۷۹</option>
                                <option value="78">۱۳۷۸</option>
                            </select>
                        </td>
                        </tr>
                    </table>
                </td></tr>

                <tr><td class="">
                    <label for"passportExpireDate">انقضای گذرنامه</label>
                </td><td class="pr-2 ml-0">
                    <table id="passportExpireDate" class="w-full mx-0 bg-transparent px-0">
                        <tr><td class="w-max mx-0">
                            <select name="passportExpireDay" id="passportExpireDay" class="w-full mx-0 bg-transparent py-8 px-2 border-light focus:outline-none focus:border-dark focus:border-3 focus:border-l-0 rounded-r-lg border-2 border-l-0"
                                placeholder="روز">
                                <option value="1">۱</option>
                                <option value="2">۲</option>
                                <option value="3">۳</option>
                                <option value="4">۴</option>
                                <option value="5">۵</option>
                                <option value="6">۶</option>
                                <option value="7">۷</option>
                                <option value="8">۸</option>
                                <option value="9">۹</option>
                                <option value="10">۱۰</option>
                                <option value="11">۱۱</option>
                                <option value="12">۱۲</option>
                                <option value="13">۱۳</option>
                                <option value="14">۱۴</option>
                                <option value="15">۱۵</option>
                                <option value="16">۱۶</option>
                                <option value="17">۱۷</option>
                                <option value="18">۱۸</option>
                                <option value="19">۱۹</option>
                                <option value="20">۲۰</option>
                                <option value="21">۲۱</option>
                                <option value="22">۲۲</option>
                                <option value="23">۲۳</option>
                                <option value="24">۲۴</option>
                                <option value="25">۲۵</option>
                                <option value="26">۲۶</option>
                                <option value="27">۲۷</option>
                                <option value="28">۲۸</option>
                                <option value="29">۲۹</option>
                                <option value="30">۳۰</option>
                                <option value="31">۳۱</option>
                            </select>
                        </td><td class="w-max mx-0">
                            <select name="passportExpireMonth" id="passportExpireMonth" class="w-full mx-0 bg-transparent py-8 px-2 border-light focus:outline-none focus:border-dark border-y-2"
                                placeholder="روز">
                                <option value="1">فروردین</option>
                                <option value="2">اردیبهشت</option>
                                <option value="3">خرداد</option>
                                <option value="4">تیر</option>
                                <option value="5">مرداد</option>
                                <option value="6">شهریور</option>
                                <option value="7">مهر</option>
                                <option value="8">آبان</option>
                                <option value="9">آذر</option>
                                <option value="10">دی</option>
                                <option value="11">بهمن</option>
                                <option value="12">اسفند</option>
                            </select>
                        </td><td class="w-max mx-0">
                            <select name="passportExpireYear" id="passportExpireYear" class="w-full mx-0 bg-transparent py-8 px-2 border-light focus:outline-none focus:border-dark focus:border-3 focus:border-r-0 rounded-l-lg border-2 border-r-0">
                                <option value="01">۱۴۰۱</option>
                                <option value="02">۱۴۰۲</option>
                                <option value="03">۱۴۰۳</option>
                                <option value="04">۱۴۰۴</option>
                                <option value="05">۱۴۰۵</option>
                            </select>
                        </td>
                        </tr>
                    </table>
                </td>`;
        class time {
            constructor (h, m) {
                this.h = h;
                this.m = m;
            }
            getH () {
                return this.h;
            }
            getM () {
                return this.m;
            }
            getString (num) {
                var r = "" + num;
                while (r.length < 2) {
                  r = "0" + r;
                }
                return r;
            }
            getTime () {
                return this.getString(this.h)+":"+this.getString(this.m);
            }
        }
        var flight = {
            originCity: "تهران",
            originAirport: "مهرآباد",
            flyTime: new time(13, 0),
            arrivalTime: new time(14, 30),
            flyDate: "یکشنبه، ۲۰ آذر ۱۴۰۱",
            arrivalDate: "۲۰ آذر ۱۴۰۱",
            destinationCity: "مازندران",
            destinationAirport: "ساری",
            passengersNewborn: 1,
            passengersKid: 1,
            passengersAdult: 2,
            costPerPassengerNewborn: 2000000,
            costPerPassengerKid: 7000000,
            costPerPassengerAdult: 7500000,
            airlineName: "شرکت هواپیمایی شریف",
            airlineNameShort: "شریف",
            airlineLogo: "/static/img/logo.png",
            getDuration: function() {
                if (flight.flyTime.getM() <= flight.arrivalTime.getM()) {
                    return new time(flight.arrivalTime.getH()-flight.flyTime.getH(),
                    flight.arrivalTime.getM()-flight.flyTime.getM()).getTime();
                } else {
                    return new time(flight.arrivalTime.getH()-flight.flyTime.getH()-1,
                    60+flight.arrivalTime.getM()-flight.flyTime.getM()).getTime();
                }
            },
            getCostForAdults: function () {
                return this.costPerPassengerAdult * this.passengersAdult;
            },
            getCostForKids: function () {
                return this.costPerPassengerKid * this.passengersKid;
            },
            getCostForNewborns: function () {
                return this.costPerPassengerNewborn * this.passengersNewborn;
            },
            getCost: function () {
                return this.getCostForAdults()+this.getCostForKids()+this.getCostForNewborns();
            }
        };
        function setOrigin() {
            origin.innerHTML = flight.originCity;
        }
        function setDest() {
            destination.innerHTML = flight.destinationCity;
        }
        function setFlyTime() {
            flyTime.innerHTML = flight.flyTime.getTime();
        }
        function setArrivalTime() {
            arrivalTime.innerHTML = flight.arrivalTime.getTime();
        }
        function setDuration() {
            duration.innerHTML = flight.getDuration();
        }
        function setAirlineInfo() {
            airlineLogo1.setAttribute("src", flight.airlineLogo);
            airlineName1.innerHTML = flight.airlineNameShort;
        }
        function setFlyDate() {
            flyDate.innerHTML = flight.flyDate;
        }
        function setPassengersCostsInfo() {
            cost4adults.innerHTML = flight.getCostForAdults();
            cost4adultsLabel.innerHTML += ' ('+flight.passengersAdult+')';
            cost4kids.innerHTML = flight.getCostForKids();
            cost4kidsLabel.innerHTML += ' ('+flight.passengersKid+')';
            cost4newborns.innerHTML = flight.getCostForNewborns();
            cost4newbornsLabel.innerHTML += ' ('+flight.passengersNewborn+')';
            cost4all.innerHTML = flight.getCost();

        }

        function setNationalId (index) {
            document.querySelector("#iii"+index+" #cont").innerHTML = tempN;
        }

        function setPassport(index) {
            document.querySelector("#iii"+index+" #cont").innerHTML = tempP;
        }

        function getHtmlOfAPassenger(ageRange, index) {
            /**
             * @param ageRange: 0 if newbord, 1 if kid, 2 if adult
             */
            tableOfPassengers.innerHTML += temp;
            document.getElementsByName("qqq").forEach(element => {
                element.setAttribute("name", ""+index);
            document.getElementById("qqq").setAttribute("id", "iii"+index);
            switch (ageRange) {
                case 0:
                    document.querySelector("#iii"+index+" #ageRange").innerHTML = "نوزاد";
                    break;
                case 1:
                    document.querySelector("#iii"+index+" #ageRange").innerHTML = "کودک";
                    break;
                default:
                    break;
            }
            document.querySelector("#iii"+index+" #cont").innerHTML = tempN;
            document.querySelector("#iii"+index+" #passport").setAttribute("onclick",
                "setPassport("+index+")");
            document.querySelector("#iii"+index+" #nationalId").setAttribute("onclick",
                "setNationalId("+index+")");
             });
        }
        setOrigin();
        setDest();
        setFlyTime();
        setArrivalTime();
        setDuration();
        setAirlineInfo();
        setPassengersCostsInfo();
        setFlyDate();
        getHtmlOfAPassenger(0, 4);
    }

    async getHtml() {
        let theHtml = `
        <main class="mx-auto w-full max-w-[1200px] px-8">
            <h1 class="text-title text-[32px]">صفحه‌ی خرید بلیط</h1>
            <table name="info_brief" class="w-full rounded-2xl bg-white mt-16">
                <tr class="flex flex-col lg:flex-row card-box text-title">
                    <td name="origin_dest_and_time" class="p-8 w-full">
                        <table name="flight_info_brief" class="text-center items-center">
                            <tr>
                                <td colspan="4" class="text-right mb-20 pb-8 pr-2" id="flyDate">
                                    
                                </td>
                            </tr>
                            <tr class="m-2 items-center">
                                <td class="items-center px-2">
                                    <img id="airlineLogo1" src="" class="w-40 place-self-center bg-gray-300"/>
                                </td>
                                <td class="w-min" id="origin">
                                </td>
                                <td class="text-gray-400 pt-2 pb-0" id="duration">00:00</td>
                                <td class="w-min" id="destination">maghsad</td>
                            </tr>
                            <tr class="">
                                <td id="airlineName1" class="px-2 text-xs font-semibold pb-2 pt-0">
                                    airline
                                </td>
            
                                <td class="px-4">
                                    <span id="fly_time" class="font-bold pb-2 pt-0">00:00</span>
                                </td>
                                <td class="pb-2 pt-0">
                                    <span class="stops flex grow items-center justify-between text-grays-200 w-min">
                                    <svg viewBox="0 0 24 24" width="1rem" height="1rem" fill="#a1a1aa"><path d="M.601 12.008c0 .929.297 1.545 1.003 1.857.392.172.802.226 1.46.22l.362-.009 5.656-.24.26.368.326.493.42.659.87 1.41 1.573 2.626 1.678 2.855a2.204 2.204 0 0 0 1.858 1.155.9.9 0 0 0 .878-1.198l-3.018-8.582c-.008-.021-.002-.03.006-.03l6.447-.29.79 2.114.035.13c.257.593.77.862 1.287.761.61-.12 1.008-.711.889-1.322l-.005-.09.009-5.947c.05-.488-.338-1.007-.9-1.12-.546-.107-1.029.189-1.246.665l-.832 2.22-6.446-.29a.013.013 0 0 1-.011-.017l3.179-8.595a.9.9 0 0 0-.92-1.209l-.161.014c-.69.02-1.352.4-1.754 1.013L12.426 4.8l-1.21 2.02-.8 1.308-.54.86-.45.693-.238.347-.107.149-5.602-.264h-.623l-.16.007-.206.016c-1.287.127-1.889.767-1.889 2.072Z" fill-rule="evenodd"></path></svg>
                                    <span class="stops__point" data-v-355fb152=""></span>
                                    <hr class="min-w-[120px] w-full bg-light border-slate-900 bg-slate-200">
                                </td>
                                <td class = "px-4  pb-2 pt-0">
                                    <span id="arrival_time" class="font-bold  pb-2 pt-0">00:00</span>
                                    </span>
                                </td>
                            </tr>
                        </table>
                    </td>
            
                    <td class="w-full lg:w-1/4 items-center text-center p-16 text-title">
                        <table class="w-full">
                            <tr>
                                <td class="text-right" id="cost4adultsLabel">
                                    بزرگسال
                                </td>
                                <td class="text-left" id="cost4adults">
                                    ۱۱۱۱
                                </td>
                            </tr>
                            <tr>
                                <td class="text-right" id="cost4kidsLabel">
                                    کودک
                                </td>
                                <td class="text-left" id="cost4kids">
                                    ۲۲۲۲
                                </td>
                            </tr>
                            <tr>
                                <td class="text-right" id="cost4newbornsLabel">
                                    نوزاد
                                </td>
                                <td class="text-left" id="cost4newborns">
                                    ۳۳۳۳۳
                                </td>
                            </tr>
                            <tr class="items-center text-center"><td colspan="2" class="items-center"><hr class="w-full place-self-center bg-light border-slate-900 bg-slate-200"/></td></tr>
                            <tr class="">
                                <td class="text-right">
                                    مجموع
                                </td>
                                <td class="text-left" id="cost4all">

                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>

            <div name="forms" class="w-full text-lg items-center place-self-center card-box rounded-xl p-16 my-16 text-title">
                <table id="tableOfPassengers" calss="items-center place-self-center w-full mx-0 px-0 border-2 border-red-400 border-separate border-spacing-y-96"><tr>
                <td>
                <div name="a_passenger_form" calss="w-full my-8 py-8">
                    <div name="kind">
                        <span class="border-2 rounded-3xl py-2 px-4 text-sm ml-8 text-title">بزرگسال</span>
                        <input type="radio" name="1" id="idcard" class="accent-blue-500" checked>
                        <label for="idcard" class="peer-checked/draft:text-sky-500">کارت ملّی</label>
                        <input type="radio" id="passport" name="1" class="accent-blue-500">
                        <label for="passport">گذرنامه</label>
                    </div>
                    <form class="w-full">
                    
                        <table class="w-full border-0"><tr calss="w-full">
                        <td class="w-max">
                        <label for="firstNameEng">نام انگلیسی</label>
                        </td><td class="w-full pr-2 ml-0">
                        <input name="firstNameEng" id="firstName" type="text" 
                            class="w-full mx-0 bg-transparent b-1.5 py-8 px-4 border-light focus:outline-none focus:border-dark focus:border-3 rounded-lg border-2 mb-8"
                            placeholder="نام انگلیسی"/>
                        </td></tr>

                        <tr><td>
                        <label for="lastNameEng" class="whitespace-nowrap">نام خانوادگی انگلیسی</label>
                        </td><td class="pr-2 ml-0">
                        <input name="lastNameEng" id="firstName" type="text" 
                            class="w-full mb-1.5 bg-transparent py-8 px-4 mx-0 border-light focus:outline-none focus:border-dark focus:border-3 rounded-lg border-2"
                            placeholder="نام خانوادگی انگلیسی"/>
                        </td></tr>

                        <tr><td>
                        <label for"sex">جنسیت</label>
                        </td><td class="pr-2 ml-0">
                        <select name="sex" id="sex" class="w-full mx-0 bg-transparent mb-1.5 py-8 px-4 border-light focus:outline-none focus:border-dark focus:border-3 rounded-lg border-2">
                            <option value="male">آقا</option>
                            <option value="female">خانم</option>
                        </select>
                        </td></tr>

                        
                        <tr><td>
                        <label for="nationalId">کد ملّی</label>
                        </td><td class="pr-2 ml-0">
                        <input name="nationalId" type="number" id="nationalId" 
                            class="w-full mx-0 bg-transparent mb-1.5 py-8 px-4 border-light focus:outline-none focus:border-dark focus:border-3 rounded-lg border-2"
                            placeholder="کد ملّی"/>
                        </td></tr>
                        
                        <tr><td>
                        <label for="firstName">نام</label>
                        </td><td class="pr-2 ml-0">
                        <input name="firstName" id="firstName" type="text"
                            class="w-full mx-0 bg-transparent mb-1.5 py-8 px-4 border-light focus:outline-none focus:border-dark focus:border-3 rounded-lg border-2"
                            placeholder="نام"/>
                        </td></tr>

                        <tr><td>
                        <label for="lastName">نام خانوادگی</label>
                        </td><td class="pr-2 ml-0">
                        <input name="lastName" id="firstName" type="text"
                            class="w-full mx-0 bg-transparent mb-1.5 py-8 px-4 border-light focus:outline-none focus:border-dark focus:border-3 rounded-lg border-2"
                            placeholder="نام خانوادگی"/>
                        </td></tr>

                        <tr><td class="">
                            <label for"birthday">زادروز</label>
                        </td><td class="pr-2 ml-0">
                            <table id="birthday" class="w-full mx-0 bg-transparent px-0">
                                <tr><td class="w-max mx-0">
                                    <select name="birthdayDay" id="birthDay" class="w-full mx-0 bg-transparent py-8 px-2 border-light focus:outline-none focus:border-dark focus:border-3 focus:border-l-0 rounded-r-lg border-2 border-l-0"
                                        placeholder="روز">
                                        <option value="1">۱</option>
                                        <option value="2">۲</option>
                                        <option value="3">۳</option>
                                        <option value="4">۴</option>
                                        <option value="5">۵</option>
                                        <option value="6">۶</option>
                                        <option value="7">۷</option>
                                        <option value="8">۸</option>
                                        <option value="9">۹</option>
                                        <option value="10">۱۰</option>
                                        <option value="11">۱۱</option>
                                        <option value="12">۱۲</option>
                                        <option value="13">۱۳</option>
                                        <option value="14">۱۴</option>
                                        <option value="15">۱۵</option>
                                        <option value="16">۱۶</option>
                                        <option value="17">۱۷</option>
                                        <option value="18">۱۸</option>
                                        <option value="19">۱۹</option>
                                        <option value="20">۲۰</option>
                                        <option value="21">۲۱</option>
                                        <option value="22">۲۲</option>
                                        <option value="23">۲۳</option>
                                        <option value="24">۲۴</option>
                                        <option value="25">۲۵</option>
                                        <option value="26">۲۶</option>
                                        <option value="27">۲۷</option>
                                        <option value="28">۲۸</option>
                                        <option value="29">۲۹</option>
                                        <option value="30">۳۰</option>
                                        <option value="31">۳۱</option>
                                    </select>
                                </td><td class="w-max mx-0">
                                    <select name="birthdayMonth" id="birthMonth" class="w-full mx-0 bg-transparent py-8 px-2 border-light focus:outline-none focus:border-dark border-y-2"
                                        placeholder="روز">
                                        <option value="1">فروردین</option>
                                        <option value="2">اردیبهشت</option>
                                        <option value="3">خرداد</option>
                                        <option value="4">تیر</option>
                                        <option value="5">مرداد</option>
                                        <option value="6">شهریور</option>
                                        <option value="7">مهر</option>
                                        <option value="8">آبان</option>
                                        <option value="9">آذر</option>
                                        <option value="10">دی</option>
                                        <option value="11">بهمن</option>
                                        <option value="12">اسفند</option>
                                    </select>
                                </td><td class="w-max mx-0">
                                    <select name="birthdayYear" id="birthYear" class="w-full mx-0 bg-transparent py-8 px-2 border-light focus:outline-none focus:border-dark focus:border-3 focus:border-r-0 rounded-l-lg border-2 border-r-0">
                                        <option value="90">۱۳۹۰</option>
                                        <option value="89">۱۳۸۹</option>
                                        <option value="88">۱۳۸۸</option>
                                        <option value="87">۱۳۸۷</option>
                                        <option value="86">۱۳۸۶</option>
                                        <option value="85">۱۳۸۵</option>
                                        <option value="84">۱۳۸۴</option>
                                        <option value="83">۱۳۸۳</option>
                                        <option value="82">۱۳۸۲</option>
                                        <option value="81">۱۳۸۱</option>
                                        <option value="80">۱۳۸۰</option>
                                        <option value="79">۱۳۷۹</option>
                                        <option value="78">۱۳۷۸</option>
                                    </select>
                                </td>
                                </tr>
                            </table>
                        </td></tr>
                        </table>
                    </form>
                </div>
                </td></tr>
                <!-- -->
                <tr class="py-8"><td class="py-8">
                <div name="a_passenger_form">
                    <div name="kind">
                        <span class="border-2 rounded-3xl py-2 px-4 text-sm ml-8 text-title">بزرگسال</span>
                        <input type="radio" name="2" id="idcard" class="accent-blue-500" checked>
                        <label for="idcard" class="peer-checked/draft:text-sky-500">کارت ملّی</label>
                        <input type="radio" id="passport" name="2" class="accent-blue-500">
                        <label for="passport">گذرنامه</label>
                    </div>
                    <form class="">
                    
                        <table class="w-full"><tr>
                        <td class="w-max">
                        <label for="firstNameEng">نام انگلیسی</label>
                        </td><td class="w-full pr-2 ml-0">
                        <input name="firstNameEng" id="firstName" type="text" 
                            class="w-full mx-0 bg-transparent b-1.5 py-8 px-4 border-light focus:outline-none focus:border-dark focus:border-3 rounded-lg border-2 mb-8 bg-transparent"
                            placeholder="نام انگلیسی"/>
                        </td></tr>

                        <tr><td>
                        <label for="lastNameEng" class="whitespace-nowrap">نام خانوادگی انگلیسی</label>
                        </td><td class="pr-2 ml-0">
                        <input name="lastNameEng" id="firstName" type="text" 
                            class="w-full mb-1.5 bg-transparent py-8 px-4 mx-0 border-light focus:outline-none focus:border-dark focus:border-3 rounded-lg border-2"
                            placeholder="نام خانوادگی انگلیسی"/>
                        </td></tr>

                        <tr><td>
                        <label for"sex">جنسیت</label>
                        </td><td class="pr-2 ml-0">
                        <select name="sex" id="sex" class="w-full mx-0 bg-transparent mb-1.5 py-8 px-4 border-light focus:outline-none focus:border-dark focus:border-3 rounded-lg border-2">
                            <option value="male">آقا</option>
                            <option value="female">خانم</option>
                        </select>
                        </td></tr>

                        
                        <tr><td>
                        <label for="nationalId">کد ملّی</label>
                        </td><td class="pr-2 ml-0">
                        <input name="nationalId" type="number" id="nationalId" 
                            class="w-full mx-0 bg-transparent mb-1.5 py-8 px-4 border-light focus:outline-none focus:border-dark focus:border-3 rounded-lg border-2"
                            placeholder="کد ملّی"/>
                        </td></tr>
                        
                        <tr><td>
                        <label for="firstName">نام</label>
                        </td><td class="pr-2 ml-0">
                        <input name="firstName" id="firstName" type="text"
                            class="w-full mx-0 bg-transparent mb-1.5 py-8 px-4 border-light focus:outline-none focus:border-dark focus:border-3 rounded-lg border-2"
                            placeholder="نام"/>
                        </td></tr>

                        <tr><td>
                        <label for="lastName">نام خانوادگی</label>
                        </td><td class="pr-2 ml-0">
                        <input name="lastName" id="firstName" type="text"
                            class="w-full mx-0 bg-transparent mb-1.5 py-8 px-4 border-light focus:outline-none focus:border-dark focus:border-3 rounded-lg border-2"
                            placeholder="نام خانوادگی"/>
                        </td></tr>

                        <tr><td class="">
                            <label for"birthday">زادروز</label>
                        </td><td class="pr-2 ml-0">
                            <table id="birthday" class="w-full mx-0 bg-transparent px-0">
                                <tr><td class="w-max mx-0">
                                    <select name="birthdayDay" id="birthDay" class="w-full mx-0 bg-transparent py-8 px-2 border-light focus:outline-none focus:border-dark focus:border-3 focus:border-l-0 rounded-r-lg border-2 border-l-0"
                                        placeholder="روز">
                                        <option value="1">۱</option>
                                        <option value="2">۲</option>
                                        <option value="3">۳</option>
                                        <option value="4">۴</option>
                                        <option value="5">۵</option>
                                        <option value="6">۶</option>
                                        <option value="7">۷</option>
                                        <option value="8">۸</option>
                                        <option value="9">۹</option>
                                        <option value="10">۱۰</option>
                                        <option value="11">۱۱</option>
                                        <option value="12">۱۲</option>
                                        <option value="13">۱۳</option>
                                        <option value="14">۱۴</option>
                                        <option value="15">۱۵</option>
                                        <option value="16">۱۶</option>
                                        <option value="17">۱۷</option>
                                        <option value="18">۱۸</option>
                                        <option value="19">۱۹</option>
                                        <option value="20">۲۰</option>
                                        <option value="21">۲۱</option>
                                        <option value="22">۲۲</option>
                                        <option value="23">۲۳</option>
                                        <option value="24">۲۴</option>
                                        <option value="25">۲۵</option>
                                        <option value="26">۲۶</option>
                                        <option value="27">۲۷</option>
                                        <option value="28">۲۸</option>
                                        <option value="29">۲۹</option>
                                        <option value="30">۳۰</option>
                                        <option value="31">۳۱</option>
                                    </select>
                                </td><td class="w-max mx-0">
                                    <select name="birthdayMonth" id="birthMonth" class="w-full mx-0 bg-transparent py-8 px-2 border-light focus:outline-none focus:border-dark border-y-2"
                                        placeholder="روز">
                                        <option value="1">فروردین</option>
                                        <option value="2">اردیبهشت</option>
                                        <option value="3">خرداد</option>
                                        <option value="4">تیر</option>
                                        <option value="5">مرداد</option>
                                        <option value="6">شهریور</option>
                                        <option value="7">مهر</option>
                                        <option value="8">آبان</option>
                                        <option value="9">آذر</option>
                                        <option value="10">دی</option>
                                        <option value="11">بهمن</option>
                                        <option value="12">اسفند</option>
                                    </select>
                                </td><td class="w-max mx-0">
                                    <select name="birthdayYear" id="birthYear" class="w-full mx-0 bg-transparent py-8 px-2 border-light focus:outline-none focus:border-dark focus:border-3 focus:border-r-0 rounded-l-lg border-2 border-r-0">
                                        <option value="90">۱۳۹۰</option>
                                        <option value="89">۱۳۸۹</option>
                                        <option value="88">۱۳۸۸</option>
                                        <option value="87">۱۳۸۷</option>
                                        <option value="86">۱۳۸۶</option>
                                        <option value="85">۱۳۸۵</option>
                                        <option value="84">۱۳۸۴</option>
                                        <option value="83">۱۳۸۳</option>
                                        <option value="82">۱۳۸۲</option>
                                        <option value="81">۱۳۸۱</option>
                                        <option value="80">۱۳۸۰</option>
                                        <option value="79">۱۳۷۹</option>
                                        <option value="78">۱۳۷۸</option>
                                    </select>
                                </td>
                                </tr>
                            </table>
                        </td></tr>
                        </table>
                    </form>
                </div>
                </td></tr>
                <!-- -->
                <tr class="py-8"><td class="py-8">
                <div name="a_passenger_form">
                    <div name="kind">
                        <span class="border-2 rounded-3xl py-2 px-4 text-sm ml-8">کودک</span>
                        <input type="radio" name="3" id="idcard" class="accent-blue-500" checked>
                        <label for="idcard" class="peer-checked/draft:text-sky-500">کارت ملّی</label>
                        <input type="radio" id="passport" name="3" class="accent-blue-500">
                        <label for="passport">گذرنامه</label>
                    </div>
                    <form class="">
                    
                        <table class="w-full"><tr>
                        <td class="w-max">
                        <label for="firstNameEng">نام انگلیسی</label>
                        </td><td class="w-full pr-2 ml-0">
                        <input name="firstNameEng" id="firstName" type="text" 
                            class="w-full mx-0 bg-transparent b-1.5 py-8 px-4 border-light focus:outline-none focus:border-dark focus:border-3 rounded-lg border-2 mb-8"
                            placeholder="نام انگلیسی"/>
                        </td></tr>

                        <tr><td>
                        <label for="lastNameEng" class="whitespace-nowrap">نام خانوادگی انگلیسی</label>
                        </td><td class="pr-2 ml-0">
                        <input name="lastNameEng" id="firstName" type="text" 
                            class="w-full mb-1.5 bg-transparent py-8 px-4 mx-0 border-light focus:outline-none focus:border-dark focus:border-3 rounded-lg border-2"
                            placeholder="نام خانوادگی انگلیسی"/>
                        </td></tr>

                        <tr><td>
                        <label for"sex">جنسیت</label>
                        </td><td class="pr-2 ml-0">
                        <select name="sex" id="sex" class="w-full mx-0 bg-transparent mb-1.5 py-8 px-4 border-light focus:outline-none focus:border-dark focus:border-3 rounded-lg border-2">
                            <option value="male">آقا</option>
                            <option value="female">خانم</option>
                        </select>
                        </td></tr>

                        
                        <tr><td>
                        <label for="passportId">شماره‌ی گذرنامه</label>
                        </td><td class="pr-2 ml-0">
                        <input name="passportId" type="number" id="passportId" 
                            class="w-full mx-0 bg-transparent mb-1.5 py-8 px-4 border-light focus:outline-none focus:border-dark focus:border-3 rounded-lg border-2"
                            placeholder="شماره‌ی گذرنامه"/>
                        </td></tr>
                        
                        <tr><td>
                        <label for="bornCountry">کشور محل تولّد</label>
                        </td><td class="pr-2 ml-0">
                        <select id="bornCountry" class="w-full mx-0 bg-transparent py-8 px-2 border-light focus:outline-none focus:border-dark focus:border-3 rounded-lg border-2">
                            <option value="IR">ایران</option>
                            <option value="SA">عربستان</option>
                            <option value="QTR">قطر</option>
                            <option value="TUR">ترکیه</option>
                            <option value="US">ایالات متحده</option>
                            <option value="UAI">امارات متحده</option>
                            <option value="UK">انگلستان</option>
                            <option value="RU">روسیه</option>
                        </select>
                        </td></tr>

                        <tr><td>
                        <label for="passportCountry" class="w-max">کشور صادرکننده‌ي گذرنامه</label>
                        </td><td class="pr-2 ml-0">
                        <select id="passportCountry" class="w-full mx-0 bg-transparent py-8 px-2 border-light focus:outline-none focus:border-dark focus:border-3 rounded-lg border-2">
                            <option value="IR">ایران</option>
                            <option value="SA">عربستان</option>
                            <option value="QTR">قطر</option>
                            <option value="TUR">ترکیه</option>
                            <option value="US">ایالات متحده</option>
                            <option value="UAI">امارات متحده</option>
                            <option value="UK">انگلستان</option>
                            <option value="RU">روسیه</option>
                        </select>
                        </td></tr>

                        <tr><td>
                        <label for="lastName">نام خانوادگی</label>
                        </td><td class="pr-2 ml-0">
                        <input name="lastName" id="firstName" type="text"
                            class="w-full mx-0 bg-transparent mb-1.5 py-8 px-4 border-light focus:outline-none focus:border-dark focus:border-3 rounded-lg border-2"
                            placeholder="نام خانوادگی"/>
                        </td></tr>

                        <tr><td class="">
                            <label for"birthday">زادروز</label>
                        </td><td class="pr-2 ml-0">
                            <table id="birthday" class="w-full mx-0 bg-transparent px-0">
                                <tr><td class="w-max mx-0">
                                    <select name="birthdayDay" id="birthDay" class="w-full mx-0 bg-transparent py-8 px-2 border-light focus:outline-none focus:border-dark focus:border-3 focus:border-l-0 rounded-r-lg border-2 border-l-0"
                                        placeholder="روز">
                                        <option value="1">۱</option>
                                        <option value="2">۲</option>
                                        <option value="3">۳</option>
                                        <option value="4">۴</option>
                                        <option value="5">۵</option>
                                        <option value="6">۶</option>
                                        <option value="7">۷</option>
                                        <option value="8">۸</option>
                                        <option value="9">۹</option>
                                        <option value="10">۱۰</option>
                                        <option value="11">۱۱</option>
                                        <option value="12">۱۲</option>
                                        <option value="13">۱۳</option>
                                        <option value="14">۱۴</option>
                                        <option value="15">۱۵</option>
                                        <option value="16">۱۶</option>
                                        <option value="17">۱۷</option>
                                        <option value="18">۱۸</option>
                                        <option value="19">۱۹</option>
                                        <option value="20">۲۰</option>
                                        <option value="21">۲۱</option>
                                        <option value="22">۲۲</option>
                                        <option value="23">۲۳</option>
                                        <option value="24">۲۴</option>
                                        <option value="25">۲۵</option>
                                        <option value="26">۲۶</option>
                                        <option value="27">۲۷</option>
                                        <option value="28">۲۸</option>
                                        <option value="29">۲۹</option>
                                        <option value="30">۳۰</option>
                                        <option value="31">۳۱</option>
                                    </select>
                                </td><td class="w-max mx-0">
                                    <select name="birthdayMonth" id="birthMonth" class="w-full mx-0 bg-transparent py-8 px-2 border-light focus:outline-none focus:border-dark border-y-2"
                                        placeholder="روز">
                                        <option value="1">فروردین</option>
                                        <option value="2">اردیبهشت</option>
                                        <option value="3">خرداد</option>
                                        <option value="4">تیر</option>
                                        <option value="5">مرداد</option>
                                        <option value="6">شهریور</option>
                                        <option value="7">مهر</option>
                                        <option value="8">آبان</option>
                                        <option value="9">آذر</option>
                                        <option value="10">دی</option>
                                        <option value="11">بهمن</option>
                                        <option value="12">اسفند</option>
                                    </select>
                                </td><td class="w-max mx-0">
                                    <select name="birthdayYear" id="birthYear" class="w-full mx-0 bg-transparent py-8 px-2 border-light focus:outline-none focus:border-dark focus:border-3 focus:border-r-0 rounded-l-lg border-2 border-r-0">
                                        <option value="90">۱۳۹۰</option>
                                        <option value="89">۱۳۸۹</option>
                                        <option value="88">۱۳۸۸</option>
                                        <option value="87">۱۳۸۷</option>
                                        <option value="86">۱۳۸۶</option>
                                        <option value="85">۱۳۸۵</option>
                                        <option value="84">۱۳۸۴</option>
                                        <option value="83">۱۳۸۳</option>
                                        <option value="82">۱۳۸۲</option>
                                        <option value="81">۱۳۸۱</option>
                                        <option value="80">۱۳۸۰</option>
                                        <option value="79">۱۳۷۹</option>
                                        <option value="78">۱۳۷۸</option>
                                    </select>
                                </td>
                                </tr>
                            </table>
                        </td></tr>

                        <tr><td class="">
                            <label for"passportExpireDate">انقضای گذرنامه</label>
                        </td><td class="pr-2 ml-0">
                            <table id="passportExpireDate" class="w-full mx-0 bg-transparent px-0">
                                <tr><td class="w-max mx-0">
                                    <select name="passportExpireDay" id="passportExpireDay" class="w-full mx-0 bg-transparent py-8 px-2 border-light focus:outline-none focus:border-dark focus:border-3 focus:border-l-0 rounded-r-lg border-2 border-l-0"
                                        placeholder="روز">
                                        <option value="1">۱</option>
                                        <option value="2">۲</option>
                                        <option value="3">۳</option>
                                        <option value="4">۴</option>
                                        <option value="5">۵</option>
                                        <option value="6">۶</option>
                                        <option value="7">۷</option>
                                        <option value="8">۸</option>
                                        <option value="9">۹</option>
                                        <option value="10">۱۰</option>
                                        <option value="11">۱۱</option>
                                        <option value="12">۱۲</option>
                                        <option value="13">۱۳</option>
                                        <option value="14">۱۴</option>
                                        <option value="15">۱۵</option>
                                        <option value="16">۱۶</option>
                                        <option value="17">۱۷</option>
                                        <option value="18">۱۸</option>
                                        <option value="19">۱۹</option>
                                        <option value="20">۲۰</option>
                                        <option value="21">۲۱</option>
                                        <option value="22">۲۲</option>
                                        <option value="23">۲۳</option>
                                        <option value="24">۲۴</option>
                                        <option value="25">۲۵</option>
                                        <option value="26">۲۶</option>
                                        <option value="27">۲۷</option>
                                        <option value="28">۲۸</option>
                                        <option value="29">۲۹</option>
                                        <option value="30">۳۰</option>
                                        <option value="31">۳۱</option>
                                    </select>
                                </td><td class="w-max mx-0">
                                    <select name="passportExpireMonth" id="passportExpireMonth" class="w-full mx-0 bg-transparent py-8 px-2 border-light focus:outline-none focus:border-dark border-y-2"
                                        placeholder="روز">
                                        <option value="1">فروردین</option>
                                        <option value="2">اردیبهشت</option>
                                        <option value="3">خرداد</option>
                                        <option value="4">تیر</option>
                                        <option value="5">مرداد</option>
                                        <option value="6">شهریور</option>
                                        <option value="7">مهر</option>
                                        <option value="8">آبان</option>
                                        <option value="9">آذر</option>
                                        <option value="10">دی</option>
                                        <option value="11">بهمن</option>
                                        <option value="12">اسفند</option>
                                    </select>
                                </td><td class="w-max mx-0">
                                    <select name="passportExpireYear" id="passportExpireYear" class="w-full mx-0 bg-transparent py-8 px-2 border-light focus:outline-none focus:border-dark focus:border-3 focus:border-r-0 rounded-l-lg border-2 border-r-0">
                                        <option value="01">۱۴۰۱</option>
                                        <option value="02">۱۴۰۲</option>
                                        <option value="03">۱۴۰۳</option>
                                        <option value="04">۱۴۰۴</option>
                                        <option value="05">۱۴۰۵</option>
                                    </select>
                                </td>
                                </tr>
                            </table>
                        </td></tr>
                        </table>
                    </form>
                </div>
                </td></tr>
                </table>
            </div>

            <a href="">
            <button id="buyBtn" class="w-full py-2 px-4 rounded bg-primary-light hover:bg-primary-dark text-black">ادامه‌ی خرید</button>
            </a>
        </main>
        `;
        return theHtml;
    }
}