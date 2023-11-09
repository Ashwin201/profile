"use client";
import { motion } from "framer-motion";
const Html = () => (
  <motion.svg
    initial={{ scale: 0.5, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.5 }}
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width="100"
    height="100"
    viewBox="0 0 48 48"
  >
    <path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path>
    <path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path>
    <path
      fill="#FFF"
      d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"
    ></path>
    <path
      fill="#EEE"
      d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"
    ></path>
  </motion.svg>
);

const Css = () => (
  <motion.svg
    initial={{ scale: 0.5, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.5 }}
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width="100"
    height="100"
    viewBox="0 0 48 48"
  >
    <path fill="#0277BD" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path>
    <path fill="#039BE5" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path>
    <path
      fill="#FFF"
      d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z"
    ></path>
    <path
      fill="#EEE"
      d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"
    ></path>
  </motion.svg>
);

const Js = () => (
  <motion.svg
    initial={{ scale: 0.5, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.5 }}
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width="100"
    height="100"
    viewBox="0 0 48 48"
  >
    <path fill="#f7df1e" d="M6,42V6h36v36H6z"></path>
    <path
      fill="#000001"
      d="M29.538,32.947c0.692,1.124,1.444,2.201,3.037,2.201c1.338,0,2.04-0.665,2.04-1.585 c0-1.101-0.726-1.492-2.198-2.133l-0.807-0.344c-2.329-0.988-3.878-2.226-3.878-4.841c0-2.41,1.845-4.244,4.728-4.244 c2.053,0,3.528,0.711,4.592,2.573l-2.514,1.607c-0.553-0.988-1.151-1.377-2.078-1.377c-0.946,0-1.545,0.597-1.545,1.377 c0,0.964,0.6,1.354,1.985,1.951l0.807,0.344C36.452,29.645,38,30.839,38,33.523C38,36.415,35.716,38,32.65,38 c-2.999,0-4.702-1.505-5.65-3.368L29.538,32.947z M17.952,33.029c0.506,0.906,1.275,1.603,2.381,1.603 c1.058,0,1.667-0.418,1.667-2.043V22h3.333v11.101c0,3.367-1.953,4.899-4.805,4.899c-2.577,0-4.437-1.746-5.195-3.368 L17.952,33.029z"
    ></path>
  </motion.svg>
);

const Tailwind = () => (
  <motion.svg
    initial={{ scale: 0.5, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.5 }}
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width="100"
    height="100"
    viewBox="0 0 48 48"
  >
    <linearGradient
      id="iOmQfjoCC4Hw6zVwRjSDha_x7XMNGh2vdqA_gr1"
      x1="21.861"
      x2="25.703"
      y1="8.237"
      y2="36.552"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="0" stopColor="#00c1e0"></stop>
      <stop offset="1" stopColor="#009bb8"></stop>
    </linearGradient>
    <path
      fill="url(#iOmQfjoCC4Hw6zVwRjSDha_x7XMNGh2vdqA_gr1)"
      d="M24,9.604c-5.589,0-9.347,2.439-11.276,7.318c-0.2,0.505,0.417,0.92,0.816,0.551 c2.035-1.882,4.322-2.505,6.86-1.871c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24 c5.589,0,9.348-2.44,11.276-7.319c0.2-0.505-0.417-0.92-0.816-0.551c-2.035,1.882-4.322,2.506-6.86,1.872 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-5.589,0-9.348,2.44-11.276,7.319 c-0.2,0.505,0.417,0.92,0.816,0.551c2.035-1.882,4.322-2.506,6.86-1.871c1.825,0.457,3.13,1.781,4.575,3.246 c2.353,2.388,5.077,5.152,11.025,5.152c5.589,0,9.348-2.44,11.276-7.319c0.2-0.505-0.417-0.92-0.816-0.551 c-2.035,1.882-4.322,2.506-6.86,1.871c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24L12,24z"
    ></path>
  </motion.svg>
);

