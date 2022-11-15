//! Required
import { useState } from "react";
import Link from "next/link";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { object, string } from "yup";

//! Formik
const VALIDATE_PHONE = object().shape({
    phone_number: string()
        .min(10, "خطا: شماره تلفن وارد شده اشتباه است.")
        .max(10, "خطا: شماره تلفن وارد شده اشتباه است.")
        .required("خطا: لطفا شماره تلفن خود را وارد کنید."),
});

//! Icons
import { BsPhoneVibrateFill } from "react-icons/bs";

//! Template
export default function LoginPage() {
    const [active, setActive] = useState(false);
    const SUBMIT_PHONE = (values) => {
        console.log(values);
    };
    return (
        <>
            <main className="flex min-h-screen w-full items-center justify-center bg-gradient-to-tl from-orange-900 to-orange-500 px-4 md:px-0">
                <section className="w-full max-w-lg overflow-hidden rounded-xl border-2 border-orange-400 bg-white shadow-sm">
                    <header className="grid w-full grid-cols-2 items-center justify-items-center border-b-2 border-neutral-300 bg-white py-4 shadow-xl shadow-black/30">
                        <h1
                            className={`text-sm font-extrabold ${
                                !active ? "text-orange-500" : "text-neutral-400"
                            }`}
                        >
                            1. شماره موبــــــایل من
                        </h1>
                        <h2
                            className={`text-sm font-extrabold ${
                                active ? "text-orange-500" : "text-neutral-400"
                            }`}
                        >
                            2. ورود کد پیامک شده
                        </h2>
                    </header>
                    <Formik
                        initialValues={{ phone_number: "" }}
                        validationSchema={VALIDATE_PHONE}
                        onSubmit={SUBMIT_PHONE}
                        validateOnMount
                    >
                        {(formik) => {
                            return (
                                <Form className="flex w-full flex-col items-start justify-start px-5">
                                    <label
                                        htmlFor="phone_number"
                                        className="mt-8 self-center text-sm font-bold text-neutral-600"
                                    >
                                        لطفا شماره موبایل خود را وارد نمایید:
                                    </label>
                                    <section className="mt-8 grid w-full grid-cols-[90%_10%] items-center justify-items-center">
                                        <Field
                                            name="phone_number"
                                            id="phone_number"
                                            as="input"
                                            type="number"
                                            dir="ltr"
                                            placeholder="مثلا: 6789 345 0912"
                                            className="
                                            w-full rounded-full border-none bg-transparent bg-gradient-to-l from-neutral-200/70 to-transparent
                                            py-2.5 pr-5 text-center text-sm font-extrabold tracking-[0.3rem] text-neutral-600 outline-none 
                                            placeholder:font-bold placeholder:tracking-normal placeholder:text-neutral-500 placeholder:duration-200 
                                            focus:placeholder:text-transparent md:pr-10"
                                        />
                                        <BsPhoneVibrateFill className="rotate-12 text-2xl text-neutral-400" />
                                    </section>
                                    <p className="col-span-2 mt-3 self-center text-sm font-bold text-red-500">
                                        <ErrorMessage name="phone_number" />
                                    </p>
                                    <button
                                        type="submit"
                                        disabled={
                                            formik.isSubmitting ||
                                            !formik.isValid
                                        }
                                        className="
                                        col-span-2 mt-5 w-full rounded-full bg-gradient-to-l from-orange-900 to-orange-500 py-3 text-sm font-bold text-white shadow-orange
                                        duration-300 disabled:from-neutral-200 disabled:to-transparent disabled:text-neutral-400 disabled:shadow-none md:py-2.5"
                                    >
                                        ارسال کد تایید
                                    </button>
                                </Form>
                            );
                        }}
                    </Formik>
                    <footer className="pb-3 pt-5 text-center text-[.6rem] font-bold text-neutral-500 md:text-xs">
                        ورود شما به معنای پذیرش{" "}
                        <Link
                            href="/rules-and-terms"
                            className="font-extrabold underline underline-offset-2"
                        >
                            شرایط روغنی‌کار و قوانین استفاده
                        </Link>{" "}
                        از سایت است.
                    </footer>
                </section>
            </main>
        </>
    );
}
