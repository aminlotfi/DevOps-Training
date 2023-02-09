import AbstractView from "./AbstractView.js"

export default class extends AbstractView {
    constructor() {
        super()
        this.setTitle("هواپیمایی شریف | ثبت‌نام")
    }

    async getJs(props, uniqueKey) {
        const form = document.querySelector("#signupForm")
        const firstname = document.querySelector("#firstname")
        const lastname = document.querySelector("#lastname")
        const email = document.querySelector("#email")
        const passport = document.querySelector("#passport")
        const password = document.querySelector("#password")
        const confirmPassword = document.querySelector("#confirmPassword")

        function isFirstnameValid() {
            return firstname.value.length > 0
        }

        function isLastnameValid() {
            return lastname.value.length > 0
        }

        function isEmailValid() {
            return /\w+@\w+\.\w+/.test(email.value)
        }

        function isPassportValid() {
            return passport.value.length > 0
        }

        function isPasswordValid() {
            return password.value.length > 4
        }

        function isConfirmPasswordValid() {
            return confirmPassword.value === password.value
        }

        firstname.addEventListener("input", () => {
            if (isFirstnameValid()) {
                firstname.nextSibling.nextSibling.classList.add("invisible")
            } else {
                firstname.nextSibling.nextSibling.classList.remove("invisible")
            }
        })

        lastname.addEventListener("input", () => {
            if (isLastnameValid()) {
                lastname.nextSibling.nextSibling.classList.add("invisible")
            } else {
                lastname.nextSibling.nextSibling.classList.remove("invisible")
            }
        })

        email.addEventListener("input", () => {
            if (isEmailValid()) {
                email.nextSibling.nextSibling.classList.add("invisible")
            } else {
                email.nextSibling.nextSibling.classList.remove("invisible")
            }
        })

        passport.addEventListener("input", () => {
            if (isPassportValid()) {
                passport.nextSibling.nextSibling.classList.add("invisible")
            } else {
                passport.nextSibling.nextSibling.classList.remove("invisible")
            }
        })

        password.addEventListener("input", () => {
            if (isPasswordValid()) {
                password.nextSibling.nextSibling.classList.add("invisible")
            } else {
                password.nextSibling.nextSibling.classList.remove("invisible")
            }
        })

        confirmPassword.addEventListener("input", () => {
            if (isConfirmPasswordValid()) {
                confirmPassword.nextSibling.nextSibling.classList.add("invisible")
            } else {
                confirmPassword.nextSibling.nextSibling.classList.remove("invisible")
            }
        })

        function isFormValid() {
            return isFirstnameValid() && isLastnameValid() && isEmailValid() && isPassportValid() && isPasswordValid() && isConfirmPasswordValid()
        }

        function resetForm() {
            firstname.value = ""
            lastname.value = ""
            email.value = ""
            passport.value = ""
            password.value = ""
            confirmPassword.value = ""
        }

        form.addEventListener("submit", (e) => {
            e.preventDefault()
            if (isFormValid()) {
                const data = {
                    firstname: firstname.value,
                    lastname: lastname.value,
                    email: email.value,
                    passport: passport.value,
                    password: password.value
                }
                // TODO: Handle signup
                console.log(data)
                window.navigateTo("/login")
                resetForm()
            }
        })
    }

    async getHtml() {
        return `
        <main class="mx-auto w-full max-w-[1200px] px-8">
            <div class="card-box flex flex-col items-start justify-start p-16 max-w-[450px] w-full mx-auto my-24">
                <h1 class="text-title text-[21px] self-center">ثبت‌نام</h1>
                <h2 class="text-title text-[12px] self-center mt-8">به هواپیمایی شریف خوش آمدید!</h2>
                <form id="signupForm" class="flex flex-col items-start justify-start w-full mt-16">
                    <div class="flex flex-col items-start justify-start w-full">
                        <label for="firstname" class="text-[14px] text-title">نام<span class="text-red-500">*</span></label>
                        <input type="text" id="firstname" class="custom-input" required>
                        <small class="text-[12px] text-red-500 mt-1 invisible">نام نمی‌تواند خالی باشد</small>
                    </div>
                    <div class="flex flex-col items-start justify-start w-full mt-8">
                        <label for="lastname" class="text-[14px] text-title">نام خانوادگی<span class="text-red-500">*</span></label>
                        <input type="text" id="lastname" class="custom-input" required>
                        <small class="text-[12px] text-red-500 mt-1 invisible">نام خانوادگی نمی‌تواند خالی باشد</small>
                    </div>
                    <div class="flex flex-col items-start justify-start w-full mt-8">
                        <label for="email" class="text-[14px] text-title">ایمیل<span class="text-red-500">*</span></label>
                        <input type="email" id="email" class="custom-input" required>
                        <small class="text-[12px] text-red-500 mt-1 invisible">فرمت ایمیل صحیح نیست</small>
                    </div>
                    <div class="flex flex-col items-start justify-start w-full mt-8">
                        <label for="passport" class="text-[14px] text-title">شماره‌ پاسپورت<span class="text-red-500">*</span></label>
                        <input type="text" id="passport" class="custom-input" autocomplete="off" required>
                        <small class="text-[12px] text-red-500 mt-1 invisible">شماره‌ پاسپورت نمی‌تواند خالی باشد</small>
                    </div>
                    <div class="flex flex-col items-start justify-start w-full mt-8">
                        <label for="password" class="text-[14px] text-title">رمز عبور<span class="text-red-500">*</span></label>
                        <input type="password" id="password" class="custom-input" autocomplete="new-password" required>
                        <small class="text-[12px] text-red-500 mt-1 invisible">رمز عبور باید بیشتر از 4 کاراکتر باشد</small>
                    </div>
                    <div class="flex flex-col items-start justify-start w-full mt-8">
                        <label for="confirmPassword" class="text-[14px] text-title">تکرار رمز عبور<span class="text-red-500">*</span></label>
                        <input type="password" id="confirmPassword" class="custom-input" autocomplete="new-password" required>
                        <small class="text-[12px] text-red-500 mt-1 invisible">تکرار رمز عبور صحیح نیست</small>
                    </div>
                    <button type="submit" class="w-full bg-primary-light hover:bg-primary-dark text-black rounded-lg px-4 py-2 mt-8">ثبت‌نام</button>                    
                </form>
                <div class="flex items-center justify-start w-full mt-16">
                    <p class="text-[13px] text-title">قبلا ثبت‌نام کرده‌اید؟</p>
                    <a href="/login" data-link class="text-[13px] text-primary-dark mr-8">ورود</a>
                </div>
            </div>
        </main>
        `
    }
}