const Bootstrap = () => (
  <motion.svg
    initial={{ scale: 0.5, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.5 }}
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width="100"
    height="100"
    viewBox="0 0 64 64"
  >
    <linearGradient
      id="GdeByWRAcrxkNrB1xXKVla_ZMc42tPbG32H_gr1"
      x1="32"
      x2="32"
      y1="57"
      y2="7"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="0" stopColor="#c822ff"></stop>
      <stop offset="1" stopColor="#1a6dff"></stop>
    </linearGradient>
    <path
      fill="none"
      stroke="url(#GdeByWRAcrxkNrB1xXKVla)"
      strokeMiterlimit="10"
      strokeWidth="2"
      d="M62,30.45v3.1	c-2.77,0.31-4.93,2.4-5.95,5.67c-1.02,3.31-1.16,7.37-1.05,10.51c0.11,3.26-2.43,6.27-5.87,6.27H14.87c-3.44,0-5.98-3.01-5.87-6.27	c0.11-3.14-0.03-7.2-1.05-10.51C6.93,35.95,4.77,33.86,2,33.55v-3.1c2.77-0.31,4.93-2.4,5.95-5.67C8.97,21.47,9.11,17.41,9,14.27	C8.89,11.01,11.43,8,14.87,8h34.26c3.44,0,5.98,3.01,5.87,6.27c-0.11,3.14,0.03,7.2,1.05,10.51C57.07,28.05,59.23,30.14,62,30.45z"
    ></path>
    <linearGradient
      id="GdeByWRAcrxkNrB1xXKVlb_ZMc42tPbG32H_gr2"
      x1="32"
      x2="32"
      y1="53"
      y2="11"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="0" stopColor="#e6abff"></stop>
      <stop offset="1" stopColor="#6dc7ff"></stop>
    </linearGradient>
    <path
      fill="url(#GdeByWRAcrxkNrB1xXKVlb_ZMc42tPbG32H_gr2)"
      d="M14.87,53c-0.95,0-1.599-0.465-1.976-0.854c-0.599-0.619-0.925-1.462-0.896-2.314	c0.11-3.134-0.005-7.677-1.181-11.495C9.942,35.533,8.351,33.342,6.303,32c2.048-1.341,3.639-3.529,4.511-6.326	c1.18-3.829,1.295-8.372,1.185-11.51c-0.028-0.848,0.298-1.691,0.896-2.31C13.271,11.465,13.92,11,14.87,11h34.26	c0.95,0,1.599,0.465,1.976,0.854c0.599,0.619,0.925,1.462,0.896,2.314c-0.11,3.134,0.005,7.677,1.181,11.495	c0.875,2.804,2.467,4.995,4.515,6.337c-2.048,1.341-3.639,3.529-4.511,6.326c-1.18,3.829-1.295,8.372-1.185,11.51	c0.028,0.848-0.298,1.691-0.896,2.31C50.729,52.535,50.08,53,49.13,53H14.87z M36.713,31.135c2.657-0.428,4.744-2.891,4.744-5.65	c0-3.93-3.105-6.485-7.829-6.485H23l0,25.99h10.689c5.66,0,9.07-2.769,9.07-7.35c0-3.461-2.433-5.955-6.047-6.352V31.135z M32.631,22.298c2.993,0,4.693,1.334,4.693,3.746c0,2.576-1.975,4.011-5.558,4.011H27v-7.757H32.631z M27,41.692V33.14h5.6	c3.909,0,5.935,1.435,5.935,4.245c0,2.81-1.975,4.306-5.701,4.306H27z"
    ></path>
  </motion.svg>
);

const NextJs = () => (
  <motion.svg
    initial={{ scale: 0.5, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.5 }}
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width="100"
    height="100"
    viewBox="0 0 48 48"
  >
    <linearGradient
      id="NRNx2IPDe7PJlJvrxOKgWa_MWiBjkuHeMVq_gr1"
      x1="24"
      x2="24"
      y1="43.734"
      y2="4.266"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="0" stopColor="#0a070a"></stop>
      <stop offset=".465" stopColor="#2b2b2b"></stop>
      <stop offset="1" stopColor="#4b4b4b"></stop>
    </linearGradient>
    <circle
      cx="24"
      cy="24"
      r="19.734"
      fill="url(#NRNx2IPDe7PJlJvrxOKgWa_MWiBjkuHeMVq_gr1)"
    ></circle>
    <rect
      width="3.023"
      height="15.996"
      x="15.992"
      y="16.027"
      fill="#fff"
    ></rect>
    <linearGradient
      id="NRNx2IPDe7PJlJvrxOKgWb_MWiBjkuHeMVq_gr2"
      x1="30.512"
      x2="30.512"
      y1="33.021"
      y2="18.431"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset=".377" stopColor="#fff" stopOpacity="0"></stop>
      <stop offset=".666" stopColor="#fff" stopOpacity=".3"></stop>
      <stop offset=".988" stopColor="#fff"></stop>
    </linearGradient>
    <rect
      width="2.953"
      height="14.59"
      x="29.035"
      y="15.957"
      fill="url(#NRNx2IPDe7PJlJvrxOKgWb_MWiBjkuHeMVq_gr2)"
    ></rect>
    <linearGradient
      id="NRNx2IPDe7PJlJvrxOKgWc_MWiBjkuHeMVq_gr3"
      x1="22.102"
      x2="36.661"
      y1="21.443"
      y2="40.529"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset=".296" stopColor="#fff"></stop>
      <stop offset=".521" stopColor="#fff" stopOpacity=".5"></stop>
      <stop offset=".838" stopColor="#fff" stopOpacity="0"></stop>
    </linearGradient>
    <polygon
      fill="url(#NRNx2IPDe7PJlJvrxOKgWc_MWiBjkuHeMVq_gr3)"
      points="36.781,38.094 34.168,39.09 15.992,16.027 19.508,16.027"
    ></polygon>
  </motion.svg>
);

