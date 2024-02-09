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
      url: 'https://google.com',
    },
  ]

  const buildIconUnit = (img, key) => {
    return (
      <>
        <div key={key}>
          <a href={img.url} className="hover:cursor-pointer">
            <img src={img.img} alt={img.alt} className="h-36" />
          </a>
        </div>
      </>
    )
  }
  return ( 
    <>
      <div>
        <div>
          <p>Photo credit: Janja Zedja</p>
        </div>
        <div>
          {icons.map((icon, index) => buildIconUnit(icon, index))}
        </div>
      </div>
    </>
   );
}
 
export default Footer;