
export const WhatsAppButton = () => {
  return (
    <div>
      <button 
       className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"> WhatsAppButton
        </button>
    </div>
  )
}

// import React from "react";

// const WhatsAppButton = ({ phoneNumber, message }) => {
//   const handleClick = () => {
//     const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
//     window.open(url, "_blank");
//   };

//   return (
//     <button
//       onClick={handleClick}
//       className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
//     >
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         fill="currentColor"
//         viewBox="0 0 24 24"
//         className="w-5 h-5"
//       >
//         <path d="M12 0C5.373 0 0 5.373 0 12c0 2.12.553 4.17 1.6 5.97L0 24l6.2-1.62A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.82c-2.07 0-4.07-.54-5.84-1.57l-.42-.25-3.68.96.98-3.59-.27-.44A9.82 9.82 0 012.18 12c0-5.42 4.4-9.82 9.82-9.82 5.42 0 9.82 4.4 9.82 9.82 0 5.42-4.4 9.82-9.82 9.82zm5.68-7.46c-.31-.16-1.84-.91-2.13-1.02-.29-.11-.5-.16-.71.16-.21.31-.82 1.02-1 1.23-.18.21-.37.24-.68.08-.31-.16-1.31-.48-2.5-1.53-.92-.82-1.54-1.83-1.72-2.14-.18-.31-.02-.48.14-.64.14-.14.31-.37.47-.55.16-.18.21-.31.31-.52.1-.21.05-.39-.03-.55-.08-.16-.71-1.71-.97-2.34-.25-.6-.51-.52-.71-.53h-.61c-.21 0-.55.08-.84.39-.29.31-1.1 1.08-1.1 2.63s1.13 3.05 1.29 3.26c.16.21 2.22 3.39 5.38 4.75.75.32 1.34.51 1.8.65.76.24 1.45.21 2 .13.61-.09 1.84-.75 2.1-1.48.26-.73.26-1.35.18-1.48-.08-.13-.29-.21-.6-.37z" />
//       </svg>
//       <span>Contactar por WhatsApp</span>
//     </button>
//   );
// };

// export default WhatsAppButton