const Reactjs = () => (
  <motion.svg
    initial={{ scale: 0.5, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.5 }}
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width="100"
    height="100"
    viewBox="0 0 40 40"
  >
    <path
      fill="#4e7ab5"
      d="M20,28.9C8.598,28.9,0,25.17,0,20s8.598-9,20-9s20,3.83,20,9S31.402,28.9,20,28.9z M20,13.932 c-9.729,0-17.125,3.266-17.125,6.131S10.271,26.068,20,26.068s17.125-3.266,17.125-6.131S29.729,13.932,20,13.932z"
    ></path>
    <path
      fill="#4e7ab5"
      d="M12.402,38C12.401,38,12.402,38,12.402,38c-0.931,0-1.781-0.216-2.528-0.642 c-1.22-0.697-2.095-1.928-2.532-3.562c-1.146-4.282,0.703-11.482,4.713-18.344C16.76,7.407,23.007,2.003,27.599,2.003 c0.93,0,1.78,0.216,2.527,0.642c1.218,0.695,2.094,1.925,2.531,3.558c1.147,4.282-0.703,11.483-4.715,18.345 C23.241,32.594,16.995,38,12.402,38z M27.599,5.003c-2.888,0-8.409,4.193-12.954,11.963c-4.123,7.056-5.332,12.909-4.404,16.054 c0.251,0.849,0.605,1.438,1.121,1.732c2.361,1.348,8.809-2.85,13.991-11.717c4.125-7.057,5.46-12.785,4.406-16.055 c-0.271-0.841-0.604-1.435-1.119-1.728C28.347,5.084,28.006,5.003,27.599,5.003z"
    ></path>
    <path
      fill="#4e7ab5"
      d="M27.599,37.997C27.599,37.997,27.599,37.997,27.599,37.997c-4.597-0.001-10.843-5.405-15.544-13.449 c-4.01-6.862-5.859-14.063-4.713-18.344C7.779,4.57,8.654,3.339,9.873,2.643C10.621,2.216,11.471,2,12.4,2 c4.595,0,10.84,5.406,15.542,13.452c4.011,6.861,5.86,14.062,4.714,18.345c-0.438,1.633-1.313,2.863-2.53,3.558 C29.379,37.781,28.528,37.997,27.599,37.997z M12.4,5c-0.407,0-0.747,0.082-1.04,0.248c-0.515,0.294-0.874,0.881-1.12,1.732 c-0.928,3.208,0.281,8.999,4.404,16.055c4.541,7.769,10.063,11.962,12.954,11.962l0,0c0.408,0,0.748-0.082,1.041-0.249 c0.514-0.292,0.883-0.876,1.118-1.728c0.867-3.146-0.281-9-4.405-16.055C20.811,9.194,15.29,5,12.4,5z"
    ></path>
    <path
      fill="#8bb7f0"
      d="M23.5,20c0,1.935-1.565,3.5-3.5,3.5s-3.5-1.565-3.5-3.5s1.565-3.5,3.5-3.5S23.5,18.065,23.5,20z"
    ></path>
    <path
      fill="#4e7ab5"
      d="M20,24c-2.206,0-4-1.794-4-4s1.794-4,4-4s4,1.794,4,4S22.206,24,20,24z M20,17c-1.654,0-3,1.346-3,3 s1.346,3,3,3s3-1.346,3-3S21.654,17,20,17z"
    ></path>
    <path
      fill="#8bb7f0"
      d="M20,28.068C9.346,28.068,1,24.524,1,20s8.346-8.068,19-8.068S39,15.476,39,20 S30.654,28.068,20,28.068z M20,12.932c-9.757,0-18,3.237-18,7.068s8.243,7.068,18,7.068S38,23.832,38,20S29.757,12.932,20,12.932z"
    ></path>
    <path
      fill="#8bb7f0"
      d="M12.402,37C12.401,37,12.402,37,12.402,37c-0.755,0-1.438-0.172-2.033-0.511 c-0.996-0.569-1.689-1.562-2.062-2.952c-1.081-4.037,0.729-10.938,4.61-17.581C17.379,8.33,23.416,3.003,27.599,3.003 c0.754,0,1.438,0.172,2.032,0.511c0.995,0.568,1.688,1.56,2.061,2.948c1.081,4.037-0.729,10.938-4.612,17.582 C22.621,31.672,16.586,37,12.402,37z M27.599,4.003c-3.784,0-9.595,5.239-13.817,12.458c-3.695,6.325-5.507,13.083-4.508,16.818 c0.301,1.123,0.836,1.91,1.592,2.342C11.307,35.872,11.823,36,12.401,36c3.785,0,9.595-5.24,13.814-12.461 c3.697-6.326,5.51-13.085,4.509-16.818c-0.3-1.121-0.835-1.908-1.59-2.338C28.693,4.131,28.177,4.003,27.599,4.003z"
    ></path>
    <g>
      <path
        fill="#8bb7f0"
        d="M27.599,36.997C27.599,36.997,27.599,36.997,27.599,36.997c-4.187-0.001-10.224-5.327-14.681-12.953 C9.036,17.401,7.227,10.5,8.308,6.463c0.372-1.39,1.065-2.383,2.062-2.952C10.964,3.172,11.647,3,12.4,3 c4.185,0,10.221,5.328,14.679,12.956c3.883,6.642,5.692,13.543,4.61,17.582c-0.371,1.389-1.064,2.381-2.059,2.948 C29.036,36.825,28.353,36.997,27.599,36.997z M12.4,4c-0.577,0-1.094,0.128-1.535,0.379c-0.756,0.432-1.291,1.219-1.592,2.342 c-0.999,3.734,0.813,10.493,4.508,16.818C18,30.757,23.812,35.996,27.599,35.997l0,0c0.578,0,1.095-0.128,1.536-0.38 c0.754-0.43,1.289-1.217,1.589-2.338c1-3.735-0.812-10.494-4.508-16.818C21.996,9.241,16.187,4,12.4,4z"
      ></path>
    </g>
  </motion.svg>
);

