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
        <div className="absolute top-0 ml-2 mt-2 rounded-full bg-secondary-100 p-2 font-bold uppercase text-secondary-200">
          <span>{recipe.duration} mins</span>
        </div>
      </div>
    </>
  )
}

export default Card
