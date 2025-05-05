import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import CtaButton from "./CtaButton";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const clickHandler = () => {
    setShow(!show);
  };

  return (
    <div className="w-full xl:h-24 lg:h-20 h-16 flex flex-row items-center justify-between lg:px-32 sm:px-20 px-10 shadow-lg relative secondary-font">
      {/* logo */}
      <a
        href="/Marketing-Website/"
        className="lg:text-3xl text-2xl tracking-wide font-light text-[#7A6960]"
      >
        {/* <img src={logo} alt="logo" className="w-10 h-10" /> */}
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          xmlSpace="preserve" 
          width="211" 
          height="80" 
          style={{
            shapeRendering: "geometricPrecision",
            textRendering: "geometricPrecision",
            imageRendering: "optimizeQuality",
            fillRule: "evenodd",
            clipRule: "evenodd"
          }}
          viewBox="0 0 566.81 394" 
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <defs>
            <linearGradient id="id0" gradientUnits="objectBoundingBox" x1="52.468%" y1="0%" x2="47.532%" y2="117.989%">
              <stop offset="0" style={{ stopOpacity: 1, stopColor: "#ec268f" }}/>
              <stop offset="1" style={{ stopOpacity: 1, stopColor: "#f97316" }}/>
            </linearGradient>
            <linearGradient id="id1" gradientUnits="userSpaceOnUse" xlinkHref="#id0" x1="242.41" y1="313" x2="202.93" y2="393.77"/>
            <linearGradient id="id2" gradientUnits="userSpaceOnUse" xlinkHref="#id0" x1="405.35" y1="5.46" x2="220.72" y2="360.94"/>
            <style>
              {`
                @font-face {
                  font-family: "Bodoni MT";
                  font-variant: normal;
                  font-style: normal,italic;
                  font-weight: 700;
                  src: url(#FontID0) format(svg)
                }
                .fil2 { fill: url(#id0) }
                .fnt0 {
                  font-style: italic;
                  font-weight: 700;
                  font-size: 58.16px;
                  font-family: "Bodoni MT"
                }
              `}
            </style>
            <font id="FontID0" horizAdvX="728" fontVariant="normal" style={{ fillRule: "nonzero" }} fontStyle="normal,italic" fontWeight="700">
              <fontFace fontFamily="Bodoni MT">
                <fontFaceSrc>
                  <fontFaceName name="Bodoni MT Bold Italic"/>
                </fontFaceSrc>
              </fontFace>
              <missingGlyph/>
              <glyph unicode="A" horizAdvX="728" d="M618.163 663.163 583.002 34.169h93.826l-6.827-34.17H341.833l7.335 34.17h82.004l8.822 154.83h-206.16l-130.83-154.83h101.16l-8.326-34.17H-15.165l7.334 34.17h66.827l526.002 628.994zM441.837 223.169l13.157 229.003-1.83 1.996L262.169 223.17z"/>
              <glyph unicode="D" horizAdvX="812" d="M229.003 621.163H151.83l7.335 33.673h318.837c46.004 0 81-2.173 105-6.673 24.165-4.335 51.496-15 82.003-31.665 30.662-16.83 58.996-43.83 84.992-81.165 26.008-37.17 39-85.996 39-146.161 0-63.839-13.996-122.67-42.165-176.834-28.17-54-62.327-98.338-102.496-133.003-40.17-34.665-79.17-56.504-116.67-65.67C490.003 4.5 447.495 0 399.837 0H45l6.838 34.17h55.158zm157.169 0L264.165 34.169h77.669c57.496 0 98.834 5.161 123.496 15.661 24.673 10.335 47.67 28.335 68.834 53.67 21.166 25.334 42.508 87.164 63.673 185.337 21.331 98.161 31.996 169.83 31.996 214.996 0 78.164-56.503 117.33-169.83 117.33z"/>
              <glyph unicode="E" horizAdvX="698" d="m722.17 654.836-39-183.673h-33.342c0 52.842-9 91.004-27.33 114.507-18.166 23.657-52.997 35.492-104.493 35.492H381.836l-53.669-254.999h19.996c44.008 0 78.165 6.839 102.507 20.504 24.496 13.665 43.157 43.83 56.161 90.33h34.17l-56.173-272.834h-33.662c1.996 11.67 3 23.173 3 34.665 0 17.504-4.17 35.174-12.33 52.666-8.008 17.669-18.674 28.677-31.666 33.507-13.004 4.666-32.007 6.992-57.177 6.992h-32.16L258.835 34.167h89.327c37.169 0 69.838 3.166 98.338 9.331s59.326 22.83 92.326 49.996c33 27.165 64.335 69.508 94.004 126.673H667L613.826-.001H19.003l6.827 34.17h77.173l123 586.993h-89.835l6.827 33.673z"/>
              <glyph unicode="G" horizAdvX="812" d="m759.836 657.163-38.67-187.995h-34.168c-6.827 53.834-24.992 94.996-54.496 123.838-29.339 28.83-66.838 43.157-112.5 43.157-57.673 0-104.338-17.161-140.338-51.496s-65.834-105.496-89.326-213.33c-23.67-107.834-35.504-181.665-35.504-221.503 0-33.496 12.496-63 37.334-88.5 25.004-25.665 60.827-38.338 107.67-38.338 83.656 0 131.998 30.673 145.168 92.173 0 1.666 1.5 10.335 4.83 25.996l15.166 69.838H477l6.838 34.17h312l-6.84-34.17h-67.83l-21-101.173C612.672 29.161 510.507-11.162 394.003-11.162c-90.165 0-162.33 27.662-216.507 82.996-54.165 55.335-81.33 120.661-81.33 196.17 0 100.995 43.83 193.168 131.669 276.66C315.496 628.166 412.665 670 518.999 670c33.838 0 77.173-12.165 130.003-36.165 11.327-5.173 22.004-7.83 32.161-7.83 19.5 0 34.5 10.322 44.835 31.157z"/>
              <glyph unicode="I" horizAdvX="374" d="M138.165 654.836h299.833l-7.83-33.673h-68.339l-126-586.994h79.169l-6.827-34.17H15.164l6.839 34.17h57.165L203.17 621.163h-72.342l7.334 33.673z"/>
              <glyph unicode="L" horizAdvX="646" d="M386.172 621.163 262.169 34.169h59.67c37.334 0 69.164 3.165 95.326 9.33 26.338 6.166 54.507 22.666 84.507 49.831 30.165 27 59.492 69.33 88.157 126.838h35.173L573.33 0H22.004l7.83 34.17H105l121.996 586.993h-89.834L144 654.836h329.172l-7.334-33.673z"/>
              <glyph unicode="M" horizAdvX="969" d="m424.829 654.836 73.169-439.002h2.008l252.99 439.002h260.173l-7.335-33.673H929.17L805.166 34.169h87.838l-6.838-34.17H555.163L562 34.17h87l123 584.998-1.996 1.996L413.172 0H379.83L276.838 615.163h-2.008L153.838 34.169h97.157l-6.827-34.17H24l6.839 34.17h88.322l125.007 586.994h-90.33l7.323 33.673z"/>
            </font>
          </defs>
          <g id="Layer_x0020_1">
            <g id="_1594732373904">
              <path d="M62.42 2.42c-3.72 4.11-4.25 16.8-1.09 26.13 7.78 22.93 42.64 58.42 82.83 86.86 6.45 5.17 93.64 56.52 93.14 56.97.12 2.67-107.76-58.33-119.09-73.3-16.54-13.1-22.45-13.44-20.82-1.58 1.64 8.73 11.95 18.62 34.96 34.76 11.05 7.75 111.53 60.26 113.28 61.77.15 1.98-96.18-45.41-99.17-49.28-11.73-7.21-15.69-7.41-18.95-5.37-4.54 4.44 1.26 12.15 4.2 15.64 5.54 6.13 27.75 20.55 30.48 22.37 1.82.91 3.19 1.61 6.44 3.58 4.6 2.8 92.08 35.45 90.83 36.77-.63.67-88.94-33.84-91.6-34.27-5.02-.77-6.66.16-7.82 3.51-2.46 9.78 10.88 20.89 36.97 30.8 27.15 10.31-.05 4.76 16.64 23.76 6.13 6.99 23.8 17.06 37.53 21.4 12.56 3.97 28.57 13.35 34.17 20 14.87 17.67 7.93 38.74-23.74 72.08-5.94 6.25-9.82 11.36-8.63 11.36 3.78 0 24.75-16.69 39.17-31.19 16.25-16.33 26.73-33.07 33.22-53.1 10.05-30.99 2.63-61.81-14.1-58.58-6.59 1.27-12.46 7.27-10.95 11.19 1.2 3.12-.15 3.32-4.95.76-6.03-3.23-4.11-8.11 5.57-14.13 6.09-3.79 9.09-6.87 9.09-9.36 0-4.83-3.14-4.73-7.15.23-1.98 2.44-4.31 3.51-6.13 2.81-4.57-1.75-.29-11.62 7.12-16.42 3.36-2.18 6.12-4.37 6.12-4.87 0-2.07-28.21-18.75-55.38-32.75-53.7-27.66-97.65-60.08-138.19-101.92C98.84 40.91 80.99 20.03 69.24 3.88c-3.57-4.91-3.69-4.94-6.81-1.48zm484.55 32.76c-17.6 22.69-50.15 55.95-74.52 75.52-26.45 21.24-46.51 33.38-80.53 52.65-29.12 15.07-45.55 24.67-45.55 26.61 0 .77 1.98 3.7 4.39 6.51 10.68 12.43 9.94 41.86-1.73 68.8-3.46 7.98-6.04 14.76-5.73 15.06.31.31 9.43-4.09 9.43-4.09s28.17-13.28 45.44-20.76c9.99-4.33 19.18-9.18 25.42-15.79 21.97-22.64-49.8 5.35-43.71 1.83 3.13-1.81 16.87-5.65 60.27-23.01 13.2-6.19 27.96-15.04 31.66-21.19 3.08-5.75-.91-11.46-7-10.02-78.59 31.8-131.42 51.08 4.71-6.6 4.08-1.73 8.08-3.86 9.96-4.87 3.24-1.73 21.49-13.02 23.13-16.51 2.71-5.06 2.31-10.22-.99-12.96-2.37-1.97-3.57-1.97-6.82-.01-68.75 37.29-92.47 50.28-87.15 47.02 6.02-3.68 48.98-28.07 100.74-59.29 18.78-11.77 24.99-22.11 26.71-28.73.54-3.51 1.21-7.21-5.29-6.7-9.8 1.48-122.38 80.48-122.64 79.74-1-2.84 123.67-85.33 130.31-96.66 25.19-25.73 33.16-45.35 27.7-59.59-2.12-5.51-5.95-2.77-18.2 13.03z" style={{ fill: "url(#id2)" }}/>
              <path d="M162.89 387.37c19.36 25.32 92.55-26.77 119.56-74.6-4.96 2.18-41 39.08-103.47 65.22-13.49 5.65-13.59 3.79-16.09 9.38" style={{ fill: "url(#id1)" }}/>
              <text x="-1.11" y="355.62" className="fil2 fnt0">EAGLE   </text>
              <text x="315.55" y="355.62" className="fil2 fnt0">MEDIA</text>
            </g>
          </g>
        </svg>
      </a>
      {/* menu */}
      <div className="lg:flex items-center justify-between lg:gap-14 hidden">
        <a
          href="/Marketing-Website/"
          className="text-gray-800 hover:text-[#EE7540] text-lg tracking-wide font-light"
        >
          Home
        </a>
        <a
          href="/Marketing-Website/#about"
          className="text-gray-800 hover:text-[#EE7540] text-lg tracking-wide font-light"
        >
          About
        </a>
        <a
          href="/Marketing-Website/#services"
          className="text-gray-800 hover:text-[#EE7540] text-lg tracking-wide font-light"
        >
          Services
        </a>
        <a
          href="/Marketing-Website/#portfolio"
          className="text-gray-800 hover:text-[#EE7540] text-lg tracking-wide font-light"
        >
          Portfolio
        </a>

        <a
          href="/Marketing-Website/#contact"
          className="text-gray-800 hover:text-[#EE7540] text-lg tracking-wide font-light"
        >
          Contact
        </a>

        {/* CTA */}
        {/* <button className="bg-orange-600 text-lg text-slate-50 rounded-3xl px-4 py-1">
          Get Strated
        </button> */}
        <a href="/Marketing-Website/#contact" className="">
          <CtaButton name={"Get Started"} />
        </a>
      </div>

      {/* mobile menu */}
      <div className="lg:hidden ">
        <RxHamburgerMenu size={"28px"} onClick={clickHandler} />
      </div>

      {show && (
        <div className="absolute z-20 top-[70px] flex flex-col gap-4 text-center w-full left-0 p-5 lg:hidden shadow-xl bg-white transition-all duration-300">
          <a
            href="/Marketing-Website/"
            className="text-gray-800 hover:text-[#EE7540] text-lg tracking-wide font-light"
          >
            Home
          </a>
          <a
            href="/Marketing-Website/#about"
            className="text-gray-800 hover:text-[#EE7540] text-lg tracking-wide font-light"
          >
            About
          </a>
          <a
            href="/Marketing-Website/#services"
            className="text-gray-800 hover:text-[#EE7540] text-lg tracking-wide font-light"
          >
            Services
          </a>
          <a
            href="/Marketing-Website/#contact"
            className="text-gray-800 hover:text-[#EE7540] text-lg tracking-wide font-light"
          >
            Contact
          </a>

          {/* CTA */}
          <a
            href="/Marketing-Website/#contact"
            className="mt-2 ml-2 flex justify-center items-center"
          >
            <CtaButton name={"Get Started"} />
          </a>
        </div>
      )}
    </div>
  );
};

export default NavBar;
