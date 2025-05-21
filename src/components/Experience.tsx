import { Timeline } from "./ui/timeline";
import { Profiler } from "react";


const designToolIcons = [
    {
        name: "Figma",
        svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
            <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
            <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
            <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
            <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
        </svg>,
        description: "Design Tool"
    },
    {
        name: "Sketch",
        svg: <svg className="shrink-0 size-4 me-1" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd"
                d="M11.0597 0.32329C11.02 0.31932 10.98 0.31932 10.9403 0.32329L5.3403 0.883285C5.17075 0.900245 5.0164 0.988485 4.91578 1.126L0.119634 7.68074C0.0464736 7.77832 0.00235197 7.89893 9.11713e-05 8.02973C3.03713e-05 8.03325 0 8.03679 0 8.04031L4.76837e-06 8.04274C0.000580768 8.18808 0.0528336 8.32124 0.139339 8.42477L10.5367 21.0616C10.6506 21.2001 10.8206 21.2803 11 21.2803C11.1794 21.2803 11.3494 21.2001 11.4633 21.0616L21.8606 8.42479C21.9472 8.32125 21.9994 8.18808 22 8.04274V8.03301C21.9998 8.0237 21.9995 8.0144 21.999 8.00511C21.992 7.8838 21.949 7.77216 21.8803 7.68072L17.0842 1.126C16.9835 0.988485 16.8293 0.900245 16.6597 0.883285L11.0597 0.32329ZM16.48 7.44031V7.40407L16.4757 7.44031H16.48ZM16.4947 7.28026H20.1003L16.9992 3.04205L16.4947 7.28026ZM15.9131 2.01461L11.8709 1.61039L15.2795 7.33684L15.9131 2.01461ZM10.1291 1.61039L6.0869 2.01461L6.7205 7.33684L10.1291 1.61039ZM5.00074 3.04205L1.89962 7.28026H5.50528L5.00074 3.04205ZM1.87066 8.64031L9.81378 18.2942L5.75794 8.70733C5.74859 8.68525 5.74102 8.66285 5.73518 8.64031H1.87066ZM7.24088 8.64031L11 18.3739L14.7591 8.64031H7.24088ZM16.2648 8.64031C16.259 8.66285 16.2514 8.68525 16.2421 8.70733L12.1862 18.2942L20.1293 8.64031H16.2648ZM11 2.49337L13.9446 7.44031H8.05539L11 2.49337Z"
                fill="currentColor" />
        </svg>,
        description: "Design Tool"
    },
    {
        name: "GitHub",
        svg: <svg className="shrink-0 size-4 me-1 dark:rouderd dark:bg-white" width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round">
            </g>
            <g id="SVGRepo_iconCarrier">
                <path
                    d="M4.0744 2.9938C4.13263 1.96371 4.37869 1.51577 5.08432 1.15606C5.84357 0.768899 7.04106 0.949072 8.45014 1.66261C9.05706 1.97009 9.11886 1.97635 10.1825 1.83998C11.5963 1.65865 13.4164 1.65929 14.7213 1.84164C15.7081 1.97954 15.7729 1.97265 16.3813 1.66453C18.3814 0.651679 19.9605 0.71795 20.5323 1.8387C20.8177 2.39812 20.8707 3.84971 20.6494 5.04695C20.5267 5.71069 20.5397 5.79356 20.8353 6.22912C22.915 9.29385 21.4165 14.2616 17.8528 16.1155C17.5801 16.2574 17.3503 16.3452 17.163 16.4167C16.5879 16.6363 16.4133 16.703 16.6247 17.7138C16.7265 18.2 16.8491 19.4088 16.8973 20.4002C16.9844 22.1922 16.9831 22.2047 16.6688 22.5703C16.241 23.0676 15.6244 23.076 15.2066 22.5902C14.9341 22.2734 14.9075 22.1238 14.9075 20.9015C14.9075 19.0952 14.7095 17.8946 14.2417 16.8658C13.6854 15.6415 14.0978 15.185 15.37 14.9114C17.1383 14.531 18.5194 13.4397 19.2892 11.8146C20.0211 10.2698 20.1314 8.13501 18.8082 6.83668C18.4319 6.3895 18.4057 5.98446 18.6744 4.76309C18.7748 4.3066 18.859 3.71768 18.8615 3.45425C18.8653 3.03823 18.8274 2.97541 18.5719 2.97541C18.4102 2.97541 17.7924 3.21062 17.1992 3.49805L16.2524 3.95695C16.1663 3.99866 16.07 4.0147 15.975 4.0038C13.5675 3.72746 11.2799 3.72319 8.86062 4.00488C8.76526 4.01598 8.66853 3.99994 8.58215 3.95802L7.63585 3.49882C7.04259 3.21087 6.42482 2.97541 6.26317 2.97541C5.88941 2.97541 5.88379 3.25135 6.22447 4.89078C6.43258 5.89203 6.57262 6.11513 5.97101 6.91572C5.06925 8.11576 4.844 9.60592 5.32757 11.1716C5.93704 13.1446 7.4295 14.4775 9.52773 14.9222C10.7926 15.1903 11.1232 15.5401 10.6402 16.9905C10.26 18.1319 10.0196 18.4261 9.46707 18.4261C8.72365 18.4261 8.25796 17.7821 8.51424 17.1082C8.62712 16.8112 8.59354 16.7795 7.89711 16.5255C5.77117 15.7504 4.14514 14.0131 3.40172 11.7223C2.82711 9.95184 3.07994 7.64739 4.00175 6.25453C4.31561 5.78028 4.32047 5.74006 4.174 4.83217C4.09113 4.31822 4.04631 3.49103 4.0744 2.9938Z"
                    fill="#0F0F0F"></path>
                <path
                    d="M3.33203 15.9454C3.02568 15.4859 2.40481 15.3617 1.94528 15.6681C1.48576 15.9744 1.36158 16.5953 1.66793 17.0548C1.8941 17.3941 2.16467 17.6728 2.39444 17.9025C2.4368 17.9449 2.47796 17.9858 2.51815 18.0257C2.71062 18.2169 2.88056 18.3857 3.05124 18.5861C3.42875 19.0292 3.80536 19.626 4.0194 20.6962C4.11474 21.1729 4.45739 21.4297 4.64725 21.5419C4.85315 21.6635 5.07812 21.7352 5.26325 21.7819C5.64196 21.8774 6.10169 21.927 6.53799 21.9559C7.01695 21.9877 7.53592 21.998 7.99999 22.0008C8.00033 22.5527 8.44791 23.0001 8.99998 23.0001C9.55227 23.0001 9.99998 22.5524 9.99998 22.0001V21.0001C9.99998 20.4478 9.55227 20.0001 8.99998 20.0001C8.90571 20.0001 8.80372 20.0004 8.69569 20.0008C8.10883 20.0026 7.34388 20.0049 6.67018 19.9603C6.34531 19.9388 6.07825 19.9083 5.88241 19.871C5.58083 18.6871 5.09362 17.8994 4.57373 17.2891C4.34391 17.0194 4.10593 16.7834 3.91236 16.5914C3.87612 16.5555 3.84144 16.5211 3.80865 16.4883C3.5853 16.265 3.4392 16.1062 3.33203 15.9454Z"
                    fill="#0F0F0F"></path>
            </g>
        </svg>,
        description: "Version Control System"
    },
    {
        name: "HTML",
        svg: <svg className="shrink-0 size-4 me-1" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.41014 21.6082L1.5 0H22.5L20.5899 21.5965L11.9826 24"
                fill="currentColor" />
            <path d="M12.5 22V2H20.5L18.9734 20.083" fill="currentColor" />
            <path
                d="M5.5 4H12.5V6.64672H8.55789L8.81579 9.35756H12.5V11.9984H6.2614M6.38421 13.3276H9.18421L9.3807 15.4438L12.5 16.2367V19L6.77719 17.4843"
                fill="white" fillOpacity="0.8" />
            <path
                d="M18.5 4H12.5V6.64877H18.2786M18.0624 9.36173H12.5V12.0105H15.4525L15.1731 15.4527L12.5 16.2462V19L17.4033 17.4948"
                fill="white" />
        </svg>,
        description: "Hypertext Markup Language"
    },
    {
        name: "CSS",
        svg: <svg className="shrink-0 size-4 me-1" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M3.3448 21.6009L1.41895 0H22.5809L20.653 21.5975L11.987 24L3.3448 21.6009Z"
                fill="currentColor" />
            <path d="M19.0026 20.2227L20.6501 1.7666H12V22.1641L19.0026 20.2227Z"
                fill="currentColor" />
            <path
                d="M5.83407 9.77721L6.0715 12.4264H12V9.77721H5.83407ZM5.59778 7.06432H12V4.41504H5.35693L5.59778 7.06432ZM12 16.6576L11.9884 16.6607L9.03789 15.864L8.84931 13.7511H6.18981L6.56101 17.9108L11.9878 19.4174L12 19.414V16.6576Z"
                fill="white" fillOpacity="0.8" />
            <path
                d="M11.9907 9.77721V12.4264H15.253L14.9455 15.8623L11.9907 16.6598V19.4161L17.4218 17.9108L17.4617 17.4632L18.0842 10.4886L18.1489 9.77721L18.6271 4.41504H11.9907V7.06432H15.7238L15.4827 9.77721H11.9907Z"
                fill="white" />
        </svg>,
        description: "Cascading Style Sheets"
    },
    {
        name: "Tailwind CSS",
        svg: <svg className="shrink-0 size-4 me-1" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd"
                d="M12 5C8.8 5 6.8 6.6 6 9.8C7.2 8.2 8.6 7.6 10.2 8C11.1129 8.228 11.7653 8.89067 12.4876 9.62356C13.664 10.8178 15.0258 12.2 18 12.2C21.2 12.2 23.2 10.6 24 7.4C22.8 9 21.4 9.6 19.8 9.2C18.8871 8.972 18.2347 8.30933 17.5124 7.57644C16.336 6.38222 14.9742 5 12 5ZM6 12.2C2.8 12.2 0.8 13.8 0 17C1.2 15.4 2.6 14.8 4.2 15.2C5.11289 15.4284 5.76533 16.0907 6.48756 16.8236C7.664 18.0178 9.02578 19.4 12 19.4C15.2 19.4 17.2 17.8 18 14.6C16.8 16.2 15.4 16.8 13.8 16.4C12.8871 16.172 12.2347 15.5093 11.5124 14.7764C10.336 13.5822 8.97422 12.2 6 12.2Z"
                fill="currentColor" />
        </svg>,
        description: "CSS Framework"
    },
    {
        name: "React",
        svg: <svg className="shrink-0 size-4 me-1" width="160" height="143" viewBox="0 0 160 143" fill="none">
            <path
                d="M160 71.2597C160 60.6604 146.726 50.6156 126.376 44.3865C131.072 23.6445 128.985 7.14227 119.788 1.85895C117.668 0.619648 115.19 0.0326126 112.483 0.0326126V7.30534C113.983 7.30534 115.19 7.59886 116.201 8.15328C120.636 10.6971 122.56 20.3832 121.06 32.8414C120.701 35.9071 120.114 39.1358 119.397 42.4297C113.004 40.8642 106.025 39.6576 98.6873 38.8748C94.2845 32.8414 89.7187 27.3624 85.1203 22.5683C95.7521 12.6865 105.732 7.27273 112.515 7.27273V0C103.547 0 91.806 6.39217 79.9348 17.4806C68.0636 6.4574 56.3229 0.130453 47.3543 0.130453V7.40318C54.1052 7.40318 64.1174 12.7843 74.7493 22.6009C70.1834 27.395 65.6176 32.8414 61.2801 38.8748C53.9095 39.6576 46.9303 40.8642 40.5381 42.4623C39.788 39.201 39.2336 36.0375 38.8422 33.0045C37.3094 20.5463 39.201 10.8602 43.6038 8.28373C44.5821 7.6967 45.8541 7.43579 47.3543 7.43579V0.163066C44.6148 0.163066 42.1362 0.750101 39.9837 1.9894C30.8194 7.27273 28.7648 23.7424 33.4937 44.4191C13.2083 50.6808 0 60.693 0 71.2597C0 81.8589 13.2735 91.9038 33.6241 98.1329C28.9278 118.875 31.0151 135.377 40.212 140.66C42.3318 141.9 44.8104 142.487 47.5499 142.487C56.5186 142.487 68.2593 136.095 80.1305 125.006C92.0016 136.029 103.742 142.356 112.711 142.356C115.45 142.356 117.929 141.769 120.082 140.53C129.246 135.247 131.3 118.777 126.572 98.1003C146.792 91.8712 160 81.8263 160 71.2597ZM117.538 49.5067C116.331 53.7138 114.831 58.0514 113.135 62.3889C111.798 59.7799 110.395 57.1708 108.863 54.5618C107.362 51.9527 105.764 49.4089 104.166 46.9303C108.797 47.6152 113.265 48.4631 117.538 49.5067ZM102.601 84.2397C100.057 88.6425 97.448 92.817 94.7411 96.6979C89.8818 97.1219 84.9572 97.3502 80 97.3502C75.0754 97.3502 70.1508 97.1219 65.3241 96.7305C62.6172 92.8496 59.9755 88.7077 57.4317 84.3375C54.9531 80.0652 52.7028 75.7277 50.6482 71.3575C52.6702 66.9874 54.9531 62.6172 57.3991 58.3449C59.9429 53.9421 62.552 49.7676 65.2589 45.8867C70.1182 45.4627 75.0428 45.2344 80 45.2344C84.9246 45.2344 89.8492 45.4627 94.6759 45.8541C97.3828 49.735 100.024 53.8769 102.568 58.247C105.047 62.5194 107.297 66.8569 109.352 71.2271C107.297 75.5972 105.047 79.9674 102.601 84.2397ZM113.135 80C114.896 84.3701 116.396 88.7403 117.636 92.98C113.363 94.0236 108.863 94.9042 104.199 95.5891C105.797 93.0779 107.395 90.5014 108.895 87.8598C110.395 85.2507 111.798 82.609 113.135 80ZM80.0652 114.798C77.0322 111.667 73.9992 108.178 70.9988 104.362C73.934 104.492 76.9344 104.59 79.9674 104.59C83.033 104.59 86.066 104.525 89.0338 104.362C86.0987 108.178 83.0656 111.667 80.0652 114.798ZM55.8011 95.5891C51.17 94.9042 46.702 94.0563 42.4297 93.0126C43.6364 88.8055 45.1366 84.468 46.8325 80.1305C48.1696 82.7395 49.572 85.3486 51.1048 87.9576C52.6376 90.5667 54.203 93.1105 55.8011 95.5891ZM79.9022 27.7212C82.9352 30.852 85.9682 34.3416 88.9686 38.1574C86.0334 38.0269 83.033 37.9291 80 37.9291C76.9344 37.9291 73.9014 37.9943 70.9336 38.1574C73.8687 34.3416 76.9018 30.852 79.9022 27.7212ZM55.7685 46.9303C54.1704 49.4415 52.5724 52.0179 51.0722 54.6596C49.572 57.2687 48.1696 59.8777 46.8325 62.4868C45.0713 58.1166 43.5711 53.7464 42.3318 49.5067C46.6042 48.4957 51.1048 47.6152 55.7685 46.9303ZM26.2536 87.7619C14.7085 82.8373 7.24011 76.3799 7.24011 71.2597C7.24011 66.1394 14.7085 59.6494 26.2536 54.7574C29.0583 53.5508 32.1239 52.4745 35.2874 51.4635C37.1464 57.8557 39.5923 64.5088 42.6254 71.3249C39.625 78.1084 37.2116 84.7289 35.3853 91.0885C32.1566 90.0774 29.0909 88.9686 26.2536 87.7619ZM43.7994 134.366C39.364 131.822 37.4399 122.136 38.9401 109.678C39.2988 106.612 39.8859 103.384 40.6034 100.09C46.9955 101.655 53.9747 102.862 61.3127 103.645C65.7155 109.678 70.2813 115.157 74.8797 119.951C64.2479 129.833 54.2682 135.247 47.4847 135.247C46.0171 135.214 44.7778 134.921 43.7994 134.366ZM121.158 109.515C122.691 121.973 120.799 131.659 116.396 134.236C115.418 134.823 114.146 135.084 112.646 135.084C105.895 135.084 95.8826 129.702 85.2507 119.886C89.8166 115.092 94.3824 109.645 98.7199 103.612C106.091 102.829 113.07 101.623 119.462 100.024C120.212 103.318 120.799 106.482 121.158 109.515ZM133.714 87.7619C130.909 88.9686 127.843 90.0448 124.68 91.0558C122.821 84.6637 120.375 78.0106 117.342 71.1945C120.342 64.4109 122.756 57.7905 124.582 51.4309C127.811 52.4419 130.876 53.5508 133.746 54.7574C145.291 59.682 152.76 66.1394 152.76 71.2597C152.727 76.3799 145.259 82.87 133.714 87.7619Z"
                fill="currentColor" />
            <path
                d="M79.9674 86.1639C88.1988 86.1639 94.8716 79.4911 94.8716 71.2597C94.8716 63.0284 88.1988 56.3555 79.9674 56.3555C71.7361 56.3555 65.0632 63.0284 65.0632 71.2597C65.0632 79.4911 71.7361 86.1639 79.9674 86.1639Z"
                fill="currentColor" />
        </svg>,
        description: "Frontend Framework"
    },
    {
        name: "Angular",
        svg: <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round">
            </g>
            <g id="SVGRepo_iconCarrier">
                <path d="M16 2L3 7L5 24L16 30L27 24L29 7L16 2Z" fill="#DD0031"></path>
                <path d="M16 2V30L27 24L29 7L16 2Z" fill="#C3002F"></path>
                <path
                    d="M15.9998 5.09375L7.87305 23.3638H10.9031L12.5368 19.2757H19.4348L21.0685 23.3638H24.0986L15.9998 5.09375ZM18.3736 16.7557H13.626L15.9998 11.0298L18.3736 16.7557Z"
                    fill="white"></path>
            </g>
        </svg>,
        description: "Frontend Framework"
    },
    {
        name: ".NET",
        svg: <svg width="20" height="20" fill="#000000" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round">
            </g>
            <g id="SVGRepo_iconCarrier">
                <title>dotnet</title>
                <path
                    d="M3.175 20.551c-0.001 0.289-0.123 0.549-0.318 0.733l-0.001 0c-0.2 0.188-0.47 0.303-0.767 0.303s-0.568-0.116-0.769-0.304l0.001 0.001c-0.195-0.184-0.317-0.444-0.317-0.732s0.122-0.549 0.318-0.732l0.001-0c0.2-0.188 0.47-0.303 0.767-0.303s0.567 0.115 0.768 0.304l-0.001-0.001c0.195 0.184 0.317 0.444 0.318 0.733v0zM14.051 21.417h-1.947l-5.126-8.088c-0.118-0.182-0.227-0.392-0.314-0.613l-0.009-0.024h-0.045c0.041 0.365 0.064 0.787 0.064 1.215 0 0.104-0.001 0.208-0.004 0.312l0-0.015v7.213h-1.721v-11.003h2.073l4.955 7.898c0.209 0.326 0.344 0.552 0.404 0.675h0.030c-0.050-0.374-0.078-0.806-0.078-1.245 0-0.083 0.001-0.165 0.003-0.248l-0 0.012v-7.093h1.715zM22.433 21.417h-6.025v-11.003h5.786v1.55h-4.005v3.117h3.69v1.542h-3.69v3.254h4.244zM30.996 11.964h-3.084v9.454h-1.781v-9.454h-3.077v-1.55h7.941z">
                </path>
            </g>
        </svg>,
        description: "Framework"
    },
    {
        name: "Python",
        svg: '',
        description: "Programming Language"
    },
    {
        name: "C#",
        svg: <img src="/image/c-sharp.png" alt="C#" className="h-5 w-5" />,
        description: "Programming Language",
    },
    {
        name: "TypeScript",
        svg: <img src="/image/typescript.png" alt="TypeScript" className="h-5 w-5 object-contain" />,
        description: "Programming Language",
    },
    {
        name: "Node.js",
        svg: <img src="/image/nodejs.png" alt="Node.js" className="h-5 w-5 object-contain" />,
        description: "Runtime Environment",
    },
    {
        name: "JavaScript",
        svg: <img src="/image/js.png" alt="JavaScript" className="h-5 w-5 object-contain" />,
        description: "Programming Language",
    },
    {
        name: "PHP",
        svg: <img src="/image/php.png" alt="PHP" className="h-6 w-5 object-contain" />,
        description: "Server-side Scripting",
    },
    {
        name: "Java",
        svg: <img src="/image/java.png" alt="Java" className="h-6 w-5 object-contain" />,
        description: "Programming Language",
    },
];
const data = [
    {
        title: "Experience",
        content: (
            <div className="w-full">
                <p className="mb-4 text-xs font-normal text-neutral-200 mt-3">
                    Over 5 years of experience working with top tech teams in Nigeria across mobile and web applications.
                </p>
                <div className="mb-8 w-full space-y-5">
                    {[
                        {
                            quote:
                                "A borderless payment platform built with React, Angular, and .NET, integrating local PSPs to streamline cross-border financial transactions.",
                            name: "Onafriq Payment Platform",
                            designation: "Software Developer",
                            company: "Onafriq",
                            location: "London, United Kingdom",
                            date: "Nov 2022 – Present",
                            src: "https://images.unsplash.com/photo-1605902711622-cfb43c4437e1?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
                        },
                        {
                            quote:
                                "A mobile telemedicine application developed using React Native, increasing user access to healthcare and driving a 50% rise in engagement.",
                            name: "10zyme Telemedicine App",
                            designation: "Volunteer Software Developer",
                            company: "10zyme",
                            location: "Essex, United Kingdom",
                            date: "Dec 2023 – Jul 2024",
                            src: "https://images.unsplash.com/photo-1588776814546-ec7e5f1a5fcf?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
                        },
                        {
                            quote:
                                "A web-based enterprise dashboard enabling users to manage transactions and financial data securely, leveraging microservices architecture.",
                            name: "Enterprise Finance Dashboard",
                            designation: "Software Developer",
                            company: "Onafriq",
                            location: "London, United Kingdom",
                            date: "Nov 2022 – Present",
                            src: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
                        },
                        {
                            quote:
                                "A faith-based media app delivering sermons, livestreams, and event updates for Miracle Assembly’s global audience.",
                            name: "Miracle Assembly App",
                            designation: "Full Stack Developer",
                            company: "Revent Technologies",
                            location: "Lagos, Nigeria",
                            date: "Jan 2020 – Dec 2021",
                            src: "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
                        },
                        {
                            quote:
                                "SaaS enterprise insurance solution developed with React, Angular, and ASP.NET, helping AXA onboard major corporate clients.",
                            name: "AXA Enterprise Insurance Platform",
                            designation: "Frontend Developer",
                            company: "AXA",
                            location: "Lagos, Nigeria",
                            date: "Jan 2021 – Nov 2021",
                            src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
                        },
                    ]
                        .map((job, idx) => (
                            <div
                                key={idx}
                                className="grid grid-cols-7 py-5 gap-5 text-xs text-white border-b border-neutral-700"
                            >
                                <div className="text-left text-neutral-300 text-xs col-span-2">
                                    <p>{job.date}</p>
                                    <p>{job.location}</p>
                                </div>
                                <div className="flex flex-col  gap-1 text-left col-span-4">
                                    <p className="font-bold">{job.designation}</p>
                                    <p>{job.company}</p>
                                    {/* <p>{job.quote}</p> */}
                                </div>
                                <div className="flex items-center justify-center w-fit h-fit bg-[#5E5E5E] bg-opacity-50 rounded-lg">
                                    <img src="icon/arrow.png" alt="Company Icon" className="w-6 h-6" />
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        ),
    },

    {
        title: "Tech Stack",
        content: (
            <div>
                <p className="mb-4 text-xs font-normal text-neutral-200">
                    Tools and frameworks I've worked with extensively across multiple projects.
                </p>
                <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2 w-full mt-5">
                    {designToolIcons
                        .map((tech, idx) => (
                            <div
                                key={idx}
                                className="flex items-center p-5 rounded-lg gap-3 text-xs text-white bg-[#5E5E5E] bg-opacity-50 border border-[#5E5E5E]"
                            >
                                <div>

                                    {tech.svg}
                                </div>
                                {/* <img src={`${tech.svg}`} alt={`${tech.name} icon`} className="w-6 h-6" /> */}
                                <div>
                                    <p>{tech.name}</p>
                                    <p className="text-neutral-300">{tech.description}</p>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        ),
    },
];




export function Experience() {

    return (
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">


            <Profiler id="Timeline" onRender={onRender}>
                <Timeline data={data} />
            </Profiler>


        </div>
    );
};

function onRender(id: any, phase: any, actualDuration: any, baseDuration: any, startTime: any, commitTime: any) {
    console.log({ id, phase, actualDuration, baseDuration, startTime, commitTime });
    // Aggregate or log render timings...
}