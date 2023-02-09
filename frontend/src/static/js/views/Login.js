import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("هواپیمایی شریف | ورود");
  }

  async getJs(props, uniqueKey) {
    const form = document.querySelector("#loginForm");
    const email = document.querySelector("#email");
    const password = document.querySelector("#password");

    function isEmailValid() {
      return /\w+@\w+\.\w+/.test(email.value);
    }

    function isPasswordValid() {
      return password.value.length > 4;
    }

    email.addEventListener("input", () => {
      if (isEmailValid()) {
        email.nextSibling.nextSibling.classList.add("invisible");
      } else {
        email.nextSibling.nextSibling.classList.remove("invisible");
      }
    });

    password.addEventListener("input", () => {
      if (isPasswordValid()) {
        password.nextSibling.nextSibling.classList.add("invisible");
      } else {
        password.nextSibling.nextSibling.classList.remove("invisible");
      }
    });

    function isFormValid() {
      return isEmailValid() && isPasswordValid();
    }

    function resetForm() {
      email.value = "";
      password.value = "";
    }

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (isFormValid()) {
        const data = {
          email: email.value,
          password: password.value,
        };
        console.log(data)
        window.navigateTo("/panel");
        resetForm();
      }
    });
  }

  async getHtml() {
    return `
            <main class="mx-auto w-full max-w-[1200px] px-8">
                <div class="card-box flex flex-col items-start justify-start p-16 max-w-[450px] w-full mx-auto my-24">
                    <h1 class="text-title text-[21px] self-center">ورود</h1>
                    <h2 class="text-title text-[12px] self-center mt-8">به هواپیمایی شریف خوش آمدید!</h2>
                    <form id="loginForm" class="flex flex-col items-start justify-start w-full mt-16">
                        <div class="flex flex-col items-start justify-start w-full mt-8">
                            <label for="email" class="text-[14px] text-title">ایمیل<span class="text-red-500">*</span></label>
                            <input type="email" id="email" class="custom-input" required>
                            <small class="text-[12px] text-red-500 mt-1 invisible">فرمت ایمیل صحیح نیست</small>
                        </div>
                        <div class="flex flex-col items-start justify-start w-full mt-8">
                            <label for="password" class="text-[14px] text-title">رمز عبور<span class="text-red-500">*</span></label>
                            <input type="password" id="password" class="custom-input" autocomplete="new-password" required>
                            <small class="text-[12px] text-red-500 mt-1 invisible">رمز عبور باید بیشتر از 4 کاراکتر باشد</small>
                        </div>
                        <button type="submit" class="w-full bg-primary-light hover:bg-primary-dark text-black rounded-lg px-4 py-2 mt-8">ورود</button>                    
                    </form>
                    <div class="flex items-center justify-start w-full mt-16">
                        <p class="text-[13px] text-title">ثبت‌نام نکرده‌اید؟</p>
                        <a href="/signup" data-link class="text-[13px] text-primary-dark mr-8">ثبت‌نام</a>
                    </div>
                </div>
            </main>
        `;
  }
}
