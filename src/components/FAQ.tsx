import React, { FC } from "react";
import styled from "styled-components";
import { Div } from "../styles/Div.styled";
import { Flex } from "../styles/Flex.styled";
import { Accordion } from "./Accordion";
import { StyledH2, StyledP } from "../styles/Fonts.styled";
import { useMediaQuery } from "react-responsive";

const StyledText = styled(StyledP)`
    & {
        span {
            color: #FF654E;
        }
    }
`

export const FAQ: FC = () => {
    const isTablet = useMediaQuery({ query: '(max-width: 999.5px)' })
    return (
        <Flex
            justify={'space-between'}
            mb={'50px'}
        >
            <Flex
                direction={'column'}
            >
                <StyledH2
                    mt={isTablet ? '60px' : '100px'}
                    mb={'40px'}
                    fontWeight={'700'}
                >
                    Если остались вопросы
                </StyledH2>
                <Div
                    mb={'18px'}
                >
                    <StyledText pb={'12px'}><b><span>PROMOCODESHUB</span></b> - бесплатная платформа с актуальными промокодами и <br /> акциями. Мы собрали самые выгодные скидки в одном месте.</StyledText>
                    <StyledText pb={'12px'}>Этот ресус создан для того, чтобы <span>помочь вам сэкономить.</span></StyledText>
                </Div>
                <Accordion />
                <Div
                    mt={'20px'}>
                    <StyledText>
                        Не нашли ответ на свой вопрос?<br />
                        Пишите нам, мы поможем: <span>support@promocodeshub.ru</span>
                    </StyledText>
                </Div>
            </Flex>
                <svg style={{ marginTop: '176px' }} width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_418_469)">
                        <rect width="500" height="500" rx="32" fill="#4A89C1" fillOpacity="0.6" />
                        <path d="M214.86 62.0001C224.193 53.6935 236.28 48.2535 251.12 45.6801C265.96 43.1068 281.647 44.7401 298.18 50.5801C314.66 56.4201 329.733 66.9668 343.4 82.2201C356.107 96.4068 364.693 111.267 369.16 126.8C373.616 141.164 374.024 156.479 370.34 171.06C366.84 184.576 359.389 196.741 348.94 206C341.504 212.972 332.431 217.958 322.56 220.5C313.745 222.695 304.647 223.532 295.58 222.98C286.873 222.42 271.767 220.933 250.26 218.52C245.225 217.972 240.165 217.692 235.1 217.68C231.632 217.657 228.173 218.053 224.8 218.86C222.124 219.542 219.524 220.494 217.04 221.7C214.64 222.88 210.58 225.06 204.82 228.28C192.98 235.52 182.687 234.253 173.94 224.48C171.767 222.169 170.074 219.45 168.958 216.481C167.842 213.511 167.326 210.35 167.44 207.18C167.667 200.74 171.053 194.587 177.6 188.72C190.935 175.942 208.796 168.979 227.26 169.36C237.771 169.711 248.258 170.592 258.68 172C269.76 173.34 277.94 174.18 283.22 174.46C288.462 174.76 293.72 174.322 298.84 173.16C303.948 172.028 308.671 169.581 312.54 166.06C316.326 162.773 319.359 158.707 321.43 154.141C323.501 149.574 324.562 144.614 324.54 139.6C324.7 128.933 320.7 119.02 312.54 109.86C302.9 99.1001 293.093 93.6135 283.12 93.4001C273.147 93.1868 261.273 96.0535 247.5 102C233.487 108.573 222.32 107.24 214 98.0001C211.632 95.4619 209.821 92.4574 208.681 89.1788C207.541 85.9002 207.098 82.4198 207.38 78.9602C207.44 75.7785 208.132 72.6405 209.417 69.7289C210.701 66.8172 212.551 64.19 214.86 62.0001V62.0001ZM118.18 277.38C112.954 271.702 110.037 264.277 110 256.56C109.88 248.667 113.287 241.607 120.22 235.38C123.073 232.741 126.443 230.723 130.116 229.452C133.789 228.182 137.686 227.688 141.56 228C145.484 228.237 149.32 229.263 152.838 231.015C156.357 232.768 159.487 235.211 162.04 238.2C164.666 241.043 166.693 244.384 168.002 248.025C169.312 251.666 169.876 255.534 169.661 259.397C169.446 263.261 168.458 267.042 166.753 270.516C165.049 273.99 162.664 277.086 159.74 279.62C152.9 285.74 145.567 288.353 137.74 287.46C130.179 286.699 123.188 283.096 118.18 277.38Z" fill="#FF654E" />
                        <path d="M212.7 353.06C212.7 353.06 185.02 484.6 177.66 527.66C169.66 574.82 152.08 709.84 152.08 709.84L177.78 719.18C177.78 719.18 218 576 224.1 530.66C236.88 486.34 269.26 353.06 269.26 353.06H212.7Z" fill="#4F3933" />
                        <path d="M234.12 240.4C232.78 243.64 231.5 246.52 230.12 249.48C228.74 252.44 227.26 255.34 225.76 258.24C222.72 264.02 219.52 269.72 216 275.28C208.996 286.836 200.526 297.438 190.8 306.82L190.44 307.18C189.93 307.639 189.366 308.036 188.76 308.36C187.095 309.258 185.264 309.809 183.38 309.98C182.301 310.057 181.219 310.057 180.14 309.98C178.526 309.876 176.922 309.655 175.34 309.32C172.5 308.72 169.98 307.98 167.5 307.2C162.58 305.64 158 303.74 153.5 301.82C149 299.9 144.56 297.82 140.2 295.56C135.84 293.3 131.56 291.04 127.32 288.48C126.337 287.879 125.6 286.948 125.242 285.853C124.884 284.758 124.928 283.571 125.367 282.506C125.805 281.441 126.61 280.567 127.635 280.042C128.66 279.516 129.839 279.374 130.96 279.64C140.24 281.88 149.5 284.38 158.62 286.6C163.16 287.74 167.7 288.74 172.06 289.58C174.115 289.996 176.191 290.296 178.28 290.48C179.066 290.525 179.854 290.525 180.64 290.48C180.94 290.48 181.06 290.48 180.98 290.48C180.269 290.499 179.577 290.714 178.98 291.1L176.98 292.64C180.85 288.357 184.437 283.827 187.72 279.08C191.08 274.22 194.26 269.08 197.32 263.92C200.38 258.76 203.32 253.34 206.1 247.92C208.88 242.5 211.64 236.92 214.1 231.7L214.22 231.44C215.4 228.788 217.586 226.713 220.296 225.672C223.005 224.631 226.018 224.71 228.67 225.89C231.322 227.07 233.397 229.255 234.438 231.965C235.478 234.675 235.4 237.688 234.22 240.34L234.12 240.4Z" fill="#FFC3BD" />
                        <path d="M231.04 219.24C218.16 219.6 209.32 233.58 200.88 251C207.35 262.183 216.621 271.489 227.78 278C227.78 278 261.62 218.38 231.04 219.24Z" fill="#4A89C1" />
                        <path d="M126.68 288.56L115.08 285.6L124.12 273.98C124.12 273.98 134.12 275.56 137.92 283.98L133.8 286.92C132.801 287.689 131.647 288.233 130.419 288.516C129.19 288.799 127.915 288.814 126.68 288.56V288.56Z" fill="#FFC3BD" />
                        <path d="M112.26 273.72L114.5 271.72C115.416 270.917 116.586 270.463 117.805 270.437C119.023 270.412 120.211 270.816 121.16 271.58L124.12 273.96L115.08 285.58L111.38 279.82C110.767 278.867 110.519 277.726 110.681 276.605C110.842 275.485 111.403 274.46 112.26 273.72V273.72Z" fill="#FFC3BD" />
                        <path d="M243.333 352.707C243.333 352.707 246.833 484.947 249.333 528.527C252.133 576.247 275.833 717.626 275.833 717.626H304.833C304.833 717.626 298.473 574.446 293.673 527.626C295.673 476.346 296.993 352.667 296.993 352.667L243.333 352.707Z" fill="#4F3933" />
                        <path d="M219.36 229.42C220.213 226.83 221.748 224.519 223.803 222.727C225.859 220.936 228.358 219.731 231.04 219.24C234.948 218.328 238.909 217.66 242.9 217.24C254.891 216.578 266.909 216.578 278.9 217.24C285.18 217.52 291.58 218.26 296.68 218.98H296.86C298.17 219.132 299.436 219.55 300.58 220.207C301.723 220.864 302.721 221.747 303.513 222.803C304.304 223.858 304.873 225.063 305.183 226.345C305.494 227.627 305.541 228.959 305.32 230.26C301.328 250.64 298.715 271.267 297.5 292C296.26 322.12 297.94 345.76 297.34 353.02H212.7C207.56 279.56 214.2 246.16 219.36 229.42Z" fill="#4A89C1" />
                        <path d="M284.64 172.42C286.117 173.486 287.291 174.917 288.048 176.574C288.806 178.23 289.12 180.054 288.961 181.868C288.802 183.683 288.174 185.425 287.14 186.923C286.105 188.422 284.7 189.627 283.06 190.42C286.48 196.08 277.38 206.08 268.22 199.8C259.06 193.52 272 167.08 284.64 172.42Z" fill="#263238" />
                        <path d="M246.76 166.34C245.503 166.377 244.258 166.087 243.147 165.498C242.036 164.91 241.097 164.043 240.422 162.983C239.746 161.922 239.358 160.705 239.295 159.449C239.231 158.193 239.495 156.943 240.06 155.82C235.8 154.16 236.56 144.86 244.24 144.46C251.92 144.06 255.88 164 246.76 166.34Z" fill="#263238" />
                        <path d="M244.26 225.1C243.688 224.574 243.262 223.909 243.024 223.169C242.786 222.43 242.745 221.641 242.904 220.88C243.064 220.12 243.418 219.414 243.933 218.832C244.448 218.249 245.105 217.811 245.84 217.56C253.56 214.72 254.96 209.12 254.34 203.02C254.163 201.304 253.882 199.601 253.5 197.92L266.6 187.46L276.24 179.78C273.84 189.78 271.16 207.2 276.24 216.02C276.809 216.943 277.03 218.039 276.861 219.11C276.692 220.181 276.146 221.157 275.32 221.86C272 224.8 265.2 228.6 254 228C248.86 227.74 246 226.56 244.26 225.1Z" fill="#FFC3BD" />
                        <path d="M306.76 226.18C313.18 235.86 319.02 245.56 324.54 255.74C327.26 260.84 329.94 266.02 332.36 271.46C333.56 274.18 334.74 276.96 335.84 279.9C337.052 283.08 337.989 286.359 338.64 289.7C339.133 292.135 339.241 294.632 338.96 297.1C338.633 299.098 338.118 301.06 337.42 302.96C336.279 306.058 334.881 309.055 333.24 311.92C330.296 317.115 327.016 322.113 323.42 326.88C316.502 336.112 308.936 344.841 300.78 353C299.838 353.944 298.581 354.51 297.249 354.588C295.918 354.667 294.603 354.253 293.556 353.426C292.51 352.599 291.803 351.416 291.572 350.102C291.34 348.788 291.599 347.435 292.3 346.3V346.18C298.12 336.8 304 327.24 309.32 317.76C311.96 313.04 314.48 308.24 316.5 303.6C318.52 298.96 320 293.88 318.96 293.74C318.322 291.612 317.547 289.528 316.64 287.5C315.64 285.22 314.5 282.86 313.3 280.52C310.86 275.82 308.24 271.04 305.5 266.34C300.02 256.9 294.18 247.38 288.4 238.16V238.04C286.827 235.605 286.286 232.645 286.896 229.812C287.505 226.978 289.215 224.503 291.65 222.93C294.085 221.357 297.044 220.816 299.878 221.426C302.712 222.035 305.187 223.745 306.76 226.18V226.18Z" fill="#FFC3BD" />
                        <path d="M294.32 217.22C307.2 216.98 314.02 227.88 322.46 245.22C312.9 262.92 294.66 270.58 294.66 270.58C294.66 270.58 269 217.66 294.32 217.22Z" fill="#4A89C1" />
                        <path d="M287.72 345.78L280.3 348.14L294.04 358.58C294.04 358.58 305.28 352.74 301.76 347.44L299.48 346.42C295.769 344.782 291.587 344.554 287.72 345.78V345.78Z" fill="#FFC3BD" />
                        <path d="M276.14 357.3L284.48 365.68C284.75 365.943 285.071 366.147 285.424 366.279C285.776 366.411 286.152 366.469 286.528 366.448C286.904 366.427 287.272 366.329 287.608 366.159C287.944 365.989 288.241 365.751 288.48 365.46L294.02 358.58L280.28 348.14L276 354C275.605 354.467 275.401 355.066 275.427 355.677C275.453 356.288 275.707 356.867 276.14 357.3V357.3Z" fill="#FFC3BD" />
                        <path d="M284.46 165.58C281.08 180.34 279.88 189.14 270.8 195.72C267.83 197.892 264.337 199.238 260.677 199.622C257.017 200.005 253.321 199.411 249.965 197.901C246.609 196.39 243.713 194.018 241.573 191.024C239.433 188.031 238.124 184.523 237.78 180.86C236.62 167.02 242.34 145.2 258.5 141.32C274.66 137.44 287.84 150.8 284.46 165.58Z" fill="#FFC3BD" />
                        <path d="M277.62 178.5C273.34 178.72 268.78 163.62 278.22 156.34C276.72 157.16 272.62 155.66 273.34 152.84C270.56 154 258.4 153.5 261.34 148.56C255.16 150.16 241.68 147.48 240.24 141.58C238.8 135.68 245.76 135.48 246.84 136.26C243.78 131.98 243.84 125.7 251.96 123.42C260.08 121.14 272.32 132.88 272.32 132.88C271.04 129.78 275.54 127.28 280.2 129.94C284.86 132.6 287.04 140.16 287.04 140.16C287.04 137.88 297.92 140.94 292.76 150.5C298.1 152.5 300.54 155.34 300.2 160.28C299.86 165.22 296.48 165.5 296.48 165.5C297.195 167.278 297.295 169.245 296.762 171.087C296.229 172.928 295.095 174.538 293.54 175.66C288 180.12 283.16 174.88 277.62 178.5Z" fill="#263238" />
                        <path d="M286.1 179.64C284.219 182.392 281.441 184.407 278.24 185.34C274.12 186.44 272.72 182.76 274.4 178.92C275.92 175.46 279.88 170.7 283.76 171.3C287.64 171.9 288.42 176.2 286.1 179.64Z" fill="#FFC3BD" />
                        <path d="M260 164.98C259.8 166.18 258.96 167.08 258.14 166.98C257.32 166.88 256.8 165.8 257 164.58C257.2 163.36 258.04 162.58 258.86 162.58C259.68 162.58 260.1 163.76 260 164.98Z" fill="#263238" />
                        <path d="M245.36 162.32C245.16 163.54 244.34 164.44 243.52 164.32C242.7 164.2 242.18 163.14 242.38 161.92C242.58 160.7 243.4 159.92 244.22 159.92C245.04 159.92 245.56 161.12 245.36 162.32Z" fill="#263238" />
                        <path d="M251.14 165.04C249.009 168.559 246.405 171.769 243.4 174.58C244.178 175.311 245.103 175.868 246.114 176.213C247.125 176.557 248.197 176.683 249.26 176.58L251.14 165.04Z" fill="#ED847E" />
                        <path d="M251.86 182.54C253.315 182.704 254.787 182.577 256.192 182.165C257.597 181.752 258.905 181.064 260.04 180.14C260.106 180.07 260.143 179.977 260.143 179.88C260.143 179.783 260.106 179.69 260.04 179.62C259.968 179.558 259.875 179.524 259.78 179.524C259.685 179.524 259.592 179.558 259.52 179.62C258.272 180.61 256.815 181.305 255.26 181.651C253.704 181.998 252.091 181.987 250.54 181.62C250.493 181.608 250.443 181.606 250.395 181.614C250.347 181.622 250.301 181.639 250.26 181.666C250.219 181.692 250.183 181.726 250.156 181.766C250.128 181.807 250.109 181.852 250.1 181.9C250.088 181.946 250.086 181.994 250.094 182.041C250.103 182.088 250.12 182.133 250.147 182.172C250.173 182.212 250.207 182.245 250.248 182.271C250.288 182.296 250.333 182.313 250.38 182.32C250.867 182.429 251.362 182.503 251.86 182.54V182.54Z" fill="#263238" />
                        <path d="M260.6 156.66C260.48 156.692 260.37 156.754 260.28 156.84C260.21 156.905 260.155 156.984 260.117 157.072C260.079 157.16 260.06 157.254 260.06 157.35C260.06 157.445 260.079 157.54 260.117 157.628C260.155 157.715 260.21 157.794 260.28 157.86C261.059 158.731 262.037 159.4 263.13 159.811C264.224 160.222 265.401 160.362 266.56 160.22C266.656 160.21 266.749 160.181 266.833 160.134C266.918 160.087 266.991 160.022 267.049 159.945C267.108 159.868 267.149 159.78 267.172 159.686C267.194 159.592 267.197 159.495 267.18 159.4C267.163 159.304 267.127 159.212 267.075 159.13C267.023 159.048 266.955 158.977 266.875 158.921C266.795 158.866 266.705 158.826 266.609 158.805C266.514 158.784 266.416 158.783 266.32 158.8C265.403 158.881 264.48 158.742 263.628 158.394C262.775 158.046 262.019 157.499 261.42 156.8C261.309 156.704 261.174 156.64 261.03 156.615C260.885 156.59 260.736 156.606 260.6 156.66V156.66Z" fill="#263238" />
                        <path d="M241.22 153.04C241.33 153.089 241.449 153.114 241.57 153.114C241.691 153.114 241.81 153.089 241.92 153.04C242.774 152.614 243.711 152.381 244.665 152.357C245.618 152.333 246.566 152.518 247.44 152.9C247.611 152.997 247.812 153.024 248.002 152.975C248.192 152.927 248.356 152.807 248.46 152.64C248.547 152.466 248.565 152.266 248.509 152.08C248.453 151.894 248.328 151.737 248.16 151.64C247.08 151.122 245.898 150.853 244.7 150.853C243.502 150.853 242.32 151.122 241.24 151.64C241.152 151.678 241.074 151.734 241.009 151.804C240.945 151.875 240.896 151.958 240.866 152.049C240.836 152.139 240.825 152.235 240.834 152.33C240.844 152.425 240.873 152.517 240.92 152.6C240.965 152.777 241.072 152.933 241.22 153.04V153.04Z" fill="#263238" />
                    </g>
                    <defs>
                        <clipPath id="clip0_418_469">
                            <rect width="500" height="500" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
        </Flex>
    )
}