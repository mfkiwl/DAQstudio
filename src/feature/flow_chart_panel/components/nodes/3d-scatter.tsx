import { useMantineTheme } from "@mantine/core";
import { CSSProperties } from "react";
import { SVGProps } from "react";
interface SvgProps {
  style?: CSSProperties;
}

const Scatter3DIcon = ({ ...props }: SVGProps<SVGSVGElement>) => {
  const theme = useMantineTheme();
  const accent =
    theme.colorScheme === "dark"
      ? theme.colors.accent1[0]
      : theme.colors.accent2[0];

  return (
    <svg
      width="138"
      height="65"
      viewBox="0 0 101 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_5_36)">
        <path
          opacity="0.9"
          d="M35.4886 44L0 65.3533H71.4382L101 44H35.4886Z"
          fill={accent}
        />
        <path
          d="M55.8298 51.7645C57.6696 51.7645 59.161 50.2613 59.161 48.407C59.161 46.5528 57.6696 45.0496 55.8298 45.0496C53.9901 45.0496 52.4987 46.5528 52.4987 48.407C52.4987 50.2613 53.9901 51.7645 55.8298 51.7645Z"
          fill="white"
        />
        <path
          d="M34.3311 52.7149C36.1709 52.7149 37.6623 51.2117 37.6623 49.3574C37.6623 47.5032 36.1709 46 34.3311 46C32.4914 46 31 47.5032 31 49.3574C31 51.2117 32.4914 52.7149 34.3311 52.7149Z"
          fill="white"
        />
        <path
          opacity="0.8"
          d="M61.3311 58.7149C63.1709 58.7149 64.6623 57.2117 64.6623 55.3574C64.6623 53.5032 63.1709 52 61.3311 52C59.4914 52 58 53.5032 58 55.3574C58 57.2117 59.4914 58.7149 61.3311 58.7149Z"
          fill="white"
        />
        <path
          d="M46.7139 43.8831C48.446 43.8831 49.8505 42.4676 49.8505 40.7217C49.8505 38.9758 48.446 37.5603 46.7139 37.5603C44.9817 37.5603 43.5773 38.9758 43.5773 40.7217C43.5773 42.4676 44.9817 43.8831 46.7139 43.8831Z"
          fill={accent}
        />
        <path
          d="M60.654 29.8973C62.3862 29.8973 63.7906 28.4818 63.7906 26.7359C63.7906 24.9901 62.3862 23.5746 60.654 23.5746C58.9218 23.5746 57.5174 24.9901 57.5174 26.7359C57.5174 28.4818 58.9218 29.8973 60.654 29.8973Z"
          fill={accent}
        />
        <path
          d="M60.654 36.9211C62.3862 36.9211 63.7906 35.5056 63.7906 33.7597C63.7906 32.0138 62.3862 30.5983 60.654 30.5983C58.9218 30.5983 57.5174 32.0138 57.5174 33.7597C57.5174 35.5056 58.9218 36.9211 60.654 36.9211Z"
          fill={accent}
        />
        <path
          d="M21.1366 37.3227C22.8688 37.3227 24.2732 35.9072 24.2732 34.1614C24.2732 32.4155 22.8688 31 21.1366 31C19.4044 31 18 32.4155 18 34.1614C18 35.9072 19.4044 37.3227 21.1366 37.3227Z"
          fill={accent}
        />
        <path
          opacity="0.9"
          d="M73.704 28.1058C75.4362 28.1058 76.8406 26.6903 76.8406 24.9444C76.8406 23.1986 75.4362 21.7831 73.704 21.7831C71.9718 21.7831 70.5674 23.1986 70.5674 24.9444C70.5674 26.6903 71.9718 28.1058 73.704 28.1058Z"
          fill={accent}
        />
        <path
          opacity="0.9"
          d="M59.2602 24.9767C60.9924 24.9767 62.3968 23.5612 62.3968 21.8153C62.3968 20.0694 60.9924 18.6539 59.2602 18.6539C57.528 18.6539 56.1236 20.0694 56.1236 21.8153C56.1236 23.5612 57.528 24.9767 59.2602 24.9767Z"
          fill={accent}
        />
        <path
          opacity="0.75"
          d="M57.1683 20.0587C58.9005 20.0587 60.3049 18.6432 60.3049 16.8973C60.3049 15.1514 58.9005 13.736 57.1683 13.736C55.4361 13.736 54.0317 15.1514 54.0317 16.8973C54.0317 18.6432 55.4361 20.0587 57.1683 20.0587Z"
          fill={accent}
        />
        <path
          opacity="0.75"
          d="M59.2602 16.5455C60.9924 16.5455 62.3968 15.13 62.3968 13.3841C62.3968 11.6382 60.9924 10.2227 59.2602 10.2227C57.528 10.2227 56.1236 11.6382 56.1236 13.3841C56.1236 15.13 57.528 16.5455 59.2602 16.5455Z"
          fill={accent}
        />
        <path
          opacity="0.59"
          d="M62.7459 13.736C64.4781 13.736 65.8825 12.3205 65.8825 10.5746C65.8825 8.82872 64.4781 7.41322 62.7459 7.41322C61.0138 7.41322 59.6093 8.82872 59.6093 10.5746C59.6093 12.3205 61.0138 13.736 62.7459 13.736Z"
          fill={accent}
        />
        <path
          opacity="0.59"
          d="M24.9042 36.537C26.6364 36.537 28.0408 35.1215 28.0408 33.3756C28.0408 31.6298 26.6364 30.2143 24.9042 30.2143C23.1721 30.2143 21.7677 31.6298 21.7677 33.3756C21.7677 35.1215 23.1721 36.537 24.9042 36.537Z"
          fill={accent}
        />
        <path
          opacity="0.59"
          d="M33.885 31.3826C35.6172 31.3826 37.0216 29.9671 37.0216 28.2213C37.0216 26.4754 35.6172 25.0599 33.885 25.0599C32.1528 25.0599 30.7484 26.4754 30.7484 28.2213C30.7484 29.9671 32.1528 31.3826 33.885 31.3826Z"
          fill={accent}
        />
        <path
          opacity="0.59"
          d="M36.9523 19.3576C38.6845 19.3576 40.0889 17.9421 40.0889 16.1963C40.0889 14.4504 38.6845 13.0349 36.9523 13.0349C35.2201 13.0349 33.8157 14.4504 33.8157 16.1963C33.8157 17.9421 35.2201 19.3576 36.9523 19.3576Z"
          fill={accent}
        />
        <path
          opacity="0.59"
          d="M43.2255 36.22C44.9577 36.22 46.3621 34.8045 46.3621 33.0587C46.3621 31.3128 44.9577 29.8973 43.2255 29.8973C41.4933 29.8973 40.0889 31.3128 40.0889 33.0587C40.0889 34.8045 41.4933 36.22 43.2255 36.22Z"
          fill={accent}
        />
        <path
          opacity="0.59"
          d="M46.0157 33.4079C47.7478 33.4079 49.1522 31.9924 49.1522 30.2465C49.1522 28.5006 47.7478 27.0851 46.0157 27.0851C44.2835 27.0851 42.8791 28.5006 42.8791 30.2465C42.8791 31.9924 44.2835 33.4079 46.0157 33.4079Z"
          fill={accent}
        />
        <path
          opacity="0.59"
          d="M50.1969 33.4079C51.9291 33.4079 53.3335 31.9924 53.3335 30.2465C53.3335 28.5006 51.9291 27.0851 50.1969 27.0851C48.4647 27.0851 47.0603 28.5006 47.0603 30.2465C47.0603 31.9924 48.4647 33.4079 50.1969 33.4079Z"
          fill={accent}
        />
        <path
          opacity="0.59"
          d="M46.0157 13.736C47.7478 13.736 49.1522 12.3205 49.1522 10.5746C49.1522 8.82872 47.7478 7.41322 46.0157 7.41322C44.2835 7.41322 42.8791 8.82872 42.8791 10.5746C42.8791 12.3205 44.2835 13.736 46.0157 13.736Z"
          fill={accent}
        />
        <path
          opacity="0.59"
          d="M43.7292 44.2645C45.4613 44.2645 46.8658 42.849 46.8658 41.1031C46.8658 39.3572 45.4613 37.9417 43.7292 37.9417C41.997 37.9417 40.5926 39.3572 40.5926 41.1031C40.5926 42.849 41.997 44.2645 43.7292 44.2645Z"
          fill={accent}
        />
        <path
          opacity="0.59"
          d="M22.0368 20.107C23.769 20.107 25.1734 18.6915 25.1734 16.9457C25.1734 15.1998 23.769 13.7843 22.0368 13.7843C20.3046 13.7843 18.9002 15.1998 18.9002 16.9457C18.9002 18.6915 20.3046 20.107 22.0368 20.107Z"
          fill={accent}
        />
        <path
          opacity="0.59"
          d="M39.4946 16.9752C41.2268 16.9752 42.6312 15.5597 42.6312 13.8138C42.6312 12.068 41.2268 10.6525 39.4946 10.6525C37.7624 10.6525 36.358 12.068 36.358 13.8138C36.358 15.5597 37.7624 16.9752 39.4946 16.9752Z"
          fill={accent}
        />
        <path
          opacity="0.59"
          d="M21.4185 16.8624C23.1507 16.8624 24.5551 15.4469 24.5551 13.701C24.5551 11.9552 23.1507 10.5397 21.4185 10.5397C19.6864 10.5397 18.282 11.9552 18.282 13.701C18.282 15.4469 19.6864 16.8624 21.4185 16.8624Z"
          fill={accent}
        />
        <path
          opacity="0.59"
          d="M57.1683 48.8655C58.9005 48.8655 60.3049 47.45 60.3049 45.7041C60.3049 43.9583 58.9005 42.5428 57.1683 42.5428C55.4361 42.5428 54.0317 43.9583 54.0317 45.7041C54.0317 47.45 55.4361 48.8655 57.1683 48.8655Z"
          fill="white"
        />
        <path
          opacity="0.59"
          d="M80.273 31.3504C82.0052 31.3504 83.4096 29.9349 83.4096 28.189C83.4096 26.4432 82.0052 25.0277 80.273 25.0277C78.5408 25.0277 77.1364 26.4432 77.1364 28.189C77.1364 29.9349 78.5408 31.3504 80.273 31.3504Z"
          fill={accent}
        />
        <path
          opacity="0.59"
          d="M89.3364 25.7287C91.0686 25.7287 92.473 24.3132 92.473 22.5674C92.473 20.8215 91.0686 19.406 89.3364 19.406C87.6042 19.406 86.1998 20.8215 86.1998 22.5674C86.1998 24.3132 87.6042 25.7287 89.3364 25.7287Z"
          fill={accent}
        />
        <path
          opacity="0.59"
          d="M66.8232 18.3236C68.5554 18.3236 69.9598 16.9081 69.9598 15.1622C69.9598 13.4163 68.5554 12.0008 66.8232 12.0008C65.0911 12.0008 63.6866 13.4163 63.6866 15.1622C63.6866 16.9081 65.0911 18.3236 66.8232 18.3236Z"
          fill={accent}
        />
        <path
          opacity="0.59"
          d="M79.9799 34.4285C81.7121 34.4285 83.1165 33.013 83.1165 31.2672C83.1165 29.5213 81.7121 28.1058 79.9799 28.1058C78.2477 28.1058 76.8433 29.5213 76.8433 31.2672C76.8433 33.013 78.2477 34.4285 79.9799 34.4285Z"
          fill={accent}
        />
        <path
          opacity="0.59"
          d="M64.7339 28.8632C66.4661 28.8632 67.8705 27.4477 67.8705 25.7019C67.8705 23.956 66.4661 22.5405 64.7339 22.5405C63.0018 22.5405 61.5974 23.956 61.5974 25.7019C61.5974 27.4477 63.0018 28.8632 64.7339 28.8632Z"
          fill={accent}
        />
        <path
          opacity="0.59"
          d="M56.089 40.069C57.8212 40.069 59.2256 38.6535 59.2256 36.9076C59.2256 35.1618 57.8212 33.7463 56.089 33.7463C54.3568 33.7463 52.9524 35.1618 52.9524 36.9076C52.9524 38.6535 54.3568 40.069 56.089 40.069Z"
          fill={accent}
        />
        <path
          opacity="0.59"
          d="M58.8765 42.8812C60.6087 42.8812 62.0131 41.4657 62.0131 39.7198C62.0131 37.974 60.6087 36.5585 58.8765 36.5585C57.1443 36.5585 55.7399 37.974 55.7399 39.7198C55.7399 41.4657 57.1443 42.8812 58.8765 42.8812Z"
          fill={accent}
        />
        <path
          opacity="0.59"
          d="M74.4102 39.7547C76.1424 39.7547 77.5468 38.3393 77.5468 36.5934C77.5468 34.8475 76.1424 33.432 74.4102 33.432C72.678 33.432 71.2736 34.8475 71.2736 36.5934C71.2736 38.3393 72.678 39.7547 74.4102 39.7547Z"
          fill={accent}
        />
        <path
          opacity="0.59"
          d="M77.1977 36.9426C78.9299 36.9426 80.3343 35.5271 80.3343 33.7812C80.3343 32.0353 78.9299 30.6198 77.1977 30.6198C75.4655 30.6198 74.0611 32.0353 74.0611 33.7812C74.0611 35.5271 75.4655 36.9426 77.1977 36.9426Z"
          fill={accent}
        />
        <path
          opacity="0.59"
          d="M81.3816 36.9426C83.1138 36.9426 84.5182 35.5271 84.5182 33.7812C84.5182 32.0353 83.1138 30.6198 81.3816 30.6198C79.6495 30.6198 78.245 32.0353 78.245 33.7812C78.245 35.5271 79.6495 36.9426 81.3816 36.9426Z"
          fill={accent}
        />
        <path
          opacity="0.59"
          d="M74.9112 47.7992C76.6434 47.7992 78.0478 46.3837 78.0478 44.6378C78.0478 42.8919 76.6434 41.4764 74.9112 41.4764C73.179 41.4764 71.7746 42.8919 71.7746 44.6378C71.7746 46.3837 73.179 47.7992 74.9112 47.7992Z"
          fill="white"
        />
        <path
          opacity="0.8"
          d="M31.8456 50.4959C33.6854 50.4959 35.1768 48.9927 35.1768 47.1384C35.1768 45.2842 33.6854 43.781 31.8456 43.781C30.0059 43.781 28.5145 45.2842 28.5145 47.1384C28.5145 48.9927 30.0059 50.4959 31.8456 50.4959Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_5_36">
          <rect width="101" height="65" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

const Scatter3DTitle = ({ ...props }: SVGProps<SVGSVGElement>) => {
  const theme = useMantineTheme();
  const accent =
    theme.colorScheme === "dark"
      ? theme.colors.accent1[0]
      : theme.colors.accent2[0];

  return (
    <svg
      width="123"
      height="21"
      viewBox="0 0 91 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.23704 3.27245C7.23704 3.73273 7.14134 4.1315 6.94993 4.46873C6.75853 4.80597 6.49876 5.08169 6.17064 5.29588C5.84707 5.51008 5.48248 5.6673 5.07689 5.76756V5.80858C5.87897 5.90884 6.48737 6.15493 6.90208 6.54686C7.32135 6.93879 7.53099 7.46288 7.53099 8.11913C7.53099 8.70246 7.38743 9.22427 7.10032 9.68456C6.81777 10.1448 6.38027 10.5071 5.78782 10.7715C5.19537 11.0358 4.43203 11.168 3.49778 11.168C2.94635 11.168 2.43138 11.1224 1.95286 11.0312C1.4789 10.9446 1.03229 10.8102 0.613018 10.6279V8.83006C1.0414 9.04881 1.4903 9.21515 1.9597 9.32909C2.4291 9.43846 2.8666 9.49315 3.2722 9.49315C4.02871 9.49315 4.55735 9.36327 4.85814 9.1035C5.16347 8.83918 5.31614 8.47004 5.31614 7.99608C5.31614 7.71808 5.24551 7.48338 5.10423 7.29198C4.96295 7.10057 4.71686 6.95474 4.36595 6.85448C4.01959 6.75422 3.53424 6.70409 2.90989 6.70409H2.1511V5.08397H2.92356C3.5388 5.08397 4.00592 5.027 4.32493 4.91307C4.6485 4.79458 4.86725 4.63508 4.98118 4.43456C5.09967 4.22948 5.15892 3.99706 5.15892 3.73729C5.15892 3.38182 5.04954 3.10383 4.83079 2.90331C4.61204 2.70278 4.24746 2.60252 3.73704 2.60252C3.41803 2.60252 3.12636 2.64354 2.86204 2.72557C2.60228 2.80304 2.36758 2.89875 2.15794 3.01268C1.9483 3.12206 1.76373 3.22915 1.60423 3.33397L0.62669 1.87791C1.01862 1.59536 1.47662 1.36066 2.00071 1.17381C2.52936 0.986964 3.15827 0.893539 3.88743 0.893539C4.91738 0.893539 5.73314 1.1009 6.3347 1.51561C6.93626 1.93032 7.23704 2.51594 7.23704 3.27245ZM18.6213 5.93846C18.6213 7.06411 18.4049 8.00519 17.9719 8.7617C17.5435 9.51366 16.9215 10.081 16.1057 10.4639C15.29 10.8421 14.3079 11.0312 13.1594 11.0312H10.3293V1.03709H13.467C14.5152 1.03709 15.4244 1.22394 16.1946 1.59764C16.9648 1.96678 17.5618 2.51594 17.9856 3.2451C18.4094 3.96971 18.6213 4.8675 18.6213 5.93846ZM16.4202 5.99315C16.4202 5.25487 16.3108 4.64875 16.092 4.17479C15.8778 3.69627 15.5588 3.34308 15.135 3.11522C14.7157 2.88735 14.1962 2.77342 13.5764 2.77342H12.4485V9.28123H13.3577C14.3922 9.28123 15.1601 9.00552 15.6614 8.45409C16.1672 7.90265 16.4202 7.08234 16.4202 5.99315ZM32.1888 8.25584C32.1888 8.84829 32.0452 9.36327 31.7581 9.80077C31.471 10.2383 31.0517 10.5755 30.5003 10.8125C29.9534 11.0495 29.288 11.168 28.5042 11.168C28.1578 11.168 27.8183 11.1452 27.4856 11.0996C27.1575 11.054 26.8408 10.9879 26.5354 10.9014C26.2347 10.8102 25.9475 10.6986 25.6741 10.5664V8.59764C26.1481 8.80728 26.6403 8.9964 27.1507 9.16502C27.6611 9.33364 28.167 9.41795 28.6683 9.41795C29.0146 9.41795 29.2926 9.37238 29.5022 9.28123C29.7164 9.19009 29.8714 9.06476 29.9671 8.90526C30.0628 8.74575 30.1106 8.56346 30.1106 8.35838C30.1106 8.10773 30.0263 7.89354 29.8577 7.71581C29.6891 7.53807 29.4567 7.37173 29.1604 7.21678C28.8688 7.06183 28.5384 6.89549 28.1692 6.71776C27.9368 6.60838 27.6839 6.47622 27.4104 6.32127C27.137 6.16177 26.8772 5.96808 26.6311 5.74022C26.385 5.51235 26.1823 5.23664 26.0227 4.91307C25.8678 4.58495 25.7903 4.19302 25.7903 3.73729C25.7903 3.14028 25.927 2.62987 26.2005 2.20604C26.4739 1.78221 26.8636 1.45864 27.3694 1.23534C27.8798 1.00747 28.4814 0.893539 29.1741 0.893539C29.6936 0.893539 30.1881 0.955063 30.6575 1.07811C31.1315 1.1966 31.6259 1.36978 32.1409 1.59764L31.4573 3.2451C30.997 3.05825 30.5846 2.9147 30.22 2.81444C29.8554 2.70962 29.484 2.65721 29.1058 2.65721C28.8414 2.65721 28.6158 2.70051 28.429 2.78709C28.2421 2.86913 28.1009 2.98761 28.0052 3.14256C27.9095 3.29295 27.8616 3.46841 27.8616 3.66893C27.8616 3.90591 27.93 4.10643 28.0667 4.27049C28.208 4.43 28.4176 4.58495 28.6956 4.73534C28.9781 4.88573 29.3291 5.06118 29.7483 5.2617C30.2587 5.50324 30.694 5.75617 31.054 6.02049C31.4186 6.28026 31.6989 6.58788 31.8948 6.94334C32.0908 7.29426 32.1888 7.73176 32.1888 8.25584ZM39.2254 2.65721C38.8198 2.65721 38.4598 2.73696 38.1453 2.89647C37.8354 3.05142 37.5734 3.277 37.3592 3.57323C37.1496 3.86945 36.99 4.2272 36.8807 4.64647C36.7713 5.06574 36.7166 5.53742 36.7166 6.06151C36.7166 6.76789 36.8032 7.37173 36.9764 7.87303C37.1541 8.36978 37.4275 8.75031 37.7967 9.01463C38.1658 9.2744 38.6421 9.40428 39.2254 9.40428C39.631 9.40428 40.0366 9.35871 40.4422 9.26756C40.8524 9.17642 41.2967 9.04653 41.7752 8.87791V10.6553C41.3331 10.8375 40.8979 10.9674 40.4695 11.0449C40.0412 11.1269 39.5604 11.168 39.0272 11.168C37.9972 11.168 37.1496 10.956 36.4842 10.5322C35.8234 10.1038 35.3335 9.50682 35.0145 8.7412C34.6955 7.97101 34.5359 7.07323 34.5359 6.04784C34.5359 5.29133 34.6385 4.59862 34.8436 3.96971C35.0486 3.34081 35.3494 2.79621 35.7459 2.33592C36.1424 1.87564 36.6323 1.52017 37.2156 1.26952C37.799 1.01886 38.4689 0.893539 39.2254 0.893539C39.7221 0.893539 40.2189 0.957342 40.7156 1.08495C41.2169 1.20799 41.6955 1.37889 42.1512 1.59764L41.4676 3.3203C41.0939 3.14256 40.7179 2.98761 40.3397 2.85545C39.9614 2.72329 39.59 2.65721 39.2254 2.65721ZM51.0062 11.0312L50.2816 8.65233H46.638L45.9134 11.0312H43.6302L47.1576 0.996078H49.7484L53.2894 11.0312H51.0062ZM49.7757 6.87498L49.0511 4.55077C49.0055 4.39582 48.944 4.19758 48.8665 3.95604C48.7936 3.70995 48.7184 3.46157 48.6409 3.21092C48.568 2.95571 48.5088 2.73469 48.4632 2.54784C48.4176 2.73469 48.3538 2.96711 48.2718 3.2451C48.1943 3.51854 48.1191 3.77831 48.0462 4.0244C47.9733 4.27049 47.9209 4.44595 47.889 4.55077L47.1712 6.87498H49.7757ZM59.3895 11.0312H57.2704V2.80077H54.5565V1.03709H62.1034V2.80077H59.3895V11.0312ZM68.4769 11.0312H66.3578V2.80077H63.6439V1.03709H71.1908V2.80077H68.4769V11.0312ZM79.4647 11.0312H73.7089V1.03709H79.4647V2.77342H75.828V4.96776H79.2118V6.70409H75.828V9.28123H79.4647V11.0312ZM85.4486 1.03709C86.3555 1.03709 87.1029 1.14647 87.6908 1.36522C88.2833 1.58397 88.7231 1.91437 89.0102 2.35643C89.2973 2.79849 89.4408 3.35676 89.4408 4.03123C89.4408 4.48696 89.3542 4.88573 89.1811 5.22752C89.0079 5.56932 88.78 5.85871 88.4975 6.09569C88.2149 6.33267 87.9096 6.52635 87.5815 6.67674L90.5209 11.0312H88.1693L85.7836 7.19627H84.6557V11.0312H82.5365V1.03709H85.4486ZM85.2982 2.77342H84.6557V5.47362H85.3393C86.0411 5.47362 86.5424 5.35741 86.8432 5.12498C87.1485 4.88801 87.3012 4.54165 87.3012 4.08592C87.3012 3.61196 87.1371 3.27472 86.809 3.0742C86.4854 2.87368 85.9818 2.77342 85.2982 2.77342Z"
        fill={accent}
      />
    </svg>
  );
};

const Scatter3D = () => {
  return (
    <div data-testid="scatter-svg">
      <Scatter3DTitle
        style={{
          position: "absolute",
          top: 21,
          left: "50%",
          transform: "translateX(-50%)",
        }}
      />
      <Scatter3DIcon
        style={{
          position: "absolute",
          bottom: 11,
          left: "50%",
          transform: "translateX(-50%)",
          height: 105,
        }}
      />
    </div>
  );
};

export default Scatter3D;
