import img from "figma:asset/cd532a438307526d19f9f9f1cfba7e3b4cc1940e.png";

export default function Main() {
  return (
    <div className="relative size-full" data-name="MAIN">
      <div className="absolute bg-white inset-0 rounded-[10px]">
        <div aria-hidden="true" className="absolute border-[3px] border-black border-solid inset-0 pointer-events-none rounded-[10px]" />
      </div>
      <div className="absolute aspect-[160/160] left-[1.21%] right-[1.82%] top-[2px]" data-name="CLOSEDBOT PNG 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[126.34%] left-[-42.5%] max-w-none top-[-11.29%] w-[176.87%]" src={img} />
        </div>
      </div>
    </div>
  );
}