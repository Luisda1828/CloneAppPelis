export function Button({text, value, isOpen}) {
  

    let icon;
    if (value == "play") {
      icon = (
        <svg
          className='size-6 flex justify-center items-center group-hover:stroke-black group-hover:fill-black'
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke=""
            stroke-width="0.24000000000000005"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M16.6582 9.28638C18.098 10.1862 18.8178 10.6361 19.0647 11.2122C19.2803 11.7152 19.2803 12.2847 19.0647 12.7878C18.8178 13.3638 18.098 13.8137 16.6582 14.7136L9.896 18.94C8.29805 19.9387 7.49907 20.4381 6.83973 20.385C6.26501 20.3388 5.73818 20.0469 5.3944 19.584C5 19.053 5 18.1108 5 16.2264V7.77357C5 5.88919 5 4.94701 5.3944 4.41598C5.73818 3.9531 6.26501 3.66111 6.83973 3.6149C7.49907 3.5619 8.29805 4.06126 9.896 5.05998L16.6582 9.28638Z"
              stroke="#ffffffff"
              stroke-width="2"
              stroke-linejoin="round"
            ></path>{" "}
          </g>
        </svg>
      );
    }else{

        icon = (
          
            <svg
            className='size-6 flex justify-center items-center transition-all duration-300'
            width="21" height="27" viewBox="0 0 21 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              
            <circle className="group-hover:stroke-black" cx="10.5" cy="16.5" r="9.5" stroke="#ffffffff" stroke-width="2"/>
            <path className="group-hover:fill-black" d="M11.6074 23.5018H9.38756L9.56299 13.6577H11.432L11.6074 23.5018ZM10.5008 9.5554C10.8652 9.5554 11.1801 9.68809 11.4454 9.95348C11.7108 10.2144 11.8458 10.5315 11.8503 10.9048C11.8458 11.2737 11.7108 11.5908 11.4454 11.8562C11.1801 12.1171 10.8652 12.2475 10.5008 12.2475C10.1275 12.2475 9.80814 12.1171 9.54275 11.8562C9.27736 11.5908 9.14691 11.2737 9.15141 10.9048C9.14691 10.6529 9.20539 10.4258 9.32684 10.2234C9.45278 10.021 9.61697 9.85902 9.81938 9.73757C10.0263 9.61612 10.2534 9.5554 10.5008 9.5554Z" fill="white"/>
            </svg>
            
        );


    }

    return(
        <button onClick={isOpen}  className='  group text-8 text-white  bg-black bg-opacity-50 px-8 py-3  font-semibold flex items-center justify-center rounded-lg gap-1 hover:bg-white hover:text-black transition-all duration-300  '>
            {icon}
            <span className=' text-[1.3rem] font-bold '>{text}</span>
        </button>
    )
}