import AbstractView from "../views/AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
  }

  async getJs(props, uniqueKey) {
    let ticket = document.querySelector(`#ticket-${uniqueKey}`);
    const passengersInfoWrapper = ticket.querySelector("#passengersInfo");
    const buyTicket = ticket.querySelector("#buyTicket");

    buyTicket.addEventListener("click", () => {
      window.navigateTo('/buy-ticket')
    })

    const [
      src,
      dst,
      departing,
      startTime,
      timeLength,
      finishTime,
      limitedSeats,
      price,
      type,
      isPurchased,
    ] = [
      ticket.getElementsByClassName("src")[0],
      ticket.getElementsByClassName("dst")[0],
      ticket.getElementsByClassName("departing")[0],
      ticket.getElementsByClassName("startTime")[0],
      ticket.getElementsByClassName("timeLength")[0],
      ticket.getElementsByClassName("finishTime")[0],
      ticket.getElementsByClassName("limitedSeats")[0],
      ticket.getElementsByClassName("price")[0],
      ticket.getElementsByClassName("type")[0],
      ticket.getElementsByClassName("purchaseBox")[0]
    ];

    const locationMap = {
      TEH: "تهران",
      MZD: "مازندران",
      BND: "بندر عباس",
      BDH: "بندر لنگه",
    };

    src.innerHTML = locationMap[props["src"]];
    dst.innerHTML = locationMap[props["dst"]];

    departing.innerHTML = props["departing"];
    price.innerHTML = props["price"];
    if (Number(props["freeseats"]) >= 3 * Number(props["passenger"]))
      limitedSeats.classList.add("invisible");
    const startDate = new Date(Number(props["starttime"]));
    startTime.innerHTML =
      String(startDate.getHours()).padStart(2, "0") +
      ":" +
      String(startDate.getMinutes()).padStart(2, "0");
    const finishDate = new Date(
      Number(props["starttime"]) + Number(props["timelength"])
    );
    finishTime.innerHTML =
      String(finishDate.getHours()).padStart(2, "0") +
      ":" +
      String(finishDate.getMinutes()).padStart(2, "0");
    const len = Number(props["timelength"]);
    timeLength.innerHTML = `${Math.floor(len / (1000 * 3600))} ساعت و ${
      Math.floor(len / (1000 * 60)) % 60
    } دقیقه`;

    const typeMap = {
      economy: "اکونومی",
      business: "بیزینس",
      "first-class": "فرست کلاس",
    };
    type.innerHTML = typeMap[props["type"]];

    if (props["ispurchased"]) {
      isPurchased.classList.add("hidden");
      passengersInfoWrapper.classList.remove("hidden");
    }

    let passengersInfo = [
      {
        "name": "شریف شریفی",
        "nationalCode": "1234567890",
      },
      {
        "name": "محمدامین لطفی",
        "nationalCode": "0024567890",
      },
      {
        "name": "مهدی عبدی",
        "nationalCode": "0254567890",
      }
    ];

    let passengersInfoHtml = "";

    for (let i = 0; i < passengersInfo.length; i++) {
      passengersInfoHtml += `
            <div class="flex flex-row w-full items-start justify-start p-8 border-t-[1px] text-title text-[13px]">
              <div class="flex flex-col w-full items-start justify-start">
                  <span>مسافر ${i + 1}</span>
                  <span>${passengersInfo[i].name}</span>
              </div>
              <div class="flex flex-col w-full items-start justify-start">
                  <span>کد ملی</span>
                  <span>${passengersInfo[i].nationalCode}</span>
              </div>
            </div>
        `;
    }

    passengersInfoWrapper.innerHTML = passengersInfoHtml;
  }

  async getHtml(uniqueKey) {
      return `
          <div id="ticket-${uniqueKey}" class="flex flex-col card-box border p-8 mx-8 mb-16  shadow-sm">
              <div class="flex flex-col lg:flex-row w-full">
                  <div class="flex flex-col lg:flex-row items-center justify-between flex-1 p-4 text-title">
                      <div class="flex w-full lg:w-[60%] items-center py-6 px-2">
                          <span class="src ml-2 text-left text-lg w-20"></span>
                          <span class="startTime text-xl text-center font-bold w-[3rem]"></span>
                          <span
                              class="stops flex grow items-center justify-between text-grays-200 relative mx-3 md:mx-5 max-w-[12rem] text-[#aaa]"
                              style="margin-left: 0.5rem;">
                              <svg
                                  viewBox="0 0 24 24"
                                  width="1rem"
                                  height="1rem"
                                  fill="currentColor"
                              >
                                  <path
                                      d="M.601 12.008c0 .929.297 1.545 1.003 1.857.392.172.802.226 1.46.22l.362-.009 5.656-.24.26.368.326.493.42.659.87 1.41 1.573 2.626 1.678 2.855a2.204 2.204 0 0 0 1.858 1.155.9.9 0 0 0 .878-1.198l-3.018-8.582c-.008-.021-.002-.03.006-.03l6.447-.29.79 2.114.035.13c.257.593.77.862 1.287.761.61-.12 1.008-.711.889-1.322l-.005-.09.009-5.947c.05-.488-.338-1.007-.9-1.12-.546-.107-1.029.189-1.246.665l-.832 2.22-6.446-.29a.013.013 0 0 1-.011-.017l3.179-8.595a.9.9 0 0 0-.92-1.209l-.161.014c-.69.02-1.352.4-1.754 1.013L12.426 4.8l-1.21 2.02-.8 1.308-.54.86-.45.693-.238.347-.107.149-5.602-.264h-.623l-.16.007-.206.016c-1.287.127-1.889.767-1.889 2.072Z"
                                      fill-rule="evenodd"
                                  ></path>
                              </svg>
                              <div class="flex flex-col flex-1 relative">
                                  <div class="bg-[#ccc] h-[1px] w-full"></div>
                                  <div class="absolute top-2 w-full text-center text-xs timeLength whitespace-nowrap"></div>
                              </div>
                              <div class="rounded-full border-[#ccc] border-2 h-2 w-2"></div>
                          </span>
                          <span class="finishTime text-xl text-center font-bold w-[3rem]"></span>
                          <span class="dst mr-3 text-right text-lg w-20"></span>
                      </div>
                      <div class="px-6 mt-24 lg:mt-0">
                          <span class="departing"></span>
                      </div>
                      <div class="w-[8rem] pr-6 mt-24 lg:mt-0">
                          <span class="type"></span>
                      </div>
                  </div>
                  <div class="purchaseBox w-full lg:w-[18rem] p-16 pt-0 lg:p-4 flex flex-col items-center justify-center">
                      <div class="mt-6 self-end lg:self-center">
                        <span class="price text-2xl text-primary-dark font-bold"></span> <span class="text-[#999]">تومان</span>
                      </div>
                      <div class="my-2 w-full">
                        <button id="buyTicket" class="py-3 w-full rounded bg-primary-light hover:bg-primary-dark text-black">خرید بلیط</button>
                      </div>
                      <div class="limitedSeats text-red-500">ظرفیت محدود است</div>
                  </div>
              </div>
              <div id="passengersInfo" class="flex flex-col w-full items-start justify-start hidden"></div>
          </div>
      `;
  }
}
