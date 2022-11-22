const Modal = () => {
  const handleClick = (e: any) => {
    console.log(e.target.matches(".modal"));
  };
  return (
    <div
      className="h-screen w-full bg-black/25 fixed top-0 left-0 z-20"
      onClick={handleClick}
    >
      <div className="h-[100px] bg-white modal w-[515px] mx-auto">
        This is modal conten
      </div>
    </div>
  );
};

export default Modal;
