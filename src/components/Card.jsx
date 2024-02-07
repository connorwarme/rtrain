const Card = ({ recipe }) => {
  return (
    <>
      <div className="relative overflow-hidden rounded bg-white shadow-md">
        <img
          src={recipe.img.url}
          alt={recipe.img.alt}
          className="h-32 w-full object-cover sm:h-48"
        />
        <div className="m-4">
          <span className="font-bold">{recipe.title}</span>
          <span className="block text-sm text-gray-500">
            Recipe by {recipe.author}
          </span>
        </div>
        <div className="absolute top-0 ml-2 mt-2 rounded-full bg-secondary-100 p-2 font-bold uppercase text-secondary-200 flex items-center">
          <svg className="w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          <span className="ml-1">{recipe.duration} mins</span>
        </div>
      </div>
    </>
  )
}

export default Card
