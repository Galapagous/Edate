// import React from 'react';

// const PaymentCard = ({ cardNumber = '9759 2484 5269 6576', validThru = '12/24', cardholderName = 'MuHD MUSA' }) => {
//   return (
//     <div className="w-[240px] h-[154px] perspective-[1000px] text-white">
//       <div className="relative w-full h-full transition-transform duration-800 transform-style-preserve-3d group-hover:transform group-hover:rotate-y-180">
//         {/* Front Side */}
//         <div className="absolute w-full h-full flex flex-col justify-center rounded-xl shadow-[0_8px_14px_0_rgba(0,0,0,0.2),0_2px_2px_rgba(0,0,0,0.4),0_7px_13px_-3px_rgba(0,0,0,0.3),0_-1px_0_inset_rgba(0,0,0,0.2)] bg-[#171717] backface-hidden">
//           {/* Mastercard Text */}
//           <p className="absolute top-4 right-4 text-[0.5rem] tracking-[0.2em] font-semibold">MASTERCARD</p>

//           {/* Mastercard Logo */}
//           <svg
//             className="absolute top-[3.5rem] right-4 w-9 h-9"
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 48 48"
//           >
//             <path fill="#ff9800" d="M32 10A14 14 0 1 0 32 38A14 14 0 1 0 32 10Z"></path>
//             <path fill="#d50000" d="M16 10A14 14 0 1 0 16 38A14 14 0 1 0 16 10Z"></path>
//             <path fill="#ff3d00" d="M18,24c0,4.755,2.376,8.95,6,11.48c3.624-2.53,6-6.725,6-11.48s-2.376-8.95-6-11.48 C20.376,15.05,18,19.245,18,24z"></path>
//           </svg>

//           {/* Chip */}
//           <svg
//             className="absolute top-4 left-4 w-8 h-8"
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 50 50"
//           >
//             <image
//               width="50"
//               height="50"
//               href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAB6VBMVEUAAACNcTiVeUKVeUOYfEaafEeUeUSYfEWZfEaykleyklaXe0SWekSZZjOYfEWYe0WXfUWXe0WcgEicfkiXe0SVekSXekSWekKYe0a9nF67m12ZfUWUeEaXfESVekOdgEmVeUWWekSniU+VeUKVeUOrjFKYfEWliE6WeESZe0GSe0WYfES7ml2Xe0WXeESUeEOWfEWcf0eWfESXe0SXfEWYekSVeUKXfEWxklawkVaZfEWWekOUekOWekSYfESZe0eXekWYfEWZe0WZe0eVeUSWeETAnmDCoWLJpmbxy4P1zoXwyoLIpWbjvXjivnjgu3bfu3beunWvkFWxkle/nmDivXiWekTnwXvkwHrCoWOuj1SXe0TEo2TDo2PlwHratnKZfEbQrWvPrWuafUfbt3PJp2agg0v0zYX0zYSfgkvKp2frxX7mwHrlv3rsxn/yzIPgvHfduXWXe0XuyIDzzISsjVO1lVm0lFitjVPzzIPqxX7duna0lVncuHTLqGjvyIHeuXXxyYGZfUayk1iyk1e2lln1zYTEomO2llrbtnOafkjFpGSbfkfZtXLhvHfkv3nqxH3mwXujhU3KqWizlFilh06khk2fgkqsjlPHpWXJp2erjVOng0yWe0SliE+XekShhEvAn2D///+gx8TWAAAARnRSTlMACVCTtsRl7Pv7+vxkBab7pZv5+ZlL/UnU/f3SJCVe+Fx39naA9/75XSMh0/3SSkia+pil/KRj7Pr662JPkrbP7OLQ0JFOijI1MwAAAAFiS0dEorDd34wAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfnAg0IDx2lsiuJAAACLElEQVRIx2NgGAXkAUYmZhZWPICFmYkRVQcbOwenmzse4MbFzc6DpIGXj8PD04sA8PbhF+CFaxEU8iWkAQT8hEVgOkTF/InR4eUVICYO1SIhCRMLDAoKDvFDVhUaEhwUFAjjSUlDdMiEhcOEItzdI6OiYxA6YqODIt3dI2DcuDBZsBY5eVTr4xMSYcyk5BRUOXkFsBZFJTQnp6alQxgZmVloUkrKYC0qqmji2WE5EEZuWB6alKoKdi35YQUQRkFYPpFaCouKIYzi6EDitJSUlsGY5RWVRGjJLyxNy4ZxqtIqqvOxaVELQwZFZdkIJVU1RSiSalAt6rUwUBdWG1CP6pT6gNqwOrgCdQyHNYR5YQFhDXj8MiK1IAeyN6aORiyBjByVTc0FqBoKWpqwRCVSgilOaY2OaUPw29qjOzqLvTAchpos47u6EZyYnngUSRwpuTe6D+6qaFQdOPNLRzOM1dzhRZyW+CZouHk3dWLXglFcFIflQhj9YWjJGlZcaKAVSvjyPrRQ0oQVKDAQHlYFYUwIm4gqExGmBSkutaVQJeomwViTJqPK6OhCy2Q9sQBk8cY0DxjTJw0lAQWK6cOKfgNhpKK7ZMpUeF3jPa28BCETamiEqJKM+X1gxvWXpoUjVIVPnwErw71nmpgiqiQGBjNzbgs3j1nus+fMndc+Cwm0T52/oNR9lsdCS24ra7Tq1cbWjpXV3sHRCb1idXZ0sGdltXNxRateRwHRAACYHutzk/2I5QAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMy0wMi0xM1QwODoxNToyOSswMDowMEUnN7UAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjMtMDItMTNUMDg6MTU6MjkrMDA6MDA0eo8JAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDIzLTAyLTEzVDA4OjE1OjI5KzAwOjAwY2+u1gAAAABJRU5ErkJggg=="
//             />
//           </svg>

