import React from "react";
import Image from "next/image";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="overflow-hidden">
      <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
        {/* <!-- footer menu start --> */}
        <div className="flex flex-wrap xl:flex-nowrap gap-10 xl:gap-19 xl:justify-between pt-17.5 xl:pt-22.5 pb-10 xl:pb-15">
          <div className="max-w-[330px] w-full">
            <h2 className="mb-7.5 text-custom-1 font-medium text-dark">
              Help & Support
            </h2>

            <ul className="flex flex-col gap-3">
              <li className="flex gap-4.5">
                <span className="flex-shrink-0">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.25 8.51464C4.25 4.45264 7.77146 1.25 12 1.25C16.2285 1.25 19.75 4.45264 19.75 8.51464C19.75 12.3258 17.3871 16.8 13.5748 18.4292C12.574 18.8569 11.426 18.8569 10.4252 18.4292C6.61289 16.8 4.25 12.3258 4.25 8.51464ZM12 2.75C8.49655 2.75 5.75 5.38076 5.75 8.51464C5.75 11.843 7.85543 15.6998 11.0147 17.0499C11.639 17.3167 12.361 17.3167 12.9853 17.0499C16.1446 15.6998 18.25 11.843 18.25 8.51464C18.25 5.38076 15.5034 2.75 12 2.75ZM12 7.75C11.3096 7.75 10.75 8.30964 10.75 9C10.75 9.69036 11.3096 10.25 12 10.25C12.6904 10.25 13.25 9.69036 13.25 9C13.25 8.30964 12.6904 7.75 12 7.75ZM9.25 9C9.25 7.48122 10.4812 6.25 12 6.25C13.5188 6.25 14.75 7.48122 14.75 9C14.75 10.5188 13.5188 11.75 12 11.75C10.4812 11.75 9.25 10.5188 9.25 9ZM3.59541 14.9966C3.87344 15.3036 3.84992 15.7779 3.54288 16.0559C2.97519 16.57 2.75 17.0621 2.75 17.5C2.75 18.2637 3.47401 19.2048 5.23671 19.998C6.929 20.7596 9.31952 21.25 12 21.25C14.6805 21.25 17.071 20.7596 18.7633 19.998C20.526 19.2048 21.25 18.2637 21.25 17.5C21.25 17.0621 21.0248 16.57 20.4571 16.0559C20.1501 15.7779 20.1266 15.3036 20.4046 14.9966C20.6826 14.6895 21.1569 14.666 21.4639 14.9441C22.227 15.635 22.75 16.5011 22.75 17.5C22.75 19.2216 21.2354 20.5305 19.3788 21.3659C17.4518 22.2331 14.8424 22.75 12 22.75C9.15764 22.75 6.54815 22.2331 4.62116 21.3659C2.76457 20.5305 1.25 19.2216 1.25 17.5C1.25 16.5011 1.77305 15.635 2.53605 14.9441C2.84309 14.666 3.31738 14.6895 3.59541 14.9966Z"
                      fill="#273057"
                    />
                  </svg>
                </span>
                Tsavo Road, Nairobi - Kenya
              </li>

              <li>
                <a href="#" className="flex items-center gap-4.5">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.7177 3.0919C5.94388 1.80096 7.9721 2.04283 8.98569 3.47641L10.2467 5.25989C11.0574 6.40656 10.9889 8.00073 10.0214 9.0194L9.7765 9.27719C9.77582 9.27897 9.7751 9.2809 9.77436 9.28299C9.76142 9.31935 9.7287 9.43513 9.7609 9.65489C9.82765 10.1104 10.1793 11.0361 11.607 12.5392C13.0391 14.0469 13.9078 14.4023 14.3103 14.4677C14.484 14.4959 14.5748 14.4714 14.6038 14.4612L15.0124 14.031C15.8862 13.111 17.2485 12.9298 18.347 13.5621L20.2575 14.6617C21.8904 15.6016 22.2705 17.9008 20.9655 19.2747L19.545 20.7703C19.1016 21.2371 18.497 21.6355 17.75 21.7092C15.9261 21.8893 11.701 21.6548 7.27161 16.9915C3.13844 12.64 2.35326 8.85513 2.25401 7.00591L2.92011 6.97016L2.25401 7.00591C2.20497 6.09224 2.61224 5.30855 3.1481 4.7444L4.7177 3.0919ZM7.7609 4.34237C7.24855 3.61773 6.32812 3.57449 5.80528 4.12493L4.23568 5.77743C3.90429 6.12632 3.73042 6.52621 3.75185 6.92552C3.83289 8.43533 4.48307 11.8776 8.35919 15.9584C12.4234 20.2373 16.1676 20.3581 17.6026 20.2165C17.8864 20.1885 18.1783 20.031 18.4574 19.7373L19.8779 18.2417C20.4907 17.5965 20.3301 16.4342 19.5092 15.9618L17.5987 14.8621C17.086 14.567 16.4854 14.6582 16.1 15.064L15.6445 15.5435L15.1174 15.0428C15.6445 15.5435 15.6438 15.5442 15.6432 15.545L15.6417 15.5464L15.6388 15.5495L15.6324 15.556L15.6181 15.5701C15.6078 15.5801 15.5959 15.591 15.5825 15.6028C15.5556 15.6264 15.5223 15.6533 15.4824 15.6816C15.4022 15.7384 15.2955 15.8009 15.1606 15.8541C14.8846 15.963 14.5201 16.0214 14.0699 15.9483C13.1923 15.8058 12.0422 15.1755 10.5194 13.5722C8.99202 11.9642 8.40746 10.7645 8.27675 9.87234C8.21022 9.41827 8.26346 9.05468 8.36116 8.78011C8.40921 8.64508 8.46594 8.53742 8.51826 8.45566C8.54435 8.41489 8.56922 8.38075 8.5912 8.35298C8.60219 8.33909 8.61246 8.32678 8.62182 8.31603L8.63514 8.30104L8.64125 8.29441L8.64415 8.2913L8.64556 8.2898C8.64625 8.28907 8.64694 8.28835 9.17861 8.79333L8.64695 8.28834L8.93376 7.98637C9.3793 7.51731 9.44403 6.72292 9.02189 6.12586L7.7609 4.34237Z"
                      fill="#273057"
                    />
                    <path
                      d="M13.2595 1.87983C13.3257 1.47094 13.7122 1.19357 14.1211 1.25976C14.1464 1.26461 14.2279 1.27983 14.2705 1.28933C14.3559 1.30834 14.4749 1.33759 14.6233 1.38082C14.9201 1.46726 15.3347 1.60967 15.8323 1.8378C16.8286 2.29456 18.1544 3.09356 19.5302 4.46936C20.906 5.84516 21.705 7.17097 22.1617 8.16725C22.3899 8.66487 22.5323 9.07947 22.6187 9.37625C22.6619 9.52466 22.6912 9.64369 22.7102 9.72901C22.7197 9.77168 22.7267 9.80594 22.7315 9.83125L22.7373 9.86245C22.8034 10.2713 22.5286 10.6739 22.1197 10.7401C21.712 10.8061 21.3279 10.53 21.2601 10.1231C21.258 10.1121 21.2522 10.0828 21.2461 10.0551C21.2337 9.9997 21.2124 9.91188 21.1786 9.79572C21.1109 9.56339 20.9934 9.21806 20.7982 8.79238C20.4084 7.94207 19.7074 6.76789 18.4695 5.53002C17.2317 4.29216 16.0575 3.59117 15.2072 3.20134C14.7815 3.00618 14.4362 2.88865 14.2038 2.82097C14.0877 2.78714 13.9417 2.75363 13.8863 2.7413C13.4793 2.67347 13.1935 2.28755 13.2595 1.87983Z"
                      fill="#273057"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13.4861 5.32931C13.5999 4.93103 14.015 4.70041 14.4133 4.81421L14.2072 5.53535C14.4133 4.81421 14.4136 4.81431 14.414 4.81441L14.4147 4.81462L14.4162 4.81506L14.4196 4.81604L14.4273 4.81835L14.4471 4.82451C14.4622 4.82934 14.481 4.83562 14.5035 4.84358C14.5484 4.85952 14.6077 4.88218 14.6805 4.91339C14.8262 4.97582 15.0253 5.07224 15.2698 5.21695C15.7593 5.50664 16.4275 5.98781 17.2124 6.77279C17.9974 7.55776 18.4786 8.22595 18.7683 8.71541C18.913 8.95992 19.0094 9.15899 19.0718 9.30467C19.103 9.37748 19.1257 9.43683 19.1416 9.48175C19.1496 9.5042 19.1559 9.52303 19.1607 9.5381L19.1669 9.55789L19.1692 9.56564L19.1702 9.56898L19.1706 9.57051L19.1708 9.57124C19.1709 9.5716 19.171 9.57195 18.4499 9.77799L19.171 9.57195C19.2848 9.97023 19.0542 10.3853 18.6559 10.4991C18.261 10.612 17.8496 10.3862 17.7317 9.99414L17.728 9.98336C17.7227 9.96833 17.7116 9.93875 17.6931 9.89555C17.6561 9.80921 17.589 9.66798 17.4774 9.47939C17.2544 9.10265 16.8517 8.5334 16.1518 7.83345C15.4518 7.13349 14.8826 6.73079 14.5058 6.50782C14.3172 6.3962 14.176 6.32911 14.0897 6.2921C14.0465 6.27359 14.0169 6.26256 14.0019 6.25722L13.9911 6.25353C13.599 6.13565 13.3733 5.7242 13.4861 5.32931Z"
                      fill="#273057"
                    />
                  </svg>
                  +254 732 652 000
                </a>
              </li>

              <li>
                <a href="#" className="flex items-center gap-4.5">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.94358 3.25H14.0564C15.8942 3.24998 17.3498 3.24997 18.489 3.40314C19.6614 3.56076 20.6104 3.89288 21.3588 4.64124C22.1071 5.38961 22.4392 6.33856 22.5969 7.51098C22.75 8.65019 22.75 10.1058 22.75 11.9436V12.0564C22.75 13.8942 22.75 15.3498 22.5969 16.489C22.4392 17.6614 22.1071 18.6104 21.3588 19.3588C20.6104 20.1071 19.6614 20.4392 18.489 20.5969C17.3498 20.75 15.8942 20.75 14.0564 20.75H9.94359C8.10583 20.75 6.65019 20.75 5.51098 20.5969C4.33856 20.4392 3.38961 20.1071 2.64124 19.3588C1.89288 18.6104 1.56076 17.6614 1.40314 16.489C1.24997 15.3498 1.24998 13.8942 1.25 12.0564V11.9436C1.24998 10.1058 1.24997 8.65019 1.40314 7.51098C1.56076 6.33856 1.89288 5.38961 2.64124 4.64124C3.38961 3.89288 4.33856 3.56076 5.51098 3.40314C6.65019 3.24997 8.10582 3.24998 9.94358 3.25ZM5.71085 4.88976C4.70476 5.02502 4.12511 5.27869 3.7019 5.7019C3.27869 6.12511 3.02502 6.70476 2.88976 7.71085C2.75159 8.73851 2.75 10.0932 2.75 12C2.75 13.9068 2.75159 15.2615 2.88976 16.2892C3.02502 17.2952 3.27869 17.8749 3.7019 18.2981C4.12511 18.7213 4.70476 18.975 5.71085 19.1102C6.73851 19.2484 8.09318 19.25 10 19.25H14C15.9068 19.25 17.2615 19.2484 18.2892 19.1102C19.2952 18.975 19.8749 18.7213 20.2981 18.2981C20.7213 17.8749 20.975 17.2952 21.1102 16.2892C21.2484 15.2615 21.25 13.9068 21.25 12C21.25 10.0932 21.2484 8.73851 21.1102 7.71085C20.975 6.70476 20.7213 6.12511 20.2981 5.7019C19.8749 5.27869 19.2952 5.02502 18.2892 4.88976C17.2615 4.75159 15.9068 4.75 14 4.75H10C8.09318 4.75 6.73851 4.75159 5.71085 4.88976ZM5.42383 7.51986C5.68901 7.20165 6.16193 7.15866 6.48014 7.42383L8.63903 9.22291C9.57199 10.0004 10.2197 10.5384 10.7666 10.8901C11.2959 11.2306 11.6549 11.3449 12 11.3449C12.3451 11.3449 12.7041 11.2306 13.2334 10.8901C13.7803 10.5384 14.428 10.0004 15.361 9.22291L17.5199 7.42383C17.8381 7.15866 18.311 7.20165 18.5762 7.51986C18.8413 7.83807 18.7983 8.31099 18.4801 8.57617L16.2836 10.4066C15.3973 11.1452 14.6789 11.7439 14.0448 12.1517C13.3843 12.5765 12.7411 12.8449 12 12.8449C11.2589 12.8449 10.6157 12.5765 9.95518 12.1517C9.32112 11.7439 8.60272 11.1452 7.71636 10.4066L5.51986 8.57617C5.20165 8.31099 5.15866 7.83807 5.42383 7.51986Z"
                      fill="#273057"
                    />
                  </svg>
                  info@sharpspace.com
                </a>
              </li>
            </ul>

            {/* <!-- Social Links start --> */}
            <div className="flex items-center gap-4 mt-7.5">
              <a
                href="#"
                aria-label="Facebook Social Link"
                className="flex ease-out duration-200 hover:text-blue"
              >
                <svg
                  className="fill-current"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.99984 0.666504C7.48706 0.666504 6.09165 1.04648 4.81361 1.80644C3.53557 2.54019 2.51836 3.5491 1.76197 4.83317C1.03166 6.11724 0.666504 7.51923 0.666504 9.03915C0.666504 10.428 0.966452 11.7252 1.56635 12.9307C2.19233 14.1099 3.04 15.0926 4.10938 15.8788C5.17876 16.6649 6.37855 17.1497 7.70876 17.3332V11.4763H5.59608V9.03915H7.70876V7.19166C7.70876 6.16965 7.98262 5.37038 8.53035 4.79386C9.10417 4.21734 9.8736 3.92908 10.8386 3.92908C11.4646 3.92908 12.0906 3.98149 12.7166 4.08632V6.16965H11.6602C11.1908 6.16965 10.8386 6.30068 10.6039 6.56273C10.3952 6.79858 10.2909 7.09994 10.2909 7.46682V9.03915H12.6383L12.2471 11.4763H10.2909V17.3332C11.6472 17.1235 12.86 16.6256 13.9294 15.8395C14.9988 15.0533 15.8334 14.0706 16.4333 12.8913C17.0332 11.6859 17.3332 10.4018 17.3332 9.03915C17.3332 7.51923 16.955 6.11724 16.1986 4.83317C15.4683 3.5491 14.4641 2.54019 13.1861 1.80644C11.908 1.04648 10.5126 0.666504 8.99984 0.666504Z"
                    fill=""
                  />
                  <path
                    opacity="0.04"
                    d="M7.70887 11.4764V17.3333H10.291V11.4764H12.2472L12.6384 9.03926H10.291V7.46693C10.291 7.10006 10.3954 6.7987 10.604 6.56285C10.8388 6.30079 11.1909 6.16977 11.6604 6.16977H12.7167V4.08643C12.0907 3.98161 11.4647 3.9292 10.8388 3.9292C9.87371 3.9292 9.10428 4.21746 8.53046 4.79398C7.98273 5.3705 7.70887 6.16977 7.70887 7.19178V9.03926H5.59619V11.4764H7.70887Z"
                    fill=""
                  />
                </svg>
              </a>

              <a
                href="#"
                aria-label="Twitter Social Link"
                className="flex ease-out duration-200 hover:text-blue"
              >
                <svg
                  className="fill-current"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.3332 4.91293C17.7353 5.18229 17.0875 5.36594 16.39 5.46389C17.1124 5.02312 17.6107 4.39869 17.8847 3.59061C17.2121 3.98241 16.4896 4.25177 15.7173 4.39869C15.0447 3.68856 14.1976 3.3335 13.1762 3.3335C12.2544 3.3335 11.4572 3.66407 10.7846 4.32523C10.1119 4.98639 9.77562 5.78223 9.77562 6.71274C9.77562 6.95762 9.81299 7.21473 9.88773 7.48409C8.49261 7.41063 7.17223 7.06781 5.92659 6.45563C4.70587 5.81896 3.67198 4.98639 2.82495 3.95792C2.526 4.47216 2.37652 5.03536 2.37652 5.64755C2.37652 6.23524 2.51354 6.77396 2.78758 7.26371C3.06162 7.75345 3.42286 8.14525 3.87129 8.4391C3.34812 8.4391 2.83741 8.30442 2.33915 8.03506V8.07179C2.33915 8.87987 2.60073 9.59 3.1239 10.2022C3.64707 10.8144 4.29481 11.2062 5.0671 11.3776C4.79306 11.451 4.49411 11.4878 4.17024 11.4878C3.97094 11.4878 3.75918 11.4633 3.53496 11.4143C3.75918 12.0999 4.15778 12.6632 4.73078 13.1039C5.32869 13.5202 5.98888 13.7406 6.71135 13.7651C5.49062 14.7201 4.08305 15.1976 2.48863 15.1976C2.21459 15.1976 1.94054 15.1853 1.6665 15.1609C3.26092 16.1648 5.00482 16.6668 6.89819 16.6668C8.89122 16.6668 10.66 16.1648 12.2046 15.1609C13.6247 14.2793 14.7333 13.0794 15.5305 11.5612C16.2779 10.1165 16.6516 8.635 16.6516 7.11678L16.6142 6.67601C17.2868 6.21075 17.8598 5.62306 18.3332 4.91293Z"
                    fill=""
                  />
                </svg>
              </a>

              <a
                href="#"
                aria-label="Instagram Social Link"
                className="flex ease-out duration-200 hover:text-blue"
              >
                <svg
                  className="fill-current"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_317_501)">
                    <path
                      d="M19.6562 6C19.625 5 19.4375 4.28125 19.2187 3.625C19 2.96875 18.6562 2.4375 18.125 1.90625C17.5937 1.375 17.0625 1.0625 16.4375 0.8125C15.8125 0.5625 15.125 0.40625 14.0625 0.375C12.9687 0.3125 12.6562 0.3125 10 0.3125C7.34375 0.3125 7.0625 0.3125 6 0.34375C4.9375 0.375 4.28125 0.5625 3.625 0.78125C2.96875 1 2.4375 1.375 1.90625 1.90625C1.375 2.4375 1.03125 2.96875 0.8125 3.625C0.5625 4.25 0.40625 4.9375 0.375 6C0.34375 7.0625 0.3125 7.34375 0.3125 10C0.3125 12.6562 0.3125 12.9375 0.34375 14C0.375 15.0625 0.5625 15.7188 0.78125 16.375C1 17.0312 1.34375 17.5625 1.875 18.0938C2.40625 18.625 2.96875 18.9688 3.59375 19.1875C4.21875 19.4062 4.90625 19.5938 5.96875 19.625C7.03125 19.6875 7.3125 19.6875 9.96875 19.6875C12.625 19.6875 12.9062 19.6875 13.9687 19.6562C15.0312 19.625 15.6875 19.4375 16.3437 19.2188C17 19 17.5312 18.6562 18.0625 18.125C18.5937 17.5938 18.9375 17.0312 19.1562 16.4062C19.375 15.7812 19.5625 15.0938 19.5937 14.0312C19.625 13.0312 19.625 12.7188 19.625 10.0625C19.625 7.40625 19.6875 7.0625 19.6562 6ZM17.9062 13.9062C17.875 14.8438 17.6875 15.3438 17.5625 15.7188C17.375 16.1562 17.1562 16.5 16.8125 16.8125C16.4687 17.1562 16.1562 17.3438 15.7187 17.5625C15.375 17.6875 14.875 17.875 13.9062 17.9062C12.9062 17.9062 12.5937 17.9062 10.0312 17.9062C7.46875 17.9062 7.125 17.9062 6.125 17.875C5.1875 17.8438 4.6875 17.6562 4.3125 17.5312C3.875 17.3438 3.53125 17.125 3.21875 16.7812C2.875 16.4375 2.6875 16.125 2.46875 15.6875C2.34375 15.3438 2.15625 14.8438 2.125 13.875C2.125 12.9063 2.125 12.5938 2.125 10C2.125 7.40625 2.125 7.09375 2.15625 6.09375C2.1875 5.15625 2.375 4.65625 2.5 4.28125C2.6875 3.84375 2.90625 3.5 3.21875 3.1875C3.5625 2.84375 3.875 2.65625 4.3125 2.46875C4.65625 2.34375 5.15625 2.15625 6.125 2.125C7.125 2.09375 7.4375 2.09375 10.0312 2.09375C12.625 2.09375 12.9375 2.09375 13.9375 2.125C14.875 2.15625 15.375 2.34375 15.75 2.46875C16.1875 2.65625 16.5312 2.875 16.8437 3.1875C17.1875 3.53125 17.375 3.84375 17.5937 4.28125C17.7187 4.625 17.9062 5.125 17.9375 6.09375C17.9687 7.09375 17.9687 7.40625 17.9687 10C17.9687 12.5938 17.9375 12.9062 17.9062 13.9062Z"
                      fill=""
                    />
                    <path
                      d="M10.0005 5.03125C7.21924 5.03125 5.03174 7.28125 5.03174 10C5.03174 12.7812 7.28174 14.9688 10.0005 14.9688C12.7192 14.9688 15.0005 12.7812 15.0005 10C15.0005 7.21875 12.7817 5.03125 10.0005 5.03125ZM10.0005 13.25C8.18799 13.25 6.75049 11.7812 6.75049 10C6.75049 8.21875 8.21924 6.75 10.0005 6.75C11.813 6.75 13.2505 8.1875 13.2505 10C13.2505 11.8125 11.813 13.25 10.0005 13.25Z"
                      fill=""
                    />
                    <path
                      d="M15.2188 5.96875C15.8573 5.96875 16.375 5.45106 16.375 4.8125C16.375 4.17391 15.8573 3.65625 15.2188 3.65625C14.5802 3.65625 14.0625 4.17391 14.0625 4.8125C14.0625 5.45106 14.5802 5.96875 15.2188 5.96875Z"
                      fill=""
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_317_501">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>

              <a
                href="#"
                aria-label="Linkedin Social Link"
                className="flex ease-out duration-200 hover:text-blue"
              >
                <svg
                  className="fill-current"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.6535 1.6665C17.1222 1.6665 17.5129 1.83577 17.8254 2.17432C18.1639 2.48682 18.3332 2.87744 18.3332 3.34619V16.6535C18.3332 17.1222 18.1639 17.5259 17.8254 17.8644C17.5129 18.1769 17.1222 18.3332 16.6535 18.3332H3.34619C2.87744 18.3332 2.4738 18.1769 2.13525 17.8644C1.82275 17.5259 1.6665 17.1222 1.6665 16.6535V3.34619C1.6665 2.87744 1.82275 2.48682 2.13525 2.17432C2.4738 1.83577 2.87744 1.6665 3.34619 1.6665H16.6535ZM15.4295 15.4295V11.0155C15.4295 10.2603 15.1561 9.62223 14.6092 9.1014C14.0884 8.55452 13.4504 8.28109 12.6952 8.28109C12.3306 8.28109 11.966 8.38525 11.6014 8.59359C11.2368 8.80192 10.9634 9.06234 10.7811 9.37484V8.43734H8.43734V15.4295H10.7811V11.2889C10.7811 10.9764 10.8853 10.716 11.0936 10.5077C11.328 10.2733 11.6014 10.1561 11.9139 10.1561C12.2524 10.1561 12.5259 10.2733 12.7342 10.5077C12.9686 10.716 13.0858 10.9764 13.0858 11.2889V15.4295H15.4295ZM5.74202 7.14827C6.13265 7.14827 6.45817 7.01807 6.71859 6.75765C7.00505 6.47119 7.14827 6.13265 7.14827 5.74202C7.14827 5.3514 7.00505 5.02588 6.71859 4.76546C6.45817 4.479 6.13265 4.33577 5.74202 4.33577C5.3514 4.33577 5.01286 4.479 4.7264 4.76546C4.46598 5.02588 4.33577 5.3514 4.33577 5.74202C4.33577 6.13265 4.46598 6.47119 4.7264 6.75765C5.01286 7.01807 5.3514 7.14827 5.74202 7.14827ZM6.87484 15.4295V8.43734H4.57015V15.4295H6.87484Z"
                    fill=""
                  />
                  <path
                    opacity="0.04"
                    d="M15.4297 15.4297V11.0156C15.4297 10.2604 15.1562 9.6224 14.6094 9.10156C14.0885 8.55469 13.4505 8.28125 12.6953 8.28125C12.3307 8.28125 11.9661 8.38542 11.6016 8.59375C11.237 8.80208 10.9635 9.0625 10.7812 9.375V8.4375H8.4375V15.4297H10.7812V11.2891C10.7812 10.9766 10.8854 10.7161 11.0938 10.5078C11.3281 10.2734 11.6016 10.1562 11.9141 10.1562C12.2526 10.1562 12.526 10.2734 12.7344 10.5078C12.9688 10.7161 13.0859 10.9766 13.0859 11.2891V15.4297H15.4297ZM5.74219 7.14844C6.13281 7.14844 6.45833 7.01823 6.71875 6.75781C7.00521 6.47135 7.14844 6.13281 7.14844 5.74219C7.14844 5.35156 7.00521 5.02604 6.71875 4.76562C6.45833 4.47917 6.13281 4.33594 5.74219 4.33594C5.35156 4.33594 5.01302 4.47917 4.72656 4.76562C4.46615 5.02604 4.33594 5.35156 4.33594 5.74219C4.33594 6.13281 4.46615 6.47135 4.72656 6.75781C5.01302 7.01823 5.35156 7.14844 5.74219 7.14844ZM6.875 15.4297V8.4375H4.57031V15.4297H6.875Z"
                    fill=""
                  />
                </svg>
              </a>
            </div>
            {/* <!-- Social Links end --> */}
          </div>

          <div className="w-full sm:w-auto">
            <h2 className="mb-7.5 text-custom-1 font-medium text-dark">
              Account
            </h2>

            <ul className="flex flex-col gap-3.5">
              {/* <li>
                <a className="ease-out duration-200 hover:text-blue" href="#">
                  My Account
                </a>
              </li>
              <li>
                <a className="ease-out duration-200 hover:text-blue" href="#">
                  Login / Register
                </a>
              </li> */}
              <li>
                <a className="ease-out duration-200 hover:text-blue" href="#">
                  Cart
                </a>
              </li>
              <li>
                <a className="ease-out duration-200 hover:text-blue" href="#">
                  Wishlist
                </a>
              </li>
              <li>
                <a className="ease-out duration-200 hover:text-blue" href="#">
                  Shop
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full sm:w-auto">
            <h2 className="mb-7.5 text-custom-1 font-medium text-dark">
              Quick Link
            </h2>

            <ul className="flex flex-col gap-3">
              {/* <li>
                <a className="ease-out duration-200 hover:text-blue" href="#">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="ease-out duration-200 hover:text-blue" href="#">
                  Refund Policy
                </a>
              </li>
              <li>
                <a className="ease-out duration-200 hover:text-blue" href="#">
                  Terms of Use
                </a>
              </li>
              <li>
                <a className="ease-out duration-200 hover:text-blue" href="#">
                  FAQ’s
                </a>
              </li> */}
              <li>
                <a className="ease-out duration-200 hover:text-blue" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full sm:w-auto">
            <h2 className="mb-7.5 invisible text-custom-1 font-medium text-dark lg:text-right">
              Download App
            </h2>

            <p className="lg:text-right invisible text-custom-sm mb-4">
              Save $3 With App & New User only
            </p>

            <ul className="flex flex-col lg:items-end gap-3">
              <li>
                <a
                  className="inline-flex invisible items-center gap-3 py-[9px] pl-4 pr-7.5 text-white rounded-md bg-dark ease-out duration-200 hover:bg-opacity-95"
                  href="#"
                >
                  <svg
                    className="fill-current"
                    width="34"
                    height="35"
                    viewBox="0 0 34 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M29.5529 12.3412C29.3618 12.4871 25.9887 14.3586 25.9887 18.5198C25.9887 23.3331 30.2809 25.0358 30.4093 25.078C30.3896 25.1818 29.7275 27.41 28.1463 29.6804C26.7364 31.6783 25.264 33.6731 23.024 33.6731C20.7841 33.6731 20.2076 32.3918 17.6217 32.3918C15.1018 32.3918 14.2058 33.7152 12.1569 33.7152C10.1079 33.7152 8.6783 31.8664 7.03456 29.5961C5.13062 26.93 3.59229 22.7882 3.59229 18.8572C3.59229 12.552 7.756 9.20804 11.8538 9.20804C14.0312 9.20804 15.8462 10.6157 17.2133 10.6157C18.5144 10.6157 20.5436 9.12373 23.0207 9.12373C23.9595 9.12373 27.3327 9.20804 29.5529 12.3412ZM21.8447 6.45441C22.8692 5.25759 23.5939 3.59697 23.5939 1.93635C23.5939 1.70607 23.5741 1.47254 23.5313 1.28442C21.8645 1.34605 19.8815 2.37745 18.6857 3.74292C17.7469 4.79379 16.8707 6.45441 16.8707 8.13773C16.8707 8.39076 16.9135 8.64369 16.9333 8.72476C17.0387 8.74426 17.21 8.76694 17.3813 8.76694C18.8768 8.76694 20.7577 7.78094 21.8447 6.45441Z"
                      fill=""
                    />
                  </svg>

                  <div>
                    <span className="block text-custom-xs">
                      Download on the
                    </span>
                    <p className="font-medium">App Store</p>
                  </div>
                </a>
              </li>

              <li>
                <div className="flex gap-4 items-center">
                <img src="/images/logo/logo.png" width={45} height={45} className="max-w-12"/>
                <span className="font-bold text-2xl text-[#273057]">SharpSpaceLtd</span>
                </div>
                {/* <a
                  className="inline-flex items-center gap-3 py-[9px] pl-4 pr-8.5 text-white rounded-md bg-blue ease-out duration-200 hover:bg-opacity-95"
                  href="#"
                >
                  <svg
                    className="fill-current"
                    width="34"
                    height="35"
                    viewBox="0 0 34 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.45764 1.03125L19.9718 15.5427L23.7171 11.7973C18.5993 8.69224 11.7448 4.52679 8.66206 2.65395L6.59681 1.40278C6.23175 1.18039 5.84088 1.06062 5.45764 1.03125ZM3.24214 2.76868C3.21276 2.92814 3.1875 3.08837 3.1875 3.26041V31.939C3.1875 32.0593 3.21169 32.1713 3.22848 32.2859L17.9939 17.5205L3.24214 2.76868ZM26.1785 13.2916L21.9496 17.5205L26.1047 21.6756C28.3062 20.3412 29.831 19.4147 30.0003 19.3126C30.7486 18.8552 31.1712 18.1651 31.1586 17.4112C31.1474 16.6713 30.7247 16.0098 30.0057 15.6028C29.8449 15.5104 28.3408 14.6022 26.1785 13.2916ZM19.9718 19.4983L5.50135 33.9688C5.78248 33.9198 6.06327 33.836 6.33182 33.6737C6.70387 33.4471 16.7548 27.3492 23.6433 23.1699L19.9718 19.4983Z"
                      fill=""
                    />
                  </svg>

                  <div>
                    <span className="block text-custom-xs"> Get in On </span>
                    <p className="font-medium">Google Play</p>
                  </div>
                </a> */}
              </li>
            </ul>
          </div>
        </div>
        {/* <!-- footer menu end --> */}
      </div>

      {/* <!-- footer bottom start --> */}
      <div className="py-5 xl:py-7.5 bg-gray-1">
        <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
          <div className="flex gap-5 flex-wrap items-center justify-between">
            <p className="text-dark font-medium">
              &copy; {year}. All rights reserved.
            </p>
{/* 
            <div className="flex flex-wrap items-center gap-4">
              <p className="font-medium">We Accept:</p>

              <div className="flex flex-wrap items-center gap-6">
                <a href="#" aria-label="payment system with visa card">
                  <Image
                    src="/images/payment/payment-01.svg"
                    alt="visa card"
                    width={66}
                    height={22}
                  />
                </a>
                <a href="#" aria-label="payment system with paypal">
                  <Image
                    src="/images/payment/payment-02.svg"
                    alt="paypal"
                    width={18}
                    height={21}
                  />
                </a>
                <a href="#" aria-label="payment system with master card">
                  <Image
                    src="/images/payment/payment-03.svg"
                    alt="master card"
                    width={33}
                    height={24}
                  />
                </a>
                <a href="#" aria-label="payment system with apple pay">
                  <Image
                    src="/images/payment/payment-04.svg"
                    alt="apple pay"
                    width={52.94}
                    height={22}
                  />
                </a>
                <a href="#" aria-label="payment system with google pay">
                  <Image
                    src="/images/payment/payment-05.svg"
                    alt="google pay"
                    width={56}
                    height={22}
                  />
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      {/* <!-- footer bottom end --> */}
    </footer>
  );
};

export default Footer;
