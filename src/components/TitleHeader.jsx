const TitleHeader = ({ title, sub }) => {
  return (
    <div className="flex flex-col items-center hap-5">
        <div className="hero-badge mb-5">
            <p>{sub}</p>
        </div>
        <div className="font-semibold md:text-5xl text3xl text-center">
            {title}
        </div>
    </div>
  )
}

export default TitleHeader