//           {/* Contactless Icon */}
//           <svg
//             className="absolute top-8 right-6 w-5 h-5"
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 50 50"
//           >
//             <image
//               width="50"
//               height="50"
//               href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAQAAAC0NkA6AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfnAg0IEzgIwaKTAAADDklEQVRYw+1XS0iUURQ+f5qPyjQflGRFEEFK76koKGxRbWyVVLSOgsCgwjZBJJYuKogSIoOonUK4q3U0WVBWFPZYiIE6kuArG3VGzK/FfPeMM/MLt99/NuHdfPd888/57jn3nvsQWWj/VcMlvMMd5KRTogqx9iCdIjUUmcGR9ImUYowyP3xNGQJoRLVaZ2DaZf8kyjEJALhI28ELioyiwC+Rc3QZwRYyO/DH51hQgWm6DMIh10KmD4u9O16K49itVoPOAmcGAWWOepXIRScAoJZ2Frro8oN+EyTT6lWkkg6msZfMSR35QTJmjU0g15tIGSJ08ZZMJkJkHpNZgSkyXosS13TkJpZ62mPIJvOSzC1bp8vRhhCakEk7G9/o4gmZdbpsTcKu0m63FbnBP9Qrc15zbkbemfgNDtEOI8NO5L5O9VYyRYgmJayZ9nPaxZrSjW4+F6Uw9yQqIiIZwhp2huQTf6OIvCZyGM6gDJBZbyXifJXr7FZjGXsdxADxI7HUJFB6iWvsIhFpkoiIiGTJfjJfiCuJg2ZEspq9EHGVpYgzKqwJqSAOEwuJQ/pxPvE3cYltJCLdxBLiSKKIE5HxJKcTRNeadxfhDiuYw44zVs1dxKwRk/uCxIiQkxKBsSctRVAge9g1E15EHE6yRUaJecRxcWlukdRIbGFOSZCMWQA/iWauIP3slREHXPyliqBcrrD71AmzZ+rD1Mt2Yr8TZc/UR4/YtFnbijnHi3UrN9vKQ9rPaJf867ZiaqDB+czeKYmd3pNa6fuI75MiC0uXXSR5aEMf7s7a6r/PudVXkjFb/SsrCRfROk0Fx6+H1i9kkTGn/E1vEmt1m089fh+RKdQ5O+xNJPUicUIjO0Dm7HwvErEr0YxeibL1StSh37STafE4I7zcBdRq1DiOkdmlTJVnkQTBTS7X1FYyvfO4piaInKbDCDaT2anLudYXCRFsQBgAcIF2/Okwgvz5+Z4tsw118dzruvIvjhTB+HOuWy8UvovEH6beitBKxDyxm9MmISKCWrzB7bSlaqGlsf0FC0gMjzTg6GgAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjMtMDItMTNUMDg6MTk6NTYrMDA6MDCjlq7LAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIzLTAyLTEzVDA4OjE5OjU2KzAwOjAw0ssWdwAAACh0RVh0ZGF0ZTp0aW1lc3RhbXAAMjAyMy0wMi0xM1QwODoxOTo1NiswMDowMIXeN6gAAAAASUVORK5CYII="
//             />
//           </svg>