const MongoDb = () => (
  <motion.svg
    initial={{ scale: 0.5, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.5 }}
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width="100"
    height="100"
    viewBox="0 0 48 48"
  >
    <path
      fill="#5d4037"
      d="M42,17.3C42,37.8,24,44,24,44S6,37.8,6,17.3c0-2.5,0.2-4.6,0.4-6.3c0.3-2.5,2-4.5,4.4-5.1 C13.9,5,18.8,4,24,4s10.1,1,13.3,1.9c2.4,0.6,4.1,2.7,4.4,5.1C41.8,12.7,42,14.9,42,17.3z"
    ></path>
    <path
      fill="#4caf50"
      d="M24,7c4.9,0,9.5,1,12.5,1.8c1.2,0.3,2,1.3,2.2,2.6c0.2,1.9,0.3,3.9,0.3,5.9c0,15.6-11.5,21.9-15,23.4 c-3.5-1.6-15-7.9-15-23.4c0-2,0.1-4,0.3-5.9c0.1-1.3,1-2.3,2.2-2.6C14.5,8,19.1,7,24,7 M24,4c-5.2,0-10.1,1-13.3,1.9 C8.4,6.5,6.6,8.6,6.4,11C6.2,12.7,6,14.9,6,17.3C6,37.8,24,44,24,44s18-6.2,18-26.7c0-2.5-0.2-4.6-0.4-6.3c-0.3-2.5-2-4.5-4.4-5.1 C34.1,5,29.2,4,24,4L24,4z"
    ></path>
    <path fill="#dcedc8" d="M23 28H25V36H23z"></path>
    <path
      fill="#4caf50"
      d="M24,10c0,0-6,5-6,13c0,5.2,3.3,8.5,5,10l1-3l1,3c1.7-1.5,5-4.8,5-10C30,15,24,10,24,10z"
    ></path>
    <path
      fill="#81c784"
      d="M24,10c0,0-6,5-6,13c0,5.2,3.3,8.5,5,10l1-3V10z"
    ></path>
  </motion.svg>
);

