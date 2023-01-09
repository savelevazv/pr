import { FC } from "react";
import { Div } from "../../../styles/Div.styled";
import { Flex } from "../../../styles/Flex.styled";
import { Link } from "../../Link";
import { StyledBannerStatisticsBtn } from "../../Buttons/Buttons.styled";
import { StyledSpan } from "../../../styles/Fonts.styled";
import { NumElement } from "./NumElement";
import { useMediaQuery } from "react-responsive";

export const BannerStatistics: FC = () => {

    const isTablet = useMediaQuery({ query: '(min-width: 768px) and (max-width: 999.5px)' })
    const isDesktop = useMediaQuery({ query: '(min-width: 1000px) and (max-width: 1280px)' })

    return (
        <>
            {
                isTablet
                    ? <></>
                    : <Flex
                        direction={'column'}
                        align={'center'}
                    >
                        <StyledSpan
                            fontSize={'32px'}
                            fontWeight={'700'}
                            mt={'50px'}
                            mb={'40px'}
                        >
                            Делаем покупки выгодными
                        </StyledSpan>
                        {
                            isDesktop ?
                                (
                                    <Flex
                                        width={'100%'}
                                        height={'360px'}
                                        br={'14px'}
                                        backgroundColor={'#d4c6ff'}
                                        padding={'0 30px 0 50px'}
                                        justify={'space-between'}
                                        align={'flex-end'}

                                    >
                                        <Flex
                                            direction={'column'}
                                            justify={'space-between'}
                                            height={'100%'}
                                            pt={'40px'}
                                            pb={'40px'}
                                            align={'center'}
                                        >
                                            <Div>
                                                <Flex
                                                    gap={'40px'}
                                                    mb={'40px'}
                                                >
                                                    <NumElement
                                                        number={4247}
                                                        title={'магазинов'}
                                                    />
                                                    <NumElement
                                                        number={40325}
                                                        title={'акционных предложений'}
                                                    />
                                                </Flex>
                                                <Flex
                                                    gap={'40px'}
                                                >
                                                    <NumElement
                                                        number={15258}
                                                        title={'заказов со скидкой'}
                                                    />
                                                    <NumElement
                                                        number={25137}
                                                        title={'промокодов'}
                                                    />
                                                </Flex>
                                            </Div>
                                            <Link
                                                to={'collaboration'}
                                            >
                                                <StyledBannerStatisticsBtn>
                                                    Сотрудничать
                                                </StyledBannerStatisticsBtn>
                                            </Link>
                                        </Flex>
                                        <svg width="380" height="321" viewBox="0 0 380 321" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_448_3)">
                                                <path d="M237.519 63.2431C243.794 61.3143 251.574 72.6708 256.361 85.3973C261.148 98.1237 269.054 100.305 277.515 105.406C261.883 127.398 225.436 122.802 213.317 120.026C201.199 117.25 190.352 126.948 174.881 115.537C161.023 105.316 162.045 74.87 186.516 60.9899C181.102 42.2967 236.928 40.422 237.519 63.2431Z" fill="#263238" />
                                                <path d="M126.854 52.4634L96.7177 21.0979L28.6295 74.0227L58.7654 105.406L126.854 52.4634Z" fill="white" />
                                                <path d="M94.9788 19.2952L96.7178 21.0978L28.6296 74.0226L24.5063 59.2952L94.9788 19.2952Z" fill="#EEEEEE" />
                                                <path d="M117.316 42.6393C121.726 39.6289 124.595 35.9335 125.204 32.4905C125.379 31.6673 125.383 30.8167 125.217 29.9917C125.05 29.1667 124.716 28.3851 124.236 27.6956C119.306 20.8096 113.05 25.0818 106.434 29.6063L105.556 30.2012L106.04 30.9042L106.918 30.3094C113.444 25.8389 119.091 21.9633 123.555 28.1823C123.962 28.7822 124.245 29.4586 124.387 30.1709C124.529 30.8832 124.526 31.617 124.38 32.3283C123.806 35.555 121.063 39.0701 116.832 41.9362L117.316 42.6393Z" fill="#263238" />
                                                <path d="M178.431 137.583L152.777 118.205L139.905 108.507L136.767 106.128L135.208 104.956L134.455 104.379L134.078 104.055C132.61 102.629 131.332 101.017 130.278 99.2596C127.846 95.0876 125.932 90.6321 124.577 85.9924C123.119 81.0481 121.922 76.0298 120.991 70.9586C120.005 65.8031 119.199 60.5755 118.661 55.2938C118.123 50.0122 117.549 44.6584 117.209 39.4488V39.3046C117.14 38.2687 116.683 37.2976 115.929 36.5882C115.175 35.8788 114.181 35.4841 113.148 35.4841C112.115 35.4841 111.122 35.8788 110.368 36.5882C109.614 37.2976 109.156 38.2687 109.088 39.3046C108.168 50.4097 108.216 61.5744 109.231 72.671C109.726 78.343 110.607 83.9743 111.866 89.5255C113.141 95.4181 115.185 101.116 117.944 106.47C119.505 109.467 121.479 112.228 123.806 114.672L124.882 115.718L125.706 116.439L127.284 117.809L130.457 120.549C134.58 124.082 138.763 127.567 143.006 131.004L155.77 141.17C160.109 144.469 164.393 147.768 168.893 150.959C170.657 152.12 172.797 152.554 174.871 152.172C176.944 151.79 178.792 150.621 180.032 148.906C181.271 147.192 181.808 145.064 181.53 142.962C181.252 140.861 180.18 138.948 178.538 137.619L178.431 137.583Z" fill="#FFC3BD" />
                                                <path d="M117.065 43.6665L131.067 37.0509L116.599 29.4619C116.599 29.4619 105.412 35.2123 108.998 43.4142L117.065 43.6665Z" fill="#FFC3BD" />
                                                <path d="M134.007 27.3711L121.547 21.6748L116.599 29.4621L131.067 37.0511L134.007 27.3711Z" fill="#FFC3BD" />
                                                <path d="M162.063 144.956C161.812 156.655 163.443 181.008 171.618 231.481H236.784C235.691 204.821 234.4 188.11 247.075 133.383C238.37 131.584 229.542 130.445 220.668 129.976C210.814 129.263 200.923 129.263 191.069 129.976C184.705 130.553 177.893 131.598 172.694 132.482C169.756 132.993 167.086 134.518 165.146 136.795C163.205 139.072 162.115 141.958 162.063 144.956Z" fill="#764DB4" />
                                                <path d="M217.728 96.5193C215.935 106.091 213.999 123.559 220.668 130.03C213.189 137.978 204.172 144.303 194.171 148.615C181.442 140.593 191.069 130.03 191.069 130.03C201.682 127.47 201.414 119.557 199.567 112.112L217.728 96.5193Z" fill="#FFC3BD" />
                                                <path d="M229.04 84.2798C222.783 98.9891 220.435 105.37 210.144 110.382C194.637 117.917 178.018 106.975 179.793 90.661C181.371 75.9877 191.338 54.3744 208.118 53.6353C211.818 53.4565 215.502 54.2315 218.819 55.8868C222.137 57.5421 224.979 60.0227 227.075 63.0931C229.171 66.1634 230.452 69.7216 230.796 73.4297C231.14 77.1378 230.535 80.8727 229.04 84.2798Z" fill="#FFC3BD" />
                                                <path d="M210.664 61.6748C207.079 70.4896 221.116 87.7406 231.191 94.5184C244.027 67.6594 236.39 56.5013 210.664 61.6748Z" fill="#263238" />
                                                <path d="M199.137 52.8061C181.801 57.2406 223.787 71.8958 235.888 72.6349C223.339 51.9769 215.415 47.4704 199.137 52.8061Z" fill="#263238" />
                                                <path d="M171.618 231.535C171.618 231.535 177.23 349.552 176.692 398.764C176.136 449.958 209.535 578.431 209.535 578.431L222.389 574.825C222.389 574.825 216.204 470.274 210.126 398.908C219.305 344.109 224.379 231.463 224.379 231.463L171.618 231.535Z" fill="#FFC3BD" />
                                                <path d="M188.631 231.535C188.631 231.535 224.612 401.107 233.199 417.421C244.78 439.449 352.936 408.21 356.629 408.282L357.167 397.124C357.167 397.124 303.904 395.898 259.767 398.115C259.767 342.54 236.766 231.535 236.766 231.535H188.631Z" fill="#FFC3BD" />
                                                <path d="M204.766 80.3318C204.336 81.5575 203.332 82.3146 202.543 82.0442C201.754 81.7738 201.449 80.53 201.88 79.3043C202.31 78.0785 203.314 77.3034 204.121 77.5918C204.927 77.8802 205.268 79.106 204.766 80.3318Z" fill="#263238" />
                                                <path d="M191.069 75.393C190.621 76.6187 189.635 77.3758 188.829 77.0874C188.022 76.799 187.735 75.5912 188.183 74.3655C188.631 73.1397 189.617 72.3646 190.406 72.5629C191.195 72.7611 191.5 74.1672 191.069 75.393Z" fill="#263238" />
                                                <path d="M190.729 72.8512L188.111 71.0486C188.111 71.0486 188.793 73.7886 190.729 72.8512Z" fill="#263238" />
                                                <path d="M194.01 78.8718C191.917 81.2836 189.504 83.3944 186.839 85.1449C187.301 85.8146 187.903 86.3746 188.602 86.7857C189.302 87.1967 190.083 87.4488 190.89 87.5244L194.01 78.8718Z" fill="#ED847E" />
                                                <path d="M195.569 94.3744C194.858 94.2385 194.157 94.0517 193.472 93.8155C193.377 93.7821 193.299 93.712 193.255 93.6207C193.211 93.5295 193.205 93.4245 193.239 93.3289C193.272 93.2332 193.342 93.1548 193.432 93.1109C193.523 93.0669 193.628 93.061 193.723 93.0945C195.226 93.6781 196.845 93.8941 198.447 93.7249C200.049 93.5556 201.588 93.0059 202.937 92.1211C202.977 92.0903 203.023 92.0678 203.072 92.0547C203.12 92.0417 203.171 92.0384 203.221 92.0451C203.271 92.0518 203.319 92.0684 203.363 92.0938C203.406 92.1192 203.445 92.153 203.475 92.1932C203.506 92.2334 203.528 92.2793 203.541 92.3283C203.554 92.3773 203.557 92.4283 203.551 92.4785C203.544 92.5287 203.528 92.5771 203.502 92.621C203.477 92.6648 203.444 92.7032 203.404 92.734C201.104 94.2841 198.293 94.8725 195.569 94.3744Z" fill="#263238" />
                                                <path d="M229.703 93.3828C228.082 95.9846 225.505 97.8375 222.532 98.5383C218.552 99.4216 216.795 95.7803 218.086 92.121C219.269 88.8222 222.747 84.4058 226.655 85.1629C227.499 85.3559 228.282 85.757 228.933 86.33C229.585 86.903 230.084 87.63 230.386 88.4454C230.689 89.2608 230.785 90.139 230.665 91.001C230.546 91.8629 230.215 92.6814 229.703 93.3828Z" fill="#FFC3BD" />
                                                <path d="M209.23 75.1584C209.028 75.1055 208.855 74.9763 208.746 74.7978C208.308 73.9457 207.678 73.2084 206.906 72.645C206.134 72.0816 205.241 71.7077 204.3 71.5531C204.201 71.5463 204.104 71.5198 204.016 71.4753C203.927 71.4308 203.848 71.3691 203.783 71.2937C203.718 71.2183 203.668 71.1307 203.637 71.0361C203.606 70.9414 203.593 70.8414 203.601 70.7419C203.608 70.6424 203.634 70.5453 203.678 70.456C203.722 70.3667 203.784 70.2872 203.859 70.2218C203.934 70.1565 204.021 70.1067 204.115 70.0753C204.209 70.0439 204.309 70.0316 204.407 70.0389C205.606 70.2008 206.748 70.6506 207.738 71.3503C208.727 72.05 209.534 72.979 210.09 74.0588C210.138 74.1463 210.167 74.2424 210.177 74.3415C210.188 74.4405 210.178 74.5406 210.15 74.6361C210.122 74.7315 210.075 74.8204 210.013 74.8977C209.95 74.9749 209.873 75.039 209.786 75.0863C209.703 75.1372 209.611 75.17 209.516 75.1824C209.42 75.1948 209.322 75.1867 209.23 75.1584Z" fill="#263238" />
                                                <path d="M186.839 66.5599C186.674 66.4653 186.552 66.3102 186.498 66.1272C186.468 66.0314 186.457 65.9304 186.465 65.8302C186.474 65.73 186.503 65.6326 186.55 65.5436C186.596 65.4547 186.66 65.376 186.738 65.3122C186.815 65.2483 186.904 65.2006 187 65.1718C188.149 64.7979 189.37 64.7058 190.561 64.9034C191.753 65.101 192.88 65.5824 193.848 66.3075C193.942 66.3666 194.021 66.4451 194.082 66.5379C194.143 66.6306 194.183 66.7354 194.2 66.8451C194.217 66.9548 194.21 67.0668 194.18 67.1737C194.15 67.2805 194.098 67.3796 194.026 67.4644C193.955 67.5491 193.867 67.6175 193.767 67.6648C193.667 67.7121 193.558 67.7373 193.448 67.7387C193.337 67.7402 193.228 67.7177 193.127 67.6729C193.026 67.6281 192.936 67.5621 192.862 67.4792C192.096 66.9207 191.209 66.5527 190.274 66.4055C189.34 66.2582 188.383 66.3358 187.484 66.632C187.378 66.6667 187.265 66.6782 187.154 66.6658C187.042 66.6533 186.935 66.6172 186.839 66.5599Z" fill="#263238" />
                                                <path d="M204.515 77.7902L201.88 75.8975C201.88 75.8975 202.579 78.7276 204.515 77.7902Z" fill="#263238" />
                                                <path d="M171.618 231.535L173.608 381.441L260.646 363.685C264.231 292.608 254.783 251.256 236.784 231.517L171.618 231.535Z" fill="#303030" />
                                                <path d="M243.919 148.579C249.567 139.404 254.676 130.228 259.48 120.656C264.445 111.057 268.717 101.111 272.263 90.8952C273.141 88.2634 273.93 85.4874 274.611 82.7474C274.97 81.3594 275.257 79.8993 275.525 78.4391L276.117 74.3833C276.798 68.9754 277.372 63.856 277.91 58.6104C278.842 48.1192 279.559 37.646 279.864 27.1187C279.892 26.1069 279.547 25.1205 278.896 24.3483C278.245 23.5761 277.334 23.0726 276.337 22.9342C275.34 22.7957 274.327 23.0321 273.493 23.598C272.658 24.1639 272.06 25.0196 271.814 26.0011C269.323 36.2039 267.153 46.4427 265.02 56.6455L261.883 71.8596L261.076 75.4648C260.789 76.5464 260.52 77.646 260.18 78.7816C259.516 81.0349 258.727 83.3062 257.831 85.6136C256.038 90.1922 254.048 94.8069 251.879 99.3675C249.71 103.928 247.433 108.507 245.049 113.031C240.244 122.044 235.171 131.057 230.026 139.818V139.926C228.897 141.796 228.552 144.039 229.068 146.164C229.584 148.289 230.919 150.12 232.778 151.256C234.637 152.391 236.868 152.738 238.981 152.219C241.094 151.7 242.916 150.358 244.045 148.489L243.919 148.579Z" fill="#FFC3BD" />
                                                <path d="M273.446 30.7059L258.028 22.7563L273.069 16.4111C273.069 16.4111 281.137 22.8465 279.954 29.4621L273.446 30.7059Z" fill="#FFC3BD" />
                                                <path d="M252.363 10.4445L265.235 5.82983L274.988 18.1958L258.028 22.7564L252.363 10.4445Z" fill="#FFC3BD" />
                                                <path d="M289.636 9.46655L257.295 38.5968L329.955 95.9921L358.8 52.7293L289.636 9.46655Z" fill="white" />
                                                <path d="M255.734 39.8632L257.58 38.1868L330.24 95.5821L313.621 102.883L255.734 39.8632Z" fill="#EEEEEE" />
                                                <path d="M279.434 18.9529C279.496 18.9523 279.558 18.9373 279.614 18.9092C279.669 18.8811 279.718 18.8406 279.756 18.7907C279.796 18.7505 279.828 18.7027 279.85 18.6502C279.872 18.5976 279.883 18.5412 279.883 18.4843C279.883 18.4273 279.872 18.3709 279.85 18.3184C279.828 18.2658 279.796 18.218 279.756 18.1778C276.171 15.0593 273.464 12.5897 270.344 11.6884C270.29 11.6717 270.233 11.666 270.177 11.6714C270.121 11.6769 270.066 11.6935 270.016 11.7203C269.966 11.7471 269.922 11.7836 269.886 11.8276C269.85 11.8716 269.823 11.9223 269.807 11.9768C269.79 12.0313 269.784 12.0885 269.79 12.1451C269.795 12.2018 269.812 12.2568 269.838 12.3071C269.865 12.3573 269.901 12.4018 269.945 12.4379C269.989 12.474 270.039 12.5011 270.093 12.5176C273.034 13.3648 275.758 15.7803 279.183 18.8268C279.247 18.8998 279.337 18.945 279.434 18.9529Z" fill="#263238" />
                                                <path d="M267.333 29.8406C267.393 29.8398 267.453 29.8266 267.509 29.8018C267.564 29.777 267.614 29.7412 267.655 29.6964C267.695 29.6562 267.727 29.6085 267.749 29.5559C267.771 29.5033 267.782 29.4469 267.782 29.39C267.782 29.3331 267.771 29.2767 267.749 29.2241C267.727 29.1715 267.695 29.1237 267.655 29.0835C263.102 25.0277 260.251 21.4585 259.427 18.7726C259.39 18.6612 259.311 18.5687 259.207 18.5148C259.103 18.4609 258.983 18.4499 258.871 18.4842C258.764 18.5213 258.675 18.5977 258.622 18.698C258.569 18.7983 258.555 18.9151 258.584 19.025C259.48 21.9091 262.331 25.5144 267.082 29.7325C267.152 29.7939 267.24 29.8317 267.333 29.8406Z" fill="#263238" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_448_3">
                                                    <rect width="380" height="321" fill="white" transform="matrix(-1 0 0 1 380 0)" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </Flex>
                                ) : (
                                    <>
                                        <Flex
                                            width={'100%'}
                                            height={'360px'}
                                            br={'14px'}
                                            backgroundColor={'#d4c6ff'}
                                            justify={'space-between'}
                                            align={'flex-end'}
                                            pr={'80px'}
                                            pl={'150px'}
                                        >
                                            <Flex
                                                direction={'column'}
                                                justify={'space-between'}
                                                height={'100%'}
                                                pt={'40px'}
                                                pb={'40px'}
                                                align={'center'}
                                            >
                                                <Div>
                                                    <Flex
                                                        gap={'40px'}
                                                        mb={'40px'}
                                                    >
                                                        <NumElement
                                                            number={4247}
                                                            title={'магазинов'}
                                                        />
                                                        <NumElement
                                                            number={40325}
                                                            title={'акционных предложений'}
                                                        />
                                                    </Flex>
                                                    <Flex
                                                        gap={'40px'}
                                                    >
                                                        <NumElement
                                                            number={15258}
                                                            title={'заказов со скидкой'}
                                                        />
                                                        <NumElement
                                                            number={25137}
                                                            title={'промокодов'}
                                                        />
                                                    </Flex>
                                                </Div>
                                                <Link
                                                    to={'collaboration'}
                                                >
                                                    <StyledBannerStatisticsBtn>
                                                        Сотрудничать
                                                    </StyledBannerStatisticsBtn>
                                                </Link>
                                            </Flex>
                                            <svg width="380" height="321" viewBox="0 0 380 321" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_448_3)">
                                                    <path d="M237.519 63.2431C243.794 61.3143 251.574 72.6708 256.361 85.3973C261.148 98.1237 269.054 100.305 277.515 105.406C261.883 127.398 225.436 122.802 213.317 120.026C201.199 117.25 190.352 126.948 174.881 115.537C161.023 105.316 162.045 74.87 186.516 60.9899C181.102 42.2967 236.928 40.422 237.519 63.2431Z" fill="#263238" />
                                                    <path d="M126.854 52.4634L96.7177 21.0979L28.6295 74.0227L58.7654 105.406L126.854 52.4634Z" fill="white" />
                                                    <path d="M94.9788 19.2952L96.7178 21.0978L28.6296 74.0226L24.5063 59.2952L94.9788 19.2952Z" fill="#EEEEEE" />
                                                    <path d="M117.316 42.6393C121.726 39.6289 124.595 35.9335 125.204 32.4905C125.379 31.6673 125.383 30.8167 125.217 29.9917C125.05 29.1667 124.716 28.3851 124.236 27.6956C119.306 20.8096 113.05 25.0818 106.434 29.6063L105.556 30.2012L106.04 30.9042L106.918 30.3094C113.444 25.8389 119.091 21.9633 123.555 28.1823C123.962 28.7822 124.245 29.4586 124.387 30.1709C124.529 30.8832 124.526 31.617 124.38 32.3283C123.806 35.555 121.063 39.0701 116.832 41.9362L117.316 42.6393Z" fill="#263238" />
                                                    <path d="M178.431 137.583L152.777 118.205L139.905 108.507L136.767 106.128L135.208 104.956L134.455 104.379L134.078 104.055C132.61 102.629 131.332 101.017 130.278 99.2596C127.846 95.0876 125.932 90.6321 124.577 85.9924C123.119 81.0481 121.922 76.0298 120.991 70.9586C120.005 65.8031 119.199 60.5755 118.661 55.2938C118.123 50.0122 117.549 44.6584 117.209 39.4488V39.3046C117.14 38.2687 116.683 37.2976 115.929 36.5882C115.175 35.8788 114.181 35.4841 113.148 35.4841C112.115 35.4841 111.122 35.8788 110.368 36.5882C109.614 37.2976 109.156 38.2687 109.088 39.3046C108.168 50.4097 108.216 61.5744 109.231 72.671C109.726 78.343 110.607 83.9743 111.866 89.5255C113.141 95.4181 115.185 101.116 117.944 106.47C119.505 109.467 121.479 112.228 123.806 114.672L124.882 115.718L125.706 116.439L127.284 117.809L130.457 120.549C134.58 124.082 138.763 127.567 143.006 131.004L155.77 141.17C160.109 144.469 164.393 147.768 168.893 150.959C170.657 152.12 172.797 152.554 174.871 152.172C176.944 151.79 178.792 150.621 180.032 148.906C181.271 147.192 181.808 145.064 181.53 142.962C181.252 140.861 180.18 138.948 178.538 137.619L178.431 137.583Z" fill="#FFC3BD" />
                                                    <path d="M117.065 43.6665L131.067 37.0509L116.599 29.4619C116.599 29.4619 105.412 35.2123 108.998 43.4142L117.065 43.6665Z" fill="#FFC3BD" />
                                                    <path d="M134.007 27.3711L121.547 21.6748L116.599 29.4621L131.067 37.0511L134.007 27.3711Z" fill="#FFC3BD" />
                                                    <path d="M162.063 144.956C161.812 156.655 163.443 181.008 171.618 231.481H236.784C235.691 204.821 234.4 188.11 247.075 133.383C238.37 131.584 229.542 130.445 220.668 129.976C210.814 129.263 200.923 129.263 191.069 129.976C184.705 130.553 177.893 131.598 172.694 132.482C169.756 132.993 167.086 134.518 165.146 136.795C163.205 139.072 162.115 141.958 162.063 144.956Z" fill="#764DB4" />
                                                    <path d="M217.728 96.5193C215.935 106.091 213.999 123.559 220.668 130.03C213.189 137.978 204.172 144.303 194.171 148.615C181.442 140.593 191.069 130.03 191.069 130.03C201.682 127.47 201.414 119.557 199.567 112.112L217.728 96.5193Z" fill="#FFC3BD" />
                                                    <path d="M229.04 84.2798C222.783 98.9891 220.435 105.37 210.144 110.382C194.637 117.917 178.018 106.975 179.793 90.661C181.371 75.9877 191.338 54.3744 208.118 53.6353C211.818 53.4565 215.502 54.2315 218.819 55.8868C222.137 57.5421 224.979 60.0227 227.075 63.0931C229.171 66.1634 230.452 69.7216 230.796 73.4297C231.14 77.1378 230.535 80.8727 229.04 84.2798Z" fill="#FFC3BD" />
                                                    <path d="M210.664 61.6748C207.079 70.4896 221.116 87.7406 231.191 94.5184C244.027 67.6594 236.39 56.5013 210.664 61.6748Z" fill="#263238" />
                                                    <path d="M199.137 52.8061C181.801 57.2406 223.787 71.8958 235.888 72.6349C223.339 51.9769 215.415 47.4704 199.137 52.8061Z" fill="#263238" />
                                                    <path d="M171.618 231.535C171.618 231.535 177.23 349.552 176.692 398.764C176.136 449.958 209.535 578.431 209.535 578.431L222.389 574.825C222.389 574.825 216.204 470.274 210.126 398.908C219.305 344.109 224.379 231.463 224.379 231.463L171.618 231.535Z" fill="#FFC3BD" />
                                                    <path d="M188.631 231.535C188.631 231.535 224.612 401.107 233.199 417.421C244.78 439.449 352.936 408.21 356.629 408.282L357.167 397.124C357.167 397.124 303.904 395.898 259.767 398.115C259.767 342.54 236.766 231.535 236.766 231.535H188.631Z" fill="#FFC3BD" />
                                                    <path d="M204.766 80.3318C204.336 81.5575 203.332 82.3146 202.543 82.0442C201.754 81.7738 201.449 80.53 201.88 79.3043C202.31 78.0785 203.314 77.3034 204.121 77.5918C204.927 77.8802 205.268 79.106 204.766 80.3318Z" fill="#263238" />
                                                    <path d="M191.069 75.393C190.621 76.6187 189.635 77.3758 188.829 77.0874C188.022 76.799 187.735 75.5912 188.183 74.3655C188.631 73.1397 189.617 72.3646 190.406 72.5629C191.195 72.7611 191.5 74.1672 191.069 75.393Z" fill="#263238" />
                                                    <path d="M190.729 72.8512L188.111 71.0486C188.111 71.0486 188.793 73.7886 190.729 72.8512Z" fill="#263238" />
                                                    <path d="M194.01 78.8718C191.917 81.2836 189.504 83.3944 186.839 85.1449C187.301 85.8146 187.903 86.3746 188.602 86.7857C189.302 87.1967 190.083 87.4488 190.89 87.5244L194.01 78.8718Z" fill="#ED847E" />
                                                    <path d="M195.569 94.3744C194.858 94.2385 194.157 94.0517 193.472 93.8155C193.377 93.7821 193.299 93.712 193.255 93.6207C193.211 93.5295 193.205 93.4245 193.239 93.3289C193.272 93.2332 193.342 93.1548 193.432 93.1109C193.523 93.0669 193.628 93.061 193.723 93.0945C195.226 93.6781 196.845 93.8941 198.447 93.7249C200.049 93.5556 201.588 93.0059 202.937 92.1211C202.977 92.0903 203.023 92.0678 203.072 92.0547C203.12 92.0417 203.171 92.0384 203.221 92.0451C203.271 92.0518 203.319 92.0684 203.363 92.0938C203.406 92.1192 203.445 92.153 203.475 92.1932C203.506 92.2334 203.528 92.2793 203.541 92.3283C203.554 92.3773 203.557 92.4283 203.551 92.4785C203.544 92.5287 203.528 92.5771 203.502 92.621C203.477 92.6648 203.444 92.7032 203.404 92.734C201.104 94.2841 198.293 94.8725 195.569 94.3744Z" fill="#263238" />
                                                    <path d="M229.703 93.3828C228.082 95.9846 225.505 97.8375 222.532 98.5383C218.552 99.4216 216.795 95.7803 218.086 92.121C219.269 88.8222 222.747 84.4058 226.655 85.1629C227.499 85.3559 228.282 85.757 228.933 86.33C229.585 86.903 230.084 87.63 230.386 88.4454C230.689 89.2608 230.785 90.139 230.665 91.001C230.546 91.8629 230.215 92.6814 229.703 93.3828Z" fill="#FFC3BD" />
                                                    <path d="M209.23 75.1584C209.028 75.1055 208.855 74.9763 208.746 74.7978C208.308 73.9457 207.678 73.2084 206.906 72.645C206.134 72.0816 205.241 71.7077 204.3 71.5531C204.201 71.5463 204.104 71.5198 204.016 71.4753C203.927 71.4308 203.848 71.3691 203.783 71.2937C203.718 71.2183 203.668 71.1307 203.637 71.0361C203.606 70.9414 203.593 70.8414 203.601 70.7419C203.608 70.6424 203.634 70.5453 203.678 70.456C203.722 70.3667 203.784 70.2872 203.859 70.2218C203.934 70.1565 204.021 70.1067 204.115 70.0753C204.209 70.0439 204.309 70.0316 204.407 70.0389C205.606 70.2008 206.748 70.6506 207.738 71.3503C208.727 72.05 209.534 72.979 210.09 74.0588C210.138 74.1463 210.167 74.2424 210.177 74.3415C210.188 74.4405 210.178 74.5406 210.15 74.6361C210.122 74.7315 210.075 74.8204 210.013 74.8977C209.95 74.9749 209.873 75.039 209.786 75.0863C209.703 75.1372 209.611 75.17 209.516 75.1824C209.42 75.1948 209.322 75.1867 209.23 75.1584Z" fill="#263238" />
                                                    <path d="M186.839 66.5599C186.674 66.4653 186.552 66.3102 186.498 66.1272C186.468 66.0314 186.457 65.9304 186.465 65.8302C186.474 65.73 186.503 65.6326 186.55 65.5436C186.596 65.4547 186.66 65.376 186.738 65.3122C186.815 65.2483 186.904 65.2006 187 65.1718C188.149 64.7979 189.37 64.7058 190.561 64.9034C191.753 65.101 192.88 65.5824 193.848 66.3075C193.942 66.3666 194.021 66.4451 194.082 66.5379C194.143 66.6306 194.183 66.7354 194.2 66.8451C194.217 66.9548 194.21 67.0668 194.18 67.1737C194.15 67.2805 194.098 67.3796 194.026 67.4644C193.955 67.5491 193.867 67.6175 193.767 67.6648C193.667 67.7121 193.558 67.7373 193.448 67.7387C193.337 67.7402 193.228 67.7177 193.127 67.6729C193.026 67.6281 192.936 67.5621 192.862 67.4792C192.096 66.9207 191.209 66.5527 190.274 66.4055C189.34 66.2582 188.383 66.3358 187.484 66.632C187.378 66.6667 187.265 66.6782 187.154 66.6658C187.042 66.6533 186.935 66.6172 186.839 66.5599Z" fill="#263238" />
                                                    <path d="M204.515 77.7902L201.88 75.8975C201.88 75.8975 202.579 78.7276 204.515 77.7902Z" fill="#263238" />
                                                    <path d="M171.618 231.535L173.608 381.441L260.646 363.685C264.231 292.608 254.783 251.256 236.784 231.517L171.618 231.535Z" fill="#303030" />
                                                    <path d="M243.919 148.579C249.567 139.404 254.676 130.228 259.48 120.656C264.445 111.057 268.717 101.111 272.263 90.8952C273.141 88.2634 273.93 85.4874 274.611 82.7474C274.97 81.3594 275.257 79.8993 275.525 78.4391L276.117 74.3833C276.798 68.9754 277.372 63.856 277.91 58.6104C278.842 48.1192 279.559 37.646 279.864 27.1187C279.892 26.1069 279.547 25.1205 278.896 24.3483C278.245 23.5761 277.334 23.0726 276.337 22.9342C275.34 22.7957 274.327 23.0321 273.493 23.598C272.658 24.1639 272.06 25.0196 271.814 26.0011C269.323 36.2039 267.153 46.4427 265.02 56.6455L261.883 71.8596L261.076 75.4648C260.789 76.5464 260.52 77.646 260.18 78.7816C259.516 81.0349 258.727 83.3062 257.831 85.6136C256.038 90.1922 254.048 94.8069 251.879 99.3675C249.71 103.928 247.433 108.507 245.049 113.031C240.244 122.044 235.171 131.057 230.026 139.818V139.926C228.897 141.796 228.552 144.039 229.068 146.164C229.584 148.289 230.919 150.12 232.778 151.256C234.637 152.391 236.868 152.738 238.981 152.219C241.094 151.7 242.916 150.358 244.045 148.489L243.919 148.579Z" fill="#FFC3BD" />
                                                    <path d="M273.446 30.7059L258.028 22.7563L273.069 16.4111C273.069 16.4111 281.137 22.8465 279.954 29.4621L273.446 30.7059Z" fill="#FFC3BD" />
                                                    <path d="M252.363 10.4445L265.235 5.82983L274.988 18.1958L258.028 22.7564L252.363 10.4445Z" fill="#FFC3BD" />
                                                    <path d="M289.636 9.46655L257.295 38.5968L329.955 95.9921L358.8 52.7293L289.636 9.46655Z" fill="white" />
                                                    <path d="M255.734 39.8632L257.58 38.1868L330.24 95.5821L313.621 102.883L255.734 39.8632Z" fill="#EEEEEE" />
                                                    <path d="M279.434 18.9529C279.496 18.9523 279.558 18.9373 279.614 18.9092C279.669 18.8811 279.718 18.8406 279.756 18.7907C279.796 18.7505 279.828 18.7027 279.85 18.6502C279.872 18.5976 279.883 18.5412 279.883 18.4843C279.883 18.4273 279.872 18.3709 279.85 18.3184C279.828 18.2658 279.796 18.218 279.756 18.1778C276.171 15.0593 273.464 12.5897 270.344 11.6884C270.29 11.6717 270.233 11.666 270.177 11.6714C270.121 11.6769 270.066 11.6935 270.016 11.7203C269.966 11.7471 269.922 11.7836 269.886 11.8276C269.85 11.8716 269.823 11.9223 269.807 11.9768C269.79 12.0313 269.784 12.0885 269.79 12.1451C269.795 12.2018 269.812 12.2568 269.838 12.3071C269.865 12.3573 269.901 12.4018 269.945 12.4379C269.989 12.474 270.039 12.5011 270.093 12.5176C273.034 13.3648 275.758 15.7803 279.183 18.8268C279.247 18.8998 279.337 18.945 279.434 18.9529Z" fill="#263238" />
                                                    <path d="M267.333 29.8406C267.393 29.8398 267.453 29.8266 267.509 29.8018C267.564 29.777 267.614 29.7412 267.655 29.6964C267.695 29.6562 267.727 29.6085 267.749 29.5559C267.771 29.5033 267.782 29.4469 267.782 29.39C267.782 29.3331 267.771 29.2767 267.749 29.2241C267.727 29.1715 267.695 29.1237 267.655 29.0835C263.102 25.0277 260.251 21.4585 259.427 18.7726C259.39 18.6612 259.311 18.5687 259.207 18.5148C259.103 18.4609 258.983 18.4499 258.871 18.4842C258.764 18.5213 258.675 18.5977 258.622 18.698C258.569 18.7983 258.555 18.9151 258.584 19.025C259.48 21.9091 262.331 25.5144 267.082 29.7325C267.152 29.7939 267.24 29.8317 267.333 29.8406Z" fill="#263238" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_448_3">
                                                        <rect width="380" height="321" fill="white" transform="matrix(-1 0 0 1 380 0)" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </Flex>
                                    </>
                                )
                        }
                    </Flex>
            }
        </>
    )
}