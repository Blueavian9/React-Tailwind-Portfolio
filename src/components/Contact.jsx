{
  /* Neon Glow Send Button — only for Contact form */
}
<div className="relative group inline-block">
  <button
    type="submit"
    className="
      relative inline-block px-8 py-3 text-neon text-lg uppercase tracking-[4px]
      overflow-hidden transition-all duration-500
      hover:text-white
      group-hover:shadow-[0_0_5px_#03e9f4,0_0_25px_#03e9f4,0_0_50px_#03e9f4,0_0_100px_#03e9f4]
      border-none bg-transparent
    "
  >
    {/* four animated borders */}
    <span className="absolute top-0 left-[-100%] w-full h-[2px] bg-gradient-to-r from-transparent to-neon animate-contactBtnAnim1"></span>
    <span className="absolute top-[-100%] right-0 w-[2px] h-full bg-gradient-to-b from-transparent to-neon animate-contactBtnAnim2"></span>
    <span className="absolute bottom-0 right-[-100%] w-full h-[2px] bg-gradient-to-l from-transparent to-neon animate-contactBtnAnim3"></span>
    <span className="absolute bottom-[-100%] left-0 w-[2px] h-full bg-gradient-to-t from-transparent to-neon animate-contactBtnAnim4"></span>
    Send
  </button>
</div>;