const Nodejs = () => (
  <motion.svg
    initial={{ scale: 0.5, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.5 }}
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width="100"
    height="100"
    viewBox="0 0 48 48"
  >
    <path
      fill="#21a366"
      d="M24.007,45.419c-0.574,0-1.143-0.15-1.646-0.44l-5.24-3.103c-0.783-0.438-0.401-0.593-0.143-0.682	c1.044-0.365,1.255-0.448,2.369-1.081c0.117-0.067,0.27-0.043,0.39,0.028l4.026,2.389c0.145,0.079,0.352,0.079,0.486,0l15.697-9.061	c0.145-0.083,0.24-0.251,0.24-0.424V14.932c0-0.181-0.094-0.342-0.243-0.432L24.253,5.446c-0.145-0.086-0.338-0.086-0.483,0	L8.082,14.499c-0.152,0.086-0.249,0.255-0.249,0.428v18.114c0,0.173,0.094,0.338,0.244,0.42l4.299,2.483	c2.334,1.167,3.76-0.208,3.76-1.591V16.476c0-0.255,0.2-0.452,0.456-0.452h1.988c0.248,0,0.452,0.196,0.452,0.452v17.886	c0,3.112-1.697,4.9-4.648,4.9c-0.908,0-1.623,0-3.619-0.982l-4.118-2.373C5.629,35.317,5,34.216,5,33.042V14.928	c0-1.179,0.629-2.279,1.646-2.861L22.36,3.002c0.994-0.562,2.314-0.562,3.301,0l15.694,9.069C42.367,12.656,43,13.753,43,14.932	v18.114c0,1.175-0.633,2.271-1.646,2.861L25.66,44.971c-0.503,0.291-1.073,0.44-1.654,0.44"
    ></path>
    <path
      fill="#21a366"
      d="M28.856,32.937c-6.868,0-8.308-3.153-8.308-5.797c0-0.251,0.203-0.452,0.455-0.452h2.028	c0.224,0,0.413,0.163,0.448,0.384c0.306,2.066,1.218,3.108,5.371,3.108c3.308,0,4.715-0.747,4.715-2.502	c0-1.01-0.401-1.76-5.54-2.263c-4.299-0.424-6.955-1.371-6.955-4.809c0-3.167,2.672-5.053,7.147-5.053	c5.026,0,7.517,1.745,7.831,5.493c0.012,0.13-0.035,0.255-0.122,0.35c-0.086,0.09-0.208,0.145-0.334,0.145h-2.039	c-0.212,0-0.397-0.149-0.44-0.354c-0.491-2.173-1.678-2.868-4.904-2.868c-3.611,0-4.031,1.257-4.031,2.2	c0,1.143,0.495,1.477,5.367,2.122c4.825,0.64,7.116,1.544,7.116,4.935c0,3.418-2.853,5.379-7.827,5.379"
    ></path>
  </motion.svg>
);

const ExpressJs = () => (
  <motion.svg
    initial={{ scale: 0.5, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.5 }}
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width="100"
    height="100"
    viewBox="0 0 48 48"
  >
    <path fill="#f7df1e" d="M6,42V6h36v36H6z"></path>
    <path
      fill="#000001"
      d="M29.538,32.947c0.692,1.124,1.444,2.201,3.037,2.201c1.338,0,2.04-0.665,2.04-1.585 c0-1.101-0.726-1.492-2.198-2.133l-0.807-0.344c-2.329-0.988-3.878-2.226-3.878-4.841c0-2.41,1.845-4.244,4.728-4.244 c2.053,0,3.528,0.711,4.592,2.573l-2.514,1.607c-0.553-0.988-1.151-1.377-2.078-1.377c-0.946,0-1.545,0.597-1.545,1.377 c0,0.964,0.6,1.354,1.985,1.951l0.807,0.344C36.452,29.645,38,30.839,38,33.523C38,36.415,35.716,38,32.65,38 c-2.999,0-4.702-1.505-5.65-3.368L29.538,32.947z M17.952,33.029c0.506,0.906,1.275,1.603,2.381,1.603 c1.058,0,1.667-0.418,1.667-2.043V22h3.333v11.101c0,3.367-1.953,4.899-4.805,4.899c-2.577,0-4.437-1.746-5.195-3.368 L17.952,33.029z"
    ></path>
  </motion.svg>
);