//           {/* Card Number */}
//           <p className="absolute top-[5rem] left-4 text-[0.6rem] font-bold tracking-wide">{cardNumber}</p>

//           {/* Valid Thru Label */}
//           <p className="absolute top-[6.5rem] left-4 text-[0.3rem] font-bold tracking-wide">VALID THRU</p>

//           {/* Valid Thru Date */}
//           <p className="absolute top-[7.5rem] left-4 text-[0.5rem] font-bold">{validThru}</p>

//           {/* Cardholder Name */}
//           <p className="absolute bottom-2 left-4 text-[0.5rem] font-bold">{cardholderName}</p>
//         </div>

//         {/* Back Side */}
//         <div className="absolute w-full h-full flex flex-col justify-center rounded-xl shadow-[0_8px_14px_0_rgba(0,0,0,0.2),0_2px_2px_rgba(0,0,0,0.4),0_7px_13px_-3px_rgba(0,0,0,0.3),0_-1px_0_inset_rgba(0,0,0,0.2)] bg-[#171717] backface-hidden transform rotate-y-180">
//           {/* Magnetic Strip */}
//           <div className="absolute top-6 w-full h-6 bg-gradient-to-r from-[#303030] via-[#202020] to-[#303030] bg-[length:20px_20px] bg-[45deg]" />

//           {/* Signature Strip */}
//           <div className="absolute top-12 left-4 w-32 h-4 bg-white rounded-sm" />

//           {/* CVV Code */}
//           <div className="absolute top-12 right-4 w-16 h-4 bg-white rounded-sm flex items-center justify-center">
//             <p className="text-black text-xs font-bold">***</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PaymentCard;

// ------- version 2 --------
import React from 'react';

