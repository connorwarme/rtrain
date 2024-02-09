import icon from "../assets/about.svg"

const Footer = () => {

  const icons = [
    {
      img: icon,
      alt: "About",
      url: 'https://google.com',
    },
    {
      img: icon,
      alt: "About",
      url: 'https://github.com',
    },
    {
      img: icon,
      alt: "About",
      url: 'https://linkedin.com',
    },
  ]

  const buildIconUnit = (img) => {
    return (
      <>
        <div>
          <a href={img.url} className="hover:cursor-pointer">
            <img src={img.img} alt={img.alt} className="h-12" />
          </a>
        </div>
      </>
    )
  }
  return ( 
    <>
      <div className="grid justify-center col-span-3 mt-10 mb-5">
        <div>
          <p className="text-center">Photo credit: Janja Zedja</p>
        </div>
        <div className="flex justify-center">
          {icons.map((icon, index) => <div key={index}>{buildIconUnit(icon)}</div>)}
        </div>
      </div>
    </>
   );
}
 
export default Footer;