const Java = () => (
  <motion.svg
    initial={{ scale: 0.5, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.5 }}
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width="100"
    height="100"
    viewBox="0 0 48 48"
  >
    <path
      fill="#F44336"
      d="M23.65,24.898c-0.998-1.609-1.722-2.943-2.725-5.455C19.229,15.2,31.24,11.366,26.37,3.999c2.111,5.089-7.577,8.235-8.477,12.473C17.07,20.37,23.645,24.898,23.65,24.898z"
    ></path>
    <path
      fill="#F44336"
      d="M23.878,17.27c-0.192,2.516,2.229,3.857,2.299,5.695c0.056,1.496-1.447,2.743-1.447,2.743s2.728-0.536,3.579-2.818c0.945-2.534-1.834-4.269-1.548-6.298c0.267-1.938,6.031-5.543,6.031-5.543S24.311,11.611,23.878,17.27z"
    ></path>
    <g>
      <path
        fill="#1565C0"
        d="M32.084 25.055c1.754-.394 3.233.723 3.233 2.01 0 2.901-4.021 5.643-4.021 5.643s6.225-.742 6.225-5.505C37.521 24.053 34.464 23.266 32.084 25.055zM29.129 27.395c0 0 1.941-1.383 2.458-1.902-4.763 1.011-15.638 1.147-15.638.269 0-.809 3.507-1.638 3.507-1.638s-7.773-.112-7.773 2.181C11.683 28.695 21.858 28.866 29.129 27.395z"
      ></path>
      <path
        fill="#1565C0"
        d="M27.935,29.571c-4.509,1.499-12.814,1.02-10.354-0.993c-1.198,0-2.974,0.963-2.974,1.889c0,1.857,8.982,3.291,15.63,0.572L27.935,29.571z"
      ></path>
      <path
        fill="#1565C0"
        d="M18.686,32.739c-1.636,0-2.695,1.054-2.695,1.822c0,2.391,9.76,2.632,13.627,0.205l-2.458-1.632C24.271,34.404,17.014,34.579,18.686,32.739z"
      ></path>
      <path
        fill="#1565C0"
        d="M36.281,36.632c0-0.936-1.055-1.377-1.433-1.588c2.228,5.373-22.317,4.956-22.317,1.784c0-0.721,1.807-1.427,3.477-1.093l-1.42-0.839C11.26,34.374,9,35.837,9,37.017C9,42.52,36.281,42.255,36.281,36.632z"
      ></path>
      <path
        fill="#1565C0"
        d="M39,38.604c-4.146,4.095-14.659,5.587-25.231,3.057C24.341,46.164,38.95,43.628,39,38.604z"
      ></path>
    </g>
  </motion.svg>
);

const Cpp = () => (
  <motion.svg
    initial={{ scale: 0.5, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.5 }}
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width="100"
    height="100"
    viewBox="0 0 48 48"
  >
    <path
      fill="#00549d"
      fillRule="evenodd"
      d="M22.903,3.286c0.679-0.381,1.515-0.381,2.193,0 c3.355,1.883,13.451,7.551,16.807,9.434C42.582,13.1,43,13.804,43,14.566c0,3.766,0,15.101,0,18.867 c0,0.762-0.418,1.466-1.097,1.847c-3.355,1.883-13.451,7.551-16.807,9.434c-0.679,0.381-1.515,0.381-2.193,0 c-3.355-1.883-13.451-7.551-16.807-9.434C5.418,34.899,5,34.196,5,33.434c0-3.766,0-15.101,0-18.867 c0-0.762,0.418-1.466,1.097-1.847C9.451,10.837,19.549,5.169,22.903,3.286z"
      clipRule="evenodd"
    ></path>
    <path
      fill="#0086d4"
      fillRule="evenodd"
      d="M5.304,34.404C5.038,34.048,5,33.71,5,33.255 c0-3.744,0-15.014,0-18.759c0-0.758,0.417-1.458,1.094-1.836c3.343-1.872,13.405-7.507,16.748-9.38 c0.677-0.379,1.594-0.371,2.271,0.008c3.343,1.872,13.371,7.459,16.714,9.331c0.27,0.152,0.476,0.335,0.66,0.576L5.304,34.404z"
      clipRule="evenodd"
    ></path>
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M24,10c7.727,0,14,6.273,14,14s-6.273,14-14,14 s-14-6.273-14-14S16.273,10,24,10z M24,17c3.863,0,7,3.136,7,7c0,3.863-3.137,7-7,7s-7-3.137-7-7C17,20.136,20.136,17,24,17z"
      clipRule="evenodd"
    ></path>
    <path
      fill="#0075c0"
      fillRule="evenodd"
      d="M42.485,13.205c0.516,0.483,0.506,1.211,0.506,1.784 c0,3.795-0.032,14.589,0.009,18.384c0.004,0.396-0.127,0.813-0.323,1.127L23.593,24L42.485,13.205z"
      clipRule="evenodd"
    ></path>
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M31 21H33V27H31zM38 21H40V27H38z"
      clipRule="evenodd"
    ></path>
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M29 23H35V25H29zM36 23H42V25H36z"
      clipRule="evenodd"
    ></path>
  </motion.svg>
);

