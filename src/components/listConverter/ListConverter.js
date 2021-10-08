import './ListConverter.css'

export const ListConverter = ({ keywords }) => {
  const keywordsList = keywords.split(',')

  return (
    <div className="list-converter-wrapper">
      {keywordsList.map((listItem, index) => (
        <div key={index}>{listItem.toLowerCase()}</div>
      ))}
    </div>
  )
}