const PaymentCard = ({ cardNumber = '9759 2484 5269 6576', validThru = '12/24', cardholderName = 'BRUCE WAYNE' }) => {
  return (
    <div className="w-[240px] h-[154px] bg-[#171717] rounded-xl shadow-[0_2px_2px_rgba(0,0,0,0.4),0_7px_13px_-3px_rgba(0,0,0,0.3),0_-1px_0_inset_rgba(0,0,0,0.2)] text-white p-4 relative">
      {/* Mastercard Text */}
      <p className="absolute top-4 right-4 text-[0.5rem] tracking-[0.2em] font-semibold">MASTERCARD</p>

      {/* Mastercard Logo */}
      <svg
        className="absolute top-[3.5rem] right-4 w-9 h-9"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
      >
        <path fill="#ff9800" d="M32 10A14 14 0 1 0 32 38A14 14 0 1 0 32 10Z"></path>
        <path fill="#d50000" d="M16 10A14 14 0 1 0 16 38A14 14 0 1 0 16 10Z"></path>
        <path fill="#ff3d00" d="M18,24c0,4.755,2.376,8.95,6,11.48c3.624-2.53,6-6.725,6-11.48s-2.376-8.95-6-11.48 C20.376,15.05,18,19.245,18,24z"></path>
      </svg>

      {/* Chip */}
      <svg
        className="absolute top-4 left-4 w-8 h-8"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 50"
      >
        {/* <image
          width="50"
          height="50"
          href="https://www.pinterest.com/pin/451274825182301375/"
        /> */}
      </svg>

      {/* Contactless Icon */}
      <svg
        className="absolute top-8 right-6 w-5 h-5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 50"
      >
        <image
          width="50"
          height="50"
          href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAQAAAC0NkA6AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfnAg0IEzgIwaKTAAADDklEQVRYw+1XS0iUURQ+f5qPyjQflGRFEEFK76koKGxRbWyVVLSOgsCgwjZBJJYuKogSIoOonUK4q3U0WVBWFPZYiIE6kuArG3VGzK/FfPeMM/MLt99/NuHdfPd888/57jn3nvsQWWj/VcMlvMMd5KRTogqx9iCdIjUUmcGR9ImUYowyP3xNGQJoRLVaZ2DaZf8kyjEJALhI28ELioyiwC+Rc3QZwRYyO/DH51hQgWm6DMIh10KmD4u9O16K49itVoPOAmcGAWWOepXIRScAoJZ2Frro8oN+EyTT6lWkkg6msZfMSR35QTJmjU0g15tIGSJ08ZZMJkJkHpNZgSkyXosS13TkJpZ62mPIJvOSzC1bp8vRhhCakEk7G9/o4gmZdbpsTcKu0m63FbnBP9Qrc15zbkbemfgNDtEOI8NO5L5O9VYyRYgmJayZ9nPaxZrSjW4+F6Uw9yQqIiIZwhp2huQTf6OIvCZyGM6gDJBZbyXifJXr7FZjGXsdxADxI7HUJFB6iWvsIhFpkoiIiGTJfjJfiCuJg2ZEspq9EHGVpYgzKqwJqSAOEwuJQ/pxPvE3cYltJCLdxBLiSKKIE5HxJKcTRNeadxfhDiuYw44zVs1dxKwRk/uCxIiQkxKBsSctRVAge9g1E15EHE6yRUaJecRxcWlukdRIbGFOSZCMWQA/iWauIP3slREHXPyliqBcrrD71AmzZ+rD1Mt2Yr8TZc/UR4/YtFnbijnHi3UrN9vKQ9rPaJf867ZiaqDB+czeKYmd3pNa6fuI75MiC0uXXSR5aEMf7s7a6r/PudVXkjFb/SsrCRfROk0Fx6+H1i9kkTGn/E1vEmt1m089fh+RKdQ5O+xNJPUicUIjO0Dm7HwvErEr0YxeibL1StSh37STafE4I7zcBdRq1DiOkdmlTJVnkQTBTS7X1FYyvfO4piaInKbDCDaT2anLudYXCRFsQBgAcIF2/Okwgvz5+Z4tsw118dzruvIvjhTB+HOuWy8UvovEH6beitBKxDyxm9MmISKCWrzB7bSlaqGlsf0FC0gMjzTg6GgAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjMtMDItMTNUMDg6MTk6NTYrMDA6MDCjlq7LAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIzLTAyLTEzVDA4OjE5OjU2KzAwOjAw0ssWdwAAACh0RVh0ZGF0ZTp0aW1lc3RhbXAAMjAyMy0wMi0xM1QwODoxOTo1NiswMDowMIXeN6gAAAAASUVORK5CYII="
        />
      </svg>

      {/* Card Number */}
      <p className="absolute top-[5rem] left-4 text-[0.6rem] font-bold tracking-wide">{cardNumber}</p>

      {/* Valid Thru Label */}
      <p className="absolute top-[6.5rem] left-4 text-[0.3rem] font-bold tracking-wide">VALID THRU</p>

      {/* Valid Thru Date */}
      <p className="absolute top-[7.5rem] left-4 text-[0.5rem] font-bold">{validThru}</p>

      {/* Cardholder Name */}
      <p className="absolute bottom-2 left-4 text-[0.5rem] font-bold">{cardholderName}</p>
    </div>
  );
};

export default PaymentCard;