const FireBase = () => (
  <motion.svg
    initial={{ scale: 0.5, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.5 }}
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width="100"
    height="100"
    viewBox="0 0 48 48"
  >
    <path
      fill="#ff8f00"
      d="M8,37L23.234,8.436c0.321-0.602,1.189-0.591,1.494,0.02L30,19L8,37z"
    ></path>
    <path
      fill="#ffa000"
      d="M8,36.992l5.546-34.199c0.145-0.895,1.347-1.089,1.767-0.285L26,22.992L8,36.992z"
    ></path>
    <path
      fill="#ff6f00"
      d="M8.008 36.986L8.208 36.829 25.737 22.488 20.793 13.012z"
    ></path>
    <path
      fill="#ffc400"
      d="M8,37l26.666-25.713c0.559-0.539,1.492-0.221,1.606,0.547L40,37l-15,8.743 c-0.609,0.342-1.352,0.342-1.961,0L8,37z"
    ></path>
  </motion.svg>
);

const Design = () => (
  <motion.svg
    initial={{ scale: 0.5, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.5 }}
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width="100"
    height="100"
    viewBox="0 0 48 48"
  >
    <linearGradient
      id="NRNx2IPDe7PJlJvrxOKgWa_MWiBjkuHeMVq_gr1"
      x1="24"
      x2="24"
      y1="43.734"
      y2="4.266"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="0" stopColor="#0a070a"></stop>
      <stop offset=".465" stopColor="#2b2b2b"></stop>
      <stop offset="1" stopColor="#4b4b4b"></stop>
    </linearGradient>
    <circle
      cx="24"
      cy="24"
      r="19.734"
      fill="url(#NRNx2IPDe7PJlJvrxOKgWa_MWiBjkuHeMVq_gr1)"
    ></circle>
    <rect
      width="3.023"
      height="15.996"
      x="15.992"
      y="16.027"
      fill="#fff"
    ></rect>
    <linearGradient
      id="NRNx2IPDe7PJlJvrxOKgWb_MWiBjkuHeMVq_gr2"
      x1="30.512"
      x2="30.512"
      y1="33.021"
      y2="18.431"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset=".377" stopColor="#fff" stopOpacity="0"></stop>
      <stop offset=".666" stopColor="#fff" stopOpacity=".3"></stop>
      <stop offset=".988" stopColor="#fff"></stop>
    </linearGradient>
    <rect
      width="2.953"
      height="14.59"
      x="29.035"
      y="15.957"
      fill="url(#NRNx2IPDe7PJlJvrxOKgWb_MWiBjkuHeMVq_gr2)"
    ></rect>
    <linearGradient
      id="NRNx2IPDe7PJlJvrxOKgWc_MWiBjkuHeMVq_gr3"
      x1="22.102"
      x2="36.661"
      y1="21.443"
      y2="40.529"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset=".296" stopColor="#fff"></stop>
      <stop offset=".521" stopColor="#fff" stopOpacity=".5"></stop>
      <stop offset=".838" stopColor="#fff" stopOpacity="0"></stop>
    </linearGradient>
    <polygon
      fill="url(#NRNx2IPDe7PJlJvrxOKgWc_MWiBjkuHeMVq_gr3)"
      points="36.781,38.094 34.168,39.09 15.992,16.027 19.508,16.027"
    ></polygon>
  </motion.svg>
);

const Fast = () => (
  <motion.svg
    initial={{ scale: 0.5, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.5 }}
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width="100"
    height="100"
    viewBox="0 0 48 48"
  >
    <linearGradient
      id="NRNx2IPDe7PJlJvrxOKgWa_MWiBjkuHeMVq_gr1"
      x1="24"
      x2="24"
      y1="43.734"
      y2="4.266"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="0" stopColor="#0a070a"></stop>
      <stop offset=".465" stopColor="#2b2b2b"></stop>
      <stop offset="1" stopColor="#4b4b4b"></stop>
    </linearGradient>
    <circle
      cx="24"
      cy="24"
      r="19.734"
      fill="url(#NRNx2IPDe7PJlJvrxOKgWa_MWiBjkuHeMVq_gr1)"
    ></circle>
    <rect
      width="3.023"
      height="15.996"
      x="15.992"
      y="16.027"
      fill="#fff"
    ></rect>
    <linearGradient
      id="NRNx2IPDe7PJlJvrxOKgWb_MWiBjkuHeMVq_gr2"
      x1="30.512"
      x2="30.512"
      y1="33.021"
      y2="18.431"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset=".377" stopColor="#fff" stopOpacity="0"></stop>
      <stop offset=".666" stopColor="#fff" stopOpacity=".3"></stop>
      <stop offset=".988" stopColor="#fff"></stop>
    </linearGradient>
    <rect
      width="2.953"
      height="14.59"
      x="29.035"
      y="15.957"
      fill="url(#NRNx2IPDe7PJlJvrxOKgWb_MWiBjkuHeMVq_gr2)"
    ></rect>
    <linearGradient
      id="NRNx2IPDe7PJlJvrxOKgWc_MWiBjkuHeMVq_gr3"
      x1="22.102"
      x2="36.661"
      y1="21.443"
      y2="40.529"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset=".296" stopColor="#fff"></stop>
      <stop offset=".521" stopColor="#fff" stopOpacity=".5"></stop>
      <stop offset=".838" stopColor="#fff" stopOpacity="0"></stop>
    </linearGradient>
    <polygon
      fill="url(#NRNx2IPDe7PJlJvrxOKgWc_MWiBjkuHeMVq_gr3)"
      points="36.781,38.094 34.168,39.09 15.992,16.027 19.508,16.027"
    ></polygon>
  </motion.svg>
);

