"use client";
import React, { Fragment, useState } from "react";
import styles from "./AuthPage.module.css";
import Link from "next/link";
import Button from "@/components/ui/button/Button";
import { useRouter } from "next/navigation";

type ActiveType = "photographer" | "partygoer" | "organiser";
const AuthPage = () => {
  const router = useRouter();

  const [active, setActive] = useState<ActiveType>("organiser");

  function setOrganiser() {
    setActive("organiser");
  }

  function setPhotographer() {
    setActive("photographer");
  }

  function setPartygoer() {
    setActive("partygoer");
  }

  function submitHandler() {
    console.log("Submit: ", active);
    router.push(`/auth/signup/${active}`);
  }
  return (
    <Fragment>
      {/* <h2 className={`heading--secondary ${styles.logo}`}>capture events</h2> */}

      <main className={styles.main}>
        <header>
          <h2 className={`heading--secondary ${styles.header}`}>
            Join as an event organiser, photograper or partygoer
          </h2>
        </header>
        <div className={styles["routes-container"]}>
          <div
            onClick={setOrganiser}
            className={`${styles["container"]} ${
              active === "organiser" ? styles.active : ""
            }`}
          >
            {icons["organiser"]}
            <p className={styles["route-name"]}>I am an event organiser</p>
          </div>

          <div
            onClick={setPhotographer}
            className={`${styles["container"]} ${
              active === "photographer" ? styles.active : ""
            }`}
          >
            {icons["photographer"]}

            <p className={styles["route-name"]}>I am a photographer</p>
          </div>
          <div
            onClick={setPartygoer}
            className={`${styles["container"]} ${
              active === "partygoer" ? styles.active : ""
            }`}
          >
            {icons["partygoer"]}
            <p className={styles["route-name"]}>I am a partygoer</p>
          </div>
        </div>

        <div className={styles["button-wrapper"]}>
          <Button type={"button"} onClick={submitHandler}>
            Create Account
          </Button>
        </div>

        <span className={styles.signin}>
          Have an Account? <Link href={"/auth/signin"}>Login in</Link>
        </span>
      </main>
    </Fragment>
  );
};

export default AuthPage;