const Responsive = () => (
  <motion.svg
    initial={{ scale: 0.5, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.5 }}
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width="100"
    height="100"
    viewBox="0 0 48 48"
  >
    <linearGradient
      id="NRNx2IPDe7PJlJvrxOKgWa_MWiBjkuHeMVq_gr1"
      x1="24"
      x2="24"
      y1="43.734"
      y2="4.266"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="0" stopColor="#0a070a"></stop>
      <stop offset=".465" stopColor="#2b2b2b"></stop>
      <stop offset="1" stopColor="#4b4b4b"></stop>
    </linearGradient>
    <circle
      cx="24"
      cy="24"
      r="19.734"
      fill="url(#NRNx2IPDe7PJlJvrxOKgWa_MWiBjkuHeMVq_gr1)"
    ></circle>
    <rect
      width="3.023"
      height="15.996"
      x="15.992"
      y="16.027"
      fill="#fff"
    ></rect>
    <linearGradient
      id="NRNx2IPDe7PJlJvrxOKgWb_MWiBjkuHeMVq_gr2"
      x1="30.512"
      x2="30.512"
      y1="33.021"
      y2="18.431"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset=".377" stopColor="#fff" stopOpacity="0"></stop>
      <stop offset=".666" stopColor="#fff" stopOpacity=".3"></stop>
      <stop offset=".988" stopColor="#fff"></stop>
    </linearGradient>
    <rect
      width="2.953"
      height="14.59"
      x="29.035"
      y="15.957"
      fill="url(#NRNx2IPDe7PJlJvrxOKgWb_MWiBjkuHeMVq_gr2)"
    ></rect>
    <linearGradient
      id="NRNx2IPDe7PJlJvrxOKgWc_MWiBjkuHeMVq_gr3"
      x1="22.102"
      x2="36.661"
      y1="21.443"
      y2="40.529"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset=".296" stopColor="#fff"></stop>
      <stop offset=".521" stopColor="#fff" stopOpacity=".5"></stop>
      <stop offset=".838" stopColor="#fff" stopOpacity="0"></stop>
    </linearGradient>
    <polygon
      fill="url(#NRNx2IPDe7PJlJvrxOKgWc_MWiBjkuHeMVq_gr3)"
      points="36.781,38.094 34.168,39.09 15.992,16.027 19.508,16.027"
    ></polygon>
  </motion.svg>
);

const Prisma = () => (
  <motion.svg
    initial={{ scale: 0.5, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.5 }}
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width="100"
    height="100"
    viewBox="0 0 50 50"
  >
    <path d="M44.674,37.568L27.405,1.49c-0.89-1.859-3.473-2.012-4.575-0.271L3.679,31.461c-0.413,0.652-0.401,1.486,0.03,2.126	l9.647,14.323c0.599,0.889,1.7,1.29,2.729,0.994l26.994-7.775C44.596,40.692,45.357,38.994,44.674,37.568z M40.86,38.865	l-22.703,6.369c-0.526,0.148-1.02-0.318-0.906-0.853L25.3,6.749c0.145-0.678,1.064-0.788,1.364-0.163l14.843,30.881	C41.766,38.033,41.459,38.697,40.86,38.865z"></path>
  </motion.svg>
);
export {
  Html,
  Css,
  Js,
  Reactjs,
  Bootstrap,
  Tailwind,
  NextJs,
  MongoDb,
  Nodejs,
  ExpressJs,
  FireBase,
  Java,
  Cpp,
  Design,
  Fast,
  Responsive,
  Prisma,
};