const icons = {
  organiser: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      className={styles.icon}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M40.5 5.5h-33a2 2 0 0 0-2 2v33a2 2 0 0 0 2 2h33a2 2 0 0 0 2-2v-33a2 2 0 0 0-2-2ZM14.065 16.065h10.413m-10.455 5.29h19.963m-19.963 5.29h19.963m-19.972 5.29H29.05"
      />
    </svg>
  ),
  photographer: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={styles.icon}
      viewBox="0 0 512 512"
    >
      <path
        d="M350.54 148.68l-26.62-42.06C318.31 100.08 310.62 96 302 96h-92c-8.62 0-16.31 4.08-21.92 10.62l-26.62 42.06C155.85 155.23 148.62 160 140 160H80a32 32 0 00-32 32v192a32 32 0 0032 32h352a32 32 0 0032-32V192a32 32 0 00-32-32h-59c-8.65 0-16.85-4.77-22.46-11.32z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
      />
      <circle
        cx="256"
        cy="272"
        r="80"
        fill="none"
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeWidth="32"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M124 158v-22h-24v22"
      />
    </svg>
  ),
  partygoer: (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.icon}
    >
      <path
        d="M16 2H4C2.89543 2 2 2.89543 2 4V16C2 19.7853 3.14306 23.2955 5.51375 25.8698C5.62912 25.9951 5.74719 26.1179 5.86793 26.2382C6.12692 26.0868 6.42833 26 6.75 26C7.19971 26 7.62693 25.7397 7.84652 25.3436C7.53992 25.0826 7.25283 24.8059 6.98495 24.515C5.02275 22.3842 4 19.3944 4 16C4 15.2652 4.04793 14.5493 4.14294 13.8571L13.8668 4.13315C14.5406 4.04564 15.2515 4 16 4C19.7835 4 22.6035 5.16604 24.5485 7.01147C24.6146 7.00389 24.6819 7 24.75 7C25.3984 7 26 6.45886 26 5.75C26 5.71161 26.0012 5.67351 26.0037 5.63574C23.6364 3.34713 20.2716 2 16 2ZM4 4H6.41421L4 6.41421V4ZM8.58579 4H11.1716L4 11.1716V8.58579L8.58579 4Z"
        fill="#212121"
      />
      <path
        d="M16 30C13.48 30 11.2756 29.5311 9.40537 28.6767C9.99442 28.2802 10.5007 27.753 10.8679 27.1229C12.3265 27.6849 14.033 28 16 28C20.0977 28 23.0653 26.6322 25.015 24.515C25.6031 23.8764 26.1068 23.1607 26.5239 22.38C27.5872 22.1571 28.5404 21.6346 29.2911 20.9049C28.7153 22.7683 27.785 24.4595 26.4862 25.8698C24.1031 28.4576 20.5707 30 16 30Z"
        fill="#212121"
      />
      <path
        d="M22.8637 13.729C23.2715 13.1859 23.8043 12.742 24.4193 12.4401C24.3361 12.3187 24.2421 12.1985 24.1359 12.082C23.5623 11.4522 22.6957 11 21.5002 11C20.3159 11 19.4529 11.4313 18.8758 12.0601C18.3285 12.6564 18.1072 13.3533 18.0186 13.8091C17.9132 14.3513 18.2672 14.8762 18.8093 14.9816C19.3514 15.087 19.8764 14.733 19.9818 14.1909C20.0299 13.9436 20.1399 13.6405 20.3492 13.4125C20.5285 13.2171 20.8472 13 21.5002 13C22.1419 13 22.4687 13.2216 22.6574 13.4288C22.7426 13.5222 22.8105 13.6258 22.8637 13.729Z"
        fill="#212121"
      />
      <path
        d="M29.821 13.4633C29.2142 12.8001 28.4114 12.3193 27.5043 12.1125C27.3077 11.389 27.0534 10.6999 26.7424 10.0516C27.358 9.76428 27.9158 9.34738 28.3661 8.82548C29.0989 10.2407 29.5811 11.8076 29.821 13.4633Z"
        fill="#212121"
      />
      <path
        d="M10.349 13.4125C10.1397 13.6405 10.0296 13.9436 9.98156 14.1909C9.87614 14.733 9.3512 15.087 8.80907 14.9816C8.26694 14.8762 7.91291 14.3513 8.01833 13.8091C8.10696 13.3533 8.32826 12.6564 8.87551 12.0601C9.45269 11.4313 10.3156 11 11.4999 11C12.6955 11 13.562 11.4522 14.1357 12.082C14.6799 12.6794 14.9062 13.374 14.9852 13.8289C15.0797 14.373 14.7152 14.8908 14.171 14.9853C13.6269 15.0797 13.1092 14.7152 13.0147 14.1711C12.9804 13.9737 12.8753 13.6683 12.6572 13.4288C12.4685 13.2216 12.1417 13 11.4999 13C10.847 13 10.5283 13.2171 10.349 13.4125Z"
        fill="#212121"
      />
      <path
        d="M26 4C26.5523 4 27 3.55228 27 3C27 2.44772 26.5523 2 26 2C25.4477 2 25 2.44772 25 3C25 3.55228 25.4477 4 26 4Z"
        fill="#212121"
      />
      <path
        d="M27.75 5C28.1642 5 28.5 5.33579 28.5 5.75C28.5 7.94812 26.668 9.5 24.75 9.5C24.3358 9.5 24 9.16421 24 8.75C24 8.33579 24.3358 8 24.75 8C25.909 8 27 7.05188 27 5.75C27 5.33579 27.3358 5 27.75 5Z"
        fill="#212121"
      />
      <path
        d="M9.75 24C10.1642 24 10.5 24.3358 10.5 24.75C10.5 26.9481 8.66796 28.5 6.75 28.5C6.33579 28.5 6 28.1642 6 27.75C6 27.3358 6.33579 27 6.75 27C7.90902 27 9 26.0519 9 24.75C9 24.3358 9.33579 24 9.75 24Z"
        fill="#212121"
      />
      <path
        d="M27 29C27.5523 29 28 28.5523 28 28C28 27.4477 27.5523 27 27 27C26.4477 27 26 27.4477 26 28C26 28.5523 26.4477 29 27 29Z"
        fill="#212121"
      />
      <path
        d="M10 20C10 20.5523 9.55228 21 9 21C8.44772 21 8 20.5523 8 20C8 19.4477 8.44772 19 9 19C9.55228 19 10 19.4477 10 20Z"
        fill="#212121"
      />
      <path
        d="M26.3214 13C24.4871 13 23 14.4871 23 16.3214V16.75C23 17.9926 24.0074 19 25.25 19C26.2165 19 27 18.2165 27 17.25V16.75C27 16.3358 26.6642 16 26.25 16C25.8358 16 25.5 16.3358 25.5 16.75V17.25C25.5 17.3881 25.3881 17.5 25.25 17.5C24.8358 17.5 24.5 17.1642 24.5 16.75V16.3214C24.5 15.3155 25.3155 14.5 26.3214 14.5H26.5C27.6046 14.5 28.5 15.3954 28.5 16.5V16.8611C28.5 18.5947 27.0947 20 25.3611 20H20.1275C20.1684 19.8199 20.1899 19.6325 20.1899 19.44C20.1899 18.0477 19.0622 16.92 17.6699 16.92C17.1176 16.92 16.6699 17.3677 16.6699 17.92C16.6699 18.4723 17.1176 18.92 17.6699 18.92C17.9576 18.92 18.1899 19.1523 18.1899 19.44C18.1899 19.7277 17.9576 19.96 17.6699 19.96C17.1176 19.96 16.6699 20.4077 16.6699 20.96C16.6699 21.5123 17.1176 21.96 17.6699 21.96C17.9576 21.96 18.1899 22.1923 18.1899 22.48C18.1899 22.7677 17.9576 23 17.6699 23C17.1176 23 16.6699 23.4477 16.6699 24C16.6699 24.5523 17.1176 25 17.6699 25C19.0622 25 20.1899 23.8723 20.1899 22.48C20.1899 22.1324 20.1196 21.8012 19.9924 21.5H25.3611C27.9231 21.5 30 19.4231 30 16.8611V16.5C30 14.567 28.433 13 26.5 13H26.3214Z"
        fill="#212121"
      />
    </svg>
